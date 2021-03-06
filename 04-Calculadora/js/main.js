const app = Vue.createApp({
    data:() => ({
        title:"Calculadora",
        n1:0,
        n2:0,
    }),
    computed:{
        suma(){
            return this.n1 + this.n2
        },
        resta(){
            return this.n1 - this.n2
        },
        multi(){
            return this.n1 * this.n2
        },
        divi(){
            const res = this.n1 / this.n2
            return res === Infinity || res === -Infinity ? " Error- No se puede calcular" : res;
        },
    }
})