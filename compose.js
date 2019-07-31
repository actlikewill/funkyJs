
const _ = require('ramda');

let get = _.curry(function(x, obj) { return obj[x]; });

let articles = [
    {
        title: 'Everything Sucks',
        url: 'http://do.wn/sucks.html',
        author: {
            name: 'Debbie Downer',
            email: 'debbie@do.wn'
        }
    },
    {
        title: 'If You Please',
        url: 'http://www.geocities.com/milq',
        author: {
            name: 'Caspar Milquetoast',
            email: 'hello@me.com'
        }
    }
];


let names = _.map(_.compose(get('name'), get('author')));


console.log(names(articles));
