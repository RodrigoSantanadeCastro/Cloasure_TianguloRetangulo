const triangulo =(function tri(){
let value =0
    function area(pontos){
        return value +=pontos;
    }
    let valor =0
    function base(ponto){
        return valor +=ponto;
    }
    let result =0

    return{
        adicionararea1(){
            return area(1);
        },
        adicionararea5(){
            return area(5);
        },
        adicionararea10(){
            return area(10);
        },
        subtrairararea1(){
            return area(-1);
        },
        subtrairararea5(){
            return area(-5);
        },
        subtrairararea10(){
            return area(-10);
        },
        adicionarbase1(){
            return base(1)
        },
        adicionarbase5(){
            return base(5)
        },
        adicionarbase10(){
            return base(10)
        },
        subtrairbase1(){
            return base(-1)
        },
        subtrairbase5(){
            return base(-5)
        },
        subtrairbase10(){
            return base(-10)
        },

        calculo(){
            result = (valor *value)/2
            return console.log ("A área do triângulo é de",result);
        }

    }
})();

triangulo.adicionararea10();
triangulo.adicionararea5();
triangulo.adicionarbase1();
triangulo.adicionarbase10();
triangulo.calculo();