import { Image } from 'react-native';
import React, { memo, useCallback, useEffect, useState } from 'react';
import { Block, PinchableBox, Text } from '../../../component';
import { Colors, Metrics } from '../../../theme';
import { getWordsByObjectId } from '../../../utility';
import styles from '../../home/styles';

const ImageViewer = ({ result = [], objectId, source = null }) => {
  const [words, setWords] = useState([]);

  useEffect(() => {
    getWordsByObjectId(objectId).then(w => setWords(w));
  }, [objectId]);

  const getColor = useCallback(
    word => {
      const findIndex = words.findIndex(
        x => x.value == word.replace(/\./g, ''),
      );

      if (findIndex !== -1) {
        return Colors.PRIMARY;
      }
      return Colors.WHITE;
    },
    [words],
  );

  return (
    <Block safe flex>
      <PinchableBox imageUri={source} />
      <Block scroll contentContainerStyle={styles.textContainer}>
        {result.map((x, i) => {
          let w = x.toLowerCase();
          if (x == '') return null;
          return (
            <Text key={`${x}${i}`} size={26} color={getColor(w)}>
              {`${x} `}
            </Text>
          );
        })}
      </Block>
    </Block>
  );
};

export default memo(ImageViewer);
