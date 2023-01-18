/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list/
 * Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.
 * 
 * Input: head = [1,1,2]
 * Output: [1,2]
 * 
 * Input: head = [1,1,2,3,3]
 * Output: [1,2,3]
 */


//Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicatesMap = function (head) {
    //console.log(JSON.stringify(head))
    //Store already iterated nodes
    const map = {}
    //Reference on which we will iterate
    let temp = head
    //Used to remove duplicate node
    //To remove node we can set prev.next = temp.next
    let prev = null
    while (temp) {
        //Check if node already exits or not
        if (map[temp.val]) {
            //Remove current node the linked list
            prev.next = temp.next
        } else {
            //Set node in map
            map[temp.val] = temp
            //Set previous node as current node
            prev = temp
        }
        //Move temp to next node
        temp = temp.next
    }
    return head
}

const deleteDuplicates = function (head) {
    //console.log(JSON.stringify(head))    
    let temp = head
    //Used to remove duplicate node
    //To remove node we can set prev.next = temp.next
    let prev = null
    while (temp) {
        //Check if prev is not null and prev node value is same as current node value
        if (prev && prev.val === temp.val) {
            //Remove current node the linked list
            prev.next = temp.next
        } else {
            //Set previous node as current node
            prev = temp
        }
        //Move temp to next node
        temp = temp.next
    }
    return head
}

console.log(deleteDuplicates({ "val": 1, "next": { "val": 1, "next": { "val": 1, "next": null } } }))