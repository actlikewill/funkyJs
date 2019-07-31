let people = [
    {
        name: 'Wilson',
        age: 31
    },
    {
        name: 'Michelle',
        age: 25
    }
];

let get = curry(function (property, object) {
    return object[property];
});

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

let curryNames = people.map(get('name'));

console.log(curryNames);

let getAges = function(objects){
    return objects.map(get('age'))
}


let ages = getAges(people);
console.log(ages);

let map = curry(function(fn, value){ return value.map(fn) });

let ages = map(get('age'));
console.log(ages(people));
