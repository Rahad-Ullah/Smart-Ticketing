const cart = document.getElementById('cart');


function selectSeat(event){
    const seatNumber = event.innerText;

    addToCart(seatNumber)


}


function addToCart(seatNumber){
    const cartItem = document.createElement('tr')
    cartItem.innerHTML = `<td>${seatNumber}</td>
    <td>Economoy</td>
    <td>BDT 550</td>`

    cart.appendChild(cartItem)
}


