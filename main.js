console.log("Hello World!")

let secondImg = document.querySelector('#second img');
console.log(secondImg)


let allImages = document.querySelectorAll('img');
for(let img of allImages.values()){
    console.log(img)
}
//console.log(allImages)

/*setTimeout(()=>{
    let container = document.querySelector('.container');
    container.innerHTML=`<h1 style="text-align: center"> NO MORE IMAGES</h1>`
},5000)*/

let counterNum =0;
 let counter = document.querySelector('.counter');
setInterval(() => {   
    counter.innerHTML=counterNum;
    counterNum++;
}, 1000);

let body =document.querySelector('body');
body.addEventListener('keypress',(evt)=>
{
    console.log(evt.key);
})
