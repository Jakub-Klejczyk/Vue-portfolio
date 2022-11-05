<script>
import { mapGetters, mapState } from "vuex";

export default {
  name: "About",
  data() {
    return {
      ang: this.getLang(),
      data: this.getDataFromAbout(),
      header: "",
      text: "",
    };
  },
  methods: {
    ...mapGetters(["getDataFromAbout", "getLang"]),

    render() {
      if (!this.ang) {
        this.header = this.data.pol[0];
        this.text = this.data.pol[1];
      } else {
        this.header = this.data.ang[0];
        this.text = this.data.ang[1];
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
      <div class="elem-left"></div>
      <p>
        {{ text }}
      </p>
      <div class="elem-right"></div>
    </div>
    <img src="../assets/logo-ciemno-zielone.svg" alt="" />
  </section>
</template>

<style lang="scss" scoped>
@import "../assets/main.scss";

section {
  margin-left: 8rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: $secondary;
  height: 100vh;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  color: $primary;

  img {
    width: 16rem;
    animation: 2s ease-out ease_item;
    float: right;
  }

  h2 {
    font-size: 3rem;
    font-weight: 700;
    animation: 1s ease-out ease_header;
  }
  p {
    width: 60%;
    font-size: 1.4rem;
    border: 3px dashed $primary;
    padding: 2rem;
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .elem-left {
    width: 2rem;
    height: 2rem;
    background-color: $primary;
    position: relative;
    top: -50%;
    right: -1rem;
    animation: rotation 2s infinite ease-in-out;
  }
  .elem-right {
    width: 2rem;
    height: 2rem;
    background-color: $primary;
    position: relative;
    top: 50%;
    right: 1rem;
    animation: rotation 2s infinite ease-in-out;
  }
}

@media (max-width: 1150px) {
  section {
    justify-content: flex-start;
    margin: 0;
    align-items: center;
    overflow: auto;
    padding-bottom: 2rem;

    h2 {
      padding-top: 2rem;
    }
  }
}
</style>
