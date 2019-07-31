const _ = require('ramda');

const Container = function (val) {
    this.val = val;
    this.map = function(f) { return Container(f(this.val))}
};
Container.prototype.map = function(f) { return Container(f(this.val))};

let cont = Container(1);

cont.map(_.add(2));

