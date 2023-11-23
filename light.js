const switchBtn = document.querySelector('.switchBtn input')
console.log(switchBtn)

switchBtn.addEventListener('click', () => {
 let img = document.querySelector('#demo');
 
 if(img.src.match('bulbon.png')){
   img.src = 'bulboff.png'

 }  else {
   img.src = 'bulbon.png'

 }
})