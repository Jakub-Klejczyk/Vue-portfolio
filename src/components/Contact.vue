<script>
import emailjs from "@emailjs/browser";

export default {
  name: "About",
  data() {
    return {
      name: "",
      email: "",
      tel: "",
      subject: "",
      content: "",
      error: "",
      val: true,
    };
  },
  methods: {
    clearForm() {
      this.name = "";
      this.email = "";
      this.tel = "";
      this.subject = "";
      this.content = "";
    },
    onSubmit() {
      if (
        !this.email ||
        !this.name ||
        !this.tel ||
        !this.subject ||
        !this.content
      ) {
        this.error = "Nie uzupełniono formularza";
        setTimeout(() => {
          this.error = "";
        }, 5000);
        this.val = false;
        this.clearForm();
      }

      if (this.val && this.validateData(this.email)) {
        this.sendEmail();
      }
    },
    validateData(email) {
      const validateEmail = email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
      if (!validateEmail) {
        this.error = "Niepoprawny adres e-mail";
        setTimeout(() => {
          this.error = "";
        }, 5000);
        this.clearForm();
      } else {
        return true;
      }
    },
    sendEmail() {
      emailjs
        .send(
          "service_5nlq0ib",
          "template_1rymkcj",
          {
            from_name: this.name,
            to_name: "Jakub",
            from_tel: this.tel,
            topic: this.subject,
            message: this.content,
            from_email: this.email,
          },
          "h3nc2j5S2BOSG6LN3"
        )
        .then(
          (res) => {
            this.error = "Wysłano wiadomość. Dzięki!";
            setTimeout(() => {
              this.error = "";
            }, 5000);
          },
          (error) => {
            this.erro = "Coś poszło nie tak, spróbuj ponownie.";
            setTimeout(() => {
              this.error = "";
            }, 5000);
          }
        );

      this.clearForm();
    },
  },
};
</script>

<template>
  <section>
    <h2>Kontakt</h2>
    <form action="" @submit.prevent="onSubmit()">
      <input
        type="text"
        placeholder="Twój adres email"
        class="input-text"
        v-model="email"
      />
      <div class="middle-elems">
        <input
          type="text"
          placeholder="Twoje imię"
          class="input-middle"
          v-model="name"
        />
        <input
          type="text"
          placeholder="Twój numer telefonu"
          class="input-middle"
          v-model="tel"
        />
      </div>
      <input
        type="text"
        placeholder="Temat"
        class="input-text"
        v-model="subject"
      />
      <textarea
        placeholder="Twoja wiadomosć"
        name=""
        id=""
        cols="60"
        rows="10"
        class="input-text"
        v-model="content"
      ></textarea>
      <p>{{ error }}</p>
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
    animation: 1s ease-out ease_header;
  }

  form {
    animation: 1s ease-out ease_down;
  }
  .input-text {
    width: 100%;
    padding: 1rem;
    margin-bottom: 1rem;
    color: $primary;
    border: none;
    font-size: 1rem;
    background-color: $secondary;
    animation: 1.5s ease-out ease_inputs;
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
    animation: 1.5s ease-out ease_inputs;
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
textarea:focus,
input:focus {
  outline: none;
}

@media (max-width: 1150px) {
  section {
    margin: 0;
    align-items: center;
    justify-content: center;
    overflow: auto;
    height: 100%;
    padding: 2rem;
  }
  .middle-elems {
    flex-direction: column;
    gap: 0 !important;
    .input-middle {
      width: 100%;
      margin-bottom: 1rem;
    }
  }
}

@keyframes ease_inputs {
  0% {
    opacity: 0%;
  }
  100% {
    opacity: 100%;
  }
}
</style>
