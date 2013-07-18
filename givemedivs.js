
var gimmeDivsCounter = 0;
function giveMeDivs(nameOfClass,nameOfID,appendID) {
var numbVal = gimmeDivsCounter +=1;
	function createDiv(nameOfClass,nameOfID, appendID){
	
		var div = document.createElement("div");
		div.className  = nameOfClass;   
		div.id = nameOfID + (numbVal)
	   	appendID.appendChild(div);
	};


createDiv( nameOfClass,nameOfID,appendID,numbVal );
	
};

 