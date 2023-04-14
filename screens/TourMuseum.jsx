import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
/* import VideoPlayer from 'react-native-video'; */
// import YouTube from 'react-native-youtube';

export default function TourMuseum() {
  return (
    <View style={styles.museumTourSection}>
      {/*    <VideoPlayer
        source={{ uri: 'https://www.youtube.com/watch?v=rlbjVAr5SYI&t=8s' }}
        style={styles.videoMuseumTour}
        resizeMode="cover"
        repeat={true}
        muted={true}
      /> */}
      {/* <YouTube
        videoId="rlbjVAr5SYI&t"
        style={styles.videoMuseumTour}
        resizeMode="cover"
        repeat={true}
        muted={true}
      /> */}
      <Text>Video de tour museo</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  museumTourSection: {
    position: 'relative',
    height: '100%',
    width: '100%',
    overflow: 'hidden',
    zIndex: 1,
  },
  videoMuseumTour: {
    minWidth: '100%',
    minHeight: '100%',
  },
});
