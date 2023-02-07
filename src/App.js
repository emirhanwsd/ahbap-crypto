import { BrowserRouter, Routes, Route } from "react-router-dom";
import { initReactI18next } from "react-i18next";
import i18n from "i18next";

import Home from "./pages/Home";

import languages from './assets/languages.json';

i18n.use(initReactI18next).init({
  ...languages,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

// TODO: i18n.languages

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:locale" element={<Home />} />
    </Routes>
  </BrowserRouter>
);

export default App;
