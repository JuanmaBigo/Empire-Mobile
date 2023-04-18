import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CartResume from "../components/CartResume";
import {REACT_APP_URL} from '@env'
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import 

export default function ShoppingCart() {

      const [data, setData] = useState()
      const [total, setTotal] = useState()
      let url = `${REACT_APP_URL}items`
      let urlP = `${REACT_APP_URL}payments`
      let token = AsyncStorage.getItem('token')
      let headers = { headers: { 'Authorization': `Bearer ${token}` } }
    
      useEffect(
        () => {
          axios.get(url, headers)
                .then(response => {setData(response.data.item)
                setTotal(response.data.total)
                })
        }, []
      )
      
      if (!data) {
        return <Text>Cargando...</Text>
      }
    
      const handleClick = async () => {
        let description = data.forEach(element => element.car_id.name)
    
        // let pay = {
        //   title: "Compra/Reservacion",
        //   description,
        //   image: "https://www.fcbarcelona.com/fcbarcelona/photo/2022/08/02/ae5252d1-b79b-4950-9e34-6e67fac09bb0/LeoMessi20092010_pic_fcb-arsenal62.jpg",
        //   price: total
        // };
      
    //     try {
    //       const response = await axios.post(urlP, pay, headers);
    //       window.location.href = response.data.response.body.init_point;
    //       console.log(response)
    //       toast.success('Lo redirigiremos a mercadopago' )
    //     } catch (error) {
    //       if (error.response) {
    //         if (typeof error.response.data.message === "string") {
    //           toast.error("Something went wrong", {
    //             description: error.response.data.message,
    //           });
    //         } else {
    //           error.response.data.message.forEach((err) =>
    //             toast.error({ description: err })
    //           );
    //         }
    //       } else {
    //         toast.error({ description: error.message });
    //       }
    //     }
     };
    
    // console.log(data)


    return ( 
        <CartResume/>
         )

}
