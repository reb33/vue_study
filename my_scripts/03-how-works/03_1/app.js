const h = Vue.h

const app = Vue.createApp({
    data() {
        return {
            title: 'Свойство из template'
        }
    },
    methods: {
        changeTitle(){
            this.title = "Изменили!"
        },
        unmount(){
            app.unmount()
        },
    },
    template: `
        <div class="card center">
          <h1>{{title}}</h1>
          <button class="btn mb-1" @click="title = 'Изменили!'">Изменить</button>
          <button class="btn" @click="unmount">Unmount</button>
        </div>
    `

})

app.mount("#app")

Vue.createApp({
    data() {
        return {
            title: "App2"
        }
    }
}).mount("#app2")