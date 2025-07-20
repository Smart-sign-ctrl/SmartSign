import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Block, ImageButton } from '../../../component';
import { Images } from '../../../theme';

const COLORS = {
  BLUE: '#007BFF', // logo base blue
  CYAN: '#00DDEE', // secondary color
  PURPLE: '#3366FF', // alternate blue shade
  WHITE: '#FFFFFF',
};

const Actions = () => {
  const navigation = useNavigation();

  const onChat = () => {
    navigation.navigate('Chat', { from: 'Bella' });
  };

  const onChatBot = () => {
    navigation.navigate('Chat', { from: 'Ai' });
  };

  const onCamera = () => {
    navigation.navigate('VideoRecorder', { from: 'Ai' });
  };

  return (
    <SafeAreaView>
      <Block style={styles.container}>
        <Block style={[styles.buttonCircle, { backgroundColor: COLORS.BLUE }]}>
          <ImageButton
            onPress={onCamera}
            source={Images.icCamera}
            imgStyle={styles.icImage}
          />
        </Block>

        <Block style={[styles.buttonCircle, { backgroundColor: COLORS.CYAN }]}>
          <ImageButton
            onPress={onChat}
            source={Images.icContact}
            imgStyle={styles.icImage}
          />
        </Block>

        <Block
          style={[styles.buttonCircle, { backgroundColor: COLORS.PURPLE }]}
        >
          <ImageButton
            onPress={onChatBot}
            source={Images.icBot}
            imgStyle={styles.icImage}
          />
        </Block>
      </Block>
    </SafeAreaView>
  );
};

export default Actions;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 32,
    paddingVertical: 16,
  },
  buttonCircle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
  },
  icImage: {
    width: 28,
    height: 28,
    tintColor: COLORS.WHITE,
  },
});
