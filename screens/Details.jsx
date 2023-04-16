import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import motor from "../images/motor.png"
import top from "../images/topvelocidad.png"
import aceleracion from "../images/aceleracion.png"
import auto from "../images/detailsImage.png"
import { useDispatch, useSelector } from "react-redux"
import carActions from "../store/model/actions.js"
import { Video } from 'expo-av'

const { getOne } = carActions


export default function Details(props) {
  // let id = props.route.params.id
  id = '64377af5968955ae96af8ffc'
  console.log(id)

  const dispatch = useDispatch()
  const [loaded, setLoaded] = useState(false)
  const [reload, setReload] = useState(false)

  const data = useSelector((store) => store.model.car)
  useEffect(() => {
    dispatch(getOne({ _id: id }))
  }, [])

  useEffect(() => {
    setTimeout(() => {
      if (data._id === id) {
        console.log(data)
        setLoaded(true)
      } else {
        setReload(!reload)
      }
    }, 100);
  }, [reload])




  return (
    <ScrollView>
      {loaded? 
        <View style={styles.mainDetails}>
          <View style={styles.firstDetails}>
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
              <TouchableOpacity style={styles.Detailsbtn}><Text>Build your {data.name}</Text></TouchableOpacity>
            </View>
            <View style={styles.speedDetails}>
              <View style={styles.carDetails}>
                <Image source={motor} style={styles.icon} />
                <Text style={styles.speedText}>POWER: {data.hp}CV</Text>
              </View>
              <View style={styles.carDetails}>
                <Image source={top} style={styles.icon} />
                <Text style={styles.speedText}>MAX. SPEED: {data.top_speed}Km/h</Text>
              </View>
              <View style={styles.carDetails}>
                <Image source={aceleracion} style={styles.icon} />
                <Text style={styles.speedText}>0-100Km/h: {data.acceleration}s</Text>
              </View>
            </View>
          </View>
          <View style={styles.textDetails}>
            <View style={styles.descriptionDetails}>
              <Image source={{ uri: data.photo_description1 }} style={styles.desciption1} />
              <View style={styles.desciptiontext1}>
                <Text>Overview</Text>
                <Text>{data.description1}</Text>
              </View>
            </View>
            <View style={styles.descriptionDetails}>
              <View style={styles.desciptiontext2}>
                <Text >Exterior</Text>
                <Text>{data.description2}</Text>
              </View>
              <Image source={{ uri: data.photo_description2 }} style={styles.description2} />
            </View>
          </View>
          <View style={styles.Btn}>
            <TouchableOpacity style={styles.lastBtn}><Text>Build your {data.name}</Text></TouchableOpacity>
          </View>
        </View> : null }

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  firstDetails: {
    height: 800,
  },
  speedText: {
    color: "#ffffff",
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
    marginTop: 100,
    marginLeft: 150,
    color: '#ffffff'

  },
  Detailsbtn: {
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    flex: 1,
    position: 'absolute',

    left: 200,
    top: 500,
    color: '#000000',
    alignSelf: 'flex-start',
    width: 150,
    height: 61,
    backgroundColor: '#ffffff',
    textDecorationLine: 'none',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 28,
  },
  speedDetails: {
    display: 'flex',
    flexDirection: "row",
    justifyContent: 'space-around',
    alignContent: 'space-around',
    alignItems: 'center',
    height: '20%',
    backgroundColor: '#000000',
  },
  carDetails: {
    display: 'flex',
    alignItems: 'center',
    height: '20%',
    color: '#ffffff',
  },
  speedImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  textDetails: {
    display: 'flex',
    flexDirection: 'column',
    overflowX: 'hidden',
  },
  descriptionDetails: {
    display: 'flex',
  },
  desciption1: {
    width: '60%',
    height: 400,
    overflow: 'hidden',
    position: 'relative',
  },
  desciptiontext1: {
    display: 'flex',
    flexDirection: 'column',
    gap: 30,
    marginTop: 65,
  },
  desciptiontext2: {
    display: 'flex',
    flexDirection: 'column',
    gap: 30,
    marginTop: 65,
    marginLeft: 30,
  },
  description2: {
    width: '60%',
    height: 400,
    overflow: 'hidden',
    position: 'relative',
    left: 290,
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


