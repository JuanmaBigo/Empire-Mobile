import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
import motor from "../assets/image/motor-icon.png"
import velocimeter from "../assets/image/velocimeter-icon.png"
import acceleration from "../assets/image/timer-icon.png"
import { useDispatch, useSelector } from "react-redux"
import carActions from "../store/model/actions.js"
import { Video } from 'expo-av'
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/core';
const { getOne } = carActions
const windowHeight = Dimensions.get('window').height;

export default function Details(props) {
  let id = props.route.params.id
  // id = '64377af4968955ae96af8fc4'
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const [loaded, setLoaded] = useState(false)
  const [reload, setReload] = useState(false)

  const data = useSelector((store) => store.model.car)
  useFocusEffect(
    React.useCallback(() => {
      dispatch(getOne({ _id: id }))
    }, [])
  );

  useEffect(() => {
    setTimeout(() => {
      if (data._id === id) {
        setLoaded(true)
      } else {
        setReload(!reload)
      }
    }, 200);
  }, [reload])

  function navigateToCustom() {
    navigation.navigate('CUSTOM', { id: id });
  }

  return (
    <ScrollView>
      {loaded ?
        <ScrollView>
          <View style={styles.view1}>
            <View style={styles.mainDetails}>
              <Video
                source={{ uri: data.video }}
                style={{ flex: 1, backgroundColor: 'black' }}
                rate={1.0}
                volume={0.0}
                isMuted={true}
                resizeMode="cover"
                shouldPlay
                isLooping
                useNativeControls={false}
                onError={(error) => console.log(error)}
              >
              </Video>
              <Text style={styles.detailsTitle}>{data.name}</Text>
              <TouchableOpacity onPress={navigateToCustom} style={{ position: 'absolute', left: 0, right: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', bottom: 100, shadowColor: '#070707', shadowOffset: { width: 0, height: 0, }, shadowOpacity: 1, shadowRadius: 3, elevation: 3, }}>
                <LinearGradient colors={['#54555A', 'rgba(52, 52, 52, 0.747)']} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} >
                  <Text style={{ fontSize: 20, fontWeight: 400, paddingHorizontal: 15, paddingVertical: 5, color: '#fff', textTransform: 'uppercase' }}>Build your {data.name}</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
            <View style={styles.speedDetails}>
              <LinearGradient colors={['#ABABAB', '#000000']} end={{ x: -0.5, y: 0.5 }} start={{ x: 3, y: 3 }} style={{ display: 'flex', flexDirection: "row", justifyContent: 'space-around', alignItems: 'center', height: '100%', width: '100%' }}>
                <View style={styles.carDetails}>
                  <Image source={motor} style={styles.icon} />
                  <View style={{ display: 'flex', alignItems: 'center' }}>
                    <Text style={styles.speedText}>POWER</Text>
                    <Text style={{ color: '#fff', fontWeight: 300 }}>{data.hp}CV</Text>
                  </View>
                </View>
                <View style={styles.carDetails}>
                  <Image source={velocimeter} style={styles.icon} />
                  <View style={{ display: 'flex', alignItems: 'center' }}>
                    <Text style={styles.speedText}>MAX. SPEED</Text>
                    <Text style={{ color: '#fff', fontWeight: 300 }}>{data.top_speed}Km/h</Text>
                  </View>
                </View>
                <View style={styles.carDetails}>
                  <Image source={acceleration} style={styles.icon} />
                  <View style={{ display: 'flex', alignItems: 'center' }}>
                    <Text style={styles.speedText}>0-100Km/h</Text>
                    <Text style={{ color: '#fff', fontWeight: 300 }}>{data.acceleration}s</Text>
                  </View>
                </View>
              </LinearGradient>
            </View>
          </View>

          <ScrollView style={styles.view2}>
            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 50, marginBottom: 30 }}>
              <View style={styles.descriptionDetails}>
                <View style={styles.desciptiontext1}>
                  <Text style={{ fontWeight: 600, fontSize: 18 }}>OVERVIEW</Text>
                  <Text style={{ fontSize: 15, fontWeight: 400 }}>{data.description1}</Text>
                </View>
                <Image source={{ uri: data.photo_description1 }} style={styles.desciption1} />
              </View>
              <View style={styles.descriptionDetails}>
                <View style={styles.desciptiontext2}>
                  <Text style={{ fontWeight: 600, fontSize: 18 }}>EXTERIOR</Text>
                  <Text style={{ fontSize: 15, fontWeight: 400, marginBottom: 30 }}>{data.description2}</Text>
                </View>
              </View>

              <TouchableOpacity onPress={navigateToCustom} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', shadowColor: '#070707', shadowOffset: { width: 1, height: 1, }, shadowOpacity: 1, shadowRadius: 3, elevation: 3, }}>
                <LinearGradient colors={['#54555A', 'rgba(52, 52, 52, 0.747)']} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} >
                  <Text style={{ fontSize: 24, fontWeight: 400, paddingHorizontal: 15, paddingVertical: 5, color: '#fff', textTransform: 'uppercase' }}>Build your {data.name}</Text>
                </LinearGradient>
              </TouchableOpacity>

            </View>
          </ScrollView>
        </ScrollView> : null}


    </ScrollView>
  );
};

const styles = StyleSheet.create({
  view1: {
    flex: 1,
    height: windowHeight + 40,
  },
  view2: {
    flex: 1,
    minHeight: windowHeight + 40,
    display: 'flex',
  },
  speedText: {
    color: "#ffffff",
    fontWeight: 500,
  },
  mainDetails: {
    height: '80%',
  },
  photoDetails: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  detailsTitle: {
    position: 'absolute',
    fontSize: 25,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginTop: 100,
    marginLeft: 30,
    color: '#ffffff'
  },
  speedDetails: {
    display: 'flex',
    flexDirection: "row",
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '20%',
    backgroundColor: '#000000',
  },
  carDetails: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    height: 25,
    width: 25,
  },
  speedImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  textDetails: {
    display: 'flex',
    flexDirection: 'column',
  },
  descriptionDetails: {
    display: 'flex',
    alignItems: 'center',
    width: '95%',
  },
  desciption1: {
    width: '100%',
    height: 300,
  },
  desciptiontext1: {
    display: 'flex',
    flexDirection: 'column',
    gap: 15,
    marginBottom: 30,
  },
  desciptiontext2: {
    display: 'flex',
    flexDirection: 'column',
    gap: 15,
    marginTop: 30,
    width: '95%',
  },
  Btn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lastBtn: {
    marginTop: 40,
    display: 'flex',
    color: "#ffffff",
    width: 250,
    height: 100,
    textDecorationLine: 'none',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 28,
    backgroundColor: '#DDDDDD',
  },
});


