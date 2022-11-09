let myP = document.getElementById('mine')
urMom(1,2,3)
function urMom(Num1, Num2, Num3){
    let FinleNum = (Num1*Num2)/Num3
    
    return FinleNum
} 
myP.innerHTML = urMom(9,23,4)