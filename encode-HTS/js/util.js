	

$(function(){
	// var s=a=b="sss";
	// $("#index").html(s);
	// $("#processedText").val($("#sourceText").val());

});
var htmlToStr=function(){

	var processedText='';
	var sourceText=$("#sourceText").val();
	if(sourceText.trim()==''){
		$("#processedText").val('are you kidding?');
		return;
	}
    var postionState=0;//0 new line,and not meet character except blank,1 point at character except blank,2 point at blank after character
    for(var i=0;i<sourceText.length;i++){

    	if(postionState==0){
    		var isAdd=true;
    		if(sourceText[i]=='\n'){
	    		//delete this line
	    		if(processedText.indexOf('\n')==-1){
	    			processedText='';
	    		}
	    		processedText=deleteFromBackToTagString(processedText,'\n');
	    		isAdd=false;
	    	}else if(sourceText[i]!=' '){
	    		postionState=1;
	    		processedText+='\'';
	    	}
	    	if(isAdd){
	    		processedText+=sourceText[i];
	    	}

	    }else if(postionState==1){
	    	if(sourceText[i]=='\n'){
	    		processedText+='\'+';
	    		postionState=0;
	    	}else if(sourceText[i]==' '){
	    		postionState=2;
	    	}
	    	processedText+=sourceText[i];

	    }else if(postionState==2){
	    	if(sourceText[i]=='\n'){
		    		//delete blank
		    		processedText=deleteBehindBlank(processedText);
		    		processedText+='\'+';
		    		postionState=0;
		    	}else if(sourceText[i]!=' '){
		    		postionState=1;
		    	}
		    	processedText+=sourceText[i];
		    }
		}
		
		if(processedText[processedText.length-1]=='\n'){
			processedText=processedText.slice(0,processedText.length-3);
		}
		processedText=processedText+'\';';
		$("#processedText").val(processedText);

		$("#showDom").html(sourceText);
	}

	var deleteFromBackToTagString=function(sourceStr,tagChar){
		var resultStr=sourceStr;
		for(var i=sourceStr.length-1;i>0;i--){
			if(sourceStr[i]!=tagChar){
				resultStr=resultStr.slice(0,i);
			}
			else{
				return resultStr;
			}
		}
		return resultStr;
	}
	var deleteBehindBlank=function(sourceStr){
		var resultStr=sourceStr;
		for(var i=sourceStr.length-1;i>0;i--){
			if(sourceStr[i]==' '){
				resultStr=resultStr.slice(0,i);
			}
			else{
				return resultStr;
			}
		}
		return resultStr;
	}

	var strToHtml=function () {
	// body...
	var processedText='';
	var sourceText=$("#sourceText").val();
	if(sourceText.trim()==''){
		$("#processedText").val('are you kidding?');
		return;
	}
	var temp=sourceText.replace(/\'/,'');//delete first \'
	temp=temp.replace(/\s*\n/g,'');//delete all blank line
	temp=temp.replace(/\+\s*\'/g,'\n');//delete every line's first \'
	temp=temp.replace(/\s*\'\s*\+\s*\n/g,'\n');//delete every line's last \'+
	processedText=temp.replace(/\s*\'\s*;\s*$/,'');


	// sourceText+='\n';  //because i useing '\n' recognize line,so for last line add this
	// var newLineBegin=0;
	// while(sourceText.indexOf('\n',newLineBegin)!=-1){
	// 	var thisLine=sourceText.slice(newLineBegin,sourceText.indexOf('\n',newLineBegin));
	// 	newLineBegin=sourceText.indexOf('\n',newLineBegin)+1;

	// 	if(thisLine.trim()==''){//pass blank line
	// 		continue;
	// 	}
	// 	 thisLine=thisLine.replace(/\'/,'');//delete first "'"
	// 	 thisLine=thisLine.replace(/(\s*\'\s*;\s*$)|(\s*\'\s*\+\s*$)/,'');
	// 	 processedText+=thisLine+'\n';
	// 	}
	$("#processedText").val(processedText);

	$("#showDom").html(processedText);

}

var forTemp =function(){
	var processedText='';
	var sourceText=$("#sourceText").val();
	processedText=sourceText.replace(/this./g,'');
	$("#processedText").val(processedText);
}