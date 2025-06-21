import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  weatherContainer: {
    alignItems: 'center',
  },
  weatherDescription: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 10,
  },
  temperature: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  input: {
    backgroundColor: '#888',
    padding: 10,
    marginTop: 20,
    borderRadius: 10,
    width: '80%',
    textAlign: 'left',
    color: '#fff',
  },
});
