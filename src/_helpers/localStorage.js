import AsyncStorage from '@react-native-async-storage/async-storage';

export const _removeData = async key => {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (error) {
    return false;
  }
};

export const _storeData = async (key, data) => {
  try {
    await AsyncStorage.setItem(key, data);
    return true;
  } catch (error) {
    return false;
  }
};

export const _getData = async key => {
  try {
    const data = await AsyncStorage.getItem(key);
    return data;
  } catch (error) {
    return false;
  }
};
