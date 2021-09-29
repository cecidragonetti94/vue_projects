const app = Vue.createApp({
    data: () => ({
        title:"Formulario",
        datos: {
            name:"",
            age:15,
            langs:[],
            gener:"m",
        },
    }),
    methods:{
        handleSubmit(){
            console.log(this.datos)
        }
    }
})