const calcular = () =>{
    let nota1 = Number(document.querySelector("#nota1"))
    let nota2 = Number(document.querySelector("#nota2"))
      let media =  (nota1 + nota2) /2
      let res = document.querySelector('resultado')
      res.innerHTML = `Nota do Aluno: $(media)`
}

let calcularmedia = document.querySelector('#botaoEnviar')
calcularmedia.addEventListener('click', calcular )