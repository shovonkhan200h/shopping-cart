const add=()=>{
        document.getElementById(`plusBtn`).addEventListener(`click`,()=>{
        const valueNumber =setSpan(`count`)
        const result= document.getElementById(`count`).innerText = valueNumber + 1;
        updatePrice(`price`,result);
    })
    
}
add()

const miuns=()=>{
        let minusButton= document.getElementById(`minusBtn`);
        minusButton.addEventListener(`click`,()=>{
        const valueNumber =setSpan(`count`)
        const result= document.getElementById(`count`).innerText = valueNumber - 1;
        updatePrice(`price`,result);
        })

}
miuns()


const updatePrice = (id,result)=>{
    const price= document.getElementById(id).innerText;
    let priceNumber= +price;
    priceNumber=1219;
    const total= result * priceNumber;
    document.getElementById(id).innerText= total;
}

const setSpan = (id)=>{
    const value= document.getElementById(id).innerText;
    const valueNumber= +value;
    return valueNumber; 
};


