function fdconvert(){
    let a=Number(document.getElementById("input").value)
    let rate=0
    //using else if 
    //<3 months=5.8,3-6months=6.5,7-9months-7,>10months-7
    if(a<3)
        rate=5.8
    else if(a>=3 && a<=6)
        rate=6.5
    else if(a=>7 && a<=9)
        rate=6.8
    else
        rate=7
    let result=document.getElementById('result')
    result.innerHTML=`Your interest rate is ${rate}%`
}