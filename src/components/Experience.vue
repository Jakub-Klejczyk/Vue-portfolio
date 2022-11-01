<script>
export default {
  name: "Experience",
  data() {
    return {
      change: false,
    };
  },
};
</script>

<template>
  <section>
    <div class="buttons">
      <button @click="change = false" :class="{ active: !change }">
        Doświadczenie zawodowe
      </button>
      <button @click="change = true" :class="{ active: change }">
        Edukacja
      </button>
    </div>
    <div class="experience" v-if="!change">
      <h2>Doświadczenie zawodowe</h2>
      <div class="container">
        <div class="item-experience">
          <p class="term">Lipiec 2021 - obecnie</p>
          <div class="item">
            <p>
              Stowarzyszenie Wspierania Inicjatyw Gospodarczych Delta Partner
            </p>
            <p>Młodszy specjalista ds. projektów</p>
            <ul>
              <li>Obsługa oraz utrzymanie firmowych stron internetowych</li>
              <li>Gromadzenie oraz analiza danych zastanych</li>
              <li>Przygotowywanie wizualizacji danych statystycznych</li>
              <li>Przygotowywanie dokumentów strategicznych w zespole</li>

              <li>Przygotowywanie dokumentów strategicznych w samodzielnie</li>

              <li>
                Reprezentowanie firmy w kraju na Sesjach Rady Gminy/Miasta,
                spotkaniach z klientami oraz warsztatach strategicznych
              </li>
              <li>
                Reprezentowanie firmy za granicą w ramach projektu europejskiego
                Silesia-Brandenburg Dual Education in Innovation
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="education" v-else>
      <h2>Edukacja</h2>
      <div class="container">
        <div class="item-eductaion">
          <p>Politechnika Śląska - 2022</p>
          <p>Zarządzanie projektami adaptacyjnymi</p>
        </div>
        <div class="item-eductaion">
          <p>First Certificate in English (B2) - 2018</p>
          <p>British Council Poland</p>
        </div>
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
  color: $primary;
}

.buttons {
  padding: 4rem;
  button {
    @include btn;
    width: auto;
    margin-right: 2rem;
  }
}

.active {
  color: $secondary !important;
  background-color: $primary !important;
}

h2 {
  font-size: 3rem;
  font-weight: 700;
  padding-bottom: 2rem;
  padding-left: 4rem;
}

.container {
  padding-inline: 4rem;
  width: 100%;
  .item-eductaion {
    display: flex;
    justify-content: space-between;
    height: 4rem;
    border-bottom: 1px solid $primary;
    margin-bottom: 2rem;
    p {
      width: 50%;
      font-size: 1.4rem;
    }
  }
  .item-experience {
    display: flex;
    border-bottom: 1px solid $primary;
    padding-bottom: 2rem;
    .term {
      width: 50%;
    }
    li {
      font-size: 1.4rem;
      padding-bottom: 0.5rem;
      margin-left: 2rem;
    }
    p {
      font-size: 1.6rem;
      font-weight: 700;
      padding-bottom: 1rem;
    }
  }
}
</style>
