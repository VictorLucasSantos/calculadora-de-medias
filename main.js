const form = document.getElementById('form-atividade');
const imgaprovado = '<img src="./Images/confete.png" alt="Emoji celebrando"/>' 
const imgareprovado = '<img src="./Images/sad.png" alt="Emoji tristre"/>'
const atividades = [];
const anotas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt('Qual a nota minima?'));

let linhas = '';


form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionalinha();
    atualizatabela();
    atualizaMediafinal();
});

function adicionalinha(){
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    if (atividades.includes(inputNomeAtividade.value)){
        alert(`A atividade: ${inputNomeAtividade.value} ja foi incluída`);
    } else {
        atividades.push(inputNomeAtividade.value);
        anotas.push(parseFloat(inputNotaAtividade.value));
    
        let linha = '<tr>';
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? 'Aprovado': 'Reprovado'}</td>`; // Operador ternário Ifthen
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgaprovado: imgareprovado}</td>`; // Operador ternário Ifthen
        linha += '<tr>';
    
        linhas += linha;
    
    }

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atualizatabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMediafinal(){

    document.getElementById('media-final-valor').innerHTML = calculaMediaFinal().toFixed(2);
    document.getElementById('media-final-resultado').innerHTML = calculaMediaFinal().toFixed(2) >= notaMinima ? spanAprovado: spanAprovado;
}

function calculaMediaFinal(){
    let somaNotas = 0;

    for (let i = 0; i < anotas.length; i++) {
        somaNotas += anotas[i];
    }

    return somaNotas / anotas.length;
}