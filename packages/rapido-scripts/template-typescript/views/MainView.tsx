import React from 'react';
import {
  View,
  Text,
  Image,
  Linking,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import packageJson from '../package.json';

interface Props {
  title: string;
}

function MainView({ title }: Props) {
  const dependencies: any = packageJson.dependencies;
  const allTools = [
    {
      key: 'prettier',
      name: 'Prettier',
      pkg: 'prettier',
    },
    {
      key: 'typescript',
      name: 'TypeScript',
      pkg: 'typescript',
    },
    {
      key: 'scripts',
      name: 'Scripts',
      pkg: '@rapido/scripts',
    },
    {
      key: 'components',
      name: 'Components',
      pkg: '@rapido/scripts',
    },
    {
      key: 'env',
      name: 'Environment',
      pkg: '@rapido/env',
    },
    {
      key: 'session',
      name: 'Session',
      pkg: '@rapido/session',
    },
    {
      key: 'utils',
      name: 'Utils',
      pkg: '@rapido/utils',
    },
  ];

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/icon.png')}
        style={{ marginVertical: 50, width: 192, height: 192 }}
      />
      <Text style={styles.bodyText}>
        Edit <Text style={styles.boldText}>App.tsx</Text> and save to reload.
      </Text>
      <Text
        style={[
          styles.boldText,
          { marginTop: 50, marginBottom: 16, color: 'white', fontSize: 24 },
        ]}
      >
        {title} Toolset
      </Text>
      <Text style={styles.bodyText}>Click on tool for documentation.</Text>
      <Text style={styles.bodyText}>
        Enabled tools are <Text style={styles.boldText}>blue</Text>.
      </Text>
      <View style={styles.toolsContainer}>
        {allTools.map(
          ({ key, name, pkg }: { key: string; name: string; pkg: string }) => (
            <TouchableOpacity
              key={key}
              onPress={() =>
                Linking.openURL(`https://rapidojs.dev/docs/${key}`)
              }
            >
              <Text
                style={[
                  styles.toolText,
                  dependencies[pkg] && styles.toolTextActive,
                ].filter(Boolean)}
              >
                {name}
              </Text>
            </TouchableOpacity>
          )
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
  toolsContainer: {
    padding: 32,
    width: '90%',
    marginTop: 25,
    maxWidth: 500,
    flexWrap: 'wrap',
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#4b4d52',
    justifyContent: 'space-between',
  },
  toolText: {
    fontSize: 18,
    color: '#A9A9A9',
    marginVertical: 10,
    fontWeight: 'bold',
    marginHorizontal: 20,
    textDecorationLine: 'underline',
  },
  toolTextActive: {
    color: '#61dbfb',
  },
});

export default MainView;
