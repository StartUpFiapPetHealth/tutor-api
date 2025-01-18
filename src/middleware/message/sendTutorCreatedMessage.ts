import amqp from "amqplib";
import dotenv from 'dotenv';

export function sendMessage(tutor : ITutor){

    const amqplib = require('amqplib/callback_api');
    
    const tutorQueue = "tutor_created";
    (async () => {
        try {
          const connection = await amqp.connect(`amqp://${process.env.RMQ_USER}:${process.env.RMQ_PSWD}@${process.env.RMQ_HOST}`);
          const channel = await connection.createChannel();
      
      
          await channel.assertQueue(tutorQueue, { durable: false });
          await channel.sendToQueue(tutorQueue, 
                Buffer.from(JSON.stringify(
                        {
                            "tutorEmail": tutor.email,
                            "tutorId" : tutor.id,
                            "contactNumber" : tutor.contactNumber
                        }
                    )
                )
            );

        } catch (err) {
          console.warn(err);
        }
      })();

}