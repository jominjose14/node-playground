const add = (n1, n2, callback) => {
    setTimeout(() => {
        const sum = n1 + n2;
        callback(sum);
    }, 2000);
}

add(1, 4, sum => console.log(sum));