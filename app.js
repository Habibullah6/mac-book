// memory event handler
document.getElementById('memory-btn-one').addEventListener('click', function () {
    updateProductPrice('memory', false);
    
})


document.getElementById('memory-btn-two').addEventListener('click', function(){
    updateProductPrice('memory', true);
    
})

// ssd event handler
document.getElementById('ssd-btn-one').addEventListener('click', function () {
    updateProductPrice('ssd', 'ssd-one')
})
document.getElementById('ssd-btn-two').addEventListener('click', function () {
    updateProductPrice('ssd', 'ssd-two')
})

document.getElementById('ssd-btn-three').addEventListener('click', function () {
    updateProductPrice('ssd', true)
})

// charge event handler
document.getElementById('charge-btn-one').addEventListener('click', function () {
    updateProductPrice('charge', false)
})

document.getElementById('charge-btn-two').addEventListener('click', function () {
    updateProductPrice('charge', 'charge-premium')
})

// coupon event handler

document.getElementById('apply-btn').addEventListener('click', function () {
    coupon();
    
})

// all function start here

function updateProductPrice(product, item){
    const cost = document.getElementById(product + '-price');
    if(item == false){
        cost.innerText = 0; 
    }

    else if(item == true){
        cost.innerText = 180;
    }

    else if(item == 'ssd-one'){
        cost.innerText = 0;
    }
    else if(item == 'ssd-two'){
        cost.innerText = 100;
    }
    
    else if(item == 'charge-premium'){
        cost.innerText = 20;
    }
    
    calculateTotal()
}

function getValue(product) {
    const price = document.getElementById(product+'-price');
    const priceNumber = parseInt(price.innerText);
    return priceNumber;

}

function calculateTotal() {
    const bestPrice = getValue('best');
    const memoryPrice = getValue('memory');
    const ssdPrice = getValue('ssd');
    const charge = getValue('charge');

    const allPrice = bestPrice + memoryPrice + ssdPrice + charge;
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = allPrice;
    
    const lastTotal = document.getElementById('last-total-price');
    lastTotal.innerText = allPrice;
}

function coupon() {
    const couponInput = document.getElementById('apply-input');
    const couponText = couponInput.value;
    if(couponText == 'stevekaku'){
        const lastTotal = document.getElementById('last-total-price');
        const lastTotalNumber = parseFloat(lastTotal.innerText);
        const discountNumber = lastTotalNumber * (20/100);
        lastTotal.innerText = lastTotalNumber - discountNumber;
    }
    else{
        alert('coupon code invalid!plz enter correct code');
    }
}