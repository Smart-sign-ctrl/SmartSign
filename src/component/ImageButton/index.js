import React from 'react';
import PropTypes from 'prop-types';
import { Image, StyleSheet, Pressable } from 'react-native';
import { AppStyles, Colors } from '../../theme';

const ImageButton = ({
    imgStyle,
    onPress,
    style,
    source,
    ...rest
}) => {
    return (
        <Pressable
            {...rest}
            style={[styles.innerStyle, style]}
            onPress={onPress}>
            <Image source={source} style={imgStyle} resizeMode="contain" />
        </Pressable>
    )
}

ImageButton.defaultProps = {
    styles: {},
    onPress: () => { },
    imgStyle: {},
    source: null,
};

ImageButton.propTypes = {
    styles: PropTypes.any,
    onPress: PropTypes.func,
    imgStyle: PropTypes.any,
    source: PropTypes.any
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    innerStyle: {
        ...AppStyles.centerAligned,
        padding: 8,
        borderRadius: 12,
    },
});

export default ImageButton