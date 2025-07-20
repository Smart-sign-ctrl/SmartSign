export default class Fonts {
  static FontFamily = {
    default: 'SF-Pro-Text',
    secondary: 'SF-Pro-Text',
  };

  static Type = {
    Black: 'Black',
    Bold: 'Bold',
    ExtraBold: 'ExtraBold',
    ExtraLight: 'ExtraLight',
    Medium: 'Medium',
    SamiBold: 'Semibold',
    Regular: 'Regular',
    Light: 'Light',
  };

  static Size = {
    xxxSmall: 11,
    xxSmall: 13,
    xSmall: 14,
    small: 15,
    normal: 17,
    medium: 19,
    large: 21,
    xLarge: 23,
    xxLarge: 28,
    xxxLarge: 31,
    huge: 34,
    xhuge: 37,
    xxhuge: 40,
    xxxhuge: 43,
  };

  static font = (
    fontFamily = Fonts.FontFamily.default,
    type = Fonts.Type.Regular,
  ) => {
    return {
      fontFamily: fontFamily + '-' + type,
    };
  };

  static Black = size => {
    return {
      ...Fonts.font(
        Fonts.FontFamily.default,
        Fonts.Type.Black,
        //size
      ),
    };
  };

  static ExtraBold = size => {
    return {
      ...Fonts.font(
        Fonts.FontFamily.default,
        Fonts.Type.ExtraBold,
        //size
      ),
    };
  };
  static ExtraLight = size => {
    return {
      ...Fonts.font(
        Fonts.FontFamily.default,
        Fonts.Type.ExtraLight,
        //size
      ),
    };
  };

  static Light = size => {
    return {
      ...Fonts.font(
        Fonts.FontFamily.default,
        Fonts.Type.Light,
        //size
      ),
    };
  };

  static Medium = size => {
    return {
      ...Fonts.font(
        Fonts.FontFamily.default,
        Fonts.Type.Medium,
        //size
      ),
    };
  };

  static Regular = size => {
    return {
      ...Fonts.font(
        Fonts.FontFamily.default,
        Fonts.Type.Regular,
        // size
      ),
    };
  };
  static SamiBold = size => {
    return {
      ...Fonts.font(
        Fonts.FontFamily.default,
        Fonts.Type.SamiBold,
        // size
      ),
    };
  };
  static Bold = size => {
    return {
      ...Fonts.font(
        Fonts.FontFamily.default,
        Fonts.Type.Bold,
        // size
      ),
    };
  };
}
