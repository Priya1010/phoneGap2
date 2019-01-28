
window.onload=function(){
  document.getElementById("page2").style.display='none';
  
}


function myFunction(val) {
  if(val=="CRprop"){
    document.getElementById("form").action = "demo.php";
  }else if(val=="listFeat"){
	  var cells = document.getElementsByClassName("disappear"); 
		for (var i = 0; i < cells.length; i++) { 
        cells[i].disabled = true;
		cells[i].classList.add("hideborder");
    }
  document.getElementById("page1").style.display='none';
  document.getElementById("page2").style.display='block';
  return false;
	 
  }
  else if(val=="edit"){
	  var cells = document.getElementsByClassName("disappear"); 
		for (var i = 0; i < cells.length; i++) { 
        cells[i].disabled = false;
		cells[i].classList.remove("hideborder");
    }
  document.getElementById("page1").style.display='block';
  document.getElementById("page2").style.display='none';
  return false;
	  
  }
}

