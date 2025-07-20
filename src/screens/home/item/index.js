import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Colors, Images } from '../../../theme';
import { Text } from '../../../component';
import styles from '../styles';
import { Image } from 'moti';

const Item = ({
  type = '',
  onPress,
  id = 1,
  name = 'James John',
  image_url = 'https://eu.ui-avatars.com/api/?name=John+Doe&size=250.jpg',
  time = '',
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Image style={styles.avatar} source={Images.icUser} />
      <Text
        style={{ flex: 1, ...styles.name }}
        letterSpacing={1.0}
        samiBold
        size={18}
        color={'#333'}
      >
        {name}
      </Text>
      <Text letterSpacing={1.0} small size={10} color={Colors.WHITE}>
        {time}
      </Text>
    </TouchableOpacity>
  );
};

export default Item;
