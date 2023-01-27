import 'styled-components';
import { defaultTheme } from '../components/styles/themes/defult';
type ThemeType = typeof defaultTheme;
declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType{}
}