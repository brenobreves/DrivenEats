let comida= null;
let bebida= null;
let sbmesa= null;

function selecionar(p,tipo){
    if(tipo === 'food'){
        if(comida !== null){
            const jaselecionado= document.querySelector('.food .selecionado');
            jaselecionado.classList.remove('selecionado');
        }
        p.classList.add("selecionado");
        comida = p;
    }
    if(tipo === 'drink'){
        if(bebida !== null){
            const jaselecionado= document.querySelector('.drink .selecionado');
            jaselecionado.classList.remove('selecionado');
        }
        p.classList.add("selecionado");
        bebida = p;
    }
    if(tipo === 'dzrt'){
        if(sbmesa !== null){
            const jaselecionado= document.querySelector('.dzrt .selecionado');
            jaselecionado.classList.remove('selecionado');
        }
        p.classList.add("selecionado");
        sbmesa = p;
    }
    
}