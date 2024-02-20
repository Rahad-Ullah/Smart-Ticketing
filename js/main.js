const cart = document.getElementById('cart');


function selectSeat(event){
    const seatNumber = event.innerText;

    addToCart(seatNumber)

    const totalPrice = cart.childElementCount * 550;

    setInnerText('totalPrice', totalPrice)
}


function addToCart(seatNumber){
    const cartItem = document.createElement('tr')
    cartItem.innerHTML = `<td>${seatNumber}</td>
    <td>Economoy</td>
    <td>BDT 550</td>`

    cart.appendChild(cartItem)
}


function setInnerText (elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}

