const app = Vue.createApp({
    data(){
        return {
            user: {
                title:"hola mundo",
                name: "pepito",
                age: -1,
                movies: ["batman","troya","superman","friends"],
                url: "https://google.com",
                picture:"https://cdn.pixabay.com/photo/2021/09/19/12/19/animal-6637774_960_720.jpg",
                classValue:"good",
            }
            
        }
    }
})
console.log(app);