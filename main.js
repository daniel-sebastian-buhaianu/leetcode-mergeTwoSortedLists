/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */


// Given the heads of two sorted linked lists list1 and list2
// Merge the two lists in a one sorted list
// And return the head of the merged linked list
var mergeTwoLists = function(list1, list2) {    

    // Set pointers for list1, list2
    var firstPtr = list1;
    var secondPtr = list2;
  
    // Ensure proper usage
    if (list1  == null && list2 == null) {
        return null;
    }

    // Create head node of merged linked list
    // and smallest value node's ptr move to next node
    var head = new ListNode();

    // If both nodes are non-null
    if (firstPtr !== null && secondPtr !== null) {
        if (firstPtr.val <= secondPtr.val) {
            head.val = firstPtr.val;
            firstPtr = firstPtr.next;
        } 
        else {
            head.val = secondPtr.val;
            secondPtr = secondPtr.next;
        }
    } 
    // If either node is non-null
    else {
        if (firstPtr == null && secondPtr !== null) {
            head.val = secondPtr.val;
            secondPtr = secondPtr.next;
        } 
        else if (secondPtr == null && firstPtr !== null) {
            head.val = firstPtr.val;
            firstPtr = firstPtr.next;
        } 
    }

    // Set pointer for merged list
    var mergedPtr = head;
  
    // Iterate through list1 and list2 until we reach the end of either of them
    while (firstPtr !== null && secondPtr !== null) {
        
        // Create new node
        var node = new ListNode();

        // Store the smallest of list1.val and list2.val in node.val
        // and smallest value node's ptr move to next node
        if (firstPtr.val <= secondPtr.val) {
            node.val = firstPtr.val;
            firstPtr = firstPtr.next;
        } else {
            node.val = secondPtr.val;
            secondPtr = secondPtr.next;
        }

        // Add new node to merged list
        mergedPtr.next = node;

        // Move to next node in all lists
        mergedPtr = mergedPtr.next;
    };

    // If the length of list1 and list2 is not the same
    // that means firstPtr or secondPtr is not null
    // so we need to identify the non-null ptr
    // and add all its list node values to merged list  
    while (firstPtr !== null) {

        // Create new node
        var node = new ListNode();
        
        // Copy value of list1 node
        node.val = firstPtr.val;

        // Add node to merged list
        mergedPtr.next = node;

        // Move to next node
        firstPtr = firstPtr.next;
        mergedPtr = mergedPtr.next;
    };
    while (secondPtr !== null) {
        
        // Create new node
        var node = new ListNode();
        
        // Copy value of list2 node
        node.val = secondPtr.val;

        // Add node to merged list
        mergedPtr.next = node;

        // Move to next node
        secondPtr = secondPtr.next;
        mergedPtr = mergedPtr.next;
    }

    // Return the head of merged linked list
    return head;
};