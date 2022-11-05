<script>
import { mapGetters, mapState } from "vuex";

export default {
  name: "Experience",
  data() {
    return {
      change: false,
      ang: this.getLang(),
      data: this.getDataFromExp(),
      header_exp: "",
      header_edu: "",
      job_time: "",
      job: "",
      duty1: "",
      duty2: "",
      duty3: "",
      duty4: "",
      duty5: "",
      duty6: "",
      duty7: "",
      edu1: "",
      edu2: "",
    };
  },
  methods: {
    ...mapGetters(["getDataFromExp", "getLang"]),

    render() {
      if (!this.ang) {
        this.header_exp = this.data.pol[0];
        this.header_edu = this.data.pol[10];
        this.job_time = this.data.pol[1];
        this.job = this.data.pol[2];
        this.duty1 = this.data.pol[3];
        this.duty2 = this.data.pol[4];
        this.duty3 = this.data.pol[5];
        this.duty4 = this.data.pol[6];
        this.duty5 = this.data.pol[7];
        this.duty6 = this.data.pol[8];
        this.duty7 = this.data.pol[9];
        this.edu1 = this.data.pol[11];
        this.edu2 = this.data.pol[12];
      } else {
        this.header_exp = this.data.ang[0];
        this.header_edu = this.data.ang[10];
        this.job_time = this.data.ang[1];
        this.job = this.data.ang[2];
        this.duty1 = this.data.ang[3];
        this.duty2 = this.data.ang[4];
        this.duty3 = this.data.ang[5];
        this.duty4 = this.data.ang[6];
        this.duty5 = this.data.ang[7];
        this.duty6 = this.data.ang[8];
        this.duty7 = this.data.ang[9];
        this.edu1 = this.data.ang[11];
        this.edu2 = this.data.ang[12];
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
    <div class="buttons">
      <button @click="change = false" :class="{ active: !change }">
        {{ header_exp }}
      </button>
      <button @click="change = true" :class="{ active: change }">
        {{ header_edu }}
      </button>
    </div>
    <div class="experience" v-if="!change">
      <h2>{{ header_exp }}</h2>
      <div class="container">
        <div class="item-experience">
          <p class="term">{{ job_time }}</p>
          <div class="item">
            <p>
              Stowarzyszenie Wspierania Inicjatyw Gospodarczych Delta Partner
            </p>
            <p>{{ job }}</p>
            <ul>
              <li>{{ duty1 }}</li>
              <li>{{ duty2 }}</li>
              <li>{{ duty3 }}</li>
              <li>{{ duty4 }}</li>

              <li>{{ duty5 }}</li>

              <li>
                {{ duty6 }}
              </li>
              <li>
                {{ duty7 }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="education" v-else>
      <h2>{{ header_edu }}</h2>
      <div class="container">
        <div class="item-eductaion">
          <p>Politechnika Śląska - 2021-2022</p>
          <p>
            {{ edu1 }}
          </p>
        </div>
        <div class="item-eductaion">
          <p>Akademia WSB Cieszyn - 2019-2021</p>
          <p>{{ edu2 }}</p>
        </div>
        <div class="item-eductaion">
          <p>First Certificate in English (B2) - 2018</p>
          <p>British Council Poland</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "../assets/main.scss";

section {
  margin-left: 8rem;
  background-color: $secondary;
  height: 100vh;
  color: $primary;
}

.buttons {
  padding: 4rem;
  animation: 1s ease-out ease_header;
  button {
    @include btn;
    width: auto;
    margin-right: 2rem;
  }
}

.active {
  color: $secondary !important;
  background-color: $primary !important;
}

h2 {
  font-size: 3rem;
  font-weight: 700;
  padding-bottom: 2rem;
  padding-left: 4rem;
  animation: 1s ease-out ease_header;
}

.container {
  padding-inline: 4rem;
  width: 100%;
  animation: 1s ease-out ease_down;
  .item-eductaion {
    display: flex;
    justify-content: space-between;
    height: 4rem;
    border-bottom: 1px solid $primary;
    margin-bottom: 2rem;
    p {
      width: 50%;
      font-size: 1.4rem;
    }
  }
  .item-experience {
    display: flex;
    border-bottom: 1px solid $primary;
    padding-bottom: 2rem;
    .term {
      width: 50%;
    }
    li {
      font-size: 1.4rem;
      padding-bottom: 0.5rem;
      margin-left: 2rem;
    }
    p {
      font-size: 1.6rem;
      font-weight: 700;
      padding-bottom: 1rem;
    }
  }
}

@media (max-width: 1150px) {
  section {
    margin: 0 0 0rem 0rem;
    align-items: center;
    justify-content: center;
    overflow: auto;
    height: 100vh;
    padding-block: 2rem;
  }
  .buttons {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 30rem;
  }
  .item-eductaion {
    flex-direction: column;
    height: auto !important;
    gap: 1rem;
    padding-bottom: 1rem;
  }
  .item-experience {
    flex-direction: column;
    height: auto !important;
  }
  h2 {
    padding-left: 2rem;
  }
}
</style>
