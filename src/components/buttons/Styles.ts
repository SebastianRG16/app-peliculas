import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn_style: {
    borderRadius: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  btn_text: {
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 21.86,
  },
  textColorPrimary: {
    color: 'white',
  },
  textColorSecondary: {
    color: '#360D04',
  },
  buttonLoading: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    position: 'relative',
  },
  loading: {
    position: 'absolute',
    right: 20,
    width: 20,
  },
  primary: {
    backgroundColor: '#A83D1A',
  },
  succes: {
    backgroundColor: '#50B5D7',
  },
  warning: {
    backgroundColor: '#EE6F2D',
  },
  secondary: {
    backgroundColor: '#701E0C',
  },
  tertiary: {
    backgroundColor: '#360D04',
  },
  neutral: {
    backgroundColor: '#C4C4C4',
  },
  padding_sm: {
    padding: 8,
  },
  padding_lg: {
    padding: 16,
  },
  font_medium: {
    fontFamily: 'Manrope-Medium',
    fontWeight: 500,
  },
  font_bold: {
    fontFamily: 'Manrope-Bold',
    fontWeight: 700,
  },
  disabled: {
    opacity: 0.5,
  },
});

export default styles;
