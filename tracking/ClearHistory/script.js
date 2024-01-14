// file: script.js
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
var compRef = dbRef.ref('compInfo_OneFng');
var CustomersConsolidated=[];
var DefaulterCustomers=[];
var bConsolidatedCustReversed=false;
var totalcount=0;
//load older conatcts as well as any newly added one...
compRef.on("child_added", function(snap) {
  //console.log("added", snap.key, snap.val());
  var isalreadyesits=IsIPAlreadyExists(snap.val())
  if(isalreadyesits==false || CustomersConsolidated.length==0)
  {
	  CustomersConsolidated.push({ipAddress:snap.val().ipAddress,dateOfAccess:snap.val().dateOfAccess,projectName:snap.val().projectName,numberOfOccurrence:1,objectKey:snap.key});
  }
  $('#contacts').append(contactHtmlFromObject(snap.val()));
});

function IsIPAlreadyExists(compinfo)
{
	var indexOfIP=-1;
	for (const constomObj of CustomersConsolidated)
	{
		if(constomObj.ipAddress==compinfo.ipAddress)
		{
			constomObj.numberOfOccurrence=constomObj.numberOfOccurrence + 1;
			constomObj.dateOfAccess=constomObj.dateOfAccess + ', ' + compinfo.dateOfAccess
			indexOfIP=1;
			break;
		}
	}
	
	if(indexOfIP<=0 )
	{
		return false;
	}
	else
	{
		return true;
	}
}

function clearHistory()
{
	var iNumberOfdeletion=0;
	var totalCompInfos=totalcount;
	for (const constomObj of CustomersConsolidated)
	{
	  //if(iNumberOfdeletion+50>=totalCompInfos)		  
	 // {
	//	  alert(iNumberOfdeletion + ' records deleted');
	//	  break;
	 // }	  
	  compRef.child(constomObj.objectKey).remove();
      iNumberOfdeletion=iNumberOfdeletion+1;  
	}
}

function displayCustomerAnalytics()
{    
	$('#contactsConsolidated').empty();
	$('#totalVisitors').empty();
	if(bConsolidatedCustReversed==false)
	{
		CustomersConsolidated.reverse();
		bConsolidatedCustReversed=true;
	}
	totalcount=0;
  	for (const constomObj of CustomersConsolidated)
	{
       $('#contactsConsolidated').append(ConsolidatedAnalyticsHtmlFromObject(constomObj));
	   totalcount=totalcount+1;
	}
	$('#totalVisitors').append(totalcount);
}

function displayOnlyDefaulters()
{    
	$('#onlyDefaulters').empty();
	DefaulterCustomers=[];
  	for (const constomObj of CustomersConsolidated)
	{
	   if(constomObj.numberOfOccurrence>=3)
	   {
		   DefaulterCustomers.push({ipAddress:constomObj.ipAddress,dateOfAccess:constomObj.dateOfAccess,projectName:constomObj.projectName,numberOfOccurrence:constomObj.numberOfOccurrence});
	   }
	}
	if(bConsolidatedCustReversed==false)
	{
		DefaulterCustomers.reverse();
	}
	for (const constomObj of DefaulterCustomers)
	{
       $('#onlyDefaulters').append(ConsolidatedAnalyticsHtmlFromObject(constomObj));
	}
}

function ConsolidatedAnalyticsHtmlFromObject(constomObj){
  var html = '';
  html += '<li class="list-group-item contact">';
    if (constomObj.numberOfOccurrence==1)
	{
		html += '<div>';
	}
	else if (constomObj.numberOfOccurrence==2)
	{
		html += '<div style="background-color:green;">';
	}
	else
	{
		html += '<div style="background-color:red;">';
	}
    
      html += '<p class="lead">'+constomObj.ipAddress+'</p>';
      html += '<p>'+constomObj.dateOfAccess+'</p>';
      html += '<p>'+constomObj.projectName+'</p>';
	  html += '<p>Click Count= '+constomObj.numberOfOccurrence+'</p>';
    html += '</div>';
  html += '</li>';
  return html;
}

//prepare conatct object's HTML
function contactHtmlFromObject(compinfo){
  var html = '';
  html += '<li class="list-group-item contact">';
    html += '<div>';
      html += '<p class="lead">'+compinfo.ipAddress+'</p>';
      html += '<p>'+compinfo.dateOfAccess+'</p>';
      html += '<p>'+compinfo.projectName+'</p>';
    html += '</div>';
  html += '</li>';
  return html;
}
