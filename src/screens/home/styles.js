import { StyleSheet } from 'react-native';
import { Colors } from '../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 100,
  },

  cellContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 12,
    marginTop: 16,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  textContainer: {
    padding: 16,
    paddingBottom: 100,
    flexGrow: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#00BFFF', // Logo blue
    padding: 12,
    borderRadius: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    shadowColor: '#00BFFF',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cyanCard: {
    backgroundColor: '#00DDEE', // Logo cyan
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
    backgroundColor: '#FFFFFF', // optional fallback
  },
  name: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 1,
  },
});
