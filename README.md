# HAVE-FUN-WITH-HOROSCOPE
On this single web page, you'll figure out more about yourself, playing with horoscope. Enjoy it!

## How does it work? It's pretty easy!
As soon as you access the page, there will be a header, two-section and, finally a footer:
### Header: scrolling wellcome.
![header](https://github.com/renanbernardelli/HAVE-FUN-WITH-HOROSCOPE/blob/master/gifs/header.gif)
### First section, left side, show you the current horoscope and date.
![first_section](https://github.com/renanbernardelli/HAVE-FUN-WITH-HOROSCOPE/blob/master/gifs/first_section.png)
### In the second section, right side, there is an input to type the date/month, select the sex and click on "VERIFICAR".
#### It will appear a small frame containing the horoscope regarding your date and sex choice.
![second_section](https://github.com/renanbernardelli/HAVE-FUN-WITH-HOROSCOPE/blob/master/gifs/second_section.gif)
### Finally, ending with a simple footer.
![page](https://github.com/renanbernardelli/HAVE-FUN-WITH-HOROSCOPE/blob/master/gifs/page.png)
## Mainly CSS features used:
#### The Headers effects:
```
.animated-text{
    text-align: center;
    color: aliceblue;
    font-size: 38px;
    text-shadow: 3px 0 3px black;
    font-family: 'Courgette', cursive;
    padding: 0 1em;
    height: 60px;
    overflow: hidden;
}
.line{
    line-height: 60px;
}
.line:first-child{
    animation: anim 13s infinite;
}
@keyframes anim {
    0%{
        margin-top: 0;
    }
    16%{
        margin-top: -60px;
    }
    33%{
        margin-top: -120px;
    }
    50%{
        margin-top: -180px;
    }
    66%{
        margin-top: -120px;
    }
    82%{
        margin-top: -60px;
    }
    100%{
        margin-top: 0;
    }
}
```
#### The Button effects:
```
#button {
    border: none;
    margin: 0.5em;
    width: auto;
    font-family: 'Bubblegum Sans', cursive;
    font-size: 1.5em;
    text-align: center;
    text-transform: uppercase;
    color: aliceblue;
    border-radius: 6px;
    cursor: pointer;
    background-image: linear-gradient(to left, #0652DD,#1B1464,#0652DD);
    background-size: 200%;
    transition: 0.6s;
}
#button:hover {
    background-position: right;
}
```
## Mainly JavaScript features used:
### Date Constructor
```
const qualMes = document.querySelector('#mes');

    const mes = new Date();
    const diaAtual = mes.getDate(); 
    const mesAtual = mes.getMonth() + 1;
```
### Create Element and Set Attribute
```
let img = document.createElement('img');
    img.setAttribute('id', 'foto');

    
    if (diaAtual >= 21 && mesAtual == 1) {
        qualMes.textContent = `Hoje é dia ${diaAtual}/${mesAtual}, signo de Aquario!`;
        img.setAttribute('src', 'Imagens/aquario.png');
```
### Validations
```
if(diaNasc == 0 || diaNasc > 31 && mesNasc == 0 || mesNasc > 12) {
        window.alert('[ERRO] As datas informadas não correspondem com os dias e meses!');
    }
    else {
        let radSex = document.querySelector('input[name="radSex"]:checked').value;
```        
