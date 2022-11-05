import { createStore } from "vuex";

const store = createStore({
  state: {
    eng: false,
    fold: {
      pol: ["Pobierz CV", "Wyślij wiadomość"],
      ang: ["Download CV", "Send a message"],
    },
    contact: {
      pol: [
        "Kontakt",
        "Twój adres email",
        "Twoje imię",
        "Twój numer telefonu",
        "Temat",
        "Twoja wiadomosć",
        "Wyślij",
      ],
      ang: [
        "Contact",
        "Your email adress",
        "Your name",
        "Your phone number",
        "Topic",
        "Your message",
        "Send",
      ],
    },
    tech: {
      pol: ["Technologie", "Znane", "Uczę się"],
      ang: ["Tech stack", "Well known", "Learning"],
    },
    navbar: {
      pol: [
        "Strona główna",
        "O mnie",
        "Technologie",
        "Doświadczenie",
        "Projekty",
        "Kontakt",
      ],
      ang: [
        "Home page",
        "About",
        "Tech stack",
        "Experience",
        "Projects",
        "Contact",
      ],
    },
    about: {
      pol: [
        "O mnie",
        "Nazywam się Jakub Klejczyk. Jestem Web Developerem koncentrującym się na warstwie Front-endowej. Pracuje głównie przy wykorzystaniu Vue.js. Systematycznie staram się rozwijać swój stack technologiczny. Obecnie uczę się TypeScriptu, a w najbliższym czasie planuje doedukować się w zakresie tworzenia testów jednostkowych i end-to-end. Miałem również doczynienia z językiem PHP, zatem świat Back-endu nie jest mi całkowicie obcy. Chciałbym dalej rozwijać się w tworzeniu aplikacji webowych typu single page.",
      ],
      ang: [
        "About",
        "Jakub Klejczyk - Web Developer focused on the Front-end side of application. Mainly I work in Vue.js. Systematically I am trying to develop my technology stack. Currently I am learing TypeScript and in the near future I plan to learn unit and end-to-end test. I had contanct with PHP, so server side is not completely unfamiliar for me. I would like to improve in developing single page web application.",
      ],
    },
    projects: {
      pol: [
        "Projekty",
        "Projekt stanowi moje Opus Magnum. Do jego powstania wykorzystane zostały wszystkie technologie jakie udało mi się poznać. Portal Shop jest symulacją sklepu internetowego. Pozwala na stowrzenie konta użytkownika, zapoznanie się ze stroną główną oraz obsługę koszyka.",
        "Wyszukiwarka repozytoriów Github",
        "Powstała w celu nauki obsługi REST API powszechnie wykorzystywanej w aplikacjach webowych.",
      ],
      ang: [
        "Projects",
        "Project is my Opus Magnum. To create it I used all technologies that I learned. Portal Shop is a simulation of an online store. Project allows you to create a user account, familiarize yourself with the home page and manage the cart.",
        "Github repository search engine",
        "I created this project to learn how to use REST API which is commonly used in web application.",
      ],
    },
    exp: {
      pol: [
        "Doświadczenie zawodowe",
        "Lipiec 2021 - obecnie",
        "Młodszy specjalista ds. projektów",
        "Obsługa oraz utrzymanie firmowych stron internetowych",
        "Gromadzenie oraz analiza danych zastanych",
        "Przygotowywanie wizualizacji danych statystycznych",
        "Przygotowywanie dokumentów strategicznych w zespole",
        "Przygotowywanie dokumentów strategicznych samodzielnie",
        "Reprezentowanie firmy w kraju na Sesjach Rady Gminy/Miasta, spotkaniach z klientami oraz warsztatach strategicznych",
        "Reprezentowanie firmy za granicą w ramach projektu europejskiego Silesia-Brandenburg Dual Education in Innovation",
        "Edukacja",
        "Zarządzanie projektami adaptacyjnymi - tytuł licencjata",
        "Studia menadżerskie",
      ],
      ang: [
        "Experience",
        "July 2021 - present",
        "Junior Projects Specialist",
        "Support and maintance of corporate websites",
        "Existing data gathering and analysis",
        "Preperation and visualizaition of statistics",
        "Strategic documents development in a team",
        "Strategic documents development independently",
        "Representing the company in the country at Sessions of the Commune Council, meetings with clients and strategic workshops",
        "Representing the company abroad in European project Silesia-Brandenburg Dual Education in Innovation",
        "Education",
        "Agile project management - bachelor's degree",
        "Managerial studies",
      ],
    },
  },
  mutations: {
    changeLang(state) {
      state.eng = !state.eng;
    },
  },
  getters: {
    getDataFromFold(store) {
      return store.fold;
    },
    getDataFromContact(store) {
      return store.contact;
    },
    getDataFromTech(store) {
      return store.tech;
    },
    getDataFromNavbar(store) {
      return store.navbar;
    },
    getDataFromAbout(store) {
      return store.about;
    },
    getDataFromProjects(store) {
      return store.projects;
    },
    getDataFromExp(store) {
      return store.exp;
    },
    getLang(store) {
      return store.eng;
    },
  },
});

export default store;
