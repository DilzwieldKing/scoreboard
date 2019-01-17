/*
 * Creation & Computation - Digital Futures, OCAD University
 * Kate Hartman / Nick Puckett
 * 
 * Receiver file that applies the message to an animated polygon
 * links the receive function with the draw loop
 */

// server variables

var dataServer;
var subKey = 'sub-c-6e6ff138-1363-11e9-b4a6-026d6924b094';

//name used to sort your messages. used like a radio station. can be called anything
var channelName = "powerpoint";

var questionStatus = false;

var answerkey = [

]

var score = 0;

var currentquestion = 0;

var playerInput = [];

var currentAnswer = 1;

function setup() 
{
  getAudioContext().resume();
  createCanvas(800, 800);
  background(255);
  


   // initialize pubnub
  dataServer = new PubNub(
  {
    subscribe_key : subKey,  
    ssl: true  //enables a secure connection. This option has to be used if using the OCAD webspace
  });
  
  //attach callbacks to the pubnub object to handle messages and connections
  dataServer.addListener({ message: readIncoming });
  dataServer.subscribe({channels: [channelName]});



}

function draw() 
{
  background('black');
  fill('white');
  rectMode(CENTER);
  rect(400, 400, 600, 200);
  fill('red');
  textSize(50);
  text(score, 400, 400)
  answerChecker();
  questiontrue();


}

function readIncoming(inMessage) //when new data comes in it triggers this function, 
{                               
   
    sides = inMessage.message.slide +1; //take the number from the message and assign it to the sides variable

}

function questiontrue(){
  for(i = 0; i < 1; i++){
      if(questionStatus === true){
        score = score + 1;
    }
  }
}

function keyTyped(){
  if(key === '1'){
    playerInput = 1;
    console.log(playerInput);
  }
  if(key === '2'){
    playerInput = 2;
    console.log(playerInput);
  }
  if(key === '3'){
    playerInput = 3;
    console.log(playerInput);
  }
  if(key === '4'){
    playerInput = 4;
    console.log(playerInput);
  }
}

function mouseClicked(){
    currentquestion = currentquestion + 1;
    currentAnswer = 1;
}

function answerChecker(){
    for(var i = 0; i < 1; i++){
        if(playerInput == currentAnswer){
            questionStatus = true;
        }
    }
}
