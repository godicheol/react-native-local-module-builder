import {
    Platform,
    useColorScheme,
    useWindowDimensions,
    PixelRatio,
    Animated,
    Appearance,
} from 'react-native';

export function isPad() {
    return Platform.OS === "ios" && Platform.isPad;
}
export function isTV() {
    return Platform.isTV;
}
export function isTesting() {
    return Platform.isTesting;
}
export function getOs() {
    return Platform.OS;
}
export function getOsVersion() {
    return Platform.Version;
}
export function addKeyboardDidShow(func) {
    return Keyboard.addListener("keyboardDidShow", func);
}
export function removeKeyboardDidShow(e) {
    return e.remove();
}
export function addKeyboardDidHide(func) {
    return Keyboard.addListener("keyboardDidHide", func);
}
export function removeKeyboardDidHide(e) {
    return e.remove();
}
export function closeKeyboard() {
    return Keyboard.dismiss();
}
export function getColorScheme() {
    return useColorScheme();
    // return Appearance.getColorScheme();
}
export function getWindowDimensions() {
    return useWindowDimensions();
}
export function getPixelSize(n) {
    return PixelRatio.getPixelSizeForLayoutSize(n);
}
export function initAnimation(n) {
    return new Animated.Value(n || 0);
}
export function initAnimationXY(x, y) {
    return new Animated.ValueXY({x: x || 0, y: y || 0});
}
export function addColorChange(func) {
    return Appearance.addChangeListener(func);
}
export function removeColorChange(e) {
    return Appearance.removeChangeListener(e);
}