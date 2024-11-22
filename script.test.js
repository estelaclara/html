// // função para somar dois números
// function adicionar(a,b){
//     return a + b;
// }

// //função para calcular o dobro do número
// function calcularDobro(valor){
//     return valor * 2;   
// }

// //teste de integridade 
// describe("teste de integração", function(){
//     it("deve somar dois números e calcular o dobro", function(){
//      const resultadoSoma = adicionar(2, 3);
//      const resultadoDobro = calcularDobro(resultadoSoma);

//      expect(resultadoDobro). toBe(10);
//     });
//     it("deve cacular o dobro mesmo com números negativos", function(){
//         const resultadoSoma = adicionar(-2, -3);
//         const resultadoDobro = calcularDobro(resultadoSoma);
//         expect(resultadoDobro). toBe(-10);
//     });


// });

// //funcao para concatenar duas partes de texto
// function concatenarTexto(parte1, parte2){
//     return parte1 + ' ' + parte2;
// }

// //função para deixar os textos maiusculos
// function converter(texto){
//     return texto.toUpperCase();
// }

// //teste
// describe("segundo teste de integração", function(){
// it("deve juntar dois textos e deixar maiusculo", function(){
//     const texto = concatenarTexto("tudo", "bem");
//     const textoMaiusculo = converter(texto);

//     //verifica se deu certo
//     expect(textoMaiusculo).toBe("TUDO BEM");
// });

// it("deve  lidar com string vazia", function(){
//     const texto = concatenarTexto("", "teste");
//     const textoMaiusculo = converter(texto);
//     expect(textoMaiusculo).toBe(" TESTE");
// });
// });


// 1 
function somarNotas(a, b, c, d){
    return (a + b + c + d);
}

function calcularMedia(somaDasNotas, quantDeNotas){
    let media = somaDasNotas / quantDeNotas;
    
    return media;

} 

function situacaoDoAluno(media){
    if(media => 7){
        return("aluno aprovado")
    } else {
        return("aluno reprovado")
    }
}

describe("verificar soma", function(){
    it("verificar se a soma das notas esta correta", function(){
      const soma = somarNotas(5, 7, 8, 10)
      expect(soma).toBe(30)
    })
    it("verificar se a media esta correta", function(){
        const soma = somarNotas(5, 7, 8, 10);
        const media = calcularMedia(soma, 4);

        expect(media).toBe(7.5)
    })

    it("aluno reprovado ou aprovado", function(){
        const soma = somarNotas(5, 7, 8, 10);
        const media = calcularMedia(soma, 4);
        const resultado = situacaoDoAluno(media)

       expect(resultado).toBe("aluno aprovado")

    })
    
})

//2
function multiplicar(a, b){
    return a * b
}

function calcularTriplo(valor){
    return valor * 3
}

describe("calcular triplo do valor", function(){
    it("calcular triplo do valor", function(){
        const a = 2;
        const b = 3;
        const triplo = calcularTriplo(multiplicar(a, b))
        expect(triplo).toBe(18)
    })

    it("calcular triplo de valores negtivos", function(){
        const a = -2;
        const b = -3;
        const triplo = calcularTriplo(multiplicar(a, b))
        expect(triplo).toBe(18)
    })

    it("calcular triplo de valores positivos e negativos", function(){
        const a = -2;
        const b = 3;
        const triplo = calcularTriplo(multiplicar(a, b))
        expect(triplo).toBe(-18)
    })
})

//3
function calcularDesconto(valorTotal){


    if(valorTotal <= 100){
        return 0.05
    } else if((valorTotal => 101) && (valorTotal <= 500)){
     return 0.1
    }else {
        return 0.15
    }
   


}

function aplicarDesconto(valorTotal, desconto){

    if(valorTotal <= 100){
        return valorTotal * desconto
    } else if(valorTotal => 101 && valorTotal <= 500){
     return valorTotal * desconto
    }else  {
        return valorTotal * desconto
    }


}

describe("Desconto", function(){
    it("verificar se o desconto esta correto", function(){
        const valorTotal = calcularDesconto(100);
        const desconto = aplicarDesconto(100, valorTotal);
        expect(valorTotal).toBe(0.05)
    })

    it("verificar se o desconto esta correto", function(){
        const valorTotal = calcularDesconto(250);
        const desconto = aplicarDesconto(250, valorTotal);
        expect(valorTotal).toBe(0.1)
    })

    it("verificar se o desconto esta correto", function(){
        const valorTotal = calcularDesconto(502);
        const desconto = aplicarDesconto(502, valorTotal);
        expect(valorTotal).toBe(0.15)
    })
})


