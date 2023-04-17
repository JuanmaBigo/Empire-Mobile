import React from 'react';
import { View, Text } from 'react-native';
import { Video } from 'expo-av'


export default function TourMuseum() {
  return (
    <View style={{ width: '100%', height: '100%', backgroundColor: 'black'}}>
      <Video
        source={{ uri: 'https://drive.google.com/uc?export=download&id=1wWYg3IrvXhP71_nLKs0TSMqt_AN3x9A2' }}
        style={{ flex: 1 }}
        rate={1.0}
        volume={0.0}
        isMuted={true}
        resizeMode="cover"
        shouldPlay
        isLooping
        useNativeControls={true}
        onError={(error) => console.log(error)}
      >
      <Text style={{color: 'white', fontSize: 20, fontWeight: 300, paddingTop: 300, paddingLeft: 50}}>Loading virtual tour...</Text>
      </Video>
    </View>
  );
}

