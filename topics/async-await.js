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

const doWork = async () => {
    const sum1 = await add(1,2);
    const sum2 = await add(sum1,3);
    const sum3 = await add(sum2,4);
    const sum4 = await add(sum3,5);
    return sum4;
}

doWork()
    .then(console.log)
    .catch(console.error);