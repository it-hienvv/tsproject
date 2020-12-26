import Colors from './colors';
import Fonts from './fonts';
import Images from './images';
import I18nTran from './languages';

class Themes {
    colors = null;
    images = null;
    fonts = null;
    constructor(colors, fonts, images) {
        this.colors = colors;
        this.fonts = fonts;
        this.images = images;
    }
    setAll(name) {
        this.colors.setThemes(name);
        this.fonts.setThemes(name);
        this.images.setThemes(name);
    }

    getColor(name) {
        return (theme) => {
            return this.colors.getColor(name, theme);
        };
    }

    getFont(name) {
        return this.fonts.getFont(name);
    }

    getImages(name) {
        return this.images.getImage(name);
    }
}

const image = new Images();
const font = new Fonts();
const color = new Colors();

const themes = new Themes(color, font, image);
export default themes;
