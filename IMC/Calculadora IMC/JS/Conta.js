function calc(){
    var peso = Number(document.getElementById("peso").value)
    var altura = Number(document.getElementById("altura").value)
    
    
    var imc = (peso / (altura*altura))
    
    if (peso = NaN){
        resposta.innerHTML='Sem parametros'
    }
    
    if (imc < 18.5){
        resposta.innerHTML=`Seu imc é de: ${imc.toFixed(2)} - Você esta abaixo do peso. Consulte um profissional de saúde para avaliar suas necessidades calóricas e criar um plano alimentar adequado.`
    }
    else if (imc < 25){
        resposta.innerHTML=`Seu imc é de: ${imc.toFixed(2)} - Você esta no seu peso ideal. Continue mantendo uma dieta equilibrada para sustentar seu peso..`
    }
    else if (imc < 29.9){
        resposta.innerHTML=`Seu imc é de: ${imc.toFixed(2)} - Levemente acima do peso. Incremente sua rotina de exercícios, incluindo atividades aeróbicas, musculação e exercícios de flexibilidade.
        `
    }
    else if(imc < 34.9){
        resposta.innerHTML=`Seu imc é de: ${imc.toFixed(2)} Obesidade. Aumente a atividade física gradualmente, começando com atividades de baixo impacto e intensificando conforme a resistência melhora.`
    }
    else if(imc < 39.9){
        resposta.innerHTML=`Seu imc é de: ${imc.toFixed(2)} - Obesidade severa. Procure apoio profissional, como nutricionistas, endocrinologistas ou fisioterapeutas, para criar um plano abrangente de perda de peso`
    }
    else if(imc > 39.9){
        resposta.innerHTML=`Seu imc é de: ${imc.toFixed(2)} - Obesidade severa. Procure apoio profissional, como nutricionistas, endocrinologistas ou fisioterapeutas, para criar um plano abrangente de perda de peso.`
    }
    else {
        resposta.innerHTML=`Seu imc é de: ${imc.toFixed(2)} - ERRO`
    }
    }