const accountId = 1443
let accountEmail = "abc@gmail.com"
var accountPassword = "12345"
accountCity = "Ahmedabad"

let accountState;

// accountId = 2 not allow in const 

accountEmail = "hb@gmail.com"
accountPassword = "23456"
accountCity = "Rajkot"

console.log(accountId)
console.table([accountId,accountEmail,accountCity,accountPassword,accountState])

/*
don't use var because of issue in block scope
and functional scope
*/