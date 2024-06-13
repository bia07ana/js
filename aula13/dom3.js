// getElementById- elemento por id
let valor1 = window.document.getElementById('elemento1')
valor1.style.color = 'blue'
// .getElementsByClassName- elementos por class [0]
let valor2 = document.getElementsByClassName('elemento2')[0]
valor2.style.color = 'green'
//getElementsByTagName-elemento por nome da tag <li>
let valor3 = document.getElementsByTagName('li')[1]
valor3.innerText = "troque o valor"

let valor4 = window.document.querySelector('#p1')
valor4.innerHTML = 'aula DOM3'
let valor5 = window.document.querySelector('.p2')[0]
valor5.style.color = 'red'