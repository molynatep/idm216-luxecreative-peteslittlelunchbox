function getOption() {
    selectElement = document.querySelector('.time');
    output = selectElement.options[selectElement.selectedIndex].value;
    console.log(output);
    localStorage.removeItem("pickuptime");
    localStorage.setItem("pickuptime", output);
    document.getElementById('pickuptime').innerHTML = output;
}

localStorage.removeItem("moneystring");
localStorage.removeItem("carttext");
localStorage.removeItem("orderdetailstext");
document.getElementById('start').addEventListener('mouseup', function() {getOption()});