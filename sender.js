(function(){
    var amqp = require('amqplib/callback_api');

    amqp.connect('amqp:localhost', function(err, con){
        con.createChannel(function(err, ch){
            var queue = process.argv[2];

            ch.assertQueue(queue, {durable: false});
            for (var i = 0; i < 1000; i++) {
                ch.sendToQueue(queue, new Buffer('Queue: '+ queue + ':' + i));
                console.log(' [Success!] Added to: ' + queue + ':' + i);
            }
            
        });
    });
})();
