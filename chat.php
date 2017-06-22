<style text="text/css">
  body {font-family: 'Open Sans', sans-serif;}
  div, p {margin:0;padding:0;}
  #speakbox {margin-left:25px;width:596px;background-image:url(images/chatbg.png);border:4px solid #3B3B3B;border-radius:10px;padding-bottom:20px;}
  #botspeak {border-bottom:1px solid #DBDBDB;padding:20px 0;width:550px;margin:0 auto;}
  #botspeak p {font-size:35px;color:#DBDBDB;text-align:center;font-weight:300;}
  #userspeak {padding:40px 0 10px 0;}
  #userspeak input[type=text]{margin-left:40px;margin-right:15px;height:30px;width:400px;font-size:20px;}
  #userspeak input[type=button]{background-color:#424242;border-radius:8px;height:38px;width:80px;font-size:20px;color:#DBDBDB;font-family: 'Open Sans', sans-serif;font-weight:300;border:1px solid #DBDBDB}
  #userspeak input[type=button]:hover {background-color:#5e5e5e;cursor:pointer;color:#fff;}
  #autocom p {background-color:white;margin-left:40px;padding:5px;width:350px;}
  #autocom p:hover {background-color:#ccc;cursor:pointer;}
  #answerspeak {width:500px;margin-left:40px;padding:5px;margin-top:10px;border-radius:5px;}
</style>
<script type="text/javascript">
  
function checkReadyState(obj) {
  /*
  if(obj.readyState == 0) { document.getElementById('autocom').innerHTML = "Sending Request..."; }
  if(obj.readyState == 1) { document.getElementById('autocom').innerHTML = "Loading Response..."; }
  if(obj.readyState == 2) { document.getElementById('autocom').innerHTML = "Response Loaded..."; }
  if(obj.readyState == 3) { document.getElementById('autocom').innerHTML = "Response Ready..."; }
  */
  if(obj.readyState == 4) {
    if(obj.status == 200){
      return true;
    } else if(obj.status == 404) {
      // Add a custom message or redirect the user to another page
      document.getElementById('autocom').innerHTML = "File not found";
    } else {
      document.getElementById('autocom').innerHTML = "There was a problem retrieving the content.";
    }
  }
}

function onResponse() {
  if(checkReadyState(request)) {
  //alert(request.responseXML);
  document.getElementById('autocom').innerHTML = request.responseText;
  }
}
  
  /* Functions to submit users name */
function givename() {
  name = document.getElementById("input").value;
  document.getElementById("botspeak").innerHTML = "<p style=font-size:20px>Welcome " + name + ". I'm glad you're here. I'm Phil, a robot created by Willow Shelley to answer questions on her behalf.  Please feel free to ask me a question about Willow.</p>";
  document.getElementById("userspeak").innerHTML = '<input type="text" id="input" onkeypress="checkKey2()"/><input class="send" type="button" value="Send" onClick="sendRequest2()"/> <span id="autocom"></span><div id="answerspeak"></div>';
}
  
function sendRequest() {
  request = new XMLHttpRequest(); 
  letters = document.getElementById("input").value;
  url = 'auto.php?entry=' + letters;
  request.onreadystatechange = onResponse; //on every changed state of ajax we call the onResponse until it becomes true  
  request.open("GET",url, true);
  request.send(null);
}

function checkKey() {
  if (window.event.keyCode == 13) {
    givename();
  }
}
  
  
  /* Functions for auto-complete */
function fillin(el) {
  document.getElementById('input').value = el.innerHTML;
  document.getElementById('autocom').innerHTML = '';
} 
  
  
  /* Functions for check-answer */
function sendRequest2() {
  var ques = document.getElementById("input").value;
  document.getElementById("answerspeak").style.backgroundColor="#ccc";
  document.getElementById("botspeak").innerHTML = "<p style=font-size:20px>" + ques + "<p>";
  request = new XMLHttpRequest(); 
  letters = document.getElementById("input").value;
  url = 'answer.php?entry=' + letters;
  request.onreadystatechange = onResponse2;
  request.open("GET",url, true);
  request.send(null);
}
  
function onResponse2() {
  if(checkReadyState(request)) {
  document.getElementById('answerspeak').innerHTML = request.responseText;  
  }
}
  
function checkKey2() {
  if (window.event.keyCode == 13) {
    sendRequest2();
  }else {
    sendRequest();
  }
}
</script>


<div id="speakbox">
  <div id="botspeak">
    <p>Hi, what is your name?</p>
  </div>
  <div id="userspeak">
    <input type="text" onkeypress="checkKey()" id="input"/>
    <input class="send" type="button" value="Send" onClick="givename()"/>
    <span id="autocom"></span>
    <div id="answerspeak"></div>
  </div>
  <div class="clear"></div>
</div>

