const app = Vue.createApp({
    data: () => ({
        title: "Gradient Generator",
        fcolor: "#1187ee",
        scolor: "#20ef45",
        orientation: 1,
    }),
    computed: {
        setColor() {
            if (this.orientation == 1) {
                return `background: linear-gradient(to right, ${this.fcolor}, ${this.scolor})`
            } else if (this.orientation == 2) {
                return `background: linear-gradient(to left, ${this.fcolor}, ${this.scolor})`
            } else if (this.orientation == 3) {
                return `background: linear-gradient(to top, ${this.fcolor}, ${this.scolor})`
            } else {
                    return `background: linear-gradient(to bottom, ${this.fcolor}, ${this.scolor})`
                }
            

        }
    },

})