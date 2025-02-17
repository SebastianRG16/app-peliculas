import styled from 'styled-components/native';

type SizeKey = keyof typeof fontSizes;
type ColorKey = keyof typeof colorTheme;
type FontVariantKey = keyof typeof fontTheme;
type AlignKey = keyof typeof alingTheme;

interface TextProps {
  color?: ColorKey;
  size?: SizeKey;
  fontVariant?: FontVariantKey;
  center?: AlignKey;
}

const fontSizes = {
  xl2: 32,
  xl: 28,
  lg: 24,
  md: 18,
  sm3: 14,
  sm: 12,
};

const colorTheme = {
  primary: 'black',
  secondary: 'white',
};

const fontTheme = {
  bold: 'bold',
  medium: 'medium',
};

const alingTheme = {
  center: 'center',
  start: 'start',
};

export const Text = styled.Text<TextProps>`
  color: ${({color}: TextProps) =>
    color ? colorTheme[color] : colorTheme.primary};
  font-size: ${({size}: TextProps) => (size ? fontSizes[size] : fontSizes.md)};
  font-weight: ${({fontVariant}: TextProps) =>
    fontVariant ? fontTheme[fontVariant] : fontTheme.medium};
  text-align: ${({center}: TextProps) =>
    center ? alingTheme[center] : alingTheme.start};
`;
