module.exports = function reverse (n) {
    let result = '';
    let str = n.toString();
        
    for (let i = 0; i < str.length; i++) { 
        if (str[i] === '-') {
            i += 1;
    } result = `${str[i]}${result}`;
}
    return result;
}
