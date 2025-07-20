import React, { useEffect, useRef, useState } from 'react';
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Colors } from '../../theme';
import { takePhoto, openGallery } from './utils';
import Actions from './actions';
import CameraView from './camera';
import { Block, Text } from '../../component';
import ImageViewer from './image-viewer';
import TextRecognition from 'react-native-text-recognition';

const ImagePicker = ({ navigation, route }) => {
  const { objectId, heading = '' } = route.params;

  const [isBack, setIsBack] = useState(true);
  const [media, setMedia] = useState(null);
  const [flashOn, setFlashOn] = useState(false);
  const [result, setResult] = useState([]);
  const [id, setId] = useState('');

  const cameraRef = useRef(null);
  const _onFlashChange = () => {
    setFlashOn(!flashOn);
  };

  const _takePhoto = async () => {
    const photo = await takePhoto(cameraRef, flashOn);
    if (Platform.OS == 'android') {
      photo.path = `file://${photo?.path}`;
    }

    if (photo?.path) {
      setMedia(photo);
    }

    const result = await TextRecognition.recognize(media.path);
    const str = result.toString().replaceAll(',', ' ');
    const strArray = str.split(' ');
    setResult(strArray);
  };

  const _onIsBack = () => {
    setIsBack(!isBack);
  };

  function extractDetails(text) {
    console.log({ text });
    const patterns = {
      name: /(?:Name:|Attendee:)\s*([^\n]+)/i,
      event: /(?:Event:|Concert:|Title:)\s*([^\n]+)/i,
      tour: /(?:Tour:|Tour Name:)\s*([^\n]+)/i,
      date: /(?:Date:|Event Date:)\s*([\d{1,2}\s\w{3,}]+)/i,
      time: /(?:Time:|Event Time:)\s*([\d:]+)/i,
      venue: /(?:Venue:|Location:)\s*([^\n]+)/i,
      entrance: /(?:Entrance:|Gate:)\s*(\d+)/i,
      sector: /(?:Sector:|Section:)\s*(\w+)/i,
      row: /(?:Row:|Seat Row:)\s*(\d+)/i,
      seat: /(?:Seat:|Seat Number:)\s*(\d+)/i,
    };

    let result = {};
    for (const key in patterns) {
      const match = text.match(patterns[key]);

      console.log({ match });
      if (match) {
        result[key] = match[1].trim();
      }
    }

    console.log({ result });

    // Validate if it's a ticket
    return result.event ? result : null;
  }
  const parseText = text => {
    const ticketData = extractDetails(text);

    console.log({ ticketData: ticketData });
    // setTicketData(ticketData);
  };

  const _onPickFromGallery = () => {
    openGallery().then(async media => {
      setMedia(media);
      const result = await TextRecognition.recognize(
        media.path,
        'eng+fra+spa', // Add language codes here (English, French, Spanish)
        {
          logger: info => console.log(info), // Optional logger
        },
      );

      console.log({ TextRecognized: result.join(' ') });
      parseText(result.join(' '));
      setResult([]);

      // const str = result.toString().replaceAll(',', ' ');
      // // const strArray = str.split(' ');
      // setResult(strArray);
    });
  };

  const _renderRight = () => {
    return (
      <TouchableOpacity
        onPress={() => navigation.push('Home', { isFromImagePicker: true })}
      >
        <Text size={16} color={Colors.WHITE}>
          {`${heading}s >`}
        </Text>
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    if (media != null) {
      navigation.setOptions({
        headerRight: _renderRight,
        headerTransparent: false,
        headerStyle: { backgroundColor: Colors.BLACK },
      });
      return;
    }

    navigation.setOptions({
      headerRight: _renderRight,
    });
  }, [result, heading]);

  useEffect(() => {
    setId(objectId);
  }, [objectId]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'space-between',
      }}
    >
      {media !== null && (
        <ImageViewer source={media?.path} result={result} objectId={id} />
      )}

      {media == null && <CameraView ref={cameraRef} isBack={isBack} />}

      <Block style={styles.container} row space={'between'}></Block>

      {media == null && (
        <Actions
          onIsBack={_onIsBack}
          takePhoto={_takePhoto}
          onFlashChange={_onFlashChange}
          onPickFromGallery={_onPickFromGallery}
        />
      )}
    </SafeAreaView>
  );
};

export default ImagePicker;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
