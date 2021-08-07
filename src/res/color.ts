// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const hexToRGB = (hex = '#000000', alpha: number) => {
  if (hex.includes('#')) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
      return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
    } else {
      return 'rgb(' + r + ', ' + g + ', ' + b + ')';
    }
  } else {
    const hexSplit = hex.split(',');
    if (hexSplit.length === 4 || hexSplit.length === 3) {
      let color = '';

      color += hexSplit[0];
      color += ',';
      color += hexSplit[1];
      color += ',';
      color += hexSplit[2];
      color += ',';
      color += alpha;
      color += ')';

      return color;
    }
  }
};

const color: Color = {
  // theme primary color
  primary: '#7438AD',
  primary90: '#8c5bba',
  primary110: '#68329C',
  //theme secondary color
  secondary: '#C18EF3',
  secondary90: '#C799F4',
  //theme tertiary color
  tertiary: '#6BCEAF',
  white1: '#FFF',
  //font colors
  fontPrimary: '#333333',
  fontSecondary: '#25395B',
  fontTertiary: '#3C4043',
  fontColor1: '#0057E9',

  // generic colors with combinations
  black: '#000000',
  black1: '#333333',
  black2: '#666666',

  white: '#FFFFFF',
  green: '#7FBB17',
  red: '#E26161',

  //informative/action colors
  danger: '#FC4E4E',
  success: '#92FC5B',
  warning: '#FDC500',
  info: '#5890FF',

  //used gray code
  gray1: '#151522',
  gray2: '#5A5858',
  gray3: '#808080',
  gray4: '#999999',
  gray5: '#F0F0F0',
};
export interface Color {
  //theme color
  primary: string;
  primary90: string;
  primary110: string;
  secondary: string;
  secondary90: string;
  tertiary: string;

  // //combination of theme color
  // primary_110: string;
  // primary_90: string;
  // primary_10: string;
  // primary_5: string;

  //fonts color
  fontPrimary: string;
  fontSecondary: string;
  fontTertiary: string;
  fontColor1: string;

  // generic colors with combinations
  black: string;
  black1: string;
  black2: string;

  white: string;
  white1: string;

  green: string;
  red: string;

  // informative/action colors
  danger: string;
  success: string;
  warning: string;
  info: string;

  //gray color code
  gray1: string;
  gray2: string;
  gray3: string;
  gray4: string;
  gray5: string;
}

export default color;
