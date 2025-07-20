import {StyleSheet} from 'react-native';
import Colors from './Colors';
import Metrics from './Metrics';

export default StyleSheet.create({
  flex: {
    flex: 1,
  },
  htmlContainer: {
    marginTop: -Metrics.doubleBaseMargin,
    paddingBottom: Metrics.doubleBaseMargin,
  },
  textCenter: {
    textAlign: 'center',
  },
  centerAligned: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  percent100: {
    width: '100%',
    height: '100%',
  },
  flexRow: {
    flexDirection: 'row',
  },
  iconTabBar: {
    width: 28,
    height: 28,
  },

  shadow: {
    shadowColor: '#000000dc',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  bottonTabsshadow: {
    shadowColor: '#455367',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  greenView: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderColor: Colors.WHITE,
    borderWidth: 2,
    position: 'absolute',
    backgroundColor: Colors.GREEN,
    bottom: -3,
    right: -3,
  },
});
