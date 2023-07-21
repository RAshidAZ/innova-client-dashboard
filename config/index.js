// Common Environment Variables
const commonVariables = {
    APP_PORT: '7000',
    MONGODB_CON_STRING: 'mongodb://localhost/innova-tech-client',
    STATUS: [200, 500, 400, 401],
}

//setting the common variables
Object.keys(commonVariables).forEach((key) => {
    process.env[key] = commonVariables[key];
})