const price = document.querySelector('#price')
const people = document.querySelector('#people')
const tip = document.querySelector('#tip')
const countBtn = document.querySelector('.count')
const pError = document.querySelector('.error')
const pCost = document.querySelector('.cost-info')
const spanCost = document.querySelector('.cost')

const showBill = () => {
    if(price.value == '' || people.value == '' || tip.value == 0) {
        pError.textContent = 'Uzupełnij wszystkie pola!'
        pCost.style.display = 'none'
    } else {
        pError.textContent = '';
        countBill()
    }
}

const countBill = () => {
    const newPrice = parseFloat(price.value)
    const newPeople = parseInt(people.value)
    const newTip = parseFloat(tip.value)

    const sum = (newPrice + (newPrice * newTip)) / newPeople;
    console.log(sum);

    pCost.style.display = 'block'
    spanCost.textContent = sum.toFixed(2)
}

countBtn.addEventListener('click', showBill)