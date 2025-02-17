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


export const Container = styled.View`
  flex: 1;
`;

export const Padding = styled.View`
  padding-vertical: 20px;
`;

export const Card = styled.View`
  margin-bottom: 20px;
  align-items: center;
  flex-direction: row;
  width: 100%;
  padding-horizontal: 4px;
  padding-vertical: 4px;
  border-color: #ccc;
  border-radius: 8px;
  background-color: #fff;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.2;
  shadow-radius: 4px;
  elevation: 5;
`;

export const Information = styled.View`
  gap: 10px;
  padding-horizontal: 20px;
  height: 100%;
`;

export const Image = styled.Image`
  width: 100px;
  height: 150px;
  border-radius: 10px;
`;

export const ButtonWrapper = styled.View`
  width: 200px;
`;

export const Description = styled.View`
  gap: 20px;
`;

export const Poster = styled.Image`
  width: 100%;
  height: 400px;
  resize-mode: cover;
`;

export const ButtonBackTo = styled.View`
  padding-horizontal: 10px;
  top: 40px;
`;

export const Text = styled.Text<TextProps>`
  color: ${({ color }: TextProps) => (color ? colorTheme[color] : colorTheme.primary)};
  font-size: ${({ size }: TextProps) =>(size ? fontSizes[size] : fontSizes.md)};
  font-weight: ${({ fontVariant }: TextProps) => ( fontVariant ? fontTheme[fontVariant] : fontTheme.medium)};
  text-align: ${({ center }: TextProps) => (center ? alingTheme[center] : alingTheme.start)};
`;

