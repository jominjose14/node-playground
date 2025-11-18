const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // reject('Error');
        resolve('Done');
    }, 2000);
});

promise
    .then(result => {
        console.log(result);
    })
    .catch(e => {
        console.log(e);
    })
    .finally(() => {
        console.log('End');
    });