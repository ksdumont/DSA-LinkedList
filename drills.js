const LinkedList = require("./LinkedList");

const SLL = new LinkedList();

const main = function(list) {
  list.insertLast("Apollo");
  list.insertLast("Boomer");
  list.insertLast("Helo");
  list.insertLast("Husker");
  list.insertLast("Starbuck");
  list.insertFirst("Tauhida");
  list.remove("Husker");
  list.insertBefore("Athena", "Boomer");
  list.insertAfter("Hotdog", "Helo");
  list.insertAt("Kat", 2);
  list.remove("Tauhida");
  return list;
};
console.log(main(SLL));

//Supplemental functions for linked list

const display = function(list) {
  const displayNodes = [];
  if (list.head === null) {
    console.log("nothing to display");
    return;
  }
  let currNode = list.head;
  while (currNode !== null) {
    displayNodes.push(currNode.value);
    currNode = currNode.next;
  }
  return displayNodes;
};
console.log(display(SLL));

const size = function(list) {
  let listSize = 0;
  if (list.head === null) {
    console.log("no list");
    return;
  }
  let currNode = list.head;
  while (currNode !== null) {
    listSize++;
    currNode = currNode.next;
  }
  return listSize;
};
console.log(size(SLL));

const isEmpty = function(list) {
  if (list.head === null) {
    return "The list is empty!";
  } else {
    return "The list is not empty!";
  }
};
console.log(isEmpty(SLL));

const findPrevious = function(list, beforeItem) {
  if (list.head === null) {
    console.log("no list!");
    return;
  }
  let currNode = list.head;
  let prevNode = list.head;
  while (currNode !== null && currNode.value !== beforeItem) {
    prevNode = currNode;
    currNode = currNode.next;
  }
  if (currNode === null) {
    return "item not found!";
  }
  return `The item before ${beforeItem} is ${prevNode.value}.`;
};
console.log(findPrevious(SLL, "Athena"));

const findLast = function(list) {
  if (list.head === null) {
    console.log("no list!");
    return;
  }
  let currNode = list.head;
  while (currNode.next !== null) {
    currNode = currNode.next;
  }
  return `The last item in the list is ${currNode.value}.`;
};
console.log(findLast(SLL));

//Mystery program
//This function removes duplicate values from the linked list.
//Polynomial time O(n^2) - inputs are run through and compared to all other inputs

//Reverse a list
const reverseList = function(list) {
  if (list.head === null) {
    console.log("no list!");
    return;
  }
  let currNode = list.head;
  while (currNode !== null) {
    list.remove(currNode.value);
    list.insertFirst(currNode.value);
    currNode = currNode.next;
  }
  return list;
};
reverseList(SLL);
console.log(display(SLL));

//3rd from the end
const thirdFromEnd = function(list) {
  if (list.head === null) {
    console.log("no list!");
    return;
  }
  if (list.head.next.next === null) {
    console.log("not enough items in the list!");
    return;
  }
  let currNode = list.head;
  let prevNode = list.head;
  let prevPrevNode = list.head;
  while (currNode.next !== null) {
    prevPrevNode = prevNode;
    prevNode = currNode;
    currNode = currNode.next;
  }
  return `The third value from the end is ${prevPrevNode.value}.`;
};
console.log(thirdFromEnd(SLL));

//Middle of a list
const middle = function(list) {
  if (list.head === null) {
    console.log("no list!");
    return;
  }
  let count = 0;
  let currNode = list.head;
  while (currNode !== null) {
    count++;
    currNode = currNode.next;
  }
  const middle = Math.ceil(count / 2);
  currNode = list.head;
  count = 1;
  while (count < middle) {
    currNode = currNode.next;
    count++;
  }
  return `The middle item is ${currNode.value}.`;
};
console.log(middle(SLL));

//Cycle in a list
const listWithCycle = new LinkedList();
listWithCycle.insertFirst("Five");
listWithCycle.insertFirst("Four");
listWithCycle.insertFirst("Three");
listWithCycle.insertFirst("Two");
listWithCycle.insertFirst("One");
let cycleNode = listWithCycle.head.next.next.next;
cycleNode.next = listWithCycle.head;
console.log(cycleNode);

const cycle = function(list) {
  if (list.head === null) {
    console.log("no list!");
    return;
  }
  let fastPointer = list.head.next;
  if (fastPointer === null) {
    return "No cycle!";
  }
  let slowPointer = list.head;
  while (fastPointer !== slowPointer) {
    if (fastPointer.next === null) {
      return "No cycle!";
    }
    fastPointer = fastPointer.next;
    if (fastPointer.next === null) {
      return "No cycle!";
    }
    fastPointer = fastPointer.next;
    slowPointer = slowPointer.next;
  }
  return `There's a cycle!`;
};
console.log(cycle(listWithCycle));

//Sorting a list
const listToSort = new LinkedList();
listToSort.insertFirst(1);
listToSort.insertFirst(7);
listToSort.insertFirst(5);
listToSort.insertFirst(2);
listToSort.insertFirst(3);
console.log(display(listToSort));

const sortLinkedList = function(list) {
  if (list.head === null) {
    console.log("no list!");
    return;
  }
  let listSize = size(listToSort);
  let currNode = list.head;
  let min = currNode.value;
  let count = 0;
  let added = 0;
  while (count < listSize) {
    for (let i = 0; i < listSize - added; i++) {
      if (currNode.value < min) {
        min = currNode.value;
      }
      currNode = currNode.next;
    }
    listToSort.remove(min);
    listToSort.insertLast(min);
    count++;
    added++;
    currNode = list.head;
    min = currNode.value;
  }
  return list;
};
console.log(display(sortLinkedList(listToSort)));
