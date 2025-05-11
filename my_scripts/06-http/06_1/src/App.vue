<template>
  <div class="container">
    <app-alert :alert="alert" @close="alert = null"></app-alert>

    <form class="card" @submit.prevent="createPerson">
      <h2>Работа с базой данных</h2>

      <div class="form-control">
        <label for="name">Введите имя</label>
        <input type="text" id="name" v-model.trim="name" />
      </div>

      <button class="btn primary" :disabled="name.length === 0">Создать</button>
    </form>

    <app-loader v-if="loading"></app-loader>

    <app-people-list
        v-else
        :people="people"
        @load="loadPeople"
        @remove="removePerson"
    ></app-people-list>
  </div>
</template>

<script>
import AppPeopleList from "@/components/AppPeopleList.vue";
import AppAlert from "@/components/AppAlert.vue";
import AppLoader from "@/components/AppLoader.vue";
import axios from 'axios'

export default {
  data() {
    return {
      name: '',
      people: [],
      alert: null,
      loading: false
    }
  },
  mounted() {
    this.loadPeople();
  },
  methods: {
    async createPerson() {
      const response = await fetch('https://vue-example-a629d-default-rtdb.firebaseio.com/people.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: this.name
        })
      })

      const data = await response.json()
      this.people.push({
        firstName: this.name,
        id: data.name
      })
      this.name = ''
    },
    async loadPeople() {
      try {
        this.loading = true
        const {data} = await axios.get('https://vue-example-a629d-default-rtdb.firebaseio.com/people.json')
        if (!data){
          throw new Error('No person found')
        }
        this.people = Object.keys(data).map(key => {
          return {
            id: key,
            ...data[key]
          }
        })

      } catch (error) {
        this.alert = {
          type: 'danger',
          title: 'Ошибка',
          text: error.message,
        }
      }finally {
        this.loading = false
      }
    },
    async removePerson(id) {
        const name = this.people.find(person => person.id === id).firstName
        await axios.delete(`https://vue-example-a629d-default-rtdb.firebaseio.com/people/${id}.json`)
        this.people = this.people.filter(person => person.id !== id)
        this.alert = {
          type: 'primary',
          title: 'Успешно',
          text: `Пользователь ${name} удален`
        }
    }
  },
  components: {
    AppPeopleList, AppAlert, AppLoader
  }
}
</script>

<style lang="scss" scoped>

</style>