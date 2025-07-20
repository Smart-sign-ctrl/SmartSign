import React, { useState, forwardRef, useImperativeHandle } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';

import { Image } from 'moti';
import { Colors, Images } from '../../../theme';
import COLORS from '../../../theme/Colors';

const InputToolbar = forwardRef(({ isEdit = false, onSend }, ref) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    const trimmedMessage = message.trim();
    if (trimmedMessage.length > 0) {
      if (isEdit) {
        // Handle edit logic here if needed
      }

      const _message = {
        _id: `${new Date().getTime()}`,
        text: trimmedMessage,
        createdAt: new Date(),
        message_type: 'video',
        user: {
          _id: 2,
          name: 'James John',
        },
      };
      onSend(_message);
      setMessage('');
    }
  };

  useImperativeHandle(ref, () => ({
    setText: text => setMessage(text),
  }));

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.inputTextStyle}
            placeholder="Type a message..."
            multiline
            placeholderTextColor="#fff"
            value={message}
            returnKeyType="default"
            onChangeText={setMessage}
            textAlignVertical="top"
          />
        </View>
        {message.trim().length > 0 && (
          <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
            <Image
              source={Images.icRightArrow}
              style={{
                tintColor: '#fff',
                zIndex: 999,
                borderRadius: 50,
                width: 30,
                height: 30,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            />
          </TouchableOpacity>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
});

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  inputWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.PURPLE,
    borderRadius: 10,
    minHeight: 50,
    paddingHorizontal: 8,
    elevation: 2,
  },
  inputTextStyle: {
    flex: 1,
    fontSize: 16,
    color: '#fff',
    minHeight: 36,
    maxHeight: 120,
  },
  sendButton: {
    backgroundColor: Colors.PRIMARY,
    borderRadius: 25,
    padding: 8,
    marginLeft: 8,
  },
});

export default InputToolbar;
