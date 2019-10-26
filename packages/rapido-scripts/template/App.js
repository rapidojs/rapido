import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import React, { Fragment, useState } from 'react';
import { StatusBar, StyleSheet, Image, Text, View } from 'react-native';
// @remove-if-no-components-begin
import { ThemeProvider } from 'styled-components/native';
import { theme } from '@rapido/components';
// @remove-if-no-components-end
// @remove-if-no-session-begin
import { SessionProvider, Session } from '@rapido/session';
// @remove-if-no-session-end

const session = new Session();

const initializeApp = () => {
  const cacheAssets = Asset.loadAsync([require('./assets/icon.png')]);

  // @remove-if-no-session-begin
  const initSession = new Promise((resolve, _) => {
    session.init(() => {
      resolve();
    });
  });
  // @remove-if-no-session-end

  const initialize = new Promise((resolve, _) => {
    Promise.all([
      cacheAssets,
      // @remove-if-no-session-begin
      initSession,
      // @remove-if-no-session-end
    ])
      .then(() => {
        resolve();
      })
      .catch(() => {
        resolve();
      });
  });

  return initialize;
};

function App() {
  const [appInitialized, setAppInitialized] = useState(false);

  if (!appInitialized) {
    return (
      <AppLoading
        startAsync={initializeApp}
        onFinish={() => setAppInitialized(true)}
        onError={console.warn}
      />
    );
  }

  return (
    // @remove-if-no-session-begin
    <SessionProvider session={session}>
      // @remove-if-no-session-end // @remove-if-no-components-begin
      <ThemeProvider theme={theme}>
        // @remove-if-no-components-end
        <Fragment>
          <StatusBar backgroundColor="transparent" barStyle="dark-content" />
          <View style={styles.container}>
            <Text style={styles.headerText}>Rapido</Text>
            <Image
              source={require('./assets/icon.png')}
              style={{ marginVertical: 50, width: 192, height: 192 }}
            />
            <Text style={styles.bodyText}>
              Edit <Text style={styles.boldText}>App.js</Text> and save to
              reload.
            </Text>
          </View>
        </Fragment>
        // @remove-if-no-components-begin
      </ThemeProvider>
      // @remove-if-no-components-end // @remove-if-no-session-begin
    </SessionProvider>
    // @remove-if-no-session-end
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282c34',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 48,
  },
  bodyText: {
    color: 'white',
    fontSize: 18,
  },
  boldText: {
    fontWeight: 'bold',
  },
});

export default App;
