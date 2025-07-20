import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';

function showToast({ message, type = 'success' }) {
  Toast.show({
    type: type,
    text1: message,
  });
}

async function saveArrayAS(key, array) {
  await AsyncStorage.setItem(key, JSON.stringify(array));
}
async function getArrayAS(key) {
  return JSON.parse(await AsyncStorage.getItem(key)) ?? [];
}
async function saveObjectAS(key, obj) {
  await AsyncStorage.setItem(key, JSON.stringify(obj));
}
async function getObjectAS(key) {
  return JSON.parse(await AsyncStorage.getItem(key)) ?? {};
}

async function removeObjectAS(key) {
  await AsyncStorage.multiRemove(key);
}
async function getAnyAS(key) {
  return (await AsyncStorage.getItem(key)) ?? '';
}
async function saveAnyAS(key, val = '') {
  await AsyncStorage.setItem(key, val.toString());
}
async function removeAS(key) {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (exception) {
    return false;
  }
}

export {
  showToast,
  saveArrayAS,
  getArrayAS,
  saveObjectAS,
  getObjectAS,
  removeObjectAS,
  getAnyAS,
  saveAnyAS,
  removeAS,
};
