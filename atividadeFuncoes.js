// function calcularIMC(peso, altura){
//   const imc = peso / (altura * altura)

//   if (imc < 18.5){
//     mensagem = "Abaixo do peso."
//   }else if (imc >= 25 && imc < 24.9){
//     mensagem = "peso normal"
//   }else {
//     mensagem = "acima do peso"
//   }
// return { imc: imc.toFixed(2),mensagem};
// }


// calcularIMC

// const peso = 70 ; // kg

// const altura = 1.75; //metros

// const resultadoIMC = 
// calcularIMC(peso, altura)

// console.log(IMC: $ {resultadoIMC.imc},
//     Classificacao: $ {resultadoIMC.mensagem})


 // Calcula o IMC
 const imc = peso / (altura * altura);

 
 let classificacao;
 if (imc < 18.5) {
     classificacao = "Abaixo do peso";
 } else if (imc >= 18.5 && imc < 24.9) {
     classificacao = "Peso normal";
 } else if (imc >= 25 && imc < 29.9) {
     classificacao = "Sobrepeso";
 } else {
     classificacao = "Obesidade";
 }

 
 return { imc: imc.toFixed(2), classificacao };
const peso = 70; 
const altura = 1.75;  
const resultadoIMC = calcularIMC(peso, altura);
console.log(IMC: ${resultadoIMC.imc}, Classificação: ${resultadoIMC.classificacao});


function converterRealParaEuro(valorReal) {
 const taxaCambio = 5.13;  
 const valorEuro = valorReal / taxaCambio;
 return valorEuro.toFixed(2);
}

const valorReal = 100; 
const valorEuro = converterRealParaEuro(valorReal);
console.log(Valor em Euros: € ${valorEuro}); 





