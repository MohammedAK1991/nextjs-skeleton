import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import commonEN from '../public/locales/en/common.json';
import commonES from '../public/locales/es/common.json';

// the translations
const resources = {
    en: {
        common: commonEN
    }, 
    es: {
        common: commonES
    }
};

i18n
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        resources,
        ns: ['common'],
        defaultNS: 'common',
        fallbackLng: 'en',
        debug: true,
        interpolation: {
            escapeValue: false
        }
    });


export default i18n;