function relogio() {
    function criaHoraDosSegundos(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'
        });
    }
    
    console.log(criaHoraDosSegundos(10));
    
    
    const relogio = document.querySelector('.relogio')
    
    let segundos = 0;
    let timer;
    
    function iniciaRelogio() {
        timer = setInterval(function() {
            segundos++;
            relogio.innerHTML = criaHoraDosSegundos(segundos);
        }, 1000);
    }
    
    document.addEventListener('click', function(e) {
        const el = e.target;
    
        if(el.classList.contains('zerar')) {
            clearInterval(timer);
            relogio.innerHTML = '00:00:00'
            segundos= 0;
            relogio.classList.remove('vermelho');
        }
    
        if(el.classList.contains('pausar')) {
            clearInterval(timer);
            relogio.classList.add('vermelho');
        }
    
        if(el.classList.contains('iniciar')) {
            clearInterval(timer);
            iniciaRelogio();
            relogio.classList.remove('vermelho');
        }
    })
}

relogio();




