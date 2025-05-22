//variaveis para mapear os botoes antes e depois
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const items = document.querySelectorAll('.item'); // aqui vai pegar todos os items, detalhe tem que por o "ponto". Pois é classe.
const dots = document.querySelectorAll('.dot'); //vai pegar os dots
const numberIndicator = document.querySelector('.numbers'); // pega os numeros
const list = document.querySelector('.list'); //pegando a lista


const botao = document.getElementById('mais-btn');

let active = 0;//variavel pra saber quem ta ativo
const total = items.length //variavel para definir o total dos intems 

let timer; //pra ficar trocando automaticamente 

//função para atualizar o click
function update(direction){ //ele tem que saber primeiro qual foi clicado, o antes ou o depois?
    
    //vai pegar todos os item active, pra depois remover o active e atualizar ele pro anterior ou para o proximo.
     document.querySelector('.item.active').classList.remove('active') 
     //vai pegar o dot ativo e depois remover o active para atualizar pro anterior ou para o proximo.
     document.querySelector('.dot.active').classList.remove('active')


     //faço um (if e else) para verificar os botoes next e preview
     if(direction > 0){ //se o dicrection for maior que 0, o active recebe ele mesmo mais 1 pois na programação a primeira posição sempre é 0
        active = active + 1
        
        // aqui ele vai verificar se o active estiver no 3, mas na posição [2] ele vai voltar para o numero 1 que é a posição 
        // [0] pois nao tem o numero 4 apos o 3, nao tem outra figura.        
        if(active === total){
            active = 0
        }        
     }
     
     else if(direction < 0){

        active = active -1 //active recebe ele - 1 pra voltar

        if(active < 0){ // se o active for menor que 0 ele vai voltar para o ultimo que é a posição [2] e o numero é o 3

            active = total - 1 //pega o total de elementos - 1
        }

     }
     //aqui depois das verificações acima, voce pega os items e adiciona a classe ative novamente para ele mudar de figura
     items[active].classList.add('active') 

     //aqui ele adiciona o active para mudar os dots, o risco abaixo dos numeros.
     dots[active].classList.add('active') 

     //transformo em string pois se nao nao aparece o 0 antes do 1, do 2 e do 3. Chamo o padStart (2, '0')
     //onde o 2 é avisando quantos caracteres e o 0 é o valor que queremos por no inicio
     numberIndicator.textContent = String (active + 1).padStart(2,'0') 

}

//define o tempo da animação da troca das imagens no caso 5s atraves do setInterval passando o update com valor 1 sempre pra frente.
    clearInterval (timer) //aqui eu zero o timer para começar a animação novamente
    timer = setInterval(() => {
        update(1)// poderia ser -1 caso queira fazer a troca de frente pra trás
     }, 5000);// chama a cada 5 segundos. 



//função para pegar a ação do botao preview ou seja o anterior
prevButton.addEventListener('click', () => {

        update(-1) //chama a função acima update passando o valor -1 pois é o anterior

    })

//função para pegar a ação do botao next ou seja o proximo
nextButton.addEventListener('click', () => {

    update(1) //chama a função acima update passando o valor 1 pois é o próximo
})

//botao.addEventListener('mouseover', () => {


   // botao.style.backgroundColor = 'lightblue';
//})

