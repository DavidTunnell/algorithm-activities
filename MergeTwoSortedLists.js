/* Merge two sorted linked lists and return it as a sorted list. 
 * The list should be made by splicing together the nodes of the first two lists.
 * 
 * This does not run correctly because LeetCode has more of the linked list structure not defined. It is functioning correctly though.
 * https://leetcode.com/problems/merge-two-sorted-lists/
 */
var arrA = [1, 2, 4];
var arrB = [1, 3, 4];
//[1,1,2,3,4,4]

const mergeTwoLists = function (l1, l2) {
    let newList = new ListNode();
    let head = newList;
    while (l1 != null && l2 != null) {
        if (l1.val < l2.val) {
            newList.next = l1;
            l1 = l1.next;
        } else {
            newList.next = l2;
            l2 = l2.next;
        }
        newList = newList.next;
    }
    if (l1 != null) {
        newList.next = l1;
    }
    if (l2 != null) {
        newList.next = l2;
    }
    return head.next;
};

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

console.log(mergeTwoLists(arrA, arrB));