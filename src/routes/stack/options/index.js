import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Colors, Images } from '../../../theme';

export const screenOptions = ({ navigation }) => ({
  headerTransparent: false,
  headerStyle: { backgroundColor: Colors.BLACK },
  headerTitleStyle: { color: Colors.WHITE },
  title: '',
  headerLeft: ({ canGoBack }) => {
    if (!canGoBack) return null;
    return (
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={Images.icBack} />
      </TouchableOpacity>
    );
  },
});

export const backButton = navigate => {
  return (
    <TouchableOpacity onPress={() => navigate.goBack()}>
      <Image source={Images.icCloseSquare} />
    </TouchableOpacity>
  );
};
