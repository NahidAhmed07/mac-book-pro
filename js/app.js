
// update memoray total function 
function memoryUpdate(item1, item2, price) {
    document.getElementById("memory-" + item1).classList.add("btn-select");
    document.getElementById("memory-" + item2).classList.remove("btn-select");
    document.getElementById("memory-charge").innerText = price;
    updateTotal();
}
// update storage total function 
function storageUpdate(item1, item2, item3, price) {
    document.getElementById("storage-" + item1).classList.add("btn-select");
    document.getElementById("storage-"+item2).classList.remove('btn-select');
    document.getElementById("storage-" + item3).classList.remove('btn-select');
    document.getElementById("storage-charge").innerText = price;
    updateTotal();
}
// update delivery charge total function 
function deliveryUpdate(option1, option2, charge) {
    document.getElementById("delivery-" + option1).classList.add("btn-select");
    document.getElementById("delivery-" + option2).classList.remove("btn-select");
    document.getElementById("delivery-charge").innerText = charge;
    updateTotal();
}
// update Total function
function updateTotal() {
    const memory = document.getElementById("memory-charge").innerText;
    const stroge = document.getElementById("storage-charge").innerText;
    const delivery = document.getElementById("delivery-charge").innerText;
    const total = parseInt(memory) + parseInt(stroge) + parseInt(delivery) + 1299;
    document.getElementById("total").innerText = total;
    document.getElementById('final-total').innerText = total;
    return total;
}
// memory section addEventListener 
document.getElementById("memory-8gb").addEventListener('click', function () {
    memoryUpdate('8gb', '16gb', 0)
})
document.getElementById('memory-16gb').addEventListener('click', function () {
    memoryUpdate("16gb", "8gb", 180);
})
// stroage section addEventListener 
document.getElementById("storage-256gb").addEventListener('click', function () {
    storageUpdate("256gb", "512gb", "1tb", 0);
});
document.getElementById("storage-512gb").addEventListener('click', function () {
    storageUpdate("512gb", "256gb", "1tb", 100);
});
document.getElementById("storage-1tb").addEventListener('click', function () {
    storageUpdate("1tb", "512gb", "256gb", 180);
});


// delivery section addEventListener 
document.getElementById('delivery-option-1').addEventListener('click', function () {
    deliveryUpdate("option-1", "option-2", 0);
})
document.getElementById('delivery-option-2').addEventListener('click', function () {
    deliveryUpdate("option-2", "option-1", 20);
})

// pomo code section 
const pomoInput = document.getElementById("pomo-input");
const pomoBtn = document.getElementById("pomo-btn");
const pomoErr = document.getElementById("pomo-error");

pomoBtn.addEventListener("click", function () {
    const pomoInputValue = pomoInput.value;
    if (pomoInputValue.toLowerCase() == "stevekaku") {
        const discount =updateTotal() * ( 20 / 100);
        document.getElementById("final-total").innerText = updateTotal() - discount;
        pomoErr.style.display = "none";
    } else {
        document.getElementById('user-promo').innerText = pomoInputValue
        pomoErr.style.display = "block";
    }
    pomoInput.value = '';
});

pomoInput.addEventListener('keyup', function () {
    const pomoInputValue = pomoInput.value;
    console.log(pomoInputValue);
    if (pomoInputValue == '') {
        pomoBtn.setAttribute('disabled', true)
        pomoErr.style.display = 'none'
    }else {
        pomoBtn.removeAttribute('disabled', false)
    }
})


