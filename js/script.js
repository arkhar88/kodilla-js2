// var name = prompt('Name');
// // alert('helo, ' + name);
// console.log('helo, ' + name);

/*console.log('make it stop');*/

var a = 6;
var b = 10;
var value = (a * a) + (2 * a * b) - (b * b);

var is_above_zero = function(value) {
    if (value === 0) {
        console.log('Value = ' + value);
        return 0;
    }
    var above_zero = value > 0 ? true : false;
    console.log('Is value above zero? The answear is: ' + above_zero);
};

is_above_zero(value);
