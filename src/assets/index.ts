import Colors from './colors';
import Fonts from './fonts';
import Images from './images';

class Themes {
    colors: Colors;
    images: Images;
    fonts: Fonts;
    constructor(color: Colors, font: Fonts, image: Images) {
        this.colors = color;
        this.fonts = font;
        this.images = image;
    }
    setAll(name: string) {
        this.colors.setThemes(name);
        this.fonts.setThemes(name);
        this.images.setThemes(name);
    }

    getColor(name: string) {
        return (theme: string) => {
            return this.colors.getColor(name, theme);
        };
    }

    getFont(name: string) {
        return this.fonts.getFont(name);
    }

    getImages(name: string) {
        return this.images.getImage(name);
    }
}

const image = new Images();
const font = new Fonts();
const color = new Colors();

const themes = new Themes(color, font, image);
export default themes;
