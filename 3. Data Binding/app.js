window.onload = function () {
    let vm = new Vue({
        el: "#app",
        data: {
            varTexto: 'texto inicial',
            varTexto2: 'texto 2',
            varTexto3: '',
            varTexto4: 'varTexto4 inicio',
        },
        methods:{
            mudaTexto(){
                this.varTexto3 = this.varTexto2 + " texto alterado";
                this.varTexto4 = "varTexto4 alterado";
            }
        }
    });
};
