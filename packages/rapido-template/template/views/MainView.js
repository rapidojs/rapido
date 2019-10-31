import React from 'react';
import {
  View,
  Text,
  Image,
  Linking,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

function MainView({ title }) {
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
    backgroundColor: '#282c34',
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
    color: '#61dbfb',
    fontWeight: 'bold',
  },
  textLink: {
    fontSize: 18,
    color: '#61dbfb',
    marginVertical: 20,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

export default MainView;
