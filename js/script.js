// var name = prompt('Name');
// // alert('helo, ' + name);
// console.log('helo, ' + name);

/*console.log('make it stop');*/

var a = 6;
var b = 10;

var value = function(a, b) {
    return (a * a) + (2 * a * b) - (b * b);
};

var v = value(a, b);
if (v === 0) console.log('Value = ' + v);
else {
    if (v > 0) console.log('Value is above zero');
    else console.log('Value is below zero');
}
