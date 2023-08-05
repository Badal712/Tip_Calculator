const btnCal = document.getElementById("calculate");
var billA = document.getElementById("bill");
var tipP = document.getElementById("tip");
var totalSpan = document.getElementById("total");

function calculateTotal(){
    var billAvalue, tipPvalue, totalValue;
    billAvalue = billA.value;
    tipPvalue = tipP.value;
    totalValue = billAvalue*(1+tipPvalue/100);
    totalSpan.innerText = totalValue.toFixed(2);
}

btnCal.addEventListener("click",calculateTotal);