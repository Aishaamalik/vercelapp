import React from 'react';
import { StyleSheet, View } from 'react-native';
import WebView from 'react-native-webview';

const Airport = () => {
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: 'https://www.openstreetmap.org' }}
        style={{ flex: 1 }}
        javaScriptEnabled={true} 
        domStorageEnabled={true} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Airport;
