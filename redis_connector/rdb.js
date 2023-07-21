let redis = require('redis')

const connectWithRetry = async function() {
    try {
        let publisherClient = await redis.createClient()
        await publisherClient.connect()
        let subscriberClient = publisherClient.duplicate()
        await subscriberClient.connect();
        let publisherConnection = publisherClient.isOpen
        let subscriberConnection = subscriberClient.isOpen
        
        if(publisherConnection && subscriberConnection){
            console.log("Redis connected !!");
            // let storage = require('./storage')(publisherClient)
        }else{
            console.error('Failed to connect to redis on startup - retrying in 5 sec', err);
            setTimeout(connectWithRetry, 5000); 
        }  
    } catch (error) {
        console.error('Failed to connect to redis on startup - retrying in 5 sec', error);
        setTimeout(connectWithRetry, 5000);  
    }
   
};
connectWithRetry();

module.exports.publisherClient = redis.createClient();