// let total= 0;

// let promptvar= prompt("give a number")
 
// if (Number(promptvar) >20 & Number(promptvar) < 25 ){
//     console.log ("success")
//     total++
//     console.log(total)
// }
// else{
//     console.log("fuls")
//     total--
//     console.log(total)
// }
// if( total >= 0){
//     console.log("l7amdoulillah")
//     console.log(total)
// }
// else{
//     console.log("la7awle")
//     console.log(total)
// }
// let med= prompt("give a nuber")
//  if (Number(med) >=0 ){
//     console.log("yup")
//  }
// else if (Number(med) <=-5){
//     console.log("naah")
//  } 

// let age = prompt("give a number");
// let yup ;
// if (age >= 18){
//     yup ="drink coffe"
// }
// else{
//    yup ="drink water"
// }
// console.log(yup)


// // let age = prompt (" give your age ");
// // let user
// //  if(Number(age) >=18){
// //     user = prompt("give your name");
// //     if (user !=='') {   
// //         console.log(`${user} is ${age} so the has the risht to have adriving license`)
// //     }
//  }
 
//  let name=document.getElementById("name");
//  let pass=document.getElementById("pass");

//  if(name !==''){
//     console.log(`${name}coukran`)
//  }
//  if(pass <10000000){
//     console.log("a7sent")
//  }


// let user =prompt("give your name")
// let amar="amar";
// let pass

// if(user === amar){
//    pass=prompt(" give your pass")
// }
// else{
//    console.log(" you nat amar")
// }


// let user =prompt("give your name");
// let isCoder =prompt("are you no coding ");
// let yes ="yes";
// let no ="no";
// let A ="A";
// let B ="B";
// let C ="C";
// let hd ="hd";
// let res ="res";
// let js ="js";
// let h1
// if( isCoder === yes){
//    let level = prompt("A or B or C")
//    if( level === A){
//        h1 =prompt(" wath is h1")
//       if(h1===hd){
//          console.log(` bravo ${user} your level is ${A}`)
//       }
//       else{
//          console.log("yele7mar")
//       }
//       }
//       if(level===B){
//          h1 =prompt("wath is medea")
//          if(h1===res){
//             console.log(` bravo ${user} your level is ${B} `)
//          }
//          else{
//             console.log("yele7mar")
//          }
//       }
//       if(level===C){
//          h1=prompt(" what is js")
//          if(h1===js){
//             console.log(` bravo ${user} your level is ${C}`)
//          }
//          else{
//             console.log("yele7mar")
//          }
//       }
//    }
//    else{
//       alert("sori")
//    }

// let name=prompt("give your name")
// for(i=0;i<=4;i++){
//    console.log(`helo ${name}`)
// }


// let mail ="medlemin@gmail.com";
// let pass = 12345678;

// let nameU = prompt("your name")
// let cod = Number(prompt("your pass"))

// function gmail(m, p){
//    if(m===mail && p===pass){
//       console.log(` ${m} is corecte`)
//    }
//    else{
//       console.log(`${m} is not corect`)
//    }

// }
// gmail(nameU,cod)


// let s ="sidi";
// let p =123456;

// let user=prompt("give your name")
// let cod=Number(prompt("your password"))

// function mail(a,b){
//    if(a===s && b===p){
//       console.log(`good job ${a}`)
//    }
// }
// mail(user,cod)


// let med=Number(prompt("your password"))
// let sd
// let amar=''
// function fun (c,a){
//     if(med!==''){
//          a=Number (prompt("giv number"))
//     }
//     else{
//         alert ('eror')
//     }
//     return c+a
// }
// alert(fun(med,sd))

// let sum =0
// let a=[2,4,2,4,6]
// function f(arr){
//     for(let i=0;i<arr.length;i++){
//         sum+=arr[i]
//     }
//     return sum
// }

// alert(f(a))

// let med='123'
// let b=0
// function fun (c){
//     for(let i=0;i<c.length;i++){
//         b+=Number(c[i])
//     }
//     return b
// }
// alert(fun(med))

// let a =['256']
// let str = ""
// let b=0
// function fun(c){
//     for(let i=0;i<c.length;i++){
//        str = c[i]
//        for(let j = 0; j<str.length; j++){

//            b+=Number(str[i])
//        }
//     }
//     return b
// }
// alert(fun(a))



// let a=['136']
// let st=''
// let sum=1
//  function fun (arr){
//     for(let i=0;i<arr.length;i++){
//         st+=arr[i]
//         for(let j=0;j<st.length;j++){
//             sum*=Number(st[j])
//         }
//     }
//     return sum
//  }
//  alert(fun(a))





// let adnan=[66,12,15,19,10]
// let A
// function fun(c){
//     for(let i=0;i<c.length-1;i++){
//         if(c[i]>=c[i+1]){
//             A=c[i]
//             c[i]=c[i+1]
//             c[i+1]= A
            
//             }
//             else{
//                 A=c[i+1]
//             }
//             }
//             return A

// }
// alert(fun(adnan))


// let arr =[15,22,45,16,30]
// let A
// let y 

// function fun(c){
//     for(let i=0;i<c.length-1;i++){
//         if(c[i]<c[i+1]){
//             A=c[i]
//             c[i]=c[i+1]
//             c[i+1]=A
//         }
//         else{
//             A=c[i+1]
//         }
//         if(c[i]>=c[i+1]){
//               y=c[i]
//               c[i]=c[i+1]
//               c[i+1]= y
                        
//               }
//          else{
//                   y=c[i+1]
//                   }
        
//     }
//     return A-y
// }
// alert(fun(arr))


// let inputV =[1,2,3]
// let newInput=5

// function pushAlgo(arr){
//     // for(let i = 0; i<arr.length; i++){
//     //     // arr +=newInput
//     // }

//     return arr

// }

// alert(pushAlgo(inputV))

// function fun(inputV) {
//     for(let i=0;i<inputV.length;i++){
//         inputV +=B
//     }
//     return p
// }
// alert(fun(arre))



// for(let i=0; i<3;i++){
//     console.log('i',i)
//     for(let j=0; j<3;j++){
//         console.log('j',j)
//     }
// }

// let com=[22,15,14,55,16]
// let A

// function fun (c){
//     for(let i=0;i<c.length;i++){
//         if(c[i]>c[i+1]){
//             A=c[i]
//         }
//     }
//     return A
// }
// alert(fun(com))


// let cars =['BMW', 'J class', 'ford']
// let models=[20,21,22]
// let st=''

// function fun(c,A){
//     for(let i=0;i<c.length;i++){
//         console.log(`${c[i]} `)
//         for(let x=0;x<A.length;x++){
//             console.log(`${A[x]}`)
//         }
//         console.log('________')
//     }
   
// }
// console.log(fun(cars,models))

// let std=['ahmed','sidi','brahim']
//  std.push(prompt("giv your name"))

//  console.log(std)


// let arre=[25,44,66,77,23]
// let max
// let max2
// function med(sd){
//     for(let i=0;i<sd.length-1;i++){
//         if(sd[i]>sd[i+1]){
//             max=sd[i]
//             sd[i]=sd[i+1]
//             sd[i+1]=max
//         }
//         else{
//             max=sd[i+1]
//         }
//     }
//     sd[sd.indexOf(max)]=0
//     for(let i=0;i<sd.length-1;i++){
//         if(sd[i]>sd[i+1]){
//             max2=sd[i]
//             sd[i]=sd[i+1]
//             sd[i+1]=max2
//         }
//         else{
//             max2=sd[i+1]
//         }
//     }
//     return [max,max2]
// }
  
// alert(med(arre))


// let ar=['a',22,55,'med']

// function fn(d){
//     let ay =[]
//     for(let i=d.length;i>=0;i--){
//         ay.push(d[i])
//     }
//     return ay
// }
// alert(fn(ar))


// let don=[5,2,3,1,4]

// function fon(s){
//     let res
//     for(let i=1;i<s.length;i++){
//         for(let x=0;x<i;x++){
//             if(s[x]>s[i]){
//                 res=s[i]
//                 s[i]=s[x]
//                 s[x]=res
//             }
            
//         }
//     }
//     return s
// }
// alert(fon(don))


// let ronaldo=[4,9,6,5,3,1,2,,8,7]
// function fon(s){
//     let res
//     for(let i=1;i<s.length;i++){
//         for(let x=0;x<i;x++){
//             if(s[x]>s[i]){
//                 res=s[i]
//                 s[i]=s[x]
//                 s[x]=res
//             }
//         }
//     }
//     return s
// }
// alert(fon(ronaldo))


// let C
// // let B=['amar', 'med', 'ali' ,'ali','sidi']
// C= B.shift()
// // alert(C.findIndex('a'))
// // console.log(B.slice(0,2))
// // B.splice(1,2,'omema','hena')
// console.log(C)
//  console.log(B)                                                                                                                                                   


let rr=[2,2,5,2]
// let init =0
// let sum=rr.reduce(
// //  function(a,b) {
// //     return a+b
// //  }, init
// (a,b)=>a+b,
// init
// )
// alert(sum)

// let med=rr.map(
//     function(C){
//         return C *2
//     }
// )

// alert(med)


// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// let reselt=words.filter(
//     function(i){
//         return i.length>=6
//     }
// )
// alert(reselt)

let user=prompt("give your name")
let milad
let tarik
function fon(A,B,C){
    if(A!==''){
      B= Number(prompt('dir 5lagtk'))
        if(B!==''){
           C= Number(prompt('tari5 lyom'))
           if(C!==''){
            alert(`${A} 3andak ${C-B} sene`)
           }
        }
    }
}
alert(fon(user))


// function fun(A){
//     let name="med lemin hb"
//     let code =12345678
//     if(A===name){
//         let pass=Number(prompt("give your pass"))
//         if(pass===code){
//             alert(`good jup  ${user}`)
//         }
//         else{
//             alert(`code it's in corct`)
//         }
//     }
//     else{
//         alert(`${user} get your corect name`)
//     }
// }

// alert(fun(user))
