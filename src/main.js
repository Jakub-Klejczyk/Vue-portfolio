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

import { faGithub } from "@fortawesome/free-brands-svg-icons";

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
  faBars
);

const app = createApp(App);

app.use(router).component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
