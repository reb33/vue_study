const App = {
    data() {
        return {
            title: "Список заметок",
            placeholderStr: "Введите название заметки",
            inputValue: "",
            notes: ["Заметка 1"]
        }
    },
    methods: {
        addNote() {
            if (this.inputValue !== ''){
                this.notes.push(this.inputValue)
                this.inputValue = ""
            }
        },
        toUpperCase(item){
            return item.toUpperCase()
        },
        removeNote(idx, event) {
            this.notes.splice(idx, 1)
        },
    },
    computed: {  // функции computed должны что-то возвращать
        doubleCountComputed() {
            console.log("doubleCountComputed")
            return this.notes.length * 2
        }
    },
    watch: {
        inputValue(value){
            if (value.length > 10){
                this.inputValue = ""
            }
        }
    }
}

const app = Vue.createApp(App)
app.mount("#app")

