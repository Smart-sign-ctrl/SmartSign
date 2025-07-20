import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Colors } from '../../theme';
import { Text } from '..';

function Button({
  style,
  title,
  ...rest
}) {
  const styleBlock = [
    styles.container,
    style,
  ];

  return (
    <TouchableOpacity style={styleBlock} {...rest}>
      <Text size={18} color={Colors.BLACK}>{title}</Text>
    </TouchableOpacity>
  );
}

Button.defaultProps = {
  styles: {},
  title: 'Click Me'
};

Button.propTypes = {
  styles: PropTypes.any,
  title: PropTypes.string
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.BLUE,
    padding: 16,
    margin: 16,
    marginTop: 24,
    height: 56,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: 'center'
  },

});

export default Button;
