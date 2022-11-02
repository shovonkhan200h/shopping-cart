const changeCount =(product,ifChange)=>{
        const countInput= document.getElementById(product + `-count`);
        const countNumber= parseInt(countInput.innerText);
        // const newCount = countNumber + 1;
        let newCount = countNumber;
        if(ifChange == true){
            newCount = countNumber + 1;
        } else if(ifChange == false && newCount>0){
            newCount = countNumber - 1;
        }
        countInput.innerText= newCount;
        // const total = newCount *59
        let total = 0;
        if(product ==`phone`){
            total = newCount * 1219
        }
        else if(product == `case`){
            total = newCount * 59;
        }
        document.getElementById(product + `-total`).innerText= total;
        updateValue()
};

const updateValue=()=>{
    const phoneInput=document.getElementById(`phone-count`);
    const phoneCount= parseInt(phoneInput.innerText)

    const caseInput=document.getElementById(`case-count`);
    const caseCount= parseInt(caseInput.innerText)

    const totalPrice = phoneCount * 1219  + caseCount * 59;
    document.getElementById(`subTotal`).innerText= totalPrice;
    document.getElementById(`total`).innerText= totalPrice;

}





// const add =()=>{
//     document.getElementById(`plus-button`).addEventListener(`click`,()=>{
//         // const countInput= document.getElementById(`phone-count`);
//         // const countNumber= parseInt(countInput.innerText);
//         // const newCount = countNumber + 1;
//         // document.getElementById(`phone-count`).innerHTML = newCount;
//         changeCount(true);
//     })
// }

// add()

// const minus =()=>{
//     document.getElementById(`minus-button`).addEventListener(`click`,()=>{
//         // const countInput= document.getElementById(`phone-count`);
//         // const countNumber= parseInt(countInput.innerText);
//         // const newCount = countNumber - 1;
//         // document.getElementById(`phone-count`).innerHTML = newCount;
//         changeCount(false)
//     })
// }

// minus()
