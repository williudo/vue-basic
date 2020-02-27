window.onload = function () {
    let vm = new Vue({
        el: "#app",
        data: {
            a: null,
            b: null,
        },
        methods:{
            metodoExemplo(parametro = "nada"){
                console.log(parametro + parseInt(this.a) + parseInt(this.b));
            }
        }
    });
};
