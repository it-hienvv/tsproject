import themese1 from './list/themes1';
import themese2 from './list/themes2';

const CONFIG = {
    themese1,
    themese2,
};
class Fonts {
    fontsConfig = null;
    themese = null;
    constructor() {
        this.fontsConfig = CONFIG;
        this.themese = 'themese1';
    }

    getFont(name) {
        return this.fontsConfig[this.themese][name];
    }

    setThemes(name) {
        this.themese = name;
    }
}

export default Fonts;
