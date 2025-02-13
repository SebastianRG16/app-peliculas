import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  navbar: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  containerSecondarys: {
    marginVertical: 20,
  },
  button: {
    marginRight: 10,
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  buttonSelected: {
    backgroundColor: '#ddd',
  },
  buttonUnselected: {
    backgroundColor: '#f4f4f4',
  },
  buttonText: {
    fontSize: 16,
  },
  colorButton: {
    width: 40,
    height: 40,
    marginRight: 10,
    borderRadius: 5,
  },
  selectedColorButton: {
    borderWidth: 2,
    borderColor: '#000',
  },
});

export default styles;
