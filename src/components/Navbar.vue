<script>
import { mapMutations, mapGetters, mapState } from "vuex";
export default {
  data() {
    return {
      active: false,
      ang: this.getLang(),
      home: "",
      about: "",
      tech: "",
      exp: "",
      projects: "",
      contact: "",
      data: this.getDataFromNavbar(),
    };
  },

  methods: {
    ...mapMutations(["changeLang"]),
    ...mapGetters(["getDataFromNavbar", "getLang"]),

    render() {
      if (!this.ang) {
        this.home = this.data.pol[0];
        this.about = this.data.pol[1];
        this.tech = this.data.pol[2];
        this.exp = this.data.pol[3];
        this.projects = this.data.pol[4];
        this.contact = this.data.pol[5];
      } else {
        this.home = this.data.ang[0];
        this.about = this.data.ang[1];
        this.tech = this.data.ang[2];
        this.exp = this.data.ang[3];
        this.projects = this.data.ang[4];
        this.contact = this.data.ang[5];
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
  <nav class="desctop">
    <RouterLink to="/"
      ><font-awesome-icon icon="fa-solid fa-house" class="icon"
    /></RouterLink>
    <RouterLink to="/about"
      ><font-awesome-icon icon="fa-solid fa-user" class="icon"
    /></RouterLink>
    <RouterLink to="/technology"
      ><font-awesome-icon icon="fa-solid fa-code" class="icon"
    /></RouterLink>
    <RouterLink to="/experience"
      ><font-awesome-icon icon="fa-solid fa-briefcase" class="icon"
    /></RouterLink>
    <RouterLink to="/projects"
      ><font-awesome-icon icon="fa-solid fa-folder" class="icon"
    /></RouterLink>
    <RouterLink to="/contact"
      ><font-awesome-icon icon="fa-solid fa-envelope" class="icon"
    /></RouterLink>

    <font-awesome-icon
      icon="fa-solid fa-globe"
      class="icon"
      @click="changeLang"
    />
  </nav>
  <font-awesome-icon
    icon="fa-solid fa-bars"
    class="hamburger"
    @click="active = !active"
  />
  <font-awesome-icon
    icon="fa-solid fa-globe"
    class="lang"
    @click="changeLang"
  />
  <nav class="mobile" :class="{ 'active-nav': active }">
    <RouterLink
      @click="active = !active"
      class="link-mobile"
      :class="{ 'active-list': active }"
      to="/"
      id="li-one"
      >{{ home }}</RouterLink
    >
    <RouterLink
      @click="active = !active"
      class="link-mobile"
      :class="{ 'active-list': active }"
      to="/about"
      id="li-two"
      >{{ about }}</RouterLink
    >
    <RouterLink
      @click="active = !active"
      class="link-mobile"
      :class="{ 'active-list': active }"
      to="/technology"
      id="li-three"
      >{{ tech }}</RouterLink
    >
    <RouterLink
      @click="active = !active"
      class="link-mobile"
      :class="{ 'active-list': active }"
      to="/experience"
      id="li-four"
      >{{ exp }}</RouterLink
    >
    <RouterLink
      @click="active = !active"
      class="link-mobile"
      :class="{ 'active-list': active }"
      to="/projects"
      id="li-five"
      >{{ projects }}</RouterLink
    >
    <RouterLink
      @click="active = !active"
      class="link-mobile"
      :class="{ 'active-list': active }"
      to="/contact"
      id="li-six"
      >{{ contact }}</RouterLink
    >
  </nav>
</template>

<style lang="scss" scoped>
@import "../assets/main.scss";

.desctop {
  position: absolute;
  height: 100vh;
  width: 8rem;
  background-color: $primary;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}

.mobile {
  display: none;
}

.icon {
  width: 2rem;
  height: 2rem;
  color: $secondary;
  &:last-child {
    cursor: pointer;
  }
}
.lang {
  display: none;
}
.hamburger {
  display: none;
}

@media (max-width: 1150px) {
  .desctop {
    display: none;
  }

  .hamburger {
    display: block;
    position: absolute;
    z-index: 2;
    width: 3rem;
    height: 3rem;
    padding: 1rem;
    right: 0;
    color: $secondary;
  }

  .lang {
    display: block;
    position: absolute;
    z-index: 2;
    width: 3rem;
    height: 3rem;
    padding: 1rem;
    left: 0;
    color: $secondary;
  }

  .mobile {
    display: block;
    position: relative;
    width: 100vw;
    height: 10vh;
    top: 0;
    right: 0;
    background-color: $primary;

    .link-mobile {
      color: $secondary;
      text-decoration: none;
      font-size: 1.4rem;
      border: 3px solid $secondary;
      width: 90%;
      height: 10%;
      justify-content: center;
      align-items: center;
      display: none;
    }
    .active-list {
      display: flex;
    }
  }

  #li-one {
    animation: 0.4s ease-out ease_top;
  }

  #li-two {
    animation: 0.6s ease-out ease_top;
  }

  #li-three {
    animation: 0.8s ease-out ease_top;
  }

  #li-four {
    animation: 1s ease-out ease_top;
  }

  #li-five {
    animation: 1.2s ease-out ease_top;
  }

  #li-six {
    animation: 1.4s ease-out ease_top;
  }

  .active-nav {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    z-index: 1;
    position: absolute;
    height: 100vh;
    width: 100vw;
    padding-top: 10vh;
  }
}
</style>
