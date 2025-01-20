// src/LanguageContext.js
import { createContext } from "react";

const LanguageContext = createContext({
  isEnglish: true,
  toggleLanguage: () => {},
});

export default LanguageContext;
