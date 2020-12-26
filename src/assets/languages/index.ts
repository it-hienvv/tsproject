import I18nTran from 'i18n-js';
import vi from './list/vi';
import en from './list/en';

class Translate {
    i18n = null;
    language = 'vi';
    constructor(i18) {
        this.i18n = i18;
        this.i18n.fallbacks = true;
        this.i18n.defaultLocale = this.language;
        this.i18n.locale = this.language;
        this.i18n.missingTranslation = function () {
            return null;
        };
        this.i18n.translations = {
            vi: vi,
            'vi-VN': vi,
            'en-GB': en,
            en: en,
        };
    }

    setLanguage(lang) {
        this.language = lang;
        this.i18n.fallbacks = true;
        this.i18n.defaultLocale = this.language;
        this.i18n.locale = this.language;
    }

    translate({key, option, locale}) {
        return this.i18n.t(key, option, {
            locale,
        });
    }

    getLanguage() {
        return this.language;
    }
}

export default new Translate(I18nTran);
