<script>
export default {
  name: "Projects",
  data() {
    return {};
  },
};
</script>

<template>
  <section>
    <h2>Projekty</h2>
    <div class="container">
      <div class="item">
        <h3>Portal Shop</h3>
        <img
          src="../assets/portal-shop.png"
          alt="strona główna projektu Portal Shop"
        />
        <p>
          Projekt stanowi moje Opus Magnum. Do jego powstania wykorzystane
          zostały wszystkie technologie jakie udało mi się poznać. Portal Shop
          jest symulacją sklepu internetowego. Pozwala na stowrzenie konta
          użytkownika, zapoznanie się ze stroną główną oraz obsługę koszyka.
        </p>
        <p>Vue, Vuex, Vue-Router, TypeScript, Scss, Firebase</p>
        <div class="links">
          <a
            href="https://github.com/Jakub-Klejczyk/Opus-magnum.git"
            target="_blank"
            ><font-awesome-icon icon="fa-brands fa-github" class="icon"
          /></a>
          <a href="https://portal-shop-project.netlify.app/" target="_blank"
            ><font-awesome-icon icon="fa-solid fa-play" class="icon"
          /></a>
        </div>
      </div>
      <div class="item">
        <h3>Wyszukiwarka repozytoriów Github</h3>
        <img
          src="../assets/github.png"
          alt="strona główna projektu Portal Shop"
        />
        <p>
          Powstała w celu nauki obsługi REST API powszechnie wykorzystywanej w
          aplikacjach webowych.
        </p>
        <p>Vue, REST API</p>
        <div class="links">
          <a
            href="https://github.com/Jakub-Klejczyk/Wyszukiwarka-repozytori-w.git"
            target="_blank"
            ><font-awesome-icon icon="fa-brands fa-github" class="icon"
          /></a>
          <a href="https://wyszukiwarka-github.netlify.app" target="_blank"
            ><font-awesome-icon icon="fa-solid fa-play" class="icon"
          /></a>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "../assets/main.scss";

section {
  margin-left: 8rem;
  overflow: hidden;
  background-color: $secondary;
  height: 100vh;
  color: $primary;
  padding: 4rem;
  h2 {
    font-size: 3rem;
    font-weight: 700;
    padding-bottom: 2rem;
    animation: 1s ease-out ease_header;
  }
}

.container {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 10%;
  .item {
    max-width: 30rem;
    color: $secondary;
    background-color: $primary;
    min-height: 34rem;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    animation: 1s ease-out ease_item;
    h3 {
      text-align: center;
      font-size: 2rem;
      font-weight: 700;
    }
    img {
      width: 60%;
      display: block;
      margin: 0 auto;
    }
    p {
      font-size: 1.2rem;
      text-align: justify;
    }
    .links {
      display: flex;
      justify-content: space-between;
      .icon {
        width: 2rem;
        height: 2rem;
        color: $secondary;
      }
    }
  }
}

@media (max-width: 1150px) {
  section {
    margin: 0;
    align-items: center;
    justify-content: center;
    overflow: auto;
    height: 100%;
    padding-bottom: 2rem;
  }
  .container {
    flex-direction: column;
    gap: 2rem;
  }
}
</style>
