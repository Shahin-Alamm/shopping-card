
function getProductChange(product, isIncrease){
    const  productCount = getInputValue(product);
    let  productNewCount =  productCount;
    if(isIncrease == true){
        productNewCount =  productCount + 1;
    }
    if(isIncrease == false &&  productCount > 0 ){
        productNewCount =  productCount - 1;
    }
    document.getElementById(product + '-count').value = productNewCount
    productInput.value =  productNewCount
    let productTotal = 0;
    if(product == 'phone'){
        productTotal = productNewCount * 1219;
    }
    if(product == 'case'){
        productTotal = productNewCount * 59;
    }
    document.getElementById(product +'-total').innerText ="$" + productTotal;
    calculateTotal();
}
function calculateTotal(){
    const phoneCount =  getInputValue('phone')
    const caseCount = getInputValue('case')

    const totalPrice = phoneCount * 1219 + caseCount * 59;
    document.getElementById('total-price').innerText = '$' + totalPrice;

    const tax = Math.round ( totalPrice * .10)
    document.getElementById('tax-amount').innerText = '$' + tax;

    const grandTotal = totalPrice + tax;
    document.getElementById('grand-total').innerText = '$' + grandTotal;
}

function getInputValue(product){
    const productInput = document.getElementById(product +'-count');
    const productCount = parseInt(productInput.value);
    return productCount;
}



// function name aivabe call kor jabe 
// document.getElementById('case-increase').addEventListener('click', function(){
//     getProductChange(true)
// })

// document.getElementById('case-decrease').addEventListener('click', function(){
//     getProductChange(false)
// })

// Onclick function use kore 


//onclick="getPhoneChange(false)" agula buttone bosbe
// function getPhoneChange(isIncrease){
//     const phoneInput = document.getElementById("phone-count")
//     const phoneCount = parseInt(phoneInput.value);
//     let phoneNewCount = phoneCount
//     if(isIncrease == true){
//         phoneNewCount = phoneCount + 1;
//     }
//     if(isIncrease == false && phoneCount > 0){
//         phoneNewCount = phoneCount - 1;
//     }
//     phoneInput.value = phoneNewCount;
//     const phoneTotal = "$" + phoneNewCount * 1219;
//     document.getElementById('phone-total').innerText = phoneTotal;
// }

// //onclick="getPhoneChange(true)"ata button e use korte hobe 
// function getProductChange(isIncrease){
//     const caseInput = document.getElementById ( 'case-count')
//     const caseCount = parseInt(caseInput.value)
//     let caseNewCount = caseCount;
//     if(isIncrease == true){
//         caseNewCount = caseCount + 1;
//     }
//     if(isIncrease == false && caseCount > 0 ){
//         caseNewCount = caseCount - 1;
//     }
//     caseInput.value = caseNewCount
//     const caseTotal = "$" + caseNewCount * 59;
//     document.getElementById('case-total').innerText =caseTotal
// }




// Manual function 

// document.getElementById('case-increase').addEventListener('click', function(){
//     const caseInput = document.getElementById('case-count')
//     const caseCount = parseInt(caseInput.value)
//     const caseNewCount = caseCount + 1;
//     caseInput.value = caseNewCount;
//     const caseTotal = caseNewCount * 59;
//     document.getElementById('case-total').innerText = '$' + caseTotal;
// })

// document.getElementById('case-decrease').addEventListener('click', function(){
//     const caseInput = document.getElementById ( 'case-count')
//     const caseCount = parseInt(caseInput.value)
//     const caseNewCount = caseCount - 1;
//     caseInput.value = caseNewCount
//     const caseTotal = caseNewCount * 59;
//     document.getElementById('case-total').innerText =caseTotal
// })


// raf cheak
// function er moddhe ekadhik parametar neya
// function getFullName ( firstName , lastName){
//     console.log(arguments);
//  let fullName ='';
//  for(i=0; i<arguments.length; i++){
//     const namePart = arguments[i];
//     fullName = fullName + ' ' + namePart;
//  }
//     return fullName;
// }
// const name = getFullName('shahin', 'alam', ' programing ', 'bujhe na ' )
// console.log(name);