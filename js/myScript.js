
window.onload=function(){
  document.getElementById("page2").style.display='none';
    
	var frmvalidator = new Validator("form1");
	frmvalidator.addValidation("name","req","Please enter CR name");
	frmvalidator.addValidation("name","maxlen=20",
		"Max length for name is 20");

	frmvalidator.addValidation("owner","req");
	frmvalidator.addValidation("owner","maxlen=20");

}


function myFunction(val) {
  if(val=="CRprop"){
	  window.location.href = "List.html";
  }else if(val=="listFeat"){

	    var cells = document.getElementsByClassName("disappear");
		for (var i = 0; i < cells.length; i++) {
		cells[i].setAttribute("readonly", "readonly");
		cells[i].classList.add("hideborder");
    }
  document.getElementById("page1").style.display='none';
  document.getElementById("page2").style.display='block';
  
  

  }
  else if(val=="edit"){
	  var cells = document.getElementsByClassName("disappear");
		for (var i = 0; i < cells.length; i++) {
        cells[i].removeAttribute("readonly");
		cells[i].classList.remove("hideborder");
    }
  document.getElementById("page1").style.display='block';
  document.getElementById("page2").style.display='none';

  }
}
