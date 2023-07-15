/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {ExpoOpenGLTestView} from './src';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={[backgroundStyle, styles.main]}>
      <View style={styles.container}>
        <Text>ExpoGL View:</Text>
        <ExpoOpenGLTestView />
      </View>
      <View style={styles.container}>
        <Text>React Native Skia View:</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {flex: 1},
  container: {
    flex: 0.5,
  },
});

export default App;
