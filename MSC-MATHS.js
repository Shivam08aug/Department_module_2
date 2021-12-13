let count=0;
let subjects = new Array();

function updateSub(str){
	subjects[count] = str;
	count++;
}

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
	
	
	setTimeout("callme()", 3000);
    
}