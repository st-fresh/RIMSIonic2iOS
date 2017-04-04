////This is just having fun with es6 .. comments are loose throughout
///
//PreALPHA/ This function runs firstist because its got the mostist () curvy's 
(() => {
    //ALPHA.i/ Lets get the main function in our Immediate Invocation function with the long-name and tell it to fire if-and-only-if (run); is called by user-button-press
    (run) => { //see INIT/
        (DoWorkInsideAnImmediateInvocatingFunctionWithES6toCreateRandomChooserForMyCareerOpportunities);
    };
    //ALPHA.ii/ Access body dom element for appending more elements to
    const _B = $("body");
    //ALPHA.iii/ Lets make sure people know I'm not takin' no back-sass!!
    _B.append("WARNING: I am not responsible for your fate/destiny/legacy based on the choices this tool randomly makes for you -OR- the Choices you allow your friends to make for you - that's all you!");
    //ALPHA.iv/ Lets write the button to the view - yay PUSH BUTTONZ!!
    _B.append("<INPUT ID='runButton' TYPE='button' VALUE='START'/>");
    //ALPHA.v/ Lets tell .iv/button to only do things if the user clicks it, and to call the (run); function if the user dares to click
    $('#runButton').addEventListener('click', () => {  
        (run);
    });
    //-->> 

    //INIT/ Short for Initialize, this declares all vars we needs to have funs with
    (DoWorkInsideAnImmediateInvocatingFunctionWithES6toCreateRandomChooserForMyCareerOpportunities) => {
    //INIT.i/ Lets add the input UIs first - careful with parens cuz
    _B.append("<INPUT ID='companyInput1' TYPE='text' />"); 
    _B.append("<INPUT ID='companyInput2' TYPE='text' />");
    _B.append("<INPUT ID='companyInput3' TYPE='text' />");
    _B.append("<INPUT ID='companyInput4' TYPE='text' />");
    _B.append("<INPUT ID='companyInput5' TYPE='text' />");
    _B.append("<INPUT ID='companyInput6' TYPE='text' />");
    _B.append("<INPUT ID='companyInput7' TYPE='text' />");
    _B.append("<INPUT ID='companyInput8' TYPE='text' />");

    //INIT.ii/ We can render all of our Companies Online-Links with Job-Titles within the page during INIT if we want
    //_B.append('FORD in Palo Alto :' + '<a href="http://bit.ly/ford_A">bit.ly/ford_A</a>' + '/ UX-Research-Lead');
    //_B.append('APPLE in San Jose :' + '<a href="http://bit.ly/apple_B">bit.ly/apple_B/</a>' + '/ UI-Developer');
    //_B.append('AMAZON in Cupertino :' + '<a href="http://bit.ly/amazon_C">bit.ly/amazon_C</a>' + '/ Mobile-Visual Designer Cuptertino');
    //_B.append('WALMART LABS in San Bruno :' + '<a href="http://bit.ly/walmartlabs_d">bit.ly/walmartlabs_d</a>' + '/  JavaScript Developer');
    //_B.append('IGT in Fremont :' + '<a href="http://bit.ly/igt_e">bit.ly/igt_e</a>' + '/ JavaScript GraphicJS Developer');

    //I.iii/ This button allows user to add as many additional Companies as desired
    _B.append("<INPUT ID='addCompanyButt' TYPE='button' VALUE='ADD COMPANY' />");
    //--> This would be a good time to write the click-event-listener for this button outside of this scope skip to III/ 

    //I.iv/ Lets add some more buttons that give User more mini-features via quick-UI-access -- PRESS Z BUTTONZ!!
    _B.append("<INPUT ID='buildPoll' TYPE='button' VALUE='CREATE POLL' />"); //This button lets user create poll
    _B.append("<INPUT ID='randomizeButton' TYPE='BUTTON' VALUE='READ MY PALM' />"); //This button runs randomizer on most current input-field values entered by user input


        let addUIs = function() {
            return {
                input1    : $('#companyInput1'),
                input2    : $('#companyInput2'),
                input3    : $('#companyInput3'),
                input4    : $('#companyInput4'),
                input5    : $('#companyInput5'),
                input6    : $('#companyInput6'),
                input7    : $('#companyInput7'),
                input8    : $('#companyInput8'),
                addButton : function() {const _ADD_BUTTON = $('#addCompanyButt')}, //not 100% certain this is even possible.. 
                allInputs : function() {let companies = $('INPUT');}, //if we use let here instead of var we block-scope this to the scope it is instatiated within (possiby not good because it's dynamic; may need looser scope for functionality.. ooooOOOo functional programming)
                pollButton: function() {const _POLL_BUTTON = $('#buildPoll')},
                ranButton : function() {const _RAN_BUTTON = $('#randomizeButton')},
                company1  : function() {const _A = $('#companyInput1')" //If you want to manually run this without UI
                
                //.
                //.
                //. to be cont. after sleep
            };
        };

        //Lets create all of our variables automagically with ES6 // maybe use var here later?? idk
        let {
            input1    : input1,
            input2    : input2,
            input3    : input3,
            input4    : input4,
            input5    : input5,
            input6    : input6,
            input7    : input7,
            input8    : input8,
            addButton : addButt,
            allInputs : addInputs,
            pollButton: pollButt,
            ranButton : ranButt,
            company1  : company1
            //.
            //.
            //... to be cont. after sleep

        } = addUIs();
    

    };
})(window, document, jQuery); //expose to global scope so that all vars created are accessible outside immediate invocation function

var fieldCount = 9;
addButt(); //adds the _ADD_BUTTON to global state
ranButt(); //adds the _RAND_BUTTON to global state
//SIDEffI/ Build a Poll with the Companies instead and share it with friends
//EffI.i/ First lets make a function that creates only the stuff we need to do this; It's sitting in global scope
_POLL_BUTTON.addEventListener('click', () => {  
        allInputs(); //grabs all input elements from DOM and stores them into companies let-var
        //companies var should be available to this functions scope so:
        if (companies) {
            companies.length > 8 ? : a  ; //More than 8 inputs means add new ones to pollerizer, Less than 8 inputs means you already have them in global scope for use
        }
    document.write("<INPUT ID='backButton' TYPE='button' VALUE='BACK' />"); //This shows up if you runSideI is called allowing User to go back to Poll-Maker
    //hide RAN button until BACK is clicked
});





_RAN_BUTTON.addEventListener('click', () => {  
    
        allInputs(); //grabs all input elements from DOM and stores them into companies let-var
        //companies var should be available to this functions scope so:
        if (companies) {
            companies.length > 8 ? : a  ; //More than 8 inputs means add new ones to pollerizer, Less than 8 inputs means you already have them in global scope for use
        }
    });
    document.write("<INPUT ID='backButton' TYPE='button' VALUE='BACK' />"); //This shows up if you runSideI is called allowing User to go back to Poll-Maker
    //hide POLL button until BACK is clicked

//var vote = [A, B, C, D];

///III, IMMEDIATE FUNCTION OUTRO - ---- EVERYTHING BELOW HAPPENS NEXT/ These functions use what is initialized above to global scope in I/
_ADD_BUTTON.addEventListener('click', () => {  
    allInputs();
    companies[companies.length].append(("<INPUT ID='companyInput'"+fieldCount.toString+"'TYPE='text' />"));
    fieldCount++;
    //document.write... blah blah blah.. add a new input-field - I'm tired
});



//Which Object-ive Do You Have? //so punny! omuhgursh!
// (singleParam) => {
//     let a = 1;
//     return [answer]
// };


//a)
// { 
//     GoWorkFor : AMAZON
// }
//b)
// {
//     GoWorkFor : FORD
// }
//c
// {
//     GoWorkFor : APPLE
// }
//d
// {
//     GoWorkFor : WALMARTLABS
// }
//e 
// {
//     GoWorkFor : IGT
// }

//////////////////////// ZEBRA ZONE const = NONE_SHALL_PASS;
//////  const = NONE_SHALL_PASS;
//////  (function() = { const = NONE_SHALL_PASS;
////    if (you had an opportunity to interview for a Front-End UI-UX Dev Position Using Angular 2 with the following companies) { Which would you prefer to work for ?? const = NONE_SHALL_PASS;
