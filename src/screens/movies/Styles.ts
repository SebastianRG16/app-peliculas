import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  padding: {
    paddingVertical: 20,
  },
  card: {
    marginBottom: 20,
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 4,
    paddingVertical: 4,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  information: {
    gap: 10,
    paddingHorizontal: 20,
    height: '100%',
  },
  image: {
    width: 100,
    height: 150,
    borderRadius: 10,
  },
  button: {
    width: 200
  },
  description: {
    gap: 20,
  },
  poster: {
    width: '100%',
    height: 400,
    resizeMode: 'cover',
  },
  buttonBackTo: {
    paddingHorizontal: 10,
    top: 40
  }
});

export default styles;
