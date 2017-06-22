var IG = new Object;
var lesson1 = {
  0: { 'sound': 'bathtub.mp3', 'link': 'images/bathtub.png', 'name': 'Bathtub', 'name2': 'bathtub'},
  1: { 'sound': 'bed.mp3', 'link': 'images/bed.png', 'name': 'Bed', 'name2': 'bed'},
  2: { 'sound': 'dresser.mp3', 'link': 'images/dresser.png', 'name': 'Dresser', 'name2': 'dresser'},
  3: { 'sound': 'mirror.mp3', 'link': 'images/mirror.png', 'name': 'Mirror', 'name2': 'mirror'},
  4: { 'sound': 'sideTable.mp3', 'link': 'images/sidetable.png', 'name': 'Side Table', 'name2': 'side table'}
};
var lesson2 = {
  0: { 'sound': 'calendar.mp3', 'link': 'images/calendar.png', 'name': 'Calendar', 'name2': 'calendar'},
  1: { 'sound': 'coatRack.mp3', 'link': 'images/coatrack.png', 'name': 'Coat Rack', 'name2': 'coat rack' },
  2: { 'sound': 'couch.mp3', 'link': 'images/couch.png', 'name': 'Sofa', 'name2': 'sofa' },
  3: { 'sound': 'plant.mp3', 'link': 'images/plant.png', 'name': 'Plant', 'name2': 'plant' },
  4: { 'sound': 'stairs.mp3', 'link': 'images/stairs.png', 'name': 'Stairs', 'name2': 'stairs' }
}
var lesson3 = {
  0: { 'sound': 'fridge.mp3', 'link': 'images/fridge.png', 'name': 'Fridge', 'name2': 'fridge' },
  1: { 'sound': 'sink.mp3', 'link': 'images/sink.png', 'name': 'Sink', 'name2': 'sink' },
  2: { 'sound': 'stove.mp3', 'link': 'images/stove.png', 'name': 'Stove', 'name2': 'stove' },
  3: { 'sound': 'table.mp3', 'link': 'images/table.png', 'name': 'Table', 'name2': 'table' },
  4: { 'sound': 'plant.mp3', 'link': 'images/plant.png', 'name': 'Plant', 'name2': 'plant' }
}

var order = 0; // particular key inside IG being used
var audio1 = '<audio controls><source src="audio/';
var audio2 = '"type="audio/mpeg"></audio>';
var wrong = {};
var size = 0;
var lessonint = 0;
var whichlesson = 0;

function whichlessonF(num){
  whichlesson = num;
  document.getElementById('les1').innerHTML = '';
  document.getElementById('les2').innerHTML = '';
  document.getElementById('les3').innerHTML = '';
  document.getElementById('info').innerHTML = '<h4>How this works</h4><h5>You will be introduced to images.  Simply click the image to hear the audio.  As you learn you will be quizzed on your knowledge. At the end of this lesson you can take a final test to see how much you have learned.</h5><h5><a onClick="start()" class="button">Begin Learning</a></h5>';

}


function start(){
  if(whichlesson==1){
    IG = lesson1;
    lessonint = 1;
  }else if(whichlesson==2){
    IG = lesson2;
    lessonint = 2;
  }else{
    IG = lesson3;
    lessonint = 3;
  }
  console.log(IG[1]);
  document.getElementById('info').style.display = 'none';
  getsize();
  console.log('size ' + size);
  learn();
}

function getsize(){
  Object.size = function(obj) {
  //get object size (length)
    var size = 0, key;
    for (key in obj) {
      if (obj.hasOwnProperty(key)){ size++; }
    }
    return (size);
  };
  var sizeIG = Object.size(IG); // IG's length
  console.log('sizeIG ' + sizeIG);
  size = (sizeIG-1);
}

