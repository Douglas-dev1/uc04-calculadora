import Scanner from "@codeea/scanner";

async function main(){
  const scanner = new Scanner();
  const menu = `
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
    if(operacao === 1){
      console.log("SOMANDO");
      const a = await scanner.questionFloat("Informe o primeiro valor: ");
      const b = await scanner.questionFloat("Informe o segundo valor: ");
      const resultado = a+b;
      console.log(`A soma de ${a} + ${b} é igual a ${resultado}`);

    }else if(operacao === 2){
      console.log("SUBTRAINDO");
      const a = await scanner.questionFloat("Informe o primeiro valor: ");
      const b = await scanner.questionFloat("Informe o segundo valor: ");
      const resultado = a-b;
      console.log(`A subtracao de ${a} - ${b} é igual a ${resultado}`);

    }else if(operacao === 3){
      console.log("DIVIDINDO");
      const a = await scanner.questionFloat("Informe o primeiro valor: ");
      const b = await scanner.questionFloat("Informe o segundo valor: ");
      const resultado = a/b;
      console.log(`A divisao de ${a} / ${b} é igual a ${resultado}`);

    }else if(operacao === 4){
      console.log("MULTIPLICANDO");
      const a = await scanner.questionFloat("Informe o primeiro valor: ");
      const b = await scanner.questionFloat("Informe o segundo valor: ");
      const resultado = a*b;
      console.log(`A multiplicacao de ${a} * ${b} é igual a ${resultado}`);

    }
    else if(operacao === 5){
      console.log("EXPONENCIANDO");
      const base = await scanner.questionFloat("Informe o valor da base: ");
      const expoente = await scanner.questionFloat("Informe o valor do expoente: ");
      let resultado = 1;
      for(let i = 1; i<= expoente; i++){
        resultado = resultado*base
      }
      console.log(`${base} elevado a ${expoente} é igual a ${resultado}`);

    }else if (operacao!= 0){
      console.log("OPERACAO INVALIDA");

    }
  }while(operacao!= 0)
    scanner.close();
    console.log("ENCERRADO");
//0 SAIR
//1 SOMA
//2 SUBTRACAO
//3 DIVISAO
//4 MULTIPLICACAO
}

main()
