
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyD04dFLMFkcfx4Jyfa_vkLJOwLWOo0pcZo",
    authDomain: "ntkdata.firebaseapp.com",
	databaseURL: "https://ntkdata-default-rtdb.firebaseio.com",
    projectId: "ntkdata",
    storageBucket: "ntkdata.appspot.com",
    messagingSenderId: "393786476939",
    appId: "1:393786476939:web:920643b9df61d1d726478e"
  };
  
firebase.initializeApp(config);
//create firebase database reference
var dbRef = firebase.database();
var compRef = dbRef.ref('compInfo');
var LeadsLogRef = dbRef.ref('LeadsLog');

//save contact
function AddComp(ipaddress,dateofaccess,projectname) {  
    if( ipaddress != ''){
      compRef.push({
        ipAddress: ipaddress,
        dateOfAccess: dateofaccess,
		projectName: projectname
      });
    } 
  };

function AddLeadsLog(sname,smobile,semail,projectname,timestamp) {  
    if(smobile != ''){
      LeadsLogRef.push({
        name: sname,
        mobile: smobile,
		email:semail,
		timeStamp:timestamp,
		projectName: projectname
      });
    } 
  };