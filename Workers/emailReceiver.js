(function(){
    var amqp = require('amqplib/callback_api');

    amqp.connect('amqp://localhost', function(err, con){
        con.createChannel(function(err,ch){
            var queue = 'email';

            ch.assertQueue(queue, {durable: false});

            console.log(' [*] Waiting for messages in %s.', queue);
            ch.consume(queue, function(msg){ 
                console.log(' [Success] Received %s', msg.content.toString());
            }, {noAck: true});
        });
    });
})();
