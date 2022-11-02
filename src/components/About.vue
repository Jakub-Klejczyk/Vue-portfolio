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
        Nazywam się Jakub Klejczyk. Jestem Web Developerem koncentrującym się na
        warstwie Front-endowej. Pracuje głównie przy wykorzystaniu Vue.js.
        Systematycznie staram się rozwijać swój stack technologiczny. Obecnie
        uczę się TypeScriptu, a w najbliższym czasie planuje doedukować się w
        zakresie tworzenia testów jednostkowych i end-to-end. Miałem również
        doczynienia z językiem PHP, zatem świat Back-endu nie jest mi całkowicie
        obcy. Chciałbym dalej rozwijać się w tworzeniu aplikacj webowych typu
        single page.
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
    animation: 1s ease-out ease_header;
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
    margin: 0;
    align-items: center;
    justify-content: center;
    overflow: auto;
    height: 90vh;
    padding-bottom: 2rem;
    padding-top: 38rem;
  }
}
</style>
