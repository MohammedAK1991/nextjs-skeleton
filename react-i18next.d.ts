// import the original type declarations
import 'react-i18next';
// import all namespaces (for the default language, only)
import common from './public/locales/en/common.json';

declare module 'react-i18next' {
    // and extend them!
    interface Resources {
        common: typeof common;
    }
}

declare module 'i18next-fs-backend';