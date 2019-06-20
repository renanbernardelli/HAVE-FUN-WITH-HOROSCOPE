function carregar() {
    const qualMes = document.querySelector('div#mes');

    const mes = new Date();
    const diaAtual = mes.getDate(); 
    const mesAtual = mes.getMonth() + 1;

    let foto = document.querySelector('div#foto');
    let img = document.createElement('img');
    img.setAttribute('id', 'foto');

    
    if (diaAtual >= 21 && mesAtual == 1) {
        qualMes.textContent = `Hoje é dia ${diaAtual}/${mesAtual}, signo de Aquario!`;
        img.setAttribute('src', 'Imagens/aquario.png');
    }
    else if(diaAtual <= 19 && mesAtual == 2) {
        qualMes.textContent = `Hoje é dia ${diaAtual}/${mesAtual}, signo de Aquario!`;
        img.setAttribute('src', 'Imagens/aquario.png');
    }
    else if (diaAtual >= 21 && mesAtual == 3) {
        qualMes.textContent = `Hoje é dia ${diaAtual}/${mesAtual}, signo de Aries!`;
        img.setAttribute('src', 'Imagens/aries.png');
    }
    else if (diaAtual <= 20 && mesAtual == 4) {
        qualMes.textContent = `Hoje é dia ${diaAtual}/${mesAtual}, signo de Aries!`;
        img.setAttribute('src', 'Imagens/aries.png');
    }
    else if (diaAtual >= 21 && mesAtual == 6) {
        qualMes.textContent = `Hoje é dia ${diaAtual}/${mesAtual}, signo de Cancer!`;
        img.setAttribute('src', 'Imagens/cancer.png');
    }
    else if (diaAtual <=21 && mesAtual == 7) {
        qualMes.textContent = `Hoje é dia ${diaAtual}/${mesAtual}, signo de Cancer!`;
        img.setAttribute('src', 'Imagens/cancer.png');
    }
    else if (diaAtual >= 22 && mesAtual == 12) {
        qualMes.textContent = `Hoje é dia ${diaAtual}/${mesAtual}, signo de Capricórnio!`;
        img.setAttribute('src', 'Imagens/capricornio.png');
    }
    else if (diaAtual <= 20 && mesAtual == 1) {
        qualMes.textContent = `Hoje é dia ${diaAtual}/${mesAtual}, signo de Capricórnio!`;
        img.setAttribute('src', 'Imagens/capricornio.png');
    }
    else if (diaAtual >= 23 && mesAtual == 10) {
        qualMes.textContent = `Hoje é dia ${diaAtual}/${mesAtual}, signo de Escorpião!`;
        img.setAttribute('src', 'Imagens/escorpiao.png');
    }
    else if (diaAtual <= 21 && mesAtual == 11) {
        qualMes.textContent = `Hoje é dia ${diaAtual}/${mesAtual}, signo de Escorpião!`;
        img.setAttribute('src', 'Imagens/escorpiao.png');
    }
    else if (diaAtual >= 21 && mesAtual == 5) {
        qualMes.textContent = `Hoje é dia ${diaAtual}/${mesAtual}, signo de Gêmeos!`;
        img.setAttribute('src', 'Imagens/gemeos.png');
    }
    else if (diaAtual <= 20 && mesAtual == 6) {
        qualMes.textContent = `Hoje é dia ${diaAtual}/${mesAtual}, signo de Gêmeos!`;
        img.setAttribute('src', 'Imagens/gemeos.png');
    }
    else if (diaAtual >= 22 && mesAtual == 7) {
        qualMes.textContent = `Hoje é dia ${diaAtual}/${mesAtual}, signo de Leão!`;
        img.setAttribute('src', 'Imagens/leao.png');
    }
    else if (diaAtual <=22 && mesAtual == 8) {
        qualMes.textContent = `Hoje é dia ${diaAtual}/${mesAtual}, signo de Leão!`;
        img.setAttribute('src', 'Imagens/leao.png');
    }
    else if (diaAtual >= 23 && mesAtual == 9) {
        qualMes.textContent = `Hoje é dia ${diaAtual}/${mesAtual}, signo de Libra!`;
        img.setAttribute('src', 'Imagens/libra.png');
    }
    else if (diaAtual <= 22 && mesAtual == 10){
        qualMes.textContent = `Hoje é dia ${diaAtual}/${mesAtual}, signo de Libra!`;
        img.setAttribute('src', 'Imagens/libra.png');
    }
    else if (diaAtual >= 20 && mesAtual == 2) {
        qualMes.textContent = `Hoje é dia ${diaAtual}/${mesAtual}, signo de Peixes!`;
        img.setAttribute('src', 'Imagens/peixes.png');
    }
    else if (diaAtual <= 20 && mesAtual == 3){
        qualMes.textContent = `Hoje é dia ${diaAtual}/${mesAtual}, signo de Peixes!`;
        img.setAttribute('src', 'Imagens/peixes.png');
    }
    else if (diaAtual >= 22 && mesAtual == 11) {
        qualMes.textContent = `Hoje é dia ${diaAtual}/${mesAtual}, signo de Sagitário!`;
        img.setAttribute('src', 'Imagens/sagitario.png');
    }
    else if (diaAtual <= 21 && mesAtual == 12) {
        qualMes.textContent = `Hoje é dia ${diaAtual}/${mesAtual}, signo de Sagitário!`;
        img.setAttribute('src', 'Imagens/sagitario.png');
    }
    else if (diaAtual >= 21 && mesAtual == 4) {
        qualMes.textContent = `Hoje é dia ${diaAtual}/${mesAtual}, signo de Touro!`;
        img.setAttribute('src', 'Imagens/touro.png');
    }
    else if (diaAtual <= 20 && mesAtual == 5) {
        qualMes.textContent = `Hoje é dia ${diaAtual}/${mesAtual}, signo de Touro!`;
        img.setAttribute('src', 'Imagens/touro.png');
    }
    else if (diaAtual >= 23 && mesAtual == 8) {
        qualMes.textContent = `Hoje é dia ${diaAtual}/${mesAtual}, signo de Virgem!`;
        img.setAttribute('src', 'Imagens/virgem.png');
    }
    else if (diaAtual <= 22 && mesAtual == 9) {
        qualMes.textContent = `Hoje é dia ${diaAtual}/${mesAtual}, signo de Virgem!`;
        img.setAttribute('src', 'Imagens/virgem.png');
    }
    else {
        imgMesAtual.src = 'none';
    }

    foto.appendChild(img);
}