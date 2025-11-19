const add = (a, b) => {
    return new Promise((resolve, reject) => {
        if(isNaN(a) || isNaN(b)) {
            reject('Both a and b must be numbers');
        }

        setTimeout(() => {
            resolve(a+b);
        }, 2000);
    });
}

add(1,2)
    .then(sum1 => {
        console.log(sum1);
        return add(sum1,5);
    })
    .then(sum2 => {
        console.log(sum2);
    })
    .catch(e => {
        console.error(e);
    });