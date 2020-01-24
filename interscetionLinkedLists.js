/*
*
* Linked List Intersection
*
* Write a function linkedListIntersection that returns the node
* at which the intersection of two linked lists begins,
* or null if there is no such intersection.
*
* Example:
*
* Given the following two linked lists list1 and list2,
* linkedListIntersection(list1,list2) should return D
* as the node of intersection.
*
*    A → B → C
*             ↘
*               D → E → F
*             ↗
*        X → Y
*
* Given the following two linked lists list1 and list2,
* linkedListIntersection(list1,list2) should return NULL
* as there is no point of intersection.
*
*    A → B → C → D
*    X → Y → Z
*
*/

// Helper function (do not edit)
function Node (val) {
  var obj = {};
  obj.value = val || null;
  obj.next = null;
  return obj;
}

var ll1, ll2;
ll1 = new Node(1)
ll1.next = new Node(2)
ll1.next.next = new Node(3)
ll1.next.next.next  = new Node(4)
ll1.next.next.next.next   = new Node(5)

ll2 = new Node(3)
ll2.next = new Node(4)
ll2.next.next = new Node(5)


function linkedListIntersection(list1, list2) {

  var arr1 = [],  arr2= [], result = null;

  traverse(list1, (val) => {
    arr1.push(val)
  })
  traverse(list2, (val) => {
    arr2.push(val)
  })

  if (arr1.length >= arr2.length){
    for (var i = 0; i < arr2.length; i++) {
      if(arr1.includes(arr2[i])){
        result = arr2[i]
         break;
      }
    }
  } else {
    for (var i = 0; i < arr1.length; i++) {
      if(arr2.includes(arr1[i])){
        result = arr1[i]
         break;
      }
    }
  }

  return result
}


var traverse = function(ll, callback) {
    callback(ll.value)

  if (ll.next){
    traverse(ll.next, callback)
  }
}
