var prompt = require('prompt-sync')();
var AssistantV1 = require('watson-developer-cloud/assistant/v1');
var fs = require('fs');

var service = new AssistantV1({
  username: '4052ba02-1887-4960-99b5-848293816cdc', 
  password: 'kT5IQ0Ta5UHu', 
  version: '2018-07-10'
});

var workspace_id = 'a0ef780b-ff41-4138-b8d4-d181ea20aa65'; 


service.message({
  workspace_id: workspace_id
  }, processResponse);


function processResponse(err, response) {
  if (err) {
    console.error(err); 
    return;
  }


  if (response.intents.length > 0) {
    var itent = response.intents[0].intent
    console.log('Detected intent: #' + itent);
  }
  
  
  if (response.output.generic.length != 0) {
    console.log(response.output.generic[0].text);
  }
  var newMessageFromUser = prompt('>> ');

  if(itent ==='cumprimentar'){
    fs.writeFileSync("Anything.txt", newMessageFromUser);
   }
  
  
  service.message({
    workspace_id: workspace_id,
    input: { text: newMessageFromUser }
  }, processResponse)




}
