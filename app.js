/**
 * Sorteio de uma carta
 * Exemplo de uso de array de um vetor
 * @author Elen Grecco
 */

function sortear() {
    let nipes = ['♥', '♦', '♣', '♠']
    let faces = ["A", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

    //sorteio do índice do vetor
    let nipeSorteada = nipes[Math.floor(Math.random() * 4)] // 0 1 2 3
    let faceSorteada = faces[Math.floor(Math.random() * 13)] // 0 1 2 3 4 5 6 7 8 9 10 11 12

    // console.log(`${faceSorteada} de ${nipeSorteada}`)

    //Determinar a cor com a base no nipe sorteado
    let cor
    if (nipeSorteada === '♥' || nipeSorteada === '♦') {
        cor = '#ff0000'
    } else {
        cor = '#000'
    }


    // rendenizar o canto superior esquerdo da carta
    // a linha abaixo adiciona a div identificada como "subEsq" a face e o nipe sorteado e também tags <div> adicionais
    document.getElementById('supEsq').innerHTML = `<div> ${faceSorteada}</div> <div> ${nipeSorteada}</div>`
    //a linha abaixo muda o CSS referente a tag identificada
    document.getElementById('supEsq').style.color = cor

    //renderizar o centro da carta
    // renderizar o centro da carta
    let cc = document.getElementById('centroCarta')
    if (faceSorteada === 'J') {
        cc.innerHTML = `<img src="./img/valete.png">`
    } else if (faceSorteada === 'Q') {
        cc.innerHTML = `<img src="./img/dama.png">`
    } else if (faceSorteada === 'K') {
        cc.innerHTML = `<img src="./img/rei.png">`
    } else {
        cc.innerHTML = `${nipeSorteado}`
        cc.style.color = cor
    }

    // renderizar o canto inferior direito da carta
    document.getElementById('infDir').innerHTML = `<div>${faceSorteada}</div> <div>${nipeSorteado}</div>`
    document.getElementById('infDir').style.color = cor
}