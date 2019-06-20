function verificar() {
    let diaNasc = document.querySelector('input#diaNasc');
    diaNasc = Number(diaNasc.value);
    let mesNasc = document.querySelector('input#mesNasc');
    mesNasc = Number(mesNasc.value);
    let res = document.querySelector('div#res');

    if(diaNasc.value.length == 0 || diaNasc.value > 31 && mesNasc.value.length == 0 || mesNasc.value > 12) {
        window.alert('[ERRO] As datas informadas não correspondem com os dias e meses!')
    }
    else {
        let radSex = document.getElementsByName('radSex');
        let foto = document.createElement('foto');
        foto.setAttribute('id', 'foto')
        if (radSex[0].checked) {
            if(diaNasc >= 21 && mesNasc == 1) {
                foto.setAttribute('src', 'Imagens/homem/h_aquario_21_1_18_2.png');
            }
            else if(diaNasc <= 19 && mesNasc == 2) {
                foto.setAttribute('src', 'Imagens/homem/h_aquario_21_1_18_2.png');
            }
            else if (diaNasc >= 21 && mesNasc == 3) {
                foto.setAttribute('src', 'Imagens/homem/h_aries_20_3_20_4.png');
            }
            else if (diaNasc <= 20 && mesNasc == 4) {
                foto.setAttribute('src', 'Imagens/homem/h_aries_20_3_20_4.png');
            }
            else if (diaNasc >= 21 && mesNasc == 6) {
                foto.setAttribute('src', 'Imagens/homem/h_cancer_21_6_21_7.png');
            }
            else if (diaNasc <=21 && mesNasc == 7) {
                foto.setAttribute('src', 'Imagens/homem/h_cancer_21_6_21_7.png');
            }
            else if (diaNasc >= 22 && mesNasc == 12) {
                foto.setAttribute('src', 'Imagens/homem/h_capricornio_22_12_21_1.png');
            }
            else if (diaNasc <= 20 && mesNasc == 1) {
                foto.setAttribute('src', 'Imagens/homem/h_capricornio_22_12_21_1.png');
            }
            else if (diaNasc >= 23 && mesNasc == 10) {
                foto.setAttribute('src', 'Imagens/homem/h_escorpiao_23_10_21_11.png');
            }
            else if (diaNasc <= 21 && mesNasc == 11) {
                foto.setAttribute('src', 'Imagens/homem/h_escorpiao_23_10_21_11.png');
            }
            else if (diaNasc >= 21 && mesNasc == 5) {
                foto.setAttribute('src', 'Imagens/homem/h_gemeos_ 21_5_20_6.png');
            }
            else if (diaNasc <= 20 && mesNasc == 6) {
                foto.setAttribute('src', 'Imagens/homem/h_gemeos_ 21_5_20_6.png');
            }
            else if (diaNasc >= 22 && mesNasc == 7) {
                foto.setAttribute('src', 'Imagens/homem/h_leao_22_7_22_8.png');
            }
            else if (diaNasc <=22 && mesNasc == 8) {
                foto.setAttribute('src', 'Imagens/homem/h_leao_22_7_22_8.png');
            }
            else if (diaNasc >= 23 && mesNasc == 9) {
                foto.setAttribute('src', 'Imagens/homem/h_libra_23_9_22_10.png');
            }
            else if (diaNasc <= 22 && mesNasc == 10){
                foto.setAttribute('src', 'Imagens/homem/h_libra_23_9_22_10.png');
            }
            else if (diaNasc >= 20 && mesNasc == 2) {
                foto.setAttribute('src', 'Imagens/homem/h_peixes_19_2_19_3.png');
            }
            else if (diaNasc <= 20 && mesNasc == 3){
                foto.setAttribute('src', 'Imagens/homem/h_peixes_19_2_19_3.png');
            }
            else if (diaNasc >= 22 && mesNasc == 11) {
                foto.setAttribute('src', 'Imagens/homem/h_sagitario_22_11_21_12.png');
            }
            else if (diaNasc <= 21 && mesNasc == 12) {
                foto.setAttribute('src', 'Imagens/homem/h_sagitario_22_11_21_12.png');
            }
            else if (diaNasc >= 21 && mesNasc == 4) {
                foto.setAttribute('src', 'Imagens/homem/h_touro_21_4_20_5.png');
            }
            else if (diaNasc <= 20 && mesNasc == 5) {
                foto.setAttribute('src', 'Imagens/homem/h_touro_21_4_20_5.png');
            }
            else if (diaNasc >= 23 && mesNasc == 8) {
                foto.setAttribute('src', 'Imagens/homem/h_virgem_23_8_22_9.png');
            }
            else if (diaNasc <= 22 && mesNasc == 9) {
                foto.setAttribute('src', 'Imagens/homem/h_virgem_23_8_22_9.png');
            }
            else {
                alert('[ERRO] A data digitada não existe!');
            }
        }
        else if(radSex[1].checked) {
            if(diaAtual >= 21 && mesAtual == 1) {
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
                alert('[ERRO] A data digitada não existe!');
            }
        }
        res.appendChild(foto);
    }
}