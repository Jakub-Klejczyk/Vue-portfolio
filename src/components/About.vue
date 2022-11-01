<script>
export default {
  name: "About",
  data() {
    return {};
  },
};
</script>

<template>
  <section>
    <h2>O mnie</h2>
    <div class="cointainer">
      <div class="elem-left"></div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        earum accusantium maxime possimus quae fugiat nisi est sequi, tenetur
        quod, aliquam deserunt dolor. Asperiores adipisci eveniet obcaecati
        accusantium dolore ex nesciunt autem.
      </p>
      <div class="elem-right"></div>
    </div>
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
  h2 {
    font-size: 3rem;
    font-weight: 700;
  }
  p {
    width: 60%;
    font-size: 1.4rem;
    border: 3px dashed $primary;
    padding: 2rem;
  }

  .cointainer {
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
  }
  .elem-right {
    width: 2rem;
    height: 2rem;
    background-color: $primary;
    position: relative;
    top: 50%;
    right: 1rem;
  }
}
</style>
