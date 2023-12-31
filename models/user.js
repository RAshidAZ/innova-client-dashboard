let mongoose = require('../mongoDB_connector');

// grab the things we need
let Schema = mongoose.Schema;

// create a schema
let userSchema = new Schema({

    name: String,
    email: { type: String, unique: true },
    userName: String,
    role: { type: String },

    accountId: String,
    password: String,
    provider: String,
    salt: String,

    merchantId: String,

    // optional
    userMeta: { 
       
        telegram: String,
        facebook: String,
        twitter: String,
        instagram: String,
        phone: String,
        ip: String,
        deviceType: String,
        browser: String,
        country: String,

    },
    
    emailVerified: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true },
    isDelete: { type: Boolean, default: false },
    isBlocked: { type: Boolean, default: false }

}, { minimize: false, timestamps: true });

// we need to create a model using it
let users = mongoose.model('user', userSchema);

module.exports = users;