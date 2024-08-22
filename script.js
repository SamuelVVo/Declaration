const yesBtn = document.querySelector('#yesBtn')
yesBtn.addEventListener('click', ()=>{
  alert('Bueno, creo que vos ya lo sabes pero pues estoy mas o menos cerca de entrar en una relación, aunque aun no estoy del todo seguro, pero si sé que desde la ultima vez q hablamos tengo ganas de algo, y creo q la mejor manera es ser completamente directo. Ese algo que quiero es besarte, sin necesidad de relación ni nada, solo me gustaría pq hace rato q tengo ganas jajaja y pues me gustaría que si al fin me decido a tener una relación pues fuera antes de entrar en ella y antes de que te vayas, no sé si te gustaría, si no, y pues nada, era eso')
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
