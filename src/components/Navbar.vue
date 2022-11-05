<script>
export default {
  data() {
    return {
      active: false,
    };
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
  </nav>
  <font-awesome-icon
    icon="fa-solid fa-bars"
    class="hamburger"
    @click="active = !active"
  />
  <nav class="mobile" :class="{ 'active-nav': active }">
    <RouterLink
      @click="active = !active"
      class="link-mobile"
      :class="{ 'active-list': active }"
      to="/"
      id="li-one"
      >Strona główna</RouterLink
    >
    <RouterLink
      @click="active = !active"
      class="link-mobile"
      :class="{ 'active-list': active }"
      to="/about"
      id="li-two"
      >O mnie</RouterLink
    >
    <RouterLink
      @click="active = !active"
      class="link-mobile"
      :class="{ 'active-list': active }"
      to="/technology"
      id="li-three"
      >Technologie</RouterLink
    >
    <RouterLink
      @click="active = !active"
      class="link-mobile"
      :class="{ 'active-list': active }"
      to="/experience"
      id="li-four"
      >Doświadczenie</RouterLink
    >
    <RouterLink
      @click="active = !active"
      class="link-mobile"
      :class="{ 'active-list': active }"
      to="/projects"
      id="li-five"
      >Projekty</RouterLink
    >
    <RouterLink
      @click="active = !active"
      class="link-mobile"
      :class="{ 'active-list': active }"
      to="/contact"
      id="li-six"
      >Kontakt</RouterLink
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
