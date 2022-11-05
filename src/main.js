import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
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
} from "@fortawesome/free-solid-svg-icons";

import {
  faGithub,
  faHtml5,
  faNpm,
  faPhp,
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
  faPhp
);

const app = createApp(App);

app.use(router).component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
