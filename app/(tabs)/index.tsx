import {
  StyleSheet, Image, View, Text,
  FlatList, Pressable
} from 'react-native';
import ApiFlatlist from '../ApiFetchFlatlist';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <ApiFlatlist/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
