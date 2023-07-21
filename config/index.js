// Common Environment Variables
const commonVariables = {
    APP_PORT: '7000',
}

//setting the common variables
Object.keys(commonVariables).forEach((key) => {
    process.env[key] = commonVariables[key];
})