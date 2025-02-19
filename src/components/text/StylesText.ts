import styled from 'styled-components/native';
import { theme } from '../../theme/theme';

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
  xl2: theme.sizes.xl2,
  xl: theme.sizes.xl,
  lg: theme.sizes.lg,
  md: theme.sizes.md,
  sm3: theme.sizes.sm3,
  sm: theme.sizes.sm,
};

const colorTheme = {
  primary: theme.color.black,
  secondary: theme.color.white,
};

const fontTheme = {
  bold: theme.font.bold,
  medium: theme.font.medium,
};

const alingTheme = {
  center: theme.aling.center,
  start: theme.aling.start,
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
