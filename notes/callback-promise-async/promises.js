// const fakePromise = (() => {
//
//     const object = {
//         state: 'pending',
//         value: undefined,
//         then: function(callback) {
//             if(this.state !== 'resolved') {
//                 callback(this.value)
//             }
//         }
//     }
//
//     setTimeout( () => {
//         object.state = 'resolved'
//         object.value = 100
//     }, 1000);
//
//     return object;
// })();
//
//
// const interval = setInterval(() => {
//    if(fakePromise.state !== 'resolved') return;
//
//    console.log(fakePromise.value);
//    clearInterval(interval);
// }, 10);
//
//
// const promise = new Promise((resolve, reject) => {
//
//     setTimeout(() => {
//         // resolve('Special');
//         reject('Error thrown!'); // alternative is to use throw new Error('Error thrown!');
//     }, 2000);
// });
//
// promise.then((response) => console.log(response)) // if we throw an error without handling it, error will be thrown
//        .finally()


const main = async () => {
    console.log('Will be executed. Reason its before await');

    const result = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([1, 2, 3])
        }, 1000);
    })

    console.log('Code after await');
}

main();
console.log('Code after calling main function');
