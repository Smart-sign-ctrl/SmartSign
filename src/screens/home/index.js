import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Block, Text } from '../../component';
import Actions from './actions';
import Item from './item';

const data = [
  {
    id: 1,
    name: 'James John',
    image_url: 'https://eu.ui-avatars.com/api/?name=John+Doe&size=250',
    time: '12:30 PM',
  },
  {
    id: 2,
    name: 'Jackson',
    image_url: 'https://eu.ui-avatars.com/api/?name=John+Doe&size=250',
    time: '12:40 PM',
  },
  {
    id: 3,
    name: 'Bella',
    image_url: 'https://eu.ui-avatars.com/api/?name=John+Doe&size=250',
    time: '01:40 PM',
  },
];
const Home = () => {
  const _renderItem = ({ item, index }) => {
    return (
      <Item name={item.name} image_url={item.image_url} time={item.time} />
    );
  };

  return (
    <Block style={styles.container}>
      <Block style={styles.bottom}>
        <FlatList
          style={{ marginTop: 16 }}
          renderItem={_renderItem}
          data={data}
        />
        <Actions />
      </Block>
    </Block>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottom: {
    flex: 1,
  },
});

export default Home;
