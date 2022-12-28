let al=document.getElementsByTagName("li")
 function fun(c){
    for(let i=0;i<c.length;i++){
        c[i].style.listStyle="none"
        c[i].style.fontSize="21px"
        c[i].style.color="sienna"
        c[i].style.fontWeight="600"
   }

}
 fun(al)
let logo=document.querySelector(".logo")
logo.style.width="120px"

let nav=document.querySelector(".nav")

nav.style.display="flex"
nav.style.justifyContent="space-between"
nav.style.paddingLeft="40px"
nav.style.paddingRight="40px"
nav.style.alignItems="center"
nav.style.backgroundColor="white"
nav.style.boxShadow="4px 5px 4px gray"

let ul=document.querySelector(".ul")
ul.style.display="flex"
ul.style.gap="50px"
ul.style.alignItems="center"

let is=document.querySelector(".is")
is.style.color="blue"

let btn=document.querySelector(".btn")
btn.style.backgroundColor="saddlebrown"
btn.style.color="white"
btn.style.padding="5px 10px"
btn.style.borderRadius="5px"

document.body.style.margin = "0px"
document.body.style.padding="0px"
