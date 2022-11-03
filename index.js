const productChange=(product,isUp)=>{
        const productInput=document.getElementById(product + `-count`);
        const productNumber= parseInt(productInput.innerText)
        // const newProduct = productNumber - 1;
        let newProduct = productNumber;
        if(isUp==true){
            newProduct = productNumber + 1;
        }if(isUp==false && productNumber>0){
            newProduct = productNumber - 1;
        }
        productInput.innerText = newProduct;
        // const totalProduct = newProduct * 1219;
        let totalPrice = 0;
        if(product == `phone`){
            totalPrice = newProduct * 1219;
        }if(product ==`case`){
            totalPrice = newProduct * 59;
        }
        document.getElementById(product + `-total`).innerText = totalPrice;
        updatePrice()
}


const updatePrice =()=>{
    const phoneCount= convertToInt(`phone`)
    const caseCount= convertToInt(`case`)
    const total = phoneCount * 1219 + caseCount * 59;
    document.getElementById(`sub-total`).innerText = total;
    document.getElementById(`total`).innerText = total;
    const tax = Math.round(total * 0.1);
    document.getElementById(`tax`).innerText= tax;
}

const convertToInt=(product)=>{
    const phoneCount= document.getElementById(product+`-count`);
    const phoneTotal = parseInt(phoneCount.innerText)
    return phoneTotal;
}



// const increase=()=>{
//     document.getElementById(`phone-increase`).addEventListener(`click`,()=>{
//         // const productInput=document.getElementById(`phone-count`);
//         // const productNumber= parseInt(productInput.innerText)
//         // const newProduct = productNumber + 1;
//         // productInput.innerText = newProduct;
//         // const totalProduct = newProduct * 1219;
//         // document.getElementById(`phone-total`).innerText = totalProduct;
//         productChange(true)
//     })
// }

// increase()


// const decrease=()=>{
//     document.getElementById(`phone-decrease`).addEventListener(`click`,()=>{
//         // const productInput=document.getElementById(`phone-count`);
//         // const productNumber= parseInt(productInput.innerText)
//         // const newProduct = productNumber - 1;
//         // productInput.innerText = newProduct;
//         // const totalProduct = newProduct * 1219;
//         // document.getElementById(`phone-total`).innerText = totalProduct;
//         productChange(false)
//     })
// }

// decrease()

