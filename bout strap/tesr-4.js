let inpt =document.querySelector(".inpt-1")
let btns=document.querySelectorAll("#btn")
let h1=document.querySelector(".h1")
let h2=document.querySelector(".h2")
let inpt2=document.querySelector(".inpt2")
let cstm=document.querySelector(".custm")
let reset=document.querySelector(".reset")
let np="1"
let perDefault = '0.15'
np=inpt2.value+=

// input
document.addEventListener("input",function(p){

   if(p.target == inpt ) {
    calc()
    }

     if(p.target == inpt2) {
        np=inpt2.value
        calc()
     }else{
        np="1"
        perDefault="0.15"
        calc()
     }

    if(cstm.value!==""){
        perDefault=Number(cstm.value)/100
        calc()
    }else{
        perDefault="0.15"
        calc()
     }
    if(inpt.value==''){
        h1.textContent="0.00.$"
        h2.textContent="0.00.$"
    }

})

//click
document.addEventListener("click",function(e){
    for(let i=0;i<btns.length;i++){

        if(e.target===btns[i]){
            perDefault = btns[i].textContent.substring(0, btns[i].textContent.length-1) / 100
            calc()
            cstm.value=''
        }


       
    if(e.target===reset){
        h1.textContent="0.00.$"
        h2.textContent="0.00.$"
        inpt.value="0.00.$"
        cstm.value=""
        inpt2.value="1"
    }
}
})

//calc
function calc() {
    h1.textContent=Number(inpt.value)*Number(perDefault)/Number(np)
    h2.textContent=Number(inpt.value)*Number(perDefault)*Number(np)
}
