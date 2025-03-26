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
        inputChangeHandler(event) {
            this.inputValue = event.target.value  //обращение к данным не через data а напрямую
        },
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
        doubleCount(){
            console.log("doubleCount")
            return this.notes.length * 2
        }
    },
    computed: {  // функции computed должны что-то возвращать
        doubleCountComputed() {
            console.log("doubleCountComputed")
            return this.notes.length * 2
        }
    }
}

const app = Vue.createApp(App)
app.mount("#app")

