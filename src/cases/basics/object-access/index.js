/*
	
访问object中的属性

input       output

{a:1},'a'   1
{a:1},'b'   null    // not undefined

*/


module.exports = (obj, propName) => {
    return obj[propName] ? obj[propName] : null;
};
