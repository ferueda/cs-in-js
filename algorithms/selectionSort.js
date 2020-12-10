function getSmallestIndex(list) {
  let smallestIndex = 0;

  list.forEach((element, index) => {
    if (element < list[smallestIndex]) {
      smallestIndex = index;
    }
  });

  return smallestIndex;
}

function selectionSort(list, sortedList = []) {
  const unsortedList = [...list];

  if (unsortedList.length === 0) return sortedList;

  const smallestIndex = getSmallestIndex(unsortedList);
  sortedList.push(unsortedList.splice(smallestIndex, 1)[0]);

  return selectionSort(unsortedList, sortedList);
}

module.exports = selectionSort;
