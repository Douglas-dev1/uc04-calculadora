import Scanner from "@codeea/scanner";

async function main(){
  const scanner = new Scanner();
  const menu = `
    0 - SAIR
    1 - SOMA
    2 - SUBTRACAO
    3 - DIVISAO
    4 - MULTIPLICACAO
    5 - EXPONENCIACAO
  `
  let operacao = 0;

  do{
    console.log(menu);
    operacao = parseInt(await scanner.question("Informe a operacao: "));
    if(operacao == 0 || operacao > 5){
      console.log("OPERACAO INVALIDA");
      continue;
    }
    const a = await scanner.questionFloat("Informe o primeiro valor ou base: ");
    const b = await scanner.questionFloat("Informe o segundo valor expoente: ");
    if(operacao!=0)
      calculos(operacao, a, b)
  }while(operacao != 0);

  scanner.close();
}

async function calculos(tipo: number, valor1: number, valor2: number){
  let resultado1 = 0;
  switch (tipo) {
    case 1:
      console.log("SOMANDO");
      console.log(`A soma de ${valor1} + ${valor2} é igual a ${valor1+valor2}`);
      break;
    case 2:
      console.log("SUBTRAINDO");
      console.log(`A subtracao de ${valor1} - ${valor2} é igual a ${valor1-valor2}`);
      break;
    case 3:
      console.log("DIVIDINDO");
      console.log(`A divisao de ${valor1} / ${valor2} é igual a ${valor1/valor2}`);
      break;
    case 4:
      console.log("MULTIPLICANDO");
      console.log(`A multiplicacao de ${valor1} * ${valor2} é igual a ${valor1*valor2}`);
      break;
    case 5:
      console.log("EXPONENCIANDO");
      resultado1 = 1;
      for(let i = 1; i<= valor1; i++){
        resultado1 = resultado1*valor2
      }
      console.log(`${valor1} elevado a ${valor2} é igual a ${resultado1}`);
    break;
    default:
        console.log("OPERACAO INVALIDA");
      break;
  }

}

main()
/*(async () =>{
  await main();
  scanner.close();
})*/
