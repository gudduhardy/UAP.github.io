//this is the section of comment for the PKMS applicaiton.

//Provision VMAN

//note -------------------- 
//APP_NAME = Selected applicatoin name
//USER_ID = Given User Id
//Model_ID = Given Model ID
//all the three info will get replaced at the time of comment genration. 
//all the changable info should be in the uppercase 



//Provision VMAN
var CPVMAN = "APP_NAME access has been granted as per model ID : MODEL_ID to the User ID : USER_ID";












//don't edit anyting from here.

var Req_Type="";
var selectedapplicaion ="";


var Server="";


function Assign_Server_name(){
    if(selectedapplicaion == 'VMAN'){
        Server = "IT4M602S";
    }else if(selectedapplicaion == 'PKMB'){
        Server = "AS400ITA";
    }else if(selectedapplicaion == 'SPSW'){
        Server = "AS400ITZ";
    }else if(selectedapplicaion == ''){
        Server = "AS400ITZ";
    }else{
        Server = "<u> server name not updated </u>";
    }
}


function Selectedrequesttype(){
    Req_Type = document.getElementById('Request_type').value;
    document.getElementById('Selected_request_and_application').innerHTML = "Selected Request type and application : "+ Req_Type+ " " + selectedapplicaion;
    enable_div();
}


function selectedapplicationname(){
    selectedapplicaion = document.getElementById('Application_name').value;
    document.getElementById('Selected_request_and_application').innerHTML = "Selected Request type and application : "+ Req_Type + " " + selectedapplicaion;
    document.getElementById('application_name').innerHTML= "Have you created access on " +selectedapplicaion + " Application?";
    Assign_Server_name();
    document.getElementById('Server_name').innerHTML= "Have you created access on corresponding AS/400 " + Server + " Server?";
    enable_div();
    
}

function enable_div(){
    if ( (Req_Type == 'Provision' || Req_Type == 'Update' || Req_Type == 'Enable')  && (selectedapplicaion == 'VMAN' || selectedapplicaion == 'PKMO' || selectedapplicaion == 'PKMB' || selectedapplicaion == 'VECS' || selectedapplicaion == 'PNWJD' || selectedapplicaion == 'GRPK'  || selectedapplicaion == 'SPSW' || selectedapplicaion == 'ODVI' || selectedapplicaion == 'PKMA' || selectedapplicaion == 'PKMH' || selectedapplicaion == 'PKMD' || selectedapplicaion == 'TBS' || selectedapplicaion == 'PKME' || selectedapplicaion == 'APBS'  || selectedapplicaion == 'VNPA' || selectedapplicaion == 'VMEX' || selectedapplicaion == 'S21' || selectedapplicaion == 'PKMC')){
        document.getElementById('PKMS_Pro_Div').style.display = "Block";
        document.getElementById('PKMS_Dis_Div').style.display = "None";

    }
    else if(Req_Type == 'Disable' && selectedapplicaion == 'VMAN'){
        document.getElementById('PKMS_Dis_Div').style.display = "Block";
        document.getElementById('PKMS_Pro_Div').style.display = "None";
    }
    else{
        document.getElementById('PKMS_Pro_Div').style.display = "None";
        document.getElementById('PKMS_Dis_Div').style.display = "None";
    }
}


var App_access = "";

var Server_access = "";

function RadioButton(){
    var app = document.getElementsByName('App_access'); 
              
            for(i = 0; i < app.length; i++) { 
                if(app[i].checked) 
                App_access = app[i].value; 
            } 
            var ser = document.getElementsByName('Server_access');
              
            for(i = 0; i < ser.length; i++) { 
                if(ser[i].checked) 
                Server_access = ser[i].value; 
            }
        } 


     function Gen_Comment(){
        var User_ID = document.getElementById('User_ID').value.toUpperCase();
        var Model_ID = document.getElementById('Model_ID').value.toUpperCase();

        RadioButton();

        if(User_ID == "" || Model_ID == "" || App_access =="" || Server_access == ""){
            alert("User ID, Model ID and radio button field should not be blank and unselected!");
        }else{
            if(App_access == "exists"){
                alert("Don't close!!, Need to keep RFI.");
                document.getElementById('Comment').innerHTML = "User is already having the requested "+selectedapplicaion+" access attached screenshot for your reference. Please confirm if we can close the request or the access for the user needs to recreated as per the : "+Model_ID+".";
            }else{
                if(Server_access == "exists"){
                    var FinalCommetn = CPVMAN.replace("USER_ID",User_ID);
                    FinalCommetn = FinalCommetn.replace("MODEL_ID",Model_ID);
                    FinalCommetn = FinalCommetn.replace("APP_NAME",selectedapplicaion)
            
                    document.getElementById('Comment').innerHTML = FinalCommetn+" and corresponding AS/400 "+Server+ " Server access already exists.";
                }else if(Server_access == "created_AS400"){
                    var FinalCommetn = CPVMAN.replace("USER_ID",User_ID);
                    FinalCommetn = FinalCommetn.replace("MODEL_ID",Model_ID);
                    FinalCommetn = FinalCommetn.replace("APP_NAME",selectedapplicaion)
            
        
                    document.getElementById('Comment').innerHTML = FinalCommetn+" and corresponding AS/400 "+Server+ " Server access has been created as per AS/400 Request.";
                }else if(Server_access == "Created"){
                    var FinalCommetn = CPVMAN.replace("USER_ID",User_ID);
                    FinalCommetn = FinalCommetn.replace("MODEL_ID",Model_ID);
                    FinalCommetn = FinalCommetn.replace("APP_NAME",selectedapplicaion)
            
        
                    document.getElementById('Comment').innerHTML = FinalCommetn+" along with corresponding AS/400 "+Server+ " Server.";
                }
            }
        }
        
        
     }

function Copytext(){
    var selecttext = document.getElementById('Comment');
    selecttext.setSelectionRange(0, selecttext.value.length);
}
