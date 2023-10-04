const list = document.querySelector('ul')


function showAllItens(productArray) {
    let myLi = ''
    productArray.forEach((product) => {
        myLi += `
        <li> <img src=${product.src}>
            <p>${product.name}</p>
            <p class="item-price">${product.price}</p>
        </li>`

    })

    list.innerHTML = myLi
}

function showDiscount() {
    const newPrices = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9,
    }))

    showAllItens(newPrices)
}

function showSum() {
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

    list.innerHTML = `   
    <li>
    <p>O valor total dos itens é R$ ${totalValue}</p>
    </li>`
}


function filterItens(){
    const filterJustVegan = menuOptions.filter((product) => product.vegan === false)

    showAllItens(filterJustVegan)
}