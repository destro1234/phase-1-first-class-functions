function receivesAFunction(cb) {
    cb()
}

function returnsANamedFunction() {
    let namedFunction =  ()=> { };
    return namedFunction
}

function returnsAnAnonymousFunction() {
    return () => {};
}