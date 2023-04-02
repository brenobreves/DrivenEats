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
    if(comida !== null && bebida !== null && sbmesa !== null){
        const btn = document.getElementById('BButton');
        btn.disabled = false;
        btn.innerHTML = "Fechar pedido";
        btn.classList.add("ligado");
    }
}    

function test(){
    const pvcomida= document.querySelector('.food .selecionado .num');
    const vcomida= parseFloat(pvcomida.innerHTML.replace(',' , '.'));
    const pvbebida= document.querySelector('.drink .selecionado .num');
    const vbebida= parseFloat(pvbebida.innerHTML.replace(',' , '.'));
    const pvdzrt= document.querySelector('.dzrt .selecionado .num');
    const vdzrt= parseFloat(pvdzrt.innerHTML.replace(',' , '.'));
    const total = vcomida + vbebida + vdzrt;
    const ftotal = total.toFixed(2);
    const pncomida= document.querySelector('.food .selecionado .nome');
    const ncomida= pncomida.innerHTML;
    const pnbebida= document.querySelector('.drink .selecionado .nome');
    const nbebida= pnbebida.innerHTML;
    const pndzrt= document.querySelector('.dzrt .selecionado .nome');
    const ndzrt= pndzrt.innerHTML;
    const msg = 'Olá, gostaria de fazer o pedido\n- Prato: ' + ncomida +'\n- Bebida: ' + nbebida + '\n- Sobremesa: ' + ndzrt + '\nTotal: R$ ' + ftotal.replace('.',',');
    const emsg = encodeURIComponent(msg);
    const link ='https://wa.me/5521996697414?text='+ emsg;
    window.location = link;
}