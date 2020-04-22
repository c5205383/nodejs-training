/*
	
check the input parameter type

input   output

1       'number'
'2'     'string'
null    'null'
NaN     'NaN'
[]      'array'
{}      'object'

*/


module.exports = (v1) => {
    console.log(v1);
    const t = typeof v1;
    if (v1 === null) {
        return 'null';
    } else if (Array.isArray(v1)) {
        return 'array';
    } else {
        if (isNaN(v1)) {
            if (t === 'object') {
                return t;
            } else if (t === 'string') {
                return 'string';
            } else {
                return 'NaN';
            }
        } else {
            if (v1 === parseInt(v1, 10)) {
                return 'number';
            } else {
                return 'string';
            }
        }
    }
};
