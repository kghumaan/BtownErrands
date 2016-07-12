var twilio = require('twilio'),
client = twilio('AC713965b7bfb22cfd4658cb9ff997894a', 'bfe1503835b4966d5a78e081ea5c260c'),
cronJob = require('cron').CronJob;

var textJob = new cronJob( '0 18 * * *', function(){
  client.sendMessage( { to:'3177302557', from:'+13173644864', body:'Hello! Hope you’re having a good day!' }, function( err, data ) {});
},  null, true);