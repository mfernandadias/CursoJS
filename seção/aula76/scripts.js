function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),

        cleardisplay() {
            
        }

        inicia() {
            this.cliqueBotoes();
        },

        cliqueBotoes() {
            //this --> calculadora 
            document.addEventListener('click', function(e){
                const el = e.target;

                if(el.classList.contains('btn-num')) {
                    this.btnParaDisplay();
                }
            }.bind(this));
        },
        btnParaDisplay(valor) {
            this.display.value += valor;
        }
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();
