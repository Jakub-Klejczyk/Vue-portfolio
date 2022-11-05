import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import store from "./store/index";
import {
  faUserSecret,
  faHouse,
  faUser,
  faCode,
  faFolder,
  faEnvelope,
  faBriefcase,
  faPlay,
  faBars,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

import {
  faGithub,
  faHtml5,
  faNpm,
  faSass,
  faSquareJs,
  faVuejs,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faUserSecret,
  faHouse,
  faUser,
  faCode,
  faFolder,
  faEnvelope,
  faBriefcase,
  faGithub,
  faPlay,
  faBars,
  faVuejs,
  faSquareJs,
  faSass,
  faHtml5,
  faNpm,
  faGlobe
);

const app = createApp(App);

app.use(router).use(store).component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
