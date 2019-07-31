function fullName (fn, ln) {
    return `${fn} ${ln}`;
}

function curry(fn) {
    const arity = fn.length;

    return function $curry(...args) {
        if (args.length < arity) {
            return $curry.bind(null, ...args);
        }

        return fn.call(null, ...args);
    };
}

function curryFullName (fn) {
    return function (ln) {
        return `${fn} ${ln}`;
    }
}

let firstNameWilson = curryFullName('Wilson');

// let myFullName = firstNameWilson('Gaturu');

let myFullName = curryFullName('Wilson')('Gaturu');

console.log(myFullName);



// console.log(fullName('Wilson', 'Gaturu'));
