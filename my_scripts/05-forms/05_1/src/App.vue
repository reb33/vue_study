<template>
  <div class="container">
    <form class="card" @submit.prevent="submitForm">
      <h1>Анкета на Vue разработчика!</h1>
      <app-input
          placeholder="Введите имя"
          :error="errors.name"
          label="Как тебя зовут?"
          v-model:value="name">
      </app-input>

      <div class="form-control">
        <label for="age">Выбери возраст</label>
        <input
            type="number"
            id="age"
            v-model.number="age"
            max="70">
      </div>

      <div class="form-control">
        <label for="city">Твой город</label>
        <select id="city" v-model="city">
          <option value="spb">Санкт-Петербург</option>
          <option value="msk">Москва</option>
          <option value="kzn">Казань</option>
          <option selected value="nsk">Новосибирск</option>
        </select>
      </div>

      <div class="form-checkbox">
        <span class="label">Готов к переезду в Токио?</span>
        <div class="checkbox">
          <label><input type="radio" v-model="relocate" name="trip" value="yes"/> Да</label>
        </div>

        <div class="checkbox">
          <label><input type="radio" v-model="relocate" name="trip" value="no"/> Нет</label>
        </div>
      </div>

      <div class="form-checkbox">
        <span class="label">Что знаешь во Vue?</span>
        <div class="checkbox">
          <label><input type="checkbox" v-model="skills" value="vuex" name="skills"/> Vuex</label>
        </div>
        <div class="checkbox">
          <label><input type="checkbox" v-model="skills" value="cli" name="skills"/> Vue CLI</label>
        </div>
        <div class="checkbox">
          <label><input type="checkbox" v-model="skills" value="router" name="skills"/> Vue Router</label>
        </div>
      </div>

      <div class="form-checkbox">
        <span class="label">Согласие</span>
        <div class="checkbox">
          <input type="checkbox" v-model="agree"/>
        </div>
      </div>

      <button type="submit" class="btn primary">Отправить</button>
    </form>
  </div>
</template>

<script>
import AppInput from "@/AppInput.vue";
export default {
  data () {
    return {
      name: '',
      age: 23,
      city: 'spb',
      relocate: 'yes',
      skills: [],
      agree: false,
      errors: {
        name: null
      }
    }
  },
  methods: {
    formIsValid () {
      let isValid = true;
      if (this.name.length === 0 ){
        this.errors.name = 'Заполните поле Имя'
        isValid = false
      } else {
        this.errors.name = null
      }
      return isValid
    },
    submitForm(){
      if (this.formIsValid()) {
        console.group('form data')
        console.log('Name ', this.name)
        console.log('Age ', this.age)
        console.log('City ', this.city)
        console.log('Relocate ', this.relocate)
        console.log('Skills ', this.skills)
        console.log('Agree ', this.agree)
        console.groupEnd()
      }
    }
  },
  components: {
    AppInput
  }
}
</script>

<style>
  .form-control small {
    color: red;
  }

  .form-control.invalid input{
    border-color: red;
  }
</style>
