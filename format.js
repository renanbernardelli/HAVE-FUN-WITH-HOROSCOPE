function carregar() {
    const qualMes = document.querySelector('div#mes');

    let imgMesAtual = document.querySelector('img#signoMesAtual');

    const mes = new Date();
    const diaAtual = mes.getDate(); 
    const mesAtual = mes.getMonth() + 1;
    
    qualMes.textContent = `A data atual é ${diaAtual}-${mesAtual}`;

    if (diaAtual >= 21 && mesAtual == 1) {
        if (diaAtual <= 18 && mesAtual == 2) {
            imgMesAtual.src = 'Imagens/mulher/m_aquario_21_1_18_2.png';
        }
    }
    else if (diaAtual >= 21 && mesAtual == 3) {
        if (diaAtual <= 20 && mesAtual == 4) {
            imgMesAtual.src = 'Imagens/mulher/m_aries_20_3_20_4.png';
        }
    }
    else if (diaAtual >= 21 && mesAtual == 6) {
        if (diaAtual <=21 && mesAtual == 7) {
            imgMesAtual.src = 'Imagens/mulher/m_cancer_21_6_21_7.png';
        }
    }
    else if (diaAtual >= 22 && mesAtual == 12) {
        if (diaAtual <= 21 && mesAtual == 1) {
            imgMesAtual.src = 'Imagens/mulher/m_capricornio_22_12_21_1.png';
        }
    }
    else if (diaAtual >= 23 && mesAtual == 10) {
        if (diaAtual <= 21 && mesAtual == 11) {
            imgMesAtual.src = 'Imagens/mulher/m_escorpiao_23_10_21_11.png';
        }
    }
    else if (diaAtual >= 21 && mesAtual == 5) {
        if (diaAtual <= 20 && mesAtual == 6) {
            imgMesAtual.src = 'Imagens/mulher/m_gemeos21_5_20_6.png';
        }
    }
    else if (diaAtual >= 22 && mesAtual == 7) {
        if (diaAtual <=22 && mesAtual == 8) {
            imgMesAtual.src = 'Imagens/mulher/m_leao_22_7_22_8.png';
        }
    }
    else if (diaAtual >= 23 && mesAtual == 9) {
        if (diaAtual <= 22 && mesAtual == 10){
            imgMesAtual.src = 'Imagens/mulher/m_libra_23_9_22_10.png';
        }
    }
    else if (diaAtual >= 19 && mesAtual == 2) {
        if (diaAtual <= 19 && mesAtual == 3){
            imgMesAtual.src = 'Imagens/mulher/m_peixes_19_2_19_3.png';
        }
    }
    else if (diaAtual >= 22 && mesAtual == 11) {
        if (diaAtual <= 21 && mesAtual == 12) {
            imgMesAtual.src = 'Imagens/mulher/m_sagitario_22_11_21_12.png';
        }
    }
    else if (diaAtual >= 21 && mesAtual == 4) {
        if (diaAtual <= 20 && mesAtual == 5) {
            imgMesAtual.src = 'Imagens/mulher/m_touro_21_4_20_5.png';
        }
    }
    else if (diaAtual >= 23 && mesAtual == 8) {
        if (diaAtual <= 22 && mesAtual == 9) {
            imgMesAtual.src = 'Imagens/mulher/m_virgem_23_8_22_9.png';
        }
    }
    else {
        imgMesAtual.src = 'none';
    }
}