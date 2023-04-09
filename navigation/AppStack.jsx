import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import CustomDrawer from '../components/CustomDrawer';


import Hero from '../screens/Hero'
import Home from '../screens/Home';
import Vehicles from '../screens/Vehicles'
import ArtAndCulture from '../screens/ArtAndCulture'
import Service from '../screens/Service'
import AIEngine from '../screens/AIEngine'


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


function HomeStack() {
    return (
        <Stack.Navigator >
            <Stack.Screen name="Hero" component={Hero} options={{ headerShown: false }} /> 
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} /> 
        </Stack.Navigator>
    );
}

export default function AppStack() {

    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}
            screenOptions={{
                headerShown: false,
                drawerActiveBackgroundColor: 'white',
                drawerActiveTintColor: '#000',
                drawerInactiveTintColor: 'white',
                drawerLabelStyle: {
                    fontWeight: 400,
                    fontSize: 20,
                },
                swipeEdgeWidth: 70,
            }}>

            <Drawer.Screen name="HOME" component={Home} />
            <Drawer.Screen name="VEHICLES" component={Vehicles} />
            <Drawer.Screen name="ART & CULTURE" component={ArtAndCulture} />
            <Drawer.Screen name="SERVICE" component={Service} />
            <Drawer.Screen name="AI ENGINE" component={AIEngine} />

            {/* <Drawer.Screen name="CART" component={HomeStack} /> */}
            
        </Drawer.Navigator>
    )
}
