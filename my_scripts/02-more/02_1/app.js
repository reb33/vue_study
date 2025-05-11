Vue.createApp({
    data:() => ({
        myHtml: '<h1>Vue 3 app</h1>',
        title: "Vue 3 app",
        list: [1,2,3,4,5,6,7]
    }),
    methods: {
        addItem(){
            this.list.unshift(this.$refs.myInput.value)
            this.$refs.myInput.value = ''
            // console.log(this.$refs)
        },
        removeItem(index){
            this.list.splice(index,1)
        },
        log(item){
            console.log(`log item ${item}`)
        }
    },
    computed: {
        eventItems(){
            return this.list.filter(i => i % 2 === 0)
        }
    }
}).mount("#app")