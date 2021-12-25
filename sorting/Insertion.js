const insert = (array, index, number) => { // worst time complexity O(n * n)

    if(index === 0 || (index >= 1 && array[ index -1 ] <= number) ) {
      array[index] = number;
    } else {
        array[index] = array[index - 1];
        insert(array, index - 1, number);
    }

}

const insertionSort = (length, array) => {

    if(length > 1) {
        insertionSort(length - 1, array);
        insert(array, length, array[length]);
    }
}

let array = [ 2, 5, 3, 1 ];
insertionSort(array.length - 1, array);
console.log( array );