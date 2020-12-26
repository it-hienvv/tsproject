import themese1 from './list/themes1';
import themese2 from './list/themes2';

const CONFIG = {
    themese1,
    themese2,
};
class Colors {
    colorConfig = null;
    themese = null;
    constructor() {
        this.colorConfig = CONFIG;
        this.themese = 'themese1';
    }

    getColor(name, themes) {
        return this.colorConfig[themes][name];
    }

    setThemes(name) {
        this.themese = name;
    }
}

export default Colors;
