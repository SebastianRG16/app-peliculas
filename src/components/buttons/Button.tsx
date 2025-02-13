import {Text, TouchableOpacity, View, ActivityIndicator} from 'react-native';
import {useThemeStore} from '../../storage/storage';
import styles from './Styles';
import {Font, Padding, TextColor, Type} from './types';

interface ButtonProps {
  onPress: () => void;
  text: string;
  type?: Type;
  font?: Font;
  padding?: Padding;
  loading?: boolean;
  disabled?: boolean;
  textColor?: TextColor;
  buttonColor?: string;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  type,
  padding = 'sm',
  font = 'medium',
  textColor = 'primary',
  onPress,
  loading = false,
  disabled = false,
  buttonColor,
}) => {
  const buttonType = useThemeStore(state => state.buttonType);

  const appliedType = type || buttonType;

  const typeStyles = {
    primary: styles.primary,
    succes: styles.succes,
    warning: styles.warning,
    secondary: styles.secondary,
    tertiary: styles.tertiary,
    neutral: styles.neutral,
  };

  const paddingStyles = {
    sm: styles.padding_sm,
    lg: styles.padding_lg,
  };

  const fontStyles = {
    medium: styles.font_medium,
    bold: styles.font_bold,
  };

  const textColorStyles = {
    primary: styles.textColorPrimary,
    secondary: styles.textColorSecondary,
  };

  const dynamicButtonStyles = [
    styles.btn_style,
    typeStyles[appliedType],
    loading || disabled ? styles.disabled : {},
    buttonColor ? {backgroundColor: buttonColor} : {},
  ];

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={dynamicButtonStyles}
        onPress={onPress}
        disabled={loading || disabled}>
        {loading ? (
          <View style={styles.buttonLoading}>
            <Text
              style={[
                styles.btn_text,
                textColorStyles[textColor],
                paddingStyles[padding],
                fontStyles[font],
              ]}>
              {text}
            </Text>
            <ActivityIndicator
              style={styles.loading}
              size="small"
              color="white"
            />
          </View>
        ) : (
          <>
            <Text
              style={[
                styles.btn_text,
                textColorStyles[textColor],
                paddingStyles[padding],
                fontStyles[font],
              ]}>
              {text}
            </Text>
          </>
        )}
      </TouchableOpacity>
    </View>
  );
};
