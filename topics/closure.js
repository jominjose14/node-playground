function createFunction(color) {
    let id = 0;

    return function() {
        return ++id;
    }
}

const fn = createFunction();

for(let i=0; i<5; i++) {
    console.log(fn());
}