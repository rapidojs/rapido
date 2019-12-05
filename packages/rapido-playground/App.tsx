import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import React, { Fragment, useState } from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from '@rapido/components';
import { SessionProvider, Session } from '@rapido/session';

import theme from './theme';
import MainView from './views/MainView';

const session = new Session();

const initializeApp = () => {
  const cacheAssets = Asset.loadAsync([require('./assets/icon.png')]);

  const initSession = new Promise<void>((resolve, _) => {
    session.init(() => {
      resolve();
    });
  });

  const initialize = new Promise<void>((resolve, _) => {
    Promise.all([cacheAssets, initSession])
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
    <SessionProvider session={session}>
      <ThemeProvider theme={theme}>
        <Fragment>
          <StatusBar backgroundColor="transparent" barStyle="light-content" />
          <MainView title="Rapido" />
        </Fragment>
      </ThemeProvider>
    </SessionProvider>
  );
}

export default App;
