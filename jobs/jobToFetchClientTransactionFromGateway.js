const cron = require('node-cron');


cron.schedule('*/5 * * * * *', function () {
    console.log('Cron Job Started after 5 seconds');
    fetchTransactionFromGateway()
});


function fetchTransactionFromGateway() {
    console.log('Fetching transaction • • • • • •');
}