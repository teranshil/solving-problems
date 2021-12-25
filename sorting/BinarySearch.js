// const binarySearch = ( array, element ) => {
//
//     const search = (low, high) => {
//
//         if(low > high)
//             return -1;
//
//         const middle = Math.floor((low + high) / 2);
//         if( array[middle] === element) return middle;
//
//         else if(array[middle] < element) return search(middle + 1, high);
//         else return search(low, middle - 1);
//
//     };
//
//     return search;
//     // const searched = search(0, array.length - 1);
//     // console.log(searched);
// }
// // const input = [4, 3, 2, 1, 0, 9, 20, 10];
// const input = [4, 3, 2, 1, 0, 9, 20, 10].sort((a, b) => a - b);
// // binarySearch(input, 9);
//
// console.log( binarySearch(input, 2)(0, input.length - 1) );



const search = (records, target) => {

    const recursion = (low, high) => {
        if (low > high) return -1;

        const middle = Math.floor((high + low) / 2);

        if (records[middle] === target) return middle;

        return records[middle] < target ? recursion(middle + 1, high) : recursion(low, middle - 1);
    }

    return recursion(0, records.length - 1);
}

const target = "David";
const arr = ["Alex", "Anne", "Brian", "Chris", "David", "Elan", "Frank", "James", "Hellen", "Ivan"];
const index = search(arr, target);

console.log(index);