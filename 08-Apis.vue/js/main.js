const app = Vue.createApp({
    data: () => ({
        title: "Peticiones Axios",
        datos: [],
    }),
    created() {
        this.getPost()
    },
    methods: {
        async getPost() {
            const {data} = await axios.get("https://jsonplaceholder.typicode.com/users")
            
            this.datos = data;
        },
       
    }
})