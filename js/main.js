const cart = document.getElementById('cart');


function selectSeat(event){
    const seatNumber = event.innerText;

    addToCart(seatNumber)

    // calculate total price
    const totalPrice = cart.childElementCount * 550;
    setInnerText('totalPrice', totalPrice)

    // set button background color
    event.classList.add('bg-green-500')
}


function addToCart(seatNumber){
    const cartItem = document.createElement('tr')
    cartItem.innerHTML = `<td>${seatNumber}</td>
    <td>Economoy</td>
    <td>BDT 550</td>`

    cart.appendChild(cartItem)
}


function getDiscount () {
    const input = document.getElementById('coupon-input').value;
    const totalPrice = parseFloat(getInnerText('discountPrice')).toFixed(2)
    
    if(input === 'NEW15'){
        const discount = totalPrice * (15 / 100)
        setInnerText('discountPrice', discount)
    }
    else if(input === 'Couple20'){
        const discount =  totalPrice * (20 / 100)
        setInnerText('discountPrice', discount)
    }
    else{
        alert('Invalid coupon code. Please enter valid coupon.')
    }
}



function getInnerText (elementId) {
    return document.getElementById('totalPrice').innerText;
}

function setInnerText (elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}

