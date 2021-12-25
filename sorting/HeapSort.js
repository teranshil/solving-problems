// heap - array interpreted as binary tree

const heapSort = (array) => {

    makeHeap( array );
    for (let index = array.length - 1; index >= 0; index--) {
        // put x[1] in place and repair heap
        [ array[index], array[0] ] = [ array[0], array[index] ];
        heapify(index, array, 0);
    }
}

const makeHeap = (array) => {

    const arraySize = array.length;

    for(let index = Math.floor( arraySize / 2 ); index >= 0; index--) {
        heapify( arraySize, array, index);
    }
}
// puts the largest item as head of the array
const heapify = ( length, array, index) => {

    let largest = index; // largest of x[i], x[2*i], x[2*i+1]
    if (2 * index + 1 < length && array[2 * index + 1] > array[index])
        largest = 2 * index + 1;
    if (2 * index + 2 < length && array[2 * index + 2] > array[largest])
        largest = 2 * index + 2;
    if (largest !== index) {
         // swapping
        [ array[largest], array[index] ] = [ array[index], array[largest] ];
         heapify(length, array, largest);
    }
}

const array = [ 5, 6, 1, 2, 4, 5, 3 ];
heapSort( array );
// makeHeap(array);
console.log( array );