const calcularPeso = () =>{
    let peso = Number(document.querySelector("#peso"))
    let altura = Number(document.querySelector("#altura"))
      let imc  =  peso /  ( altura * altura )
      let devolutivadeIMC = document.querySelector('#devolutivadeIMC')
      if (imc < 18.5) {
        devolutivadeIMC.innerHTML= "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        devolutivadeIMC.innerHTML = "Peso normal";
    } else if (imc >= 25 && imc < 29.9) { 
        devolutivadeIMC.innerHTML = "Sobrepeso";
    }
    


let res = document.querySelector('#resultado')
res.innerHTML= `resultado do IMC é: ${imc.toFixed(0)}` 



}



