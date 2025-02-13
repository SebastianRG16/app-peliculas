import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    gap: 8,
  },
  icon_top: {
    alignItems: 'flex-start',
  },
  icon_center: {
    alignItems: 'center',
  },
  center: {
    justifyContent: 'center',
  },
  start: {
    justifyContent: 'flex-start',
  },
  container_text: {
    display: 'flex',
    width: '100%',
  },
  text: {
    flexWrap: 'wrap',
    flexShrink: 1,
  },
  text_justify: {
    textAlign: 'justify',
  },
  text_center: {
    textAlign: 'center',
  },
  text_start: {
    textAlign: 'left',
  },
  color_primary: {
    color: '#000',
  },
  color_secondary: {
    color: '#FFF',
  },
  light: {
    fontWeight: 300,
  },
  regular: {
  },
  medium: {
    fontWeight: 500,
  },
  semibold: {
    fontWeight: 600,
  },
  bold: {
    fontWeight: 700,
  },
  size_sm: {
    fontSize: 12,
  },
  size_sm2: {
    fontSize: 14,
    lineHeight: 19,
  },
  size_sm3: {
    fontSize: 16,
    lineHeight: 22,
  },
  size_md: {
    fontSize: 18,
    lineHeight: 24,
  },
  size_md2: {
    fontSize: 20,
    lineHeight: 28,
  },
  size_lg: {
    fontSize: 22,
  },
  size_xl: {
    fontSize: 24,
  },
  size_xl1: {
    fontSize: 28,
    lineHeight: 32,
  },
  size_xl2: {
    fontSize: 32,
  },
  text_underline: {
    textDecorationLine: 'underline',
  },
});

export default styles;
