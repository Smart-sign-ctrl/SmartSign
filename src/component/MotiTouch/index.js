import React, {useMemo} from 'react';
import {StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {MotiPressable, mergeAnimateProp} from 'moti/interactions';

function MotiTouch({children, style, onPress, ...rest}) {
  const styleBlock = [styles.block, style];

  return (
    <MotiPressable
      onPress={onPress}
      animate={useMemo(
        () => interaction => {
          'worklet';
          const {hovered, pressed} = interaction;

          let scale = 1,
            rotate = '0deg';

          if (pressed) {
            (scale = 0), (rotate = '360deg');
          } else if (hovered) {
            (scale = 0), (rotate = '360deg');
          }

          return mergeAnimateProp(interaction, {
            scale,
            rotate,
          });
        },
        [],
      )}
      style={styleBlock}
      {...rest}>
      {children}
    </MotiPressable>
  );
}

MotiTouch.defaultProps = {
  styles: {},
  onPress: () => {},
};

MotiTouch.propTypes = {
  onPress: PropTypes.func,
  styles: PropTypes.any,
};

const styles = StyleSheet.create({
  block: {
    flexDirection: 'column',
  },
});

export default MotiTouch;
