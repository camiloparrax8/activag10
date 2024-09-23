import translations from '../utils/translations.json';

//function to get language
export const getLanguage = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
      return localStorage.getItem('language') || 'es';
    }
    return 'es';
  };
  
  //function to set language
  export const setLanguage = (language) => {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('language', language);
      window.location.reload(); 
    }
  };

  //function to get translation
  export const getTranslation = (language, key) => {
    const keys = key.split('.');
    let result = translations[language];
    keys.forEach(subKey => {
      result = result ? result[subKey] : null;
    });
    return result || '';
  };