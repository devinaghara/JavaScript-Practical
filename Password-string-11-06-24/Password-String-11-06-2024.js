var fs = require('fs')
let data;
let new_data = [];
let string = [];
let user_id;

fs.readFile('password.txt', function (err, item) {
    if (err) throw err;
    data = item.toString()
    new_data = data.split('\n');
    for (let i = 0; i < new_data.length; i++) {
        string[i] = new_data[i].split(':')
    }    
    for (let i = 0; i < string.length; i++) {
        for (let j = 0; j < string[i].length; j++) {
            string[i][3] > 500 ? user_id = " , UserID :" + string[i][3] : user_id = "";
            console.log("User : " + string[i][0] + " , " + "Command interpreter: " + string[i][6] + user_id)
        }
    }
})
