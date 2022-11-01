<script>
export default {
  name: "Tech",
  data() {
    return {};
  },
};
</script>

<template>
  <section>
    <h2>Technologie</h2>
    <div class="container">
      <div class="list">
        <h3>Znane:</h3>
        <ul>
          <li>Vue / Vuex / Vue Router</li>
          <li>JavaScript (ES6+)</li>
          <li>REST API</li>
          <li>CSS / Sass</li>
          <li>HTML</li>
          <li>Git / Github</li>
          <li>Npm</li>
          <li>Firebase</li>
          <li>Webpack</li>
          <li>Babel</li>
        </ul>
      </div>
      <div class="list">
        <h3>Uczę się:</h3>
        <ul>
          <li>TypeScript</li>
          <li>Cypress</li>
          <li>PHP</li>
          <li>MySQL</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "../assets/main.scss";

section {
  margin-left: 8rem;
  background-color: $secondary;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: $primary;
  h2 {
    font-size: 3rem;
    font-weight: 700;
    padding-bottom: 2rem;
  }
}
.container {
  display: flex;
  justify-content: space-between;
  gap: 20rem;
  h3 {
    font-size: 2rem;
    font-weight: 700;
    padding-bottom: 2rem;
  }
  li {
    font-size: 1.4rem;
    padding-bottom: 1rem;
    margin-left: 2rem;
  }
}
</style>
