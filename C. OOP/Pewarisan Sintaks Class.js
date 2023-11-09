// Superclass
class MailService {
    constructor(sender) {
      this.sender = sender;
    }
   
    sendMessage(message, receiver) {
      console.log(`${this.sender} sent ${message} to ${receiver}`);
    }
  }
  
  // Subclass
  class WhatsAppService extends MailService {
    sendBroadcastMessage(message, receivers) {
      for (const receiver of receivers) {
        this.sendMessage(message, receiver);
      }
    }
  }
   
  // Subclass
  class EmailService extends MailService {
    sendDelayedMessage(message, receiver, delay) {
      setTimeout(() => {
        this.sendMessage(message, receiver);
      }, delay);
    }
  }
  
  const whatsapp = new WhatsAppService('Nabila');
  const email = new EmailService('dimas@dicoding.com');
   
  whatsapp.sendMessage('Hello', 'Nada');
  whatsapp.sendBroadcastMessage('Hello', ['Ayah','Zikri', 'Mamah']);
  //whatsapp.sendDelayedMessage(); // Error karena whatsapp gak punya fungsi sendDelayed
   
  email.sendMessage('Hello', 'john@doe.com');
  email.sendDelayedMessage('Hello', 'john@doe.com', 3000);
  //email.sendBroadcastMessage(); // Error karena email gak punya fungsi sendBroadcast

  //Operator instanceof
  //Mengecek apakah whatsapp merupakan bagian dari prototype WhatsAppService atau bukan
  console.log(whatsapp instanceof WhatsAppService); // true
  //Mengecek apakah whatsapp merupakan bagian dari prototype EmailService atau bukan
  console.log(whatsapp instanceof EmailService); // false
  //instanceof juga mengecek prototype secara berantai
  console.log(whatsapp instanceof MailService); // true