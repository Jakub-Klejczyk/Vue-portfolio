<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <nav>
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
</template>

<style lang="scss" scoped>
@import "../assets/main.scss";

nav {
  position: absolute;
  height: 100vh;
  width: 8rem;
  background-color: $primary;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}

.icon {
  width: 2rem;
  height: 2rem;
  color: $secondary;
}
</style>
