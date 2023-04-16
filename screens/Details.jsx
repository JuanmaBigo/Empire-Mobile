import React, { useEffect } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Video } from 'react-native'
import motor from "../images/motor.png"
import top from "../images/topvelocidad.png"
import aceleracion from "../images/aceleracion.png"
import auto from "../images/detailsImage.png"
import { useDispatch, useSelector } from "react-redux"
import { useRoute } from "@react-navigation/native"


export default function Details() {
/*   const data = useSelector((store) => store.model.car)
  console.log(data)
  const dispatch = useDispatch()
  const route = useRoute()
  useEffect(() => {
    if (data) {
      dispatch(getOne({ _id: route.params.id }))
    }
  }, []) */

  return (
    <ScrollView>
      <View style={styles.mainDetails}>
        <View style={styles.firstDetails}>
          <View style={styles.mainDetails}>
          <Image source={auto} style={styles.photoDetails} />
           {/*  <Video source={{ uri: data.video }} style={styles.photoDetails} loop muted autoPlay /> */}
            <Text style={styles.detailsTitle}>SARASA</Text>
            <TouchableOpacity style={styles.Detailsbtn}><Text>Build your car</Text></TouchableOpacity>
          </View>
          <View style={styles.speedDetails}>
            <View style={styles.carDetails}>
              <Image source={motor} style={styles.icon} />
              <Text style={styles.speedText}>Potencia: CV</Text>
            </View>
            <View style={styles.carDetails}>
              <Image source={top} style={styles.icon} />
              <Text style={styles.speedText}>Top Speed: Km/h</Text>
            </View>
            <View style={styles.carDetails}>
              <Image source={aceleracion} style={styles.icon} />
              <Text style={styles.speedText}>0-100Km/h: s</Text>
            </View>
          </View>
        </View>
        <View style={styles.textDetails}>
          <View style={styles.descriptionDetails}>
           {/*  <Image source={{ uri: data.photo_description1 }} style={styles.desciption1} /> */}
            <View style={styles.desciptiontext1}>
              <Text >Overview</Text>
              <Text>ASKJGDKAWLDLI</Text>
            </View>
          </View>
          <View style={styles.descriptionDetails}>
            <View style={styles.desciptiontext2}>
              <Text >Exterior</Text>
              <Text>awldilHLAWKNDLIAWHODIAWÑDJAWOJDÑOAWIJDOP</Text>
            </View>
           {/*  <Image source={{ uri: data.photo_description2 }} style={styles.description2} /> */}
          </View>
        </View>
        <View style={styles.Btn}>
          <TouchableOpacity style={styles.lastBtn}><Text>Build your CAR</Text></TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  firstDetails:{
    height: 800,
  },
  speedText:{
    color:"#ffffff",
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
    marginLeft:150,
    color:'#ffffff'

  },
  Detailsbtn: {
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    flex:1,
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
    flexDirection:"row",
    justifyContent: 'space-around',
    alignContent:'space-around',
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
    color:"#ffffff",
    width: 250,
    height: 100,
    textDecorationLine: 'none',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 28,
    backgroundColor: '#DDDDDD',
  },
});


