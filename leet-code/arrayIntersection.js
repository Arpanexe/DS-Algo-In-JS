//https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/674/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = function (nums1, nums2) {
    const map = {}
    const intersectArray = []
    for (const item of nums1) {
        if (!map[item])
            map[item] = 1
        else
            map[item] = map[item] + 1
    }

    for (const item of nums2) {
        if (map[item] > 0) {
            intersectArray.push(item)
            map[item] = map[item] - 1
        }
    }
    return intersectArray
}