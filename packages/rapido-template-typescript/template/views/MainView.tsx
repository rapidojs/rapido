import React from 'react';
import {
  View,
  Text,
  Image,
  Linking,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

interface Props {
  title: string;
}

function MainView({ title }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{title}</Text>
      <Image
        source={require('../assets/icon.png')}
        style={{ marginVertical: 30, width: 192, height: 192 }}
      />
      <Text style={styles.bodyText}>
        Edit <Text style={styles.boldText}>App.js</Text> and save to reload.
      </Text>
      <TouchableOpacity onPress={() => Linking.openURL('https://rapidojs.dev')}>
        <Text style={styles.textLink}>View Docs</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#303846',
  },
  headerText: {
    fontSize: 48,
    color: 'white',
    fontWeight: 'bold',
  },
  bodyText: {
    fontSize: 18,
    color: 'white',
  },
  boldText: {
    color: '#FDD023',
    fontWeight: 'bold',
  },
  textLink: {
    fontSize: 18,
    color: '#FDD023',
    marginVertical: 20,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

export default MainView;
