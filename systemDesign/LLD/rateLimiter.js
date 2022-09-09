class TokenBucket {
    #bucketCapacity
    #refillAmount
    #refillTime
    #currentCapacity
    #lastUpdateTime
    constructor(bucketCapacity, refillTime, refillAmount) {
        this.#bucketCapacity = bucketCapacity
        this.#refillTime = refillTime
        this.#refillAmount = refillAmount
        this.#currentCapacity = bucketCapacity
        this.#lastUpdateTime = Date.now()
    }

    grantAccess() {
        this.#refreshBucket()
        if (this.#currentCapacity > 0) {
            this.#currentCapacity--
            return true
        }
        return false
    }

    #refreshBucket() {
        let currentTime = Date.now()
        let refillCount = parseInt((currentTime - this.#lastUpdateTime) / this.#refillTime)
        let currCapacity = Math.min(this.#currentCapacity + (refillCount * this.#refillAmount), this.#bucketCapacity)
        this.#currentCapacity = currCapacity
        this.#lastUpdateTime = currentTime
    }
}

class RateLimiter {
    #map
    constructor() {
        this.#map = new Map()
    }

    accessApplication(id) {
        let policy
        if (!this.#map.has(id)) {
            policy = new TokenBucket(5, 1200, 1)
            this.#map.set(id, policy)
            console.log(`${id} init`)
        } else {
            policy = this.#map.get(id)
        }
        if (policy.grantAccess()) {
            console.log(`${id} able to access the application`)
        } else {
            console.log(`${id} Too many request, Please try after some time`)
        }
    }
}

async function run() {
    const rateLimiter = new RateLimiter()
    rateLimiter.accessApplication(10)
    // rateLimiter.accessApplication(20)
    // rateLimiter.accessApplication(20)
    // rateLimiter.accessApplication(20)
    // rateLimiter.accessApplication(20)
    // rateLimiter.accessApplication(10)
    // rateLimiter.accessApplication(10)
    // rateLimiter.accessApplication(10)
    // rateLimiter.accessApplication(10)
    // rateLimiter.accessApplication(10)
    // rateLimiter.accessApplication(10)
    // rateLimiter.accessApplication(20)
    // rateLimiter.accessApplication(20)
    await wait(1200)
    rateLimiter.accessApplication(10)
    rateLimiter.accessApplication(10)
    rateLimiter.accessApplication(20)


    function wait(timeInMillis) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve()
            }, timeInMillis);
        })
    }
}

run()