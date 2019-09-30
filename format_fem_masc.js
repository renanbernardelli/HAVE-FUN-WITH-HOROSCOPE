function verificar() {
    let diaNasc = document.querySelector('input#diaNasc');
    diaNasc = Number(diaNasc.value);
    let mesNasc = document.querySelector('input#mesNasc');
    mesNasc = Number(mesNasc.value);
    let res = document.querySelector('div#res');

    if(diaNasc == 0 || diaNasc > 31 && mesNasc == 0 || mesNasc > 12) {
        window.alert('[ERRO] As datas informadas não correspondem com os dias e meses!');
    }
    else {
        let radSex = document.querySelector('input[name="radSex"]:checked').value;
        let foto = document.createElement('img');
        foto.setAttribute('id', 'foto');
        res.textContent = '';
        if (radSex === 'm') {
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
        else if(radSex === 'f') {
            if(diaNasc >= 21 && mesNasc == 1) {
                foto.setAttribute('src', 'Imagens/mulher/m_aquario_21_1_18_2.png');
            }
            else if(diaNasc <= 19 && mesNasc == 2) {
                foto.setAttribute('src', 'Imagens/mulher/m_aquario_21_1_18_2.png');
            }
            else if (diaNasc >= 21 && mesNasc == 3) {
                foto.setAttribute('src', 'Imagens/mulher/m_aries_20_3_20_4.png');
            }
            else if (diaNasc <= 20 && mesNasc == 4) {
                foto.setAttribute('src', 'Imagens/mulher/m_aries_20_3_20_4.png');
            }
            else if (diaNasc >= 21 && mesNasc == 6) {
                foto.setAttribute('src', 'Imagens/mulher/m_cancer_21_6_21_7.png');
            }
            else if (diaNasc <=21 && mesNasc == 7) {
                foto.setAttribute('src', 'Imagens/mulher/m_cancer_21_6_21_7.png');
            }
            else if (diaNasc >= 22 && mesNasc == 12) {
                foto.setAttribute('src', 'Imagens/mulher/m_capricornio_22_12_21_1.png');
            }
            else if (diaNasc <= 20 && mesNasc == 1) {
                foto.setAttribute('src', 'Imagens/mulher/m_capricornio_22_12_21_1.png');
            }
            else if (diaNasc >= 23 && mesNasc == 10) {
                foto.setAttribute('src', 'Imagens/mulher/m_escorpiao_23_10_21_11.png');
            }
            else if (diaNasc <= 21 && mesNasc == 11) {
                foto.setAttribute('src', 'Imagens/mulher/m_escorpiao_23_10_21_11.png');
            }
            else if (diaNasc >= 21 && mesNasc == 5) {
                foto.setAttribute('src', 'Imagens/mulher/m_gemeos21_5_20_6.png');
            }
            else if (diaNasc <= 20 && mesNasc == 6) {
                foto.setAttribute('src', 'Imagens/mulher/m_gemeos21_5_20_6.png');
            }
            else if (diaNasc >= 22 && mesNasc == 7) {
                foto.setAttribute('src', 'Imagens/mulher/m_leao_22_7_22_8.png');
            }
            else if (diaNasc <=22 && mesNasc == 8) {
                foto.setAttribute('src', 'Imagens/mulher/m_leao_22_7_22_8.png');
            }
            else if (diaNasc >= 23 && mesNasc == 9) {
                foto.setAttribute('src', 'Imagens/mulher/m_libra_23_9_22_10.png');
            }
            else if (diaNasc <= 22 && mesNasc == 10){
                foto.setAttribute('src', 'Imagens/mulher/m_libra_23_9_22_10.png');
            }
            else if (diaNasc >= 20 && mesNasc == 2) {
                foto.setAttribute('src', 'Imagens/mulher/m_peixes_19_2_19_3.png');
            }
            else if (diaNasc <= 20 && mesNasc == 3){
                foto.setAttribute('src', 'Imagens/mulher/m_peixes_19_2_19_3.png');
            }
            else if (diaNasc >= 22 && mesNasc == 11) {
                foto.setAttribute('src', 'Imagens/mulher/m_sagitario_22_11_21_12.png');
            }
            else if (diaNasc <= 21 && mesNasc == 12) {
                foto.setAttribute('src', 'Imagens/mulher/m_sagitario_22_11_21_12.png');
            }
            else if (diaNasc >= 21 && mesNasc == 4) {
                foto.setAttribute('src', 'Imagens/mulher/m_touro_21_4_20_5.png');
            }
            else if (diaNasc <= 20 && mesNasc == 5) {
                foto.setAttribute('src', 'Imagens/mulher/m_touro_21_4_20_5.png');
            }
            else if (diaNasc >= 23 && mesNasc == 8) {
                foto.setAttribute('src', 'Imagens/mulher/m_virgem_23_8_22_9.png');
            }
            else if (diaNasc <= 22 && mesNasc == 9) {
                foto.setAttribute('src', 'Imagens/mulher/m_virgem_23_8_22_9.png');
            }
            else {
                alert('[ERRO] A data digitada não existe!');
            }
        }
        res.appendChild(foto);
    }
}