	

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
	var again=true;
	while(again){

		while(sourceText.indexOf('\n')!=-1,)
	}
}