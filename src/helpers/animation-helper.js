/* eslint-disable no-param-reassign */
const animator = {
  sortOrder: [],

  jumbleText(text) {
    const results = [];
    const shuffler = [];
    let randomIndex;

    for (let i = 0; i < text.length; i += 1) {
      shuffler.push(i);
    }

    while (shuffler.length > 0) {
      randomIndex = Math.floor(Math.random() * shuffler.length);
      const index = shuffler[randomIndex];
      results.push(index);
      shuffler.splice(randomIndex, 1);
    }
    return results;
  },

  selectionSort(arr) {
    let i;
    let j;
    let minIndex;
    for (i = 0; i < arr.length; i += 1) {
      minIndex = i;
      for (j = i + 1; j < arr.length; j += 1) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      this.swap(arr, i, minIndex);
    }
    return this.sortOrder;
  },

  quicksort(arr, start = 0, end = arr.length) {
    if (start >= end) { return arr; }
    const pivot = this.partition(arr, start, end);
    this.quicksort(arr, start, pivot);
    this.quicksort(arr, pivot + 1, end);
    return arr;
  },

  partition(arr, start, end) {
    const pivot = arr[end - 1];
    let i = start;
    for (let j = start; j < end - 1; j += 1) {
      if (arr[j] <= pivot) {
        this.swap(arr, j, i);
        i += 1;
      }
    }
    this.swap(arr, i, end - 1);
    return i;
  },

  swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    this.sortOrder.push(i);
    this.sortOrder.push(j);
  },
};

export default animator;
