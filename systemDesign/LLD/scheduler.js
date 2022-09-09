/**
 * Scheduler->create,update,delete job
 * Storage->Store jobs
 * Task/Job->job properties
 * TaskScheduler->fetch jobs,schedule jobs
 * TaskRunner->Execute jobs
 */

const Queue = require('../../dataStructure/queue')

const JOB_STATUS = {
    NOT_STARTED: 0,
    IN_QUEUE: 1,
    COMPLETED: 2
}

const EXECUTION_STATUS = {
    NOT_STARTED: 0,
    PROCESSING: 1,
    SUCCESS: 2,
    FAIL: 3
}

class SchedulerStorage {
    #db
    static #instance
    constructor() {
        this.#db = new Map()
    }

    static getStorage() {
        if (!this.#instance)
            this.#instance = new SchedulerStorage()
        return this.#instance
    }

    save(id, job) {
        this.#db.set(id, job)
    }

    get(id) {
        if (this.#db.has(id)) {
            return this.#db.get(id)
        }
    }

    getNextBatch() {
        const nextScheduledJobs = []
        const currentTimeStamp = new Date()
        const nextJobBatchTime = new Date()
        nextJobBatchTime.setMinutes(nextJobBatchTime.getMinutes() + 15)
        this.#db.forEach((value, key) => {
            if (value.jobStatus === JOB_STATUS.NOT_STARTED && value.scheduleTime > currentTimeStamp.getTime() && value.scheduleTime < nextJobBatchTime.getTime()) {
                nextScheduledJobs.push(value)
            }
        })
        return nextScheduledJobs
    }
}

class Job {
    constructor(id, scheduleTime, url) {
        this.id = id
        this.scheduleTime = scheduleTime
        this.url = url
        this.jobStatus = JOB_STATUS.NOT_STARTED
        this.executionStatus = EXECUTION_STATUS.NOT_STARTED
    }
}

class Scheduler {
    #storage
    constructor(storage) {
        this.#storage = storage
    }
    static getScheduler(storage) {
        if (!this.instance)
            this.instance = new Scheduler(storage)
        return this.instance
    }

    addJob(id, job) {
        this.#storage.save(id, job)
        console.log(`Job saved`)
    }

    getJob(id) {
        const job = this.#storage.get(id)
        if (job !== undefined)
            return job
        console.log(`Job does not exits`)
    }
}

class TaskScheduler {
    #storage
    #queue
    constructor(storage, queue) {
        this.#storage = storage
        this.#queue = queue
    }

    getNextJobs() {
        let nextBatch = []
        nextBatch = this.#storage.getNextBatch()
        this.scheduleJobs(nextBatch)
    }

    scheduleJobs(jobs) {
        for (const job of jobs) {
            job.jobStatus = JOB_STATUS.IN_QUEUE
            this.#queue.enQueue(job)
        }
    }
}

class TaskRunner {
    #queue
    #storage
    constructor(storage, queue) {
        this.#storage = storage
        this.#queue = queue
    }

    processJobs() {
        while (this.#queue.size) {
            const job = this.#queue.deQueue().value
            job.executionStatus = EXECUTION_STATUS.PROCESSING
            this.#storage.save(job.id, job)
            try {
                this.execute(job)
                job.executionStatus = EXECUTION_STATUS.SUCCESS
            } catch (error) {
                job.executionStatus = EXECUTION_STATUS.FAIL
            } finally {
                job.jobStatus = JOB_STATUS.COMPLETED
                this.#storage.save(job.id, job)
            }
        }
    }

    execute(job) {
        console.log(`Job ${job.id} is executing`)
    }
}

const storage = SchedulerStorage.getStorage()
const scheduler = Scheduler.getScheduler(storage)
const queue = new Queue()
let currentTime = new Date()
const job1 = new Job(1, new Date().setMinutes(new Date().getMinutes() + 10), 'test.com')
const job2 = new Job(2, new Date().setMinutes(new Date().getMinutes() + 5), 'test.com')
const job3 = new Job(3, new Date().setMinutes(new Date().getMinutes() + 4), 'test.com')
const job4 = new Job(4, new Date().setMinutes(new Date().getMinutes() + 3), 'test.com')

scheduler.addJob(job1.id, job1)
scheduler.addJob(job2.id, job2)
scheduler.addJob(job3.id, job3)
scheduler.addJob(job4.id, job4)

const taskScheduler = new TaskScheduler(storage, queue)
taskScheduler.getNextJobs()

const taskRunner = new TaskRunner(storage, queue)
taskRunner.processJobs()