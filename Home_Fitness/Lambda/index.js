
let speechOutput;
var next=0;
let reprompt;
var type='';
var dt = new Date();
var weekday = new Array(7);
weekday[0] =  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
var day = weekday[dt.getDay()];

let welcomeOutput = "Hey! Welcome  to your daily exercise routine <break time='0.3s'/> Let's start with your workout plan <break time='0.3s'/> Today is "+day;
welcomeOutput += "<break time='0.3s'/> Please inform me about your fitness goals <break time='0.3s'/> We have <break time='0.4s'/>  Fat loss <break time='0.3s'/> Muscle Gain <break time='0.2s'/> and <break time='0.3s'/> Cross Fit";
let welcomeReprompt = "sample re-prompt text";
"use strict";
const Alexa = require('alexa-sdk');
const APP_ID = undefined;  // TODO replace with your app ID (OPTIONAL).
speechOutput = '';
const handlers = {
    'LaunchRequest': function () {
        this.emit(':ask', welcomeOutput, welcomeReprompt);
    },
    'AMAZON.HelpIntent': function () {
        speechOutput = 'Placeholder response for AMAZON.HelpIntent.';
        
        this.emit(':tell', speechOutput);
    },
   'AMAZON.CancelIntent': function () {
        speechOutput = 'Placeholder response for AMAZON.CancelIntent';
        this.emit(':tell', speechOutput);
    },
   'AMAZON.StopIntent': function () {
        speechOutput = 'GoodBye';
        this.emit(':tell', speechOutput);
   },
   'SessionEndedRequest': function () {
        speechOutput = '';
        //this.emit(':saveState',true);//uncomment to save attributes to db on session end
        this.emit(':tell', speechOutput);
   },
    'AMAZON.FallbackIntent': function () {
        speechOutput = '';
        //any intent slot variables are listed here for convenience
        //Your custom intent handling goes here
        speechOutput = "You have already started the home fitness! <break time='0.3s'/> You can continue with your exercise ";
        this.emit(":ask", speechOutput, speechOutput);
    },
    'AMAZON.NavigateHomeIntent': function () {
        speechOutput = '';
        //any intent slot variables are listed here for convenience
        //Your custom intent handling goes here
        speechOutput = "This is a place holder response for the intent named AMAZON.NavigateHomeIntent. This intent has no slots. Anything else?";
        this.emit(":ask", speechOutput, speechOutput);
    },
    'WorkoutPlanIntent':function()
    {
        type=this.event.request.intent.slots.type.value;
        speechOutput="you have selected "+ type+ " when you are ready tell me";
        this.emit(":ask", speechOutput, speechOutput);
        
    },
    
    'GetExerciseIntent':  function () {
        
        //FATLOSS PLAN
        if(type=='fat loss')
        {
        var monday=new Array(5);
        monday[0] = "High Stepping 20 repetitions <break time='0.2s'/> 4 sets <break time='0.2s'/> Just let me know once you complete your exercise";
        monday[1] = "Jumping jack 30 repetitions <break time='0.2s'/>   4 sets <break time='0.2s'/> Just let me know once you complete your exercise";
        monday[2] = "Moutain Climber 20 repetitions <break time='0.2s'/> 3 sets <break time='0.2s'/> Just let me know once you complete your exercise";
        monday[3] = "Abdominal Crunches 15 repetations <break time='0.2s'/> 4 sets <break time='0.2s'/> Just let me know once you complete your exercise";
        monday[4] = "Planks 3 sets <break time='0.2s'/>Till Failure<break time='0.2s'/> Just let me know once you complete your exercise";
        
        var tuesday=new Array(5);
        tuesday[0]="High Stepping 20 repetations<break time='0.2s'/> 4 Sets <break time='0.2s'/>Just let me know once you complete your exercise";
        tuesday[1]= "Abdominal Crunches 15 repetations<break time='0.2s'/>  4 Sets <break time='0.2s'/>Just let me know once you complete your exercise";
        tuesday[2]= "Russian Twister 15 repetations  <break time='0.2s'/>3 Sets<break time='0.2s'/> Just let me know once you complete your exercise";
        tuesday[3]= "Leg raises 10 repetations <break time='0.2s'/>3 Sets <break time='0.2s'/>Just let me know once you complete your exercise";
        tuesday[4]= "Planks 3 set <break time='0.2s'/> Till Failure <break time='0.2s'/>Just let me know once you complete your exercise";
        
        var wednesday=new Array(5);
        wednesday[0]="Jumping jack 30 repetitions <break time='0.2s'/> 4 sets<break time='0.2s'/>Just let me know once you complete your exercise";
        wednesday[1]= "Abdominal Crunches 15 repetitions <break time='0.2s'/>3 sets <break time='0.2s'/>Just let me know once you complete your exercise";
        wednesday[2]= "Heel Touch 15 repetitions <break time='0.2s'/>3 sets <break time='0.2s'/>Just let me know once you complete your exercise";
        wednesday[3]= "Leg raises 10 repetations <break time='0.2s'/>3 Sets<break time='0.2s'/> Just let me know once you complete your exercise";
        wednesday[4]= "Planks  3 sets <break time='0.2s'/>till failure <break time='0.2s'/>Just let me know once you complete your exercise";
        
        var thursday=new Array(5);
        thursday[0]="Jumping jack 30 repetition <break time='0.2s'/>4 sets<break time='0.2s'/> Just let me know once you complete your exercise";
        thursday[1]= "Burpees 12 repetitions <break time='0.2s'/>3 sets <break time='0.2s'/>Just let me know once you complete your exercise";
        thursday[2]= "Abdominal Crunches 15 repetitions <break time='0.2s'/>3 sets<break time='0.2s'/> Just let me know once you complete your exercise";
        thursday[3]= "Moutain Climber 20 repetition <break time='0.2s'/>3 sets<break time='0.2s'/> Just let me know once you complete your exercise";
        thursday[4]= "Planks  3 sets <break time='0.2s'/>till failure <break time='0.2s'/>Just let me know once you complete your exercise";
        
        
        var friday=new Array(5);
        friday[0]="High Stepping 20 repetition <break time='0.2s'/>3 sets<break time='0.2s'/> Just let me know once you complete your exercise";
        friday[1]= "Leg raises  10 repetition<break time='0.2s'/> 3 sets <break time='0.2s'/>Just let me know once you complete your exercise";
        friday[2]= "Moutain Climber  20 repetition <break time='0.2s'/>3 sets <break time='0.2s'/>Just let me know once you complete your exercise";
        friday[3]= "Russian Twister 15 repetition<break time='0.2s'/> 3 sets <break time='0.2s'/>Just let me know once you complete your exercise";
        friday[4]= "Planks  3 sets<break time='0.2s'/> till failure<break time='0.2s'/> Just let me know once you complete your exercise";
        
        var saturday=new Array(5);
        saturday[0]="Jumping jack 30 repetitions<break time='0.2s'/> 4 sets<break time='0.2s'/> Just let me know once you complete your exercise";
        saturday[1]= "Abdominal Crunches 15 repetitions<break time='0.2s'/> 3 sets<break time='0.2s'/> Just let me know once you complete your exercise";
        saturday[2]= "Burpees  12 repetition<break time='0.2s'/> 3 sets<break time='0.2s'/> Just let me know once you complete your exercise";
        saturday[3]= "Leg raises 10 repetitions<break time='0.2s'/> 3 sets <break time='0.2s'/>Just let me know once you complete your exercise";
        saturday[4]= "Planks 3 sets<break time='0.2s'/> till failure <break time='0.2s'/>Just let me know once you complete your exercise";
        }
        //muscle gain
        if(type=='muscle gain')
        {
        var monday=new Array(5);
        monday[0] = "Push Ups 12 repetitions <break time='0.2s'/>3 Sets <break time='0.2s'/>each Just let me know once you complete your exercise";
        monday[1] = "Bodyweight squats 15 repetitions <break time='0.2s'/>3 Sets <break time='0.2s'/>each Just let me know once you complete your exercise";
        monday[2] = "Jumping jack 30 repetitions<break time='0.2s'/> 4 Sets<break time='0.2s'/> each Just let me know once you complete your exercise";
        monday[3] = "Plank Leg Raises 10 repetitions <break time='0.2s'/>3 Sets<break time='0.2s'/> each Just let me know once you complete your exercise";
        monday[4] = "Planks 3 sets <break time='0.2s'/>Till Failure<break time='0.2s'/> Just let me know once you complete your exercise";
        
        var tuesday=new Array(5);
        tuesday[0]="Push Ups  12 repetitions<break time='0.2s'/> 3 Sets <break time='0.2s'/>each Just let me know once you complete your exercise";
        tuesday[1]= "Bodyweight squats 15 repetitions <break time='0.2s'/>3 Sets<break time='0.2s'/> each Just let me know once you complete your exercise";
        tuesday[2]= "Burpees 12 repetitions <break time='0.2s'/>3 Sets <break time='0.2s'/>each Just let me know once you complete your exercise";
        tuesday[3]= "Jumping jack  30 repetitions<break time='0.2s'/> 4 Sets <break time='0.2s'/>each Just let me know once you complete your exercise";
        tuesday[4]= "Planks 3 sets<break time='0.2s'/> Till Failure<break time='0.2s'/> Just let me know once you complete your exercise";
        
        var wednesday=new Array(5);
        wednesday[0]="Push Ups  15 repetitions <break time='0.2s'/>3 Sets <break time='0.2s'/>each Just let me know once you complete your exercise";
        wednesday[1]= "Bodyweight squats 15 repetitions<break time='0.2s'/> 3 Sets <break time='0.2s'/>each Just let me know once you complete your exercise";
        wednesday[2]= "Plank Leg Raises 10 repetitions <break time='0.2s'/>3 Sets <break time='0.2s'/>each Just let me know once you complete your exercise";
        wednesday[3]= "Burpees 12 repetitions <break time='0.2s'/>3 Sets <break time='0.2s'/> Just let me know once you complete your exercise";
        wednesday[4]= "Planks 3 sets<break time='0.2s'/> Till Failure <break time='0.2s'/>Just let me know once you complete your exercise";
        
        var thursday=new Array(5);
        thursday[0]="Push Ups 15 repetitions<break time='0.2s'/> 3 Sets<break time='0.2s'/> each Just let me know once you complete your exercise";
        thursday[1]= "Bodyweight squats 15 repetitions<break time='0.2s'/> 3 Sets <break time='0.2s'/>each Just let me know once you complete your exercise";
        thursday[2]= "Jumping jack 30 repetitions <break time='0.2s'/>3 Sets <break time='0.2s'/>each Just let me know once you complete your exercise";
        thursday[3]= "Plank Leg Raises 10 repetitions <break time='0.2s'/>3 Sets<break time='0.2s'/> each Just let me know once you complete your exercise";
        thursday[4]= "Planks  3 sets<break time='0.2s'/> Till Failure <break time='0.2s'/>Just let me know once you complete your exercise";
        
        
        var friday=new Array(5);
        friday[0]="Push Ups 15 repetitions <break time='0.2s'/>3 Sets<break time='0.2s'/> each Just let me know once you complete your exercise";
        friday[1]= "Bodyweight squats 15 repetitions<break time='0.2s'/> 3 Sets <break time='0.2s'/>each Just let me know once you complete your exercise";
        friday[2]= "Burpees 12 repetitions<break time='0.2s'/> 3 Sets<break time='0.2s'/> each Just let me know once you complete your exercise";
        friday[3]= "Plank Leg Raises 10 repetitions <break time='0.2s'/>3 Sets<break time='0.2s'/> each Just let me know once you complete your exercise";
        friday[4]= "Planks 3 sets<break time='0.2s'/> Till Failure <break time='0.2s'/>Just let me know once you complete your exercise";
        
        var saturday=new Array(5);
        saturday[0]="Push Ups 12 repetitions <break time='0.2s'/>3 Sets <break time='0.2s'/>each Just let me know once you complete your exercise";
        saturday[1]= "Bodyweight squats 15 repetitions<break time='0.2s'/> 3 Sets<break time='0.2s'/> each Just let me know once you complete your exercise";
        saturday[2]= "Jumping jack 30 repetitions <break time='0.2s'/>4 Sets <break time='0.2s'/>each Just let me know once you complete your exercise";
        saturday[3]= "Plank Leg Raises 10 repetitions<break time='0.2s'/> 3 Sets <break time='0.2s'/>each Just let me know once you complete your exercise";
        saturday[4]= "Planks 3 sets<break time='0.2s'/> Till Failure<break time='0.2s'/>Just let me know once you complete your exercise";
        }
        
        //cross fit
        
        if(type=='cross fit')
        {
        var monday=new Array(5);
        monday[0] = "Burpee 2 sets<break time='0.2s'/> 10 repititions <break time='0.2s'/> Just let me know once you complete your exercise";
        monday[1] = "Body weight squat 2 sets<break time='0.2s'/> 20 repititions <break time='0.2s'/> Just let me know once you complete your exercise";
        monday[2] = "Sit Ups 2 sets <break time='0.2s'/>30 repititions  <break time='0.2s'/>Just let me know once you complete your exercise";
        monday[3] = "Pushups 2 set<break time='0.2s'/> 15 repititions <break time='0.2s'/> Just let me know once you complete your exercise";
        monday[4] = "Pistol Squat 1 set <break time='0.2s'/>10 repititions <break time='0.2s'/>Just let me know once you complete your exercise";
        
        var tuesday=new Array(5);
        tuesday[0]="Pushups 2 sets <break time='0.2s'/>15 repititions<break time='0.2s'/>  Just let me know once you complete your exercise";
        tuesday[1]= "Body weight squat 3 sets <break time='0.2s'/>15 repititions <break time='0.2s'/> Just let me know once you complete your exercise";
        tuesday[2]= "Sit Ups 3 sets <break time='0.2s'/>25 repititions  <break time='0.2s'/> Just let me know once you complete your exercise";
        tuesday[3]= "Pistol Squat 2 sets <break time='0.2s'/>10 repititions <break time='0.2s'/>Just let me know once you complete your exercise";
        tuesday[4]= "Pullups 2 sets<break time='0.2s'/> 5 to 10  repititions <break time='0.2s'/>Just let me know once you complete your exercise";
        
        var wednesday=new Array(5);
        wednesday[0]="Burpee 2 sets <break time='0.2s'/>10 repititions<break time='0.2s'/> Just let me know once you complete your exercise";
        wednesday[1]= "Body weight squat 2 sets <break time='0.2s'/>20 repititions<break time='0.2s'/>  Just let me know once you complete your exercise";
        wednesday[2]= "Sit Ups 2 sets <break time='0.2s'/>30 repititions<break time='0.2s'/> Just let me know once you complete your exercise";
        wednesday[3]= "Pistol Squat 2 sets<break time='0.2s'/> 10 repititions <break time='0.2s'/>Just let me know once you complete your exercise";
        wednesday[4]= "Box jump 2 sets<break time='0.2s'/> 15 repititions<break time='0.2s'/> Just let me know once you complete your exercise";
        
        var thursday=new Array(5);
        thursday[0]="Jump Lunge 2 sets <break time='0.2s'/>10 repititions <break time='0.2s'/>Just let me know once you complete your exercise";
        thursday[1]= "Mountain Climber 2 sets <break time='0.2s'/>15 repititions<break time='0.2s'/> Just let me know once you complete your exercise";
        thursday[2]= "Burpee 2 sets<break time='0.2s'/> 10 repititions<break time='0.2s'/> Just let me know once you complete your exercise";
        thursday[3]= "Pushups 2 sets<break time='0.2s'/> 15 repititions <break time='0.2s'/> Just let me know once you complete your exercise";
        thursday[4]= "Body weight squat 3 sets<break time='0.2s'/> 15 repititions<break time='0.2s'/>  Just let me know once you complete your exercise";
        
        
        var friday=new Array(5);
        friday[0]="Pistol Squat 2 sets<break time='0.2s'/> 10 repititions <break time='0.2s'/>Just let me know once you complete your exercise";
        friday[1]= "Pullups 2 sets <break time='0.2s'/>5 to 10  repititions <break time='0.2s'/>Just let me know once you complete your exercise";
        friday[2]= "Box jump 2 sets<break time='0.2s'/> 15 repititions <break time='0.2s'/>Just let me know once you complete your exercise";
        friday[3]= "Burpee 2 sets<break time='0.2s'/> 10 repititions  <break time='0.2s'/>Just let me know once you complete your exercise";
        friday[4]= "Body weight squat 2 sets<break time='0.2s'/> 20 repititions  <break time='0.2s'/>Just let me know once you complete your exercise";
        
        var saturday=new Array(5);
        saturday[0]="Jump Lunge 2 sets <break time='0.2s'/>10 repititions  <break time='0.2s'/>Just let me know once you complete your exercise";
        saturday[1]= "Mountain Climber 2 sets <break time='0.2s'/>15 repititions<break time='0.2s'/> Just let me know once you complete your exercise";
        saturday[2]= "Burpee 2 sets<break time='0.2s'/> 10 repititions <break time='0.2s'/>Just let me know once you complete your exercise";
        saturday[3]= "Pistol Squat 2 sets <break time='0.2s'/>10 repititions<break time='0.2s'/> Just let me know once you complete your exercise";
        saturday[4]= "Pullups 2 sets <break time='0.2s'/>5 to 10  repititions<break time='0.2s'/> Just let me know once you complete your exercise";
        }
        
        //for monday
        if(day=='Monday' && next<5)
        {
            
        speechOutput = monday[next];
           
        this.emit(":ask", speechOutput, speechOutput);
        }
        
        //for tuesday
        if(day=='Tuesday' && next<5)
        {
            
        speechOutput = tuesday[next];
           
        this.emit(":ask", speechOutput, speechOutput);
        }
        //for wednesday
         if(day=='Wednesday' && next<5)
        {
            
        speechOutput = wednesday[next];
           
        this.emit(":ask", speechOutput, speechOutput);
        }
        //for thursday
         if(day=='Thursday' && next<5)
        {
            
        speechOutput = thursday[next];
           
        this.emit(":ask", speechOutput, speechOutput);
        }
        //for friday
         if(day=='Friday' && next<5)
        {
            
        speechOutput = friday[next];
           
        this.emit(":ask", speechOutput, speechOutput);
        }
        //for saturday
         if(day=='Saturday' && next<5)
        {
            
        speechOutput = saturday[next];
           
        this.emit(":ask", speechOutput, speechOutput);
        }
         if(day=='Sunday')
        {
            
        speechOutput ='It\'s your rest day No exercise today Hurray!';
           
        this.emit(":ask", speechOutput, speechOutput);
        }
        //if the day excedes
        if(next>4)
         {
            speechOutput = "Kudos! you completed your todays workout. Eat clean<break time='0.2s'/>Stay Fit<break time='0.2s'/>Stay Healthy.<break time='0.2s'/>if you want to restart your todays workout<break time='0.2s'/>just let me know.<break time='0.2s'/>Thank You ";
           this.emit(":ask", speechOutput, speechOutput);
         }    
    },
    
    'NextIntent':function () {
        next++;
        
    
      this.emit('GetExerciseIntent');
        
        
        
        
   
        
    },
    'RestartIntent':function () {
        next=0;
        
    
      this.emitWithState('GetExerciseIntent');
        
        
        
        
   
        
    },
    
    
    
    'Unhandled': function () {
        speechOutput = "The skill didn't quite understand what you wanted.  Do you want to try something else?";
        this.emit(':ask', speechOutput, speechOutput);
    }
};
exports.handler = (event, context) => {
    const alexa = Alexa.handler(event, context);
    alexa.appId = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    //alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    //alexa.dynamoDBTableName = 'DYNAMODB_TABLE_NAME'; //uncomment this line to save attributes to DB
    alexa.execute();
};
//    END of Intent Handlers {} ========================================================================================
// 3. Helper Function  =================================================================================================
function resolveCanonical(slot){
    //this function looks at the entity resolution part of request and returns the slot value if a synonyms is provided
    let canonical;
    try{
        canonical = slot.resolutions.resolutionsPerAuthority[0].values[0].value.name;
    }catch(err){
        console.log(err.message);
        canonical = slot.value;
    };
    return canonical;
};
function delegateSlotCollection(){
  console.log("in delegateSlotCollection");
  console.log("current dialogState: "+this.event.request.dialogState);
    if (this.event.request.dialogState === "STARTED") {
      console.log("in Beginning");
      let updatedIntent= null;
      // updatedIntent=this.event.request.intent;
      //optionally pre-fill slots: update the intent object with slot values for which
      //you have defaults, then return Dialog.Delegate with this updated intent
      // in the updatedIntent property
      //this.emit(":delegate", updatedIntent); //uncomment this is using ASK SDK 1.0.9 or newer
      
      //this code is necessary if using ASK SDK versions prior to 1.0.9 
      if(this.isOverridden()) {
            return;
        }
        this.handler.response = buildSpeechletResponse({
            sessionAttributes: this.attributes,
            directives: getDialogDirectives('Dialog.Delegate', updatedIntent, null),
            shouldEndSession: false
        });
        this.emit(':responseReady', updatedIntent);
        
    } else if (this.event.request.dialogState !== "COMPLETED") {
      console.log("in not completed");
      // return a Dialog.Delegate directive with no updatedIntent property.
      //this.emit(":delegate"); //uncomment this is using ASK SDK 1.0.9 or newer
      
      //this code necessary is using ASK SDK versions prior to 1.0.9
        if(this.isOverridden()) {
            return;
        }
        this.handler.response = buildSpeechletResponse({
            sessionAttributes: this.attributes,
            directives: getDialogDirectives('Dialog.Delegate', null, null),
            shouldEndSession: false
        });
        this.emit(':responseReady');
        
    } else {
      console.log("in completed");
      console.log("returning: "+ JSON.stringify(this.event.request.intent));
      // Dialog is now complete and all required slots should be filled,
      // so call your normal intent handler.
      return this.event.request.intent;
    }
}
function randomPhrase(array) {
    // the argument is an array [] of words or phrases
    let i = 0;
    i = Math.floor(Math.random() * array.length);
    return(array[i]);
}
function isSlotValid(request, slotName){
        let slot = request.intent.slots[slotName];
        //console.log("request = "+JSON.stringify(request)); //uncomment if you want to see the request
        let slotValue;
        //if we have a slot, get the text and store it into speechOutput
        if (slot && slot.value) {
            //we have a value in the slot
            slotValue = slot.value.toLowerCase();
            return slotValue;
        } else {
            //we didn't get a value in the slot.
            return false;
        }
}
//These functions are here to allow dialog directives to work with SDK versions prior to 1.0.9
//will be removed once Lambda templates are updated with the latest SDK
function createSpeechObject(optionsParam) {
    if (optionsParam && optionsParam.type === 'SSML') {
        return {
            type: optionsParam.type,
            ssml: optionsParam['speech']
        };
    } else {
        return {
            type: optionsParam.type || 'PlainText',
            text: optionsParam['speech'] || optionsParam
        };
    }
}
function buildSpeechletResponse(options) {
    let alexaResponse = {
        shouldEndSession: options.shouldEndSession
    };
    if (options.output) {
        alexaResponse.outputSpeech = createSpeechObject(options.output);
    }
    if (options.reprompt) {
        alexaResponse.reprompt = {
            outputSpeech: createSpeechObject(options.reprompt)
        };
    }
    if (options.directives) {
        alexaResponse.directives = options.directives;
    }
    if (options.cardTitle && options.cardContent) {
        alexaResponse.card = {
            type: 'Simple',
            title: options.cardTitle,
            content: options.cardContent
        };
        if(options.cardImage && (options.cardImage.smallImageUrl || options.cardImage.largeImageUrl)) {
            alexaResponse.card.type = 'Standard';
            alexaResponse.card['image'] = {};
            delete alexaResponse.card.content;
            alexaResponse.card.text = options.cardContent;
            if(options.cardImage.smallImageUrl) {
                alexaResponse.card.image['smallImageUrl'] = options.cardImage.smallImageUrl;
            }
            if(options.cardImage.largeImageUrl) {
                alexaResponse.card.image['largeImageUrl'] = options.cardImage.largeImageUrl;
            }
        }
    } else if (options.cardType === 'LinkAccount') {
        alexaResponse.card = {
            type: 'LinkAccount'
        };
    } else if (options.cardType === 'AskForPermissionsConsent') {
        alexaResponse.card = {
            type: 'AskForPermissionsConsent',
            permissions: options.permissions
        };
    }
    let returnResult = {
        version: '1.0',
        response: alexaResponse
    };
    if (options.sessionAttributes) {
        returnResult.sessionAttributes = options.sessionAttributes;
    }
    return returnResult;
}
function getDialogDirectives(dialogType, updatedIntent, slotName) {
    let directive = {
        type: dialogType
    };
    if (dialogType === 'Dialog.ElicitSlot') {
        directive.slotToElicit = slotName;
    } else if (dialogType === 'Dialog.ConfirmSlot') {
        directive.slotToConfirm = slotName;
    }
    if (updatedIntent) {
        directive.updatedIntent = updatedIntent;
    }
    return [directive];
}
