function valueconvert(){
    let a=Number(document.getElementById("input").value)
    let fahrenheight=(a*9/5)+32
    let finalresult=document.getElementById("result")
    finalresult.innerHTML=fahrenheight.toFixed(2)+" F"
}