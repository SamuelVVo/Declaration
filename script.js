const yesBtn = document.querySelector('#yesBtn')
yesBtn.addEventListener('click', ()=>{
  alert('Sabía que dirías que si, feliz primer dia de novios :3 jsjsjs')
})

const noBtn = document.querySelector('#noBtn')
noBtn.addEventListener('mouseover', ()=>{
  const randomX = Math.random()*100
  const randomY = Math.random()*100
  noBtn.style.position = 'absolute'
  noBtn.style.top = randomY+'%'
  noBtn.style.left = randomX+'%'
  noBtn.style.transform = `translate(-${randomX}%,
  -${randomY}%)`
})
