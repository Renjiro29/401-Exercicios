// let nomeCapirava = "Juresko";

// let contador = 0;

// while(contador<10){
//     console.log(contador);
//     contador ++;

// }



// for(let contador=0; contador<4; contador++){
//     console.log(contador);
//     console.log("jorge");
// }





// let ListaChamda = ["Almeida Tamarindo", "Jorge", "Sebastião", "Clelson"];

// for(let capivara in ListaChamda){
//     console.log(capivara);
// }


// // // for(let aluno of ListaChamda){
//     console.log(aluno);
// }

let nome = (prompt("DIgite seu nome"));

let idade = Number(prompt("Digite sua idade"));

let filmes = [
    {nome: "Rei Leão", classificaçao: 12},
    {nome: "Vingadores", classificaçao: 16}, 
    {nome: "KillBill", classificaçao: 18},
    {nome: "Trovão Tropical", classificaçao: 87}
];


for(let filme of filmes){
    console.log(`O Filme ${filme.nome} tem classificação ${filme.classificaçao}`);
    
    if(idade >= filme.classificaçao){
        alert(`Oi ${nome} você tem ${idade} anos, você pode ver ${filme.nome}`);
    }
    else{
        alert(`${nome}, você não tem idade pra ver o filme ${filme.nome}`);
    }

}
