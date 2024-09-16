function convert(){ //convert function executed when button is clicked
    let a=Number(document.getElementById("input").value) //get value in string and convert into number
    let inchvalue=a/2.54
    let result=document.getElementById("result")
    result.innerHTML=inchvalue.toFixed(2)+"inches" //convert value see & tofixed-2 value must see, "inches-after value inches will see"
}
