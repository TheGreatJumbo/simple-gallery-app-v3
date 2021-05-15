<template>
  <div class="text-center">
    <h1 class="card-title">Обо мне</h1>
    <p>Возраст: {{AGE()}} года</p>
    <p>Образование: среднее специальное, специальность: программирование в компьютерных системах</p>
    <p>Ключевые навыки: HTML/CSS | JavaScript ES6+ | Vue.js | Git</p>

    <hr>

    <h2 class="card-title">Подробнее о навыках</h2>
    <ul class="list-group">
      <li class="list-group-item">
        <strong>HTML/CSS</strong>
        <p>Умею применять технологии Flexbox, Grid, медиазапросы. Понимаю анимации и трансформации. Умею верстать адаптивно с помощью Bootstrap</p>
      </li>
      <li class="list-group-item">
        <strong>JavaScript</strong>
        <p>Знаком с современным синтаксисом EcmaScript 6 и новее. Умею работать с асинхронным кодом.</p>
      </li>
      <li class="list-group-item">
        <strong>Vue.js</strong>
        <p>Умею работать с последней 3й версией, пользоваться Vuex, Vue router, создавать приложения через Vue CLI</p>
      </li>
      <li class="list-group-item">
        <strong>А также</strong>
        <p>Знаю основы языков программирования C# и Python, основы СКВ Git, основы React.js</p>
      </li>
      <li class="list-group-item"></li>
    </ul>
  </div>
</template>

<script>
export default {
  setup() {
    const AGE = () => {
      const now = new Date()
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
      const birth = new Date(1998, 8, 11)
      const birthnow = new Date(today.getFullYear(), birth.getMonth(), birth.getDate())
      let age
      age = today.getFullYear() - birth.getFullYear();
      if (today < birthnow) age = age-1
      return age
    }
    return {
      AGE
    }
  }
}
</script>
