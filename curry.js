
function curry(fn) {
    return function () {
        if(fn.length > arguments.length) {
            let slice = Array.prototype.slice;
            let args = slice.apply(arguments);
            return function () {
                return fn.apply(null, args.concat(slice.apply(arguments)));
            }
        }
        return fn.apply(null, arguments);
    }
}

let fullName = curry(function (fn, ln) {
    return `>>${fn} ${ln}<<`;
});

let firstName = fullName('Wilson');

let lastName = 'Gaturu';

let myName = firstName(lastName);

console.log(myName);

