import {Text, View} from 'react-native';
import styles from './Styles';
import {Center, Color, FontVariant, Size} from './types';
interface TextComProps {
  text: string | number;
  fontVariant?: FontVariant;
  color?: Color;
  size?: Size;
  center?: Center;
}

export const TextCom: React.FC<TextComProps> = ({
  text,
  fontVariant = 'regular',
  color = 'primary',
  size = 'md',
  center = 'start',
}) => {
  const fontStyles = {
    light: styles.light,
    regular: styles.regular,
    medium: styles.medium,
    semibold: styles.semibold,
    bold: styles.bold,
  };

  const sizeStyles = {
    sm3: styles.size_sm3,
    sm2: styles.size_sm2,
    sm: styles.size_sm,
    lg: styles.size_lg,
    md: styles.size_md,
    md2: styles.size_md2,
    xl: styles.size_xl,
    xl1: styles.size_xl1,
    xl2: styles.size_xl2,
  };
  const centerStyle = {
    center: styles.text_center,
    start: styles.text_start,
  };

  const centerContainerStyle = {
    center: styles.center,
    start: styles.start,
  };

  const colorStyles = {
    primary: styles.color_primary,
    secondary: styles.color_secondary,
  };

  return (
    <View style={[styles.container, centerContainerStyle[center]]}>
      <Text
        style={[
          styles.text,
          fontStyles[fontVariant as keyof typeof fontStyles],
          sizeStyles[size],
          colorStyles[color],
          centerStyle[center],
        ]}>
        {text}
      </Text>
    </View>
  );
};
