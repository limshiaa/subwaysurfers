function change_all(){
   
    const familia = document.querySelector('.hfamilia');
    const name = document.querySelector('.hname');
    const fname = document.querySelector('.hfname');
    const pol = document.querySelector('.hpol');
    const pborn1 = document.querySelector('.hpborn1');
    const pborn2 = document.querySelector('.hpborn2');

    if (familia.innerText === 'MALASHINA'){
       
        familia.innerText = 'МАЛАШИНА';
        name.innerText = 'ЕЛИЗАВЕТА';
        fname.innerText = 'АНТОНОВНА';
        pol.innerText = 'ЖЕН.';
        pborn1.innerText = 'Г. САМАРА';
        pborn2.innerText = 'САМАРСКАЯ ОБЛАСТЬ';
    }
    else {
     
        familia.innerText = 'MALASHINA';
        name.innerText = 'ELIZABETH';
        fname.innerText = 'ANTONOVNA';
        pol.innerText = 'FEMALE';
        pborn1.innerText = 'CITY SAMARA'
        pborn2.innerText = 'SAMARSKAYA OBLAST'
    }
}


const button = document.getElementById('button');
button.addEventListener("click", change_all);