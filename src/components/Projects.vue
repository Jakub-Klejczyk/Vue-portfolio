<script>
import { mapGetters, mapState } from "vuex";

export default {
  name: "Projects",
  data() {
    return {
      header: "",
      portal_decs: "",
      git_header: "",
      git_desc: "",
      ang: this.getLang(),
      data: this.getDataFromProjects(),
    };
  },
  methods: {
    ...mapGetters(["getDataFromProjects", "getLang"]),

    render() {
      if (!this.ang) {
        this.header = this.data.pol[0];
        this.portal_decs = this.data.pol[1];
        this.git_header = this.data.pol[2];
        this.git_desc = this.data.pol[3];
      } else {
        this.header = this.data.ang[0];
        this.portal_decs = this.data.ang[1];
        this.git_header = this.data.ang[2];
        this.git_desc = this.data.ang[3];
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
      <div class="item">
        <h3>Portal Shop</h3>
        <img
          src="../assets/portal-shop.png"
          alt="strona główna projektu Portal Shop"
        />
        <p>
          {{ portal_decs }}
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
        <h3>{{ git_header }}</h3>
        <img
          src="../assets/github.png"
          alt="strona główna projektu Portal Shop"
        />
        <p>
          {{ git_desc }}
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
