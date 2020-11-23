window.showPurchaseInfo = function() {
    // let purchaseDetails = document.querySelector('.purchaseProductDetails')
    let productModel = document.getElementById('productModel');
    let productColor = document.getElementById('productColor');
    let productDeliveryTime = document.getElementById('productDeliveryTime');
    let yourOrderCost = document.getElementById('yourOrderCost');
    let yourOrderShippingCost = document.getElementById('yourOrderShippingCost');
    let yourOrderTotalCost = document.getElementById('yourOrderTotalCost');

    productModel.innerHTML = personCar.productId.toUpperCase();
    productColor.innerHTML = personCar.color.toUpperCase();
    productDeliveryTime.innerHTML = 'Between ' + deliveryExcepted.innerHTML
    yourOrderCost.innerHTML = personCar.price.slice(0,-1);
    yourOrderShippingCost.innerHTML = personCar.shipping;
    yourOrderTotalCost.innerHTML = totalCost();

}