function learn(){
// Study two elements, then calls quiz1 function
  if(order < size-1){
    console.log('function: learn - 2 or more');
    //where there is at least 2 more items to study
    document.getElementById('test').innerHTML = "";
    document.getElementById('title').innerHTML = "";
    document.getElementById('quiz').innerHTML = "<img src=\"" + IG[order].link + "\"/><br/><p>" + IG[order].name + "</p>";
    document.getElementById('quiz').innerHTML += audio1 + IG[order].sound + audio2;
    document.getElementById('quiz2').innerHTML += "<img src=\"" + IG[order+1].link + "\"/><br/><p>" + IG[order+1].name + "</p>";
    document.getElementById('quiz2').innerHTML += audio1 + IG[order+1].sound + audio2;
    document.getElementById('next').innerHTML += "<h5><a class=\"nextbutton\" onClick=\"quiz1();\">Ready to move on?</a></h5>";
  }else if(order == size) {
    console.log('function: learn - 1 left');
    //if there is only one item left to study
    document.getElementById('test').innerHTML = "";
    document.getElementById('quiz').innerHTML = "<img src=\"" + IG[order].link + "\"/><br/><p>" + IG[order].name + "</p>";
    document.getElementById('quiz').innerHTML += audio1 + IG[order].sound + audio2;
    document.getElementById('next').innerHTML += "<h5><a class=\"nextbutton\" onClick=\"quiz1();\">Ready to move on?</a></h5>";
  }else{
    //when all items have been studied
    wrongf();
  }
}

function quiz1(){
  console.log('function: quiz1');
  //Populates first quiz question then calls answer1(user's answer);
  document.getElementById('quiz').innerHTML = "";
  document.getElementById('quiz2').innerHTML = "";
  document.getElementById('next').innerHTML = "";
  document.getElementById('title').innerHTML = "<h3>Question " + qint + ":</h3>";
  document.getElementById('test').innerHTML = "<input type=\"text\" placeholder=\"Enter English Translation\" id=\"text\" onkeydown=\"if(event.keyCode == 13){answer1(this.value);}\"/>";
  document.getElementById('test').innerHTML += "<br/><br/>" + audio1 + IG[order].sound + audio2;
}

var qint = 1; //Which quiz question being asked

function answer1(value) {
//displays if user got the question right or wrong
//if answer is wrong, adds key to wrong{}
//calls quiz2 function
  document.getElementById('title').innerHTML = "";
  if( value != IG[order].name && value != IG[order].name2 ){
    //wrong answer
    console.log('function: answer1 - wrong');
    wrong[order] = IG[order];
    qint++;
    quiz2();
    document.getElementById('test').innerHTML = "<p>Sorry, that was the wrong answer.  The correct answer is: <b>" + IG[order].name + "</b></p>";
    if( order == size ){
      //if there is nothing left to study
      wrongf();
    }else{
      //if there are more items left to study:
      order++;
      var set = setTimeout('quiz2()' ,4000);
    }
  }else{
    //right answer
    console.log('function: answer1 - right');
    qint++;
    document.getElementById('test').innerHTML = "<p>Correct! Great job!</p>"
    if( order == size ){
      //if there is nothing left to study
      wrongf();
    }else{
      //if there are more items left to study:
      order++;
      var set = setTimeout('quiz2()' ,3000);
    }
  }
}

function quiz2(){
  console.log('function: quiz2');
  //Populates second quiz question then calls answer2(user's answer);
  document.getElementById('quiz').innerHTML = "";
  document.getElementById('quiz2').innerHTML = "";
  document.getElementById('next').innerHTML = "";
  document.getElementById('title').innerHTML = "<h3>Question " + qint + ":</h3>";
  document.getElementById('test').innerHTML = "<input type=\"text\" placeholder=\"Enter English Translation\" id=\"text\" onkeydown=\"if(event.keyCode == 13){answer2(this.value);}\"/>";
  document.getElementById('test').innerHTML += "<br/><br/>" + audio1 + IG[order].sound + audio2;
}

function answer2 (value){
//displays if user got the question right or wrong
//if answer is wrong, adds key to wrong{}
//calls learn function or wrong function
  document.getElementById('title').innerHTML = "";
  if( value != IG[order].name && value != IG[order].name2 ){
    //wrong answer
    console.log('function: answer2 - wrong');
    wrong[order] = IG[order];
    qint++;
    document.getElementById('test').innerHTML = "<p>Sorry, that was the wrong answer.  The correct answer is: <b>" + IG[order].name + "</b></p>";
    if( order == size ){
      //if there is nothing left to study
      var set = setTimeout('wrongf()' ,4000);
    }else{
      //if there are more items left to study:
      order++;
      var set = setTimeout('learn()' ,4000);
    }
  }else{
    console.log('function: answer2 - right');
    //right answer
    qint++;
    document.getElementById('test').innerHTML = "<p>Correct! Great job!</p>"
    if( order != size ){
      //if there are more items left to study:
      order++;
      var set = setTimeout('learn()' ,3000);
    }else{
      //if there is nothing left to study
      wrongf();
    }
  }
}



// --------  STUDY WORDS UNTIL ALL ARE REMEMBERED -------- //

var item = 0;
var item2 = 0;

function wrongf() {
  console.log('function: wrongf');
// Study two elements in wrong{} then calls next
  Object.size = function(obj) {
  //get's wrong's size (length)
    var size = 0, key;
    for (key in obj) {
      if (obj.hasOwnProperty(key)){ size++; }
    }
    return (size);
  };
  var wsize = Object.size(wrong); // wrong's length
  console.log(wsize);
  if(wsize != 0){
    console.log('fetching index of first item...');
    for(i=0; i<20; i++){
      if(wrong[i] != undefined){
        item = i;
        break;
      }
    }
    if(wsize != 1){
      // if there are at least 2 items in wrong{}
      console.log('wrongf - 2 or more');
      console.log('fetching index second item...');
      for(i=(item+1); i<20; i++){
        if(wrong[i] != undefined){
          item2 = i;
          break;
        }
      }
      document.getElementById('test').innerHTML = "";
      document.getElementById('title').innerHTML = "<h3>" + wsize + " items left to learn</h3>";
      document.getElementById('quiz').innerHTML = "<img src=\"" + wrong[item].link + "\"/><br/><p>" + wrong[item].name + "</p>";
      document.getElementById('quiz').innerHTML += audio1 + wrong[item].sound + audio2;
      document.getElementById('quiz2').innerHTML += "<img src=\"" + wrong[item2].link + "\"/><br/><p>" + wrong[item2].name + "</p>";
      document.getElementById('quiz2').innerHTML += audio1 + wrong[item2].sound + audio2;
      document.getElementById('next').innerHTML += "<h5><a class=\"nextbutton\" onClick=\"wquiz1();\">Ready to move on?</a></h5>";
    }else{
      // if there is one item in wrong{}
      document.getElementById('test').innerHTML = "";
      document.getElementById('title').innerHTML = "<h3>" + wsize + " items left to learn</h3>";
      document.getElementById('quiz').innerHTML = "<img src=\"" + wrong[item].link + "\"/><br/><p>" + wrong[item].name + "</p>";
      document.getElementById('quiz').innerHTML += audio1 + wrong[item].sound + audio2;
      document.getElementById('next').innerHTML += "<h5><a class=\"nextbutton\" onClick=\"wquiz1();\">Ready to move on?</a></h5>";
    }
  }else{
    // if wrong{} is empty
    finalquiz();
  }
}

function wquiz1(){
  console.log('function: wquiz1');
  //Populates first quiz question then calls wanswer1(user's answer);
  document.getElementById('quiz').innerHTML = "";
  document.getElementById('quiz2').innerHTML = "";
  document.getElementById('next').innerHTML = "";
  document.getElementById('title').innerHTML = "<h3>Question " + qint + ":</h3>";
  document.getElementById('test').innerHTML = "<input type=\"text\" placeholder=\"Enter English Translation\" id=\"text\" onkeydown=\"if(event.keyCode == 13){wanswer1(this.value);}\"/>";
  document.getElementById('test').innerHTML += "<br/><br/>" + audio1 + wrong[item].sound + audio2;
}

function wanswer1(value) {
//displays if user got the question right or wrong
//if answer is wrong, re-adds key to wrong{}
//calls wquiz2 or finalquiz
  document.getElementById('title').innerHTML = "";
  Object.size = function(obj) {
  //get's wrong's size (length)
    var size = 0, key;
    for (key in obj) {
      if (obj.hasOwnProperty(key)){ size++; }
    }
    return (size);
  };
  var wsize = Object.size(wrong); // wrong's length
  if( value != wrong[item].name && value != wrong[item].name2 ){
    //wrong answer
    console.log('function: wanswer1 - wrong');
    qint++;
    if( wsize == 1 ){
      wrongf();
    }else{
    wquiz2();
      document.getElementById('test').innerHTML = "<p>Sorry, that was the wrong answer.  The correct answer is: <b>" + wrong[item].name + "</b></p>";
      var set = setTimeout('wquiz2()' ,4000);
    }
  }else{
    //right answer
    console.log('function: wanswer1 - right');
    delete wrong[item];
    qint++;
    document.getElementById('test').innerHTML = "<p>Correct! Great job!</p>"
    if( wsize == 1 ){
      //if there is nothing left to study
      finalquiz();
    }else{
      //if there are more items left to study:
      order++;
      var set = setTimeout('wquiz2()' ,3000);
    }
  }
}

