var fs = require('fs')
let data;
let newData = [];
let string = [];
let userID;

fs.readFile('password.txt', function (err, item) {
    if (err) throw err;
    data = item.toString()
    newData = data.split('\n');

    newData.map((item, index) => {
        string = item.split(":")
        string[3] > 500 ? userID = " , UserID :" + string[3] : userID = "";
        console.log("User : " + string[0] + " , " + "Command interpreter: " + string[6] + userID)
    })
})