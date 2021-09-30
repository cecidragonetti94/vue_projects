const app  = Vue.createApp({
    data:() => ({
        title: "Movies",
        movieData: {},
        movieTitle:"Titanic",
    }),
    mounted() {
        this.getMovie()
    },
    methods: {
         async getMovie(){
            const search = this.movieTitle.toLowerCase().replace(/ /g, "+")

            console.log(search)
            const {data} = await axios.get(`http://www.omdbapi.com/?apikey=329f6ae4&t=${search}`)
            console.log(data)
            this.movieData = data
        }
    }
})