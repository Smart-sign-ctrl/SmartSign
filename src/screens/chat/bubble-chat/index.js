import React, { memo, useMemo, useCallback } from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import { Bubble } from 'react-native-gifted-chat';
import { Colors, Fonts, Images } from '../../../theme';
import VideoPlayer from '../../../component/video-player';

const BubbleChat = ({
  currentMessage,
  previousMessage,
  currentUserId,
  editableMessageId,
  isAdmin = false,
  ...props
}) => {
  const onBubblePress = () => {};

  const _renderMessageImage = useCallback(
    ({ currentMessage }) => {
      if (currentMessage?.message_type === 'video') {
        return (
          <Pressable
            delayLongPress={300}
            onPress={onBubblePress}
            style={styles.videoView}
          >
            <VideoPlayer
              isPaused={true}
              //  style={styles.mediaImage}
              // videoURL={currentMessage?.video_url}
            />
            <View style={styles.playIconOverlay}>
              <Image source={Images.playIcon} style={styles.playIcon} />
            </View>
          </Pressable>
        );
      }

      return null;
    },
    [onBubblePress],
  );

  return (
    <Bubble
      {...props}
      currentMessage={currentMessage}
      renderCustomView={messageProps => (
        <>{_renderMessageImage(messageProps)}</>
      )}
      textStyle={{
        right: styles.bubbleTextRight,
        left: styles.bubbleTextLeft,
      }}
      wrapperStyle={{
        left: styles.bubbleLeft,
        right: {
          ...styles.bubbleRight,
          backgroundColor:
            editableMessageId == currentMessage?._id ? '#9CA3AF' : '#007AFF',
        },
      }}
      containerToPreviousStyle={{
        right: styles.stackedBubbleRight,
        left: styles.stackedBubbleLeft,
      }}
      containerToNextStyle={{
        right: styles.stackedBubbleRight,
        left: styles.stackedBubbleLeft,
      }}
    />
  );
};

const styles = StyleSheet.create({
  username: {
    fontSize: 13,
    marginBottom: 2,
    marginHorizontal: 8,
  },
  mediaImage: {
    backgroundColor: 'red',
    // width: 160,
    // height: 160,
    // margin: 4,
    // borderRadius: 12,
  },
  bubbleLeft: {
    backgroundColor: Colors.CYAN,
    borderRadius: 18,
    padding: 8,
    marginVertical: 2,
    maxWidth: '75%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    borderBottomLeftRadius: 4,
  },
  bubbleRight: {
    borderRadius: 18,
    padding: 8,
    marginVertical: 2,
    maxWidth: '80%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  stackedBubbleLeft: {
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },
  stackedBubbleRight: {
    borderTopRightRadius: 4,
  },
  bubbleTextRight: {
    ...Fonts.Regular(),
    fontSize: 14,
    color: '#fff',
  },
  bubbleTextLeft: {
    ...Fonts.Regular(),
    fontSize: 14,
    color: '#000',
  },
  playIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  playIconOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pdfview: {
    padding: 8,
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  pdfTextContainer: {
    marginLeft: 4,
  },
  videoView: {
    width: 200,
    height: 160,
    backgroundColor: 'red',
  },
});

export default memo(BubbleChat);
