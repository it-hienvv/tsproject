import themese1 from './list/themes1';
import themese2 from './list/themes2';

const CONFIG = {
    themese1,
    themese2,
};
class Images {
    imageConfig = null;
    themese = null;
    constructor() {
        this.imageConfig = CONFIG;
        this.themese = 'themese1';
    }

    getImage(name) {
        return this.imageConfig[this.themese][name];
    }

    setThemes(name) {
        this.themese = name;
    }
}

export default Images;
