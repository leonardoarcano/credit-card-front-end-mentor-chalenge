
    const numero_cartao = document.getElementById('numero_cartao');
    const nome_cartao = document.getElementById('nome_cartao');
    const mes_cartao = document.getElementById('mes_cartao');
    const ano_cartao = document.getElementById('ano_cartao');
    const cvv_cartao = document.getElementById('cvv_cartao');

    const numero_input = document.getElementById('numero_input');
    const nome_input = document.getElementById('nome_input');
    const validade_mes = document.getElementById('validade_mes');
    const validade_ano = document.getElementById('validade_ano');
    const cvv_input = document.getElementById('cvv_input');
    
    const botao = document.getElementById('botao');

    numero_input.addEventListener('keypress', () =>{
        let tamanho_numero = numero_input.value.length

        if(tamanho_numero === 4 || tamanho_numero === 9 || tamanho_numero === 14){
            numero_input.value += " "
        }
    });

    function recebeNumeros(){
        if(numero_input.value == ''){
            numero_cartao.innerHTML = '0000 0000 0000 0000'
        } else {
            numero_cartao.innerHTML = numero_input.value
        }

        let erro = document.querySelector('.erro-numero-vazio');
        erro.style.display = 'none'
    }
    function recebeNome(){
        if(nome_input.value == ''){
            nome_cartao.innerHTML = 'Jane Appleseed'
        } else {
            nome_cartao.innerHTML = nome_input.value
        }

        let erro = document.querySelector('.erro-nome-vazio');
        erro.style.display = 'none'
    }

    function recebeMes(){
        if(validade_mes.value == ''){
            mes_cartao.innerHTML = '00'
        } else {
            mes_cartao.innerHTML = validade_mes.value
        }

        let erro = document.querySelector('.erro-data-vazia');
        erro.style.display = 'none'
    }
    function recebeAno(){

        if(validade_ano.value == ''){
            ano_cartao.innerHTML = '00'
        } else {
            ano_cartao.innerHTML = validade_ano.value
        }
        
        let erro = document.querySelector('.erro-data-vazia');
        erro.style.display = 'none'
    }
    function recebeCodigo(){
        if(cvv_input.value == ''){
            cvv_cartao.innerHTML = '000'
        } else {
            cvv_cartao.innerHTML = cvv_input.value
        }

        let erro = document.querySelector('.erro-cvv-vazio');
        erro.style.display = 'none'
    }

    function validaDados(){

        const telaSucesso = document.querySelector('.wrapper')

        let numero = numero_input.value
        let numero_sem_espaco = numero.replaceAll(" ", '')
        let numero_atualizado = parseInt(numero_sem_espaco)

        let nome = nome_input.value
        let validadeM = validade_mes.value 
        let validadeA = validade_ano.value
        let cvv = cvv_input.value

        let validadoNumero = undefined
        let validadoNome = undefined
        let validadoData = undefined
        let validadoCvv = undefined

        console.log(numero_atualizado)
        
        if(numero === '' || numero == undefined || numero == null || numero.length < 19){
           let erro = document.querySelector('.erro-numero-vazio');
           erro.style.display = 'block'
           validadoNumero = false
        } else if (isNaN(numero_atualizado)){
            let erro = document.querySelector('.erro-numero-invalido');
            erro.style.display = 'block'
            validadoNumero = false
        } else {
            validadoNumero = true
        }

        if (nome === '' || nome == undefined || nome == null){
            let erro = document.querySelector('.erro-nome-vazio');
           erro.style.display = 'block'
           validadoNumero = false
        } else{
            validadoNome = true
        }

        if (validadeM === '' || validadeA === '' ){
            let erro = document.querySelector('.erro-data-vazia');
            erro.style.display = 'block'
            validadoNumero = false
        } else {
            validadoData = true
        }

        if(cvv === '' || cvv == undefined || cvv == null || cvv.length < 3){
            let erro = document.querySelector('.erro-cvv-vazio');
            erro.style.display = 'block'
            validadoNumero = false
         } else {
            validadoCvv = true
         }



         if (validadoNumero === true && validadoNome === true && validadoData === true && validadoCvv === true){
            telaSucesso.style.display = 'block'
         }
        
      }

      function fecharPopUp(){
        const telaSucesso = document.querySelector('.wrapper')
        telaSucesso.style.display = 'none'
        window.location.reload()
      }