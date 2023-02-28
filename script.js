const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnReset = document.querySelector("#btnReset")
const openCookie = document.querySelector("#imagem1")

openCookie.addEventListener("click", raffleMessage)
btnReset.addEventListener("click", raffleMessage)
document.addEventListener('keydown', function(e) {
  if(e.key == 'Enter' && screen2.classList.contains('hide')){
      raffleMessage()
  } else if(e.key == 'Enter' && screen1.classList.contains('hide')){
      raffleMessage()
      }
  }
)

function raffleMessage() {
  toggleScreen()
  let randomNumber = Math.round(Math.random() * 5)

  switch(randomNumber) {
    case 0: screen2.querySelector("p").innerText = "É nos momentos de decisão que o seu destino é traçado."
    break
    case 1: screen2.querySelector("p").innerText = "Se não pode, você deve, e, se deve, você pode."
    break
    case 2: screen2.querySelector("p").innerText = "Saiba que são suas decisões, e não suas condições, que determinam seu destino."
    break
    case 3: screen2.querySelector("p").innerText = "Assim que você verdadeiramente se empenhar para que aconteça alguma coisa, o 'como' vai aflorar por si mesmo."
    break
    case 4: screen2.querySelector("p").innerText = "Não somos impulsionados pela realidade, mas sim por nossa percepção da realidade."
    break
    case 5: screen2.querySelector("p").innerText = "A unica segurança verdadeira na vida provém de saber que a cada dia você melhora de alguma maneira."

    default:
      break
    }
}
  
function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}