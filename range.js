function* range(a, b) {
    let i, finish;

    if(b === undefined) {
        i = 0;
        finish = a;
    } else {
        i = a;
        finish = b;
    }
    
    while(i < finish) {
        yield i++;
    }
}

for(const i of range(5)) {
    console.log(i)
}

for(const i of range(10,14)) {
    console.log(i)
}
