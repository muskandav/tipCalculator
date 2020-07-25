function calculateTip(){
    var billAmt = document.getElementById("billamt").value;
  var service = document.getElementById("service").value;
    var noOfPeople = document.getElementById("people").value;
     if (billAmt === "" || service == 0) {
      alert("Please enter values");
      return;
    }
    if (noOfPeople === "" || noOfPeople <= 1) {
      noOfPeople = 1;
      document.getElementById("each").style.display = "none";
    } else {
      document.getElementById("each").style.display = "block";
    }
    
    var total=(billAmt * service)/noOfPeople;
    //round to two decimal places
    total=Math.round(total*100)/100;
    //always have two digits after decimal
    total=total.toFixed(2);
     document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
  }
  //Hide the tip amount on load
  document.getElementById("totalTip").style.display = "none";
  document.getElementById("each").style.display = "none";
  
  //click to call function
  document.getElementById("calculate").onclick = function() {
    calculateTip();
  
  };