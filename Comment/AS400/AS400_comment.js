
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
    if(selectedapplicaion == 'TNFR'){
        document.getElementById('TNFR_application_name').innerHTML= "Have you created access on " +selectedapplicaion + " Application?";
    Assign_Server_name();
    document.getElementById('TNFR_Server_name').innerHTML= "Have you created access on corresponding AS/400 " + Server + " Server?";
    }else{
        document.getElementById('application_name').innerHTML= "Have you created access on " +selectedapplicaion + " Application?";
    Assign_Server_name();
    document.getElementById('Server_name').innerHTML= "Have you created access on corresponding AS/400 " + Server + " Server?";
    }
    enable_div();
    
}

function enable_div(){
    if ( (Req_Type == 'Provision' || Req_Type == 'Update' || Req_Type == 'Enable')  && (selectedapplicaion == 'VMAN' || selectedapplicaion == 'PKMO' || selectedapplicaion == 'PKMB' || selectedapplicaion == 'VECS' || selectedapplicaion == 'PNWJD' || selectedapplicaion == 'GRPK'  || selectedapplicaion == 'SPSW' || selectedapplicaion == 'ODVI' || selectedapplicaion == 'PKMA' || selectedapplicaion == 'PKMH' || selectedapplicaion == 'PKMD' || selectedapplicaion == 'TBS' || selectedapplicaion == 'PKME' || selectedapplicaion == 'APBS'  || selectedapplicaion == 'VNPA' || selectedapplicaion == 'VMEX' || selectedapplicaion == 'S21' || selectedapplicaion == 'PKMC')){
        document.getElementById('PKMS_Pro_Div').style.display = "Block";
        document.getElementById('PKMS_Dis_Div').style.display = "None";
        document.getElementById('TNFR_Pro_Div').style.display = "none";

    }
    else if ( (Req_Type == 'Provision' || Req_Type == 'Update' || Req_Type == 'Enable')  && (selectedapplicaion == 'TNFR')){
        document.getElementById('PKMS_Pro_Div').style.display = "None";
        document.getElementById('PKMS_Dis_Div').style.display = "None";
        document.getElementById('TNFR_Pro_Div').style.display = "Block";

    }
    else if(Req_Type == 'Disable' && selectedapplicaion == 'VMAN'){
        document.getElementById('PKMS_Dis_Div').style.display = "Block";
        document.getElementById('PKMS_Pro_Div').style.display = "None";
        document.getElementById('TNFR_Pro_Div').style.display = "none";
    }
    else if(Req_Type == 'Entitlement' && selectedapplicaion == 'AS400'){
        document.getElementById('PKMS_Dis_Div').style.display = "None";
        document.getElementById('PKMS_Pro_Div').style.display = "None";
        document.getElementById('TNFR_Pro_Div').style.display = "none";
        document.getElementById('Selection_error').innerHTML = "Note : Wipro-UAP does not handle the Entitlement request on Server level."
    }
    else{
        document.getElementById('PKMS_Pro_Div').style.display = "None";
        document.getElementById('PKMS_Dis_Div').style.display = "None";
        document.getElementById('TNFR_Dis_Div').style.display = "None";
    }
}

     function Gen_Comment(){
        var User_ID = document.getElementById('User_ID').value;
        var Model_ID = document.getElementById('Model_ID').value;
        
         document.getElementById('Comment').innerHTML = "User ID : "+User_ID+"Model ID :"+Model_ID;
     }


