let count=0;
let subjects = new Array();

function updateSub(str){
	subjects[count] = str;
	count++;
}


/*
function updateFac(stk){
	var f = document.getElementById(stk).selectedIndex;
	document.getElementById(stk).options[f].disabled=true;

} 

var list_emails = { 
	         Alekha_Kumar_Mishra : 'billionaresourabh@gmail.com',
			 Chandra_Shekhar_Azad : 'csazad.ca@nitjsr.ac.in',
			 Dilip_Kumar_Shaw : 'dkshaw.ca@nitjsr.ac.in',
			 Danish_Ali_Khan : 'dakhan.ca@nitjsr.ac.in',
			 Budhdev_Pradhan : 'bpradhan.ca@nitjsr.ac.in',
			 Mudassir_Rafi : 'mudassirrafi.ca@nitjsr.ac.in',
			 D_K_Yadav : 'dkyadav.ca@nitjsr.ac.in',
			 Ashok_Kumar_Mehta : 'akmehta@nitjsr.ac.in'
              };

 */

 function callme(){
 	
		var index = document.getElementById(subjects[0]).selectedIndex;
        document.getElementById(subjects[0]).options[index].disabled=true;
        var ddlViewBy = document.getElementById(subjects[0]);
        var value = ddlViewBy.options[index].id;
       
        
	  for(let i=1;i<subjects.length;i++)
	   {
		s = subjects[i];
		document.getElementById(s).disabled=true;
		
	   }
 }

 
 
function saveData(){
	
	//let faculty_member = subjects[0];
   

	/*for(x in list_emails){
		if(x === faculty_member)
			faculty_email = list_emails[x];

	*/
	setTimeout("callme()", 5000);
    
	
	//document.getElementById("r1").checked=false;	
}
