const crypto = require('crypto');

const config = require('../config/index');
const Users = require('../models/user');


// Seeding User...........
const salt = crypto.randomBytes(16).toString('base64')
const randomSalt = Buffer.from(salt, 'base64')
let insertDefaultClients = [
    {
        name: "",
        email: "",
        accountId: "85217410",
        merchantId: "",
        provider: "local",
        password: crypto.pbkdf2Sync('innova-tech@123', randomSalt, 10000, 64, 'sha1').toString('base64'),
        salt: salt,
        role: "CLIENT"
    },
    {
        name: "",
        email: "",
        accountId: "81810606",
        merchantId: "",
        provider: "local",
        password: crypto.pbkdf2Sync('innova-tech@123', randomSalt, 10000, 64, 'sha1').toString('base64'),
        salt: salt,
        role: "CLIENT"
    }
]
const seedUsers = ()=>{
    Users.find({}, (err, resp) => {
      if (resp.length > 0) {
        return;
      } else {
        Users.create(insertDefaultClients, (err, response) => {
            if(err){
              console.log("Unable to create client", err)
              return
            }
            console.log("Client Created successfully!");
          });
      }
    });
}

seedUsers();