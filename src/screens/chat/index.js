import React, { useState, useCallback, useLayoutEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { Block } from '../../component';
import InputToolbar from './input-toolbar';
import BubbleChat from './bubble-chat';
import { useNavigation } from '@react-navigation/native';

const Chat = ({ route }) => {
  const navigation = useNavigation();
  const { from = '' } = route.params;

  const [messages, setMessages] = useState([
    {
      _id: 1,
      text: 'Hello',
      createdAt: new Date(),
      message_type: 'video',
      user: {
        _id: 1,
        name: 'Bella',
      },
    },
  ]);

  const onSend = useCallback((newMessages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, newMessages),
    );
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({ title: from === 'Ai' ? 'Ai' : 'Bella' });
  }, [navigation, from]);

  return (
    <Block style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <GiftedChat
          messages={messages}
          infiniteScroll
          minInputToolbarHeight={0}
          renderBubble={props => <BubbleChat currentUserId={2} {...props} />}
          renderInputToolbar={() => null}
          user={{
            _id: 2,
            name: 'James John',
          }}
          showUserAvatar
          isKeyboardInternallyHandled={false}
        />

        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 0}
        >
          <InputToolbar onSend={onSend} />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </Block>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default Chat;
