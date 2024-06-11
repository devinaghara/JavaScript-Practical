var fs = require('fs')
let data;
let new_data = [];
let string = [];
let user_id;

fs.readFile('password.txt', function (err, item) {
    if (err) throw err;
    data = item.toString()
    new_data = data.split('\n');

    new_data.map((item, index) => {
        string = item.split(":")
        string[3] > 500 ? user_id = " , UserID :" + string[3] : user_id = "";
        console.log("User : " + string[0] + " , " + "Command interpreter: " + string[6] + user_id)
    })
})