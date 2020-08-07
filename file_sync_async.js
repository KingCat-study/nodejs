var fs = require('fs');

//Sync
console.log(1);
var data = fs.readFileSync('D:/workspace/git/nodejs/syncfile.txt' , {encoding : 'UTF-8'});
console.log(data);

//Async
console.log(2);
var asyncData = fs.readFile('D:/workspace/git/nodejs/asyncfile.txt' , {encoding : 'UTF-8'}, (err, asyncData) => {
    if (err) throw err;
    console.log(3);
    console.log(asyncData);
});
console.log(4);
// Function Style
/*
var asyncData = fs.readFile('D:/workspace/git/nodejs/asyncfile.txt', {enconding : 'UTF-8'}, function(err,asyncData){
    if (err) throw err;
    console.log(asyncData);
});
*/
