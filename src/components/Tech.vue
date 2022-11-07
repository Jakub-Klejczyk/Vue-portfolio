<script>
import { mapGetters, mapState } from "vuex";

export default {
  name: "Tech",
  data() {
    return {
      ang: this.getLang(),
      header: "",
      left: "",
      right: "",
      data: this.getDataFromTech(),
    };
  },
  methods: {
    ...mapGetters(["getDataFromTech", "getLang"]),

    render() {
      if (!this.ang) {
        this.header = this.data.pol[0];
        this.left = this.data.pol[1];
        this.right = this.data.pol[2];
      } else {
        this.header = this.data.ang[0];
        this.left = this.data.ang[1];
        this.right = this.data.ang[2];
      }
    },
  },
  computed: {
    ...mapState(["eng"]),
  },
  mounted() {
    this.render();
  },
  watch: {
    eng(newValue, oldValue) {
      this.ang = newValue;
      this.render();
    },
  },
};
</script>

<template>
  <section>
    <h2>{{ header }}</h2>
    <div class="container">
      <div class="list">
        <h3>{{ left }}:</h3>
        <ul>
          <li>
            Vue / Vuex / Vue Router
            <font-awesome-icon class="icon" icon="fa-brands fa-vuejs" />
          </li>
          <li>
            JavaScript (ES6+)
            <font-awesome-icon class="icon" icon="fa-brands fa-square-js" />
          </li>
          <li>REST API</li>
          <li>
            CSS / Sass
            <font-awesome-icon class="icon" icon="fa-brands fa-sass" />
          </li>
          <li>
            HTML <font-awesome-icon class="icon" icon="fa-brands fa-html5" />
          </li>
          <li>
            Git / Github
            <font-awesome-icon class="icon" icon="fa-brands fa-github" />
          </li>
          <li>
            Npm <font-awesome-icon class="icon" icon="fa-brands fa-npm" />
          </li>
          <li>Firebase</li>
          <li>Webpack</li>
          <li>Babel</li>
        </ul>
      </div>
      <div class="list">
        <h3>{{ right }}:</h3>
        <ul>
          <li>TypeScript</li>
          <li>Jest / Cypress</li>
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
    animation: 1s ease-out ease_header;
  }
  .list {
    animation: 1s ease-out ease_item;
    .icon {
      width: 2rem;
      height: 2rem;
    }
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

@media (max-width: 1150px) {
  section {
    margin: 0;
    align-items: center;
    justify-content: center;
    overflow: auto;
    height: 100%;
    padding-top: 1rem;
    padding-bottom: 2rem;
    h2 {
      padding-top: 2rem;
    }
  }

  .container {
    flex-direction: column;
    gap: 2rem;
  }
}
</style>
