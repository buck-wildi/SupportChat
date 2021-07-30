

//Создание обьекта для открытия соединения 
let socket = new WebSocket('ws://skade.cc:38080')


//Соединение установлено
socket.onopen = function() {
    status.innerHTML = "соединение установлено";
    alert("Соединение установлено");
}
 

//Закрытие сокета
socket.onclose = function(event) {
    if( event.wasClean) {
    status.innerHTML = "соединение закрыто";
    } else {
        status.innerHTML = "Произошла ошибка"
        alert("Ошибка при соединении");
    };
}


//переподключение, чтобы не потерять соединение 
function start(websocketServerLocation){
    ws = new WebSocket(websocketServerLocation);
    ws.onmessage = function(evt) { alert('message received'); };
    ws.onclose = function(){
        // Переподключение каждые 5 секунд
        setTimeout(function(){start(websocketServerLocation)}, 5000);
    };
}




function FormSendRe() {



    const msg = {
        name:  document.getElementById("sptext").value,
        message: document.getElementById("sptext_1").value
      };
    
      
      
      // объект в виде JSON строки.
      socket.send(JSON.stringify(msg));
    
      
  };



 socket.onmessage = function(event) {
     let message =  JSON.parse(event.data);

     let messageElem = document.createElement('div');
     messageElem.textContent = message;
     document.getElementById('mess_from').prepend(messageElem);
 }








    


  

  



