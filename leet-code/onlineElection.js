/**
 * @param {number[]} persons
 * @param {number[]} times
 */

class Vote {
    constructor(person, time) {
        this.person = person
        this.time = time
    }
}

let TopVotedCandidate = function (persons, times) {
    this.votes = []
    let leader = -1 //current leader
    let currentVotesForLeader = 0 //current number of votes for a leader
    this.hash = new Map()
    for (let i = 0; i < persons.length; i++) {
        const person = persons[i]
        const time = times[i]
        let voteCount = this.hash.get(person) || 0
        voteCount++
        this.hash.set(person, voteCount)
        if (voteCount >= currentVotesForLeader) {
            if (leader !== person) {
                leader = person
                this.votes.push(new Vote(leader, time))
            }
            if (voteCount > currentVotesForLeader)
                currentVotesForLeader = voteCount
        }
    }
};

/** 
 * @param {number} t
 * @return {number}
 */
TopVotedCandidate.prototype.q = function (t) {
    let low = 1, high = this.votes.length
    while (low < high) {
        let mid = Math.floor((low + high) / 2) //low + (high - low) / 2
        if (this.votes[mid].time <= t)
            low = mid + 1
        else
            high = mid
    }
    return this.votes[low - 1].person

    //Other approach
    // if (this.votes[p].time === t) {
    //     return this.votes[p].person;
    // }
    // return this.votes[p - 1].person;
    // if (t <= this.votes[0].time)
    //     return this.votes[0].person
    // if (t >= this.votes[this.votes.length - 1].time)
    //     return this.votes[this.votes.length - 1].person
    // for (let i = 0; i < this.votes.length; i++) {
    //     if (this.votes[i].time === t || (this.votes[i].time < t && this.votes[i + 1].time > t))
    //         return this.votes[i].person
    // }
};

/** 
 * Your TopVotedCandidate object will be instantiated and called as such:
 * var obj = new TopVotedCandidate(persons, times)
 * var param_1 = obj.q(t)
 */

var obj = new TopVotedCandidate([0, 1, 1, 0, 0, 1, 0], [0, 5, 10, 15, 20, 25, 30])
console.log(obj.q(3))
console.log(obj.q(12))
console.log(obj.q(25))
console.log(obj.q(15))
console.log(obj.q(24))
console.log(obj.q(8))

// ["TopVotedCandidate", "q", "q", "q", "q", "q", "q", "q", "q", "q", "q"]
// [[[0, 0, 0, 0, 1], [0, 6, 39, 52, 75]], [45], [49], [59], [68], [42], [37], [99], [26], [78], [43]]

// var obj = new TopVotedCandidate([0, 0, 0, 0, 1], [0, 6, 39, 52, 75])
// console.log(obj.q(45))
// console.log(obj.q(49))
// console.log(obj.q(59))
// console.log(obj.q(68))
// console.log(obj.q(42))
// console.log(obj.q(37))
// console.log(obj.q(99))
// console.log(obj.q(26))
// console.log(obj.q(78))
// console.log(obj.q(43))