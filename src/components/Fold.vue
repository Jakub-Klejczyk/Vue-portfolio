<script>
import { mapGetters, mapState } from "vuex";
import CV from "../assets/CVJakubKlejczyk.pdf";

export default {
  name: "Fold",
  data() {
    return {
      cv: CV,
      ang: this.getLang(),
      msg: "",
      btn: "",
      data: this.getDataFromFold(),
    };
  },
  methods: {
    ...mapGetters(["getDataFromFold", "getLang"]),

    render() {
      if (!this.ang) {
        this.btn = this.data.pol[0];
        this.msg = this.data.pol[1];
      } else {
        this.btn = this.data.ang[0];
        this.msg = this.data.ang[1];
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
  <section id="section">
    <div class="logo">
      <img src="../assets/logo-jasno-zielone.svg" alt="logo Jakub Klejczyk" />
    </div>
    <div class="item">
      <img
        class="dark-logo"
        src="../assets/logo-ciemno-zielone.svg"
        alt="logo Jakub Klejczyk"
      />
      <div class="text">
        <h1>Jakub Klejczyk</h1>
        <h3>Front-end Developer</h3>
      </div>
      <div class="goto">
        <a class="link" :href="cv" target="_blank" :key="btn">{{ btn }}</a>
        <RouterLink class="link" to="/contact">{{ msg }}</RouterLink>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "../assets/main.scss";

section {
  margin-left: 8rem;
  overflow: hidden;
  display: flex;
  background-color: $secondary;
}

.logo {
  background-color: $primary;
  width: 50%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 26rem;
    overflow: hidden;
    animation: 2s ease-out ease_item;
  }
}

.item {
  width: 50%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .dark-logo {
    display: none;
  }

  .text {
    color: $primary;
    margin-bottom: 1rem;
    padding-inline: 2rem;
    border-left: 3px solid $primary;
    animation: 3s ease-out ease_hight;
    h1 {
      font-size: 4rem;
      animation: 1s ease-out ease_right;
    }
    h3 {
      font-size: 2rem;
      font-weight: 500;
      animation: 1.6s ease-out ease_right;
    }
  }
  .goto {
    margin-top: 1rem;
    display: flex;
    gap: 2rem;
    animation: 1s ease-out ease_down;
    button {
      @include btn;
    }
  }
}
.link {
  color: $primary;
  text-decoration: none;
  text-align: center;
  @include btn;
}
@media (max-width: 1150px) {
  .logo {
    display: none;
  }

  section {
    margin-left: 0rem;
    align-items: center;
    justify-content: center;
  }

  .item {
    width: 100%;
    height: 90vh;
    .dark-logo {
      display: block;
      width: 6rem;
      padding-bottom: 2rem;
      animation: 2s ease-out ease_item;
    }
    .goto {
      flex-direction: column;
    }
  }
}

@media (max-width: 650px) {
  .text {
    text-align: center;
    border-left: none !important;
    border-bottom: 3px solid $primary;
  }

  h1 {
    font-size: 3rem !important;
  }
  h3 {
    font-size: 2rem !important;
    font-weight: 500;
    padding-bottom: 1rem;
  }
}
</style>