function wquiz2(){
  console.log('function: wquiz2');
  //Populates second quiz question then calls wanswer2(user's answer);
  document.getElementById('quiz').innerHTML = "";
  document.getElementById('quiz2').innerHTML = "";
  document.getElementById('next').innerHTML = "";
  document.getElementById('title').innerHTML = "<h3>Question " + qint + ":</h3>";
  document.getElementById('test').innerHTML = "<input type=\"text\" placeholder=\"Enter English Translation\" id=\"text\" onkeydown=\"if(event.keyCode == 13){wanswer2(this.value);}\"/>";
  document.getElementById('test').innerHTML += "<br/><br/>" + audio1 + wrong[item2].sound + audio2;
}

function wanswer2 (value){
//displays if user got the question right or wrong
//if answer is wrong, re-adds key to wrong{}
//calls wrong or finalquiz
  document.getElementById('title').innerHTML = "";
  Object.size = function(obj) {
  //get's wrong's size (length)
    var size = 0, key;
    for (key in obj) {
      if (obj.hasOwnProperty(key)){ size++; }
    }
    return (size);
  };
  var wsize = Object.size(wrong); // wrong's length
  if( value != wrong[item2].name && value != wrong[item2].name2 ){
    //wrong answer
    console.log('function: wanswer2 - wrong');
    qint++;
    document.getElementById('test').innerHTML = "<p>Sorry, that was the wrong answer.  The correct answer is: <b>" + wrong[item2].name + "</b></p>";
    wrongf();
  }else{
    console.log('function: wanswer2 - right');
    //right answer
    delete wrong[item2];
    qint++;
    document.getElementById('test').innerHTML = "<p>Correct! Great job!</p>"
    if( wsize == 1 ){
      //if there is nothing left to study
      finalquiz();
    }else{
      //if there are more items left to study:
      order++;
      var set = setTimeout('wrongf()' ,3000);
    }
  }
}




function finalquiz(){
  console.log('function: finalquiz');
  document.getElementById('test').innerHTML = "";
  document.getElementById('finalquiz').innerHTML = '<h5 style="margin-left:30%;width:600px;">Great job! You have memorized all the words in lesson one.  Would you like to take the final quiz to see how much you remember?</h5>';
    document.getElementById('finalquiz').innerHTML += '<h5><a class="nextbutton" onClick="startFinal()" style="margin-left:40%">Take Final Quiz</a></h5>';
}



function startFinal(){
  document.getElementById('quizF').style.display = 'block';
  document.getElementById('info').innerHTML = '';
  document.getElementById('finalquiz').innerHTML = '';
  lessonint = 0;
  size = 0;
  getfinalsize();
  startquiz();
}

function getfinalsize(){
  Object.size = function(obj) {
  //get object size (length)
    var size = 0, key;
    for (key in obj) {
      if (obj.hasOwnProperty(key)){ size++; }
    }
    return (size);
  }
}

function startquiz(){
  size = Object.size(IG);
  for(i=0;i<size;i++){
    document.getElementById('quizF').innerHTML += '<h5>Question ' + (i+1) + '</h5>';
    document.getElementById('quizF').innerHTML += '<div id="div' + i + '"><input type="text" placeholder="Enter English Translation" id="ques' + i + '">'+ audio1 + IG[i].sound + audio2 + '</div>';
  }
  document.getElementById('quizF').innerHTML += '<h5><a class="nextbutton" onClick="check(this);">Check Answers</a></h5>';
}

function check(ans){
  size = Object.size(IG);
  for(i=0;i<size;i++){
    var id = 'ques' + i;
    var divid = 'div' + i;
    var val = document.getElementById(id).value;
    if(val != IG[i].name && val != IG[i].name2){
      document.getElementById(divid).innerHTML = '<h6>Wrong.</h6><p>You answered: "' + val + ' "</p><p>The correct answer is ' + IG[i].name;
      document.getElementById(divid).innerHTML += audio1 + IG[i].sound + audio2;
    }else {
      document.getElementById(divid).innerHTML = '<h6>Correct!</h6><p>You must have studied well.</p><p>You answered: "' + val + '</p>';
      document.getElementById(divid).innerHTML += audio1 + IG[i].sound + audio2;
    }
  }
}
