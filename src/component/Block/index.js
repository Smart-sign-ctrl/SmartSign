import React from 'react';
import {View, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import {size, Colors} from '../../theme';
import LinearGradient from 'react-native-linear-gradient';

function Block({
  row,
  flex,
  center,
  middle,
  top,
  bottom,
  right,
  left,
  shadow,
  space,
  fluid,
  height,
  shadowColor,
  card,
  width,
  safe,
  children,
  scroll,
  style,
  gradient,
  bgColor,
  ...rest
}) {
  const styleBlock = [
    styles.block,
    row && styles.row,
    flex && {flex: flex === true ? 1 : flex},
    center && styles.center,
    middle && styles.middle,
    top && styles.top,
    bottom && styles.bottom,
    right && styles.right,
    left && styles.left,
    space && {justifyContent: `space-${space}`},
    shadow && styles.shadow,
    fluid && styles.fluid,
    card && styles.card,
    height && {height},
    width && {width},
    bgColor && {backgroundColor: bgColor},
    shadowColor && {shadowColor},
    style,
  ];

  if (safe) {
    return (
      <SafeAreaView style={styleBlock} {...rest}>
        {children}
      </SafeAreaView>
    );
  }
  if (scroll) {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styleBlock}
        {...rest}>
        {children}
      </ScrollView>
    );
  }

  if (gradient) {
    return (
      <LinearGradient
        colors={[
          '#00000080',
          '#00000040',
          '#00000020',
          '#00000000',
          '#00000000',
          '#00000000',
          '#00000000',
          '#00000000',
          '#00000000',
          '#00000020',
          '#00000040',
          '#00000080',
        ]}
        style={styleBlock}
        {...rest}>
        {children}
      </LinearGradient>
    );
  }

  return (
    <View style={styleBlock} {...rest}>
      {children}
    </View>
  );
}

Block.defaultProps = {
  row: false,
  flex: false,
  center: false,
  middle: false,
  top: false,
  bottom: false,
  right: false,
  left: false,
  card: false,
  shadow: false,
  space: null,
  fluid: false,
  height: null,
  width: null,
  shadowColor: null,
  safe: false,
  styles: {},
  scroll: false,
  gradient: false,
  bgColor: null,
};

Block.propTypes = {
  row: PropTypes.bool,
  flex: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  center: PropTypes.bool,
  middle: PropTypes.bool,
  top: PropTypes.bool,
  bottom: PropTypes.bool,
  right: PropTypes.bool,
  card: PropTypes.bool,
  left: PropTypes.bool,
  shadow: PropTypes.bool,
  space: PropTypes.oneOf(['between', 'around', 'evenly']),
  fluid: PropTypes.bool,
  height: PropTypes.number,
  width: PropTypes.number,
  shadowColor: PropTypes.string,
  safe: PropTypes.bool,
  styles: PropTypes.any,
  theme: PropTypes.any,
  scroll: PropTypes.bool,
  gradient: PropTypes.bool,
  bgColor: PropTypes.any,
};

const styles = StyleSheet.create({
  block: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
  middle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  left: {
    alignItems: 'flex-start',
  },
  right: {
    alignItems: 'flex-end',
  },
  top: {
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
  },
  bottom: {
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
  },
  card: {
    borderRadius: size.CARD_BORDER_RADIUS,
    borderWidth: size.CARD_BORDER_WIDTH,
    borderColor: Colors.BLOCK,
  },
  shadow: {
    shadowColor: Colors.BLOCK,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: size.BLOCK_SHADOW_OPACITY,
    shadowRadius: size.BLOCK_SHADOW_RADIUS,
    elevation: size.ANDROID_ELEVATION,
  },
  fluid: {
    width: 'auto',
  },
});

export default Block;
