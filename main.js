// alert ('olá mundo');

function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();  
}
//parametro alguma coisa q precisamos passar pra funcao e q a execucao depende -- 
//document.querySelector('.tecla_pom').play()
const listaDeTeclas = document.querySelectorAll('.tecla'); //queryselectorall busca todos os elementos com aqueles seletores q o botao tem
//lista de teclas constante pra selecionar cada um usa cochetes , informando o indice

//enquanto while condição pra determinar onde a repetição vai parar
//while espera receber uma condicao verdadeira ou falsa true ou false

// referencia variavel palavra let.. algo q vai sempre receber algo novo


for ( let contador = 0;  contador < listaDeTeclas.length; contador ++) {
    
    const tecla = listaDeTeclas[contador];
    // cria uma constante q vai conter o elemento daquele momento da lista de teclas -- passo o indice dentro do contador
    const instrumento = tecla.classList[1];
    // class list [1] o q contem 
  
    const idAudio = `#som_${instrumento}`;
    //template string
   // console.log(idAudio);
     //'#som_{instrumento} string usa crase
    tecla.onclick = function(){
        //function funcao anonima só declara sem passar parametro
        tocaSom(idAudio);
    }
    
//    console.log( contador);
    //console log manda msg pro navegador
}

// queryselectonAll funcionalidade q busca todos os elementos 
//do seletor

//as referencias constantes no javacript


