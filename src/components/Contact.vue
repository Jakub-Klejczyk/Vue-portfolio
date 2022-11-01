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
    <h2>Kontakt</h2>
    <form action="">
      <input type="text" placeholder="Twój adres email" class="input-text" />
      <div class="middle-elems">
        <input type="text" placeholder="Twoje imię" class="input-middle" />
        <input
          type="text"
          placeholder="Twój numer telefonu"
          class="input-middle"
        />
      </div>
      <input type="text" placeholder="Temat" class="input-text" />
      <textarea
        placeholder="Twoja wiadomosć"
        name=""
        id=""
        cols="60"
        rows="10"
        class="input-text"
      ></textarea>
      <input type="submit" value="Wyślij" class="btn" />
    </form>
  </section>
</template>

<style lang="scss" scoped>
@import "../assets/main.scss";

section {
  margin-left: 8rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: $primary;
  height: 100vh;
  align-items: center;
  justify-content: center;

  color: $secondary;
  h2 {
    font-size: 3rem;
    font-weight: 700;
    padding-bottom: 2rem;
  }
  .input-text {
    width: 100%;
    padding: 1rem;
    margin-bottom: 1rem;
    color: $primary;
    border: none;
    font-size: 1rem;
    background-color: $secondary;
  }

  .middle-elems {
    display: flex;
    gap: 1rem;
    justify-content: space-between;
  }
  .input-middle {
    width: 50%;
    padding: 1rem;
    margin-bottom: 1rem;
    font-size: 1rem;
    color: $primary;
    background-color: $secondary;
    border: none;
  }

  .btn {
    @include btn;
    margin-top: 1rem;
  }
  form {
    text-align: center;
  }
}

input::placeholder,
textarea::placeholder {
  color: #265241d2;
}
</style>
