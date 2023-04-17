import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import CustomDrawer from '../components/CustomDrawer';

import Login from '../screens/Login';
import Register from '../screens/Register';

import Hero from '../screens/Hero'
import Home from '../screens/Home';
import Vehicles from '../screens/Vehicles'
import ArtAndCulture from '../screens/ArtAndCulture'
import Service from '../screens/Service'
import AIEngine from '../screens/AIEngine'
import TourMuseum from '../screens/TourMuseum';
import Videito from '../screens/Videoo';
import Custom from '../screens/Custom'
import SelectModel from '../screens/SelectModel';


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
function CultureStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='ArtAndCulture' component={ArtAndCulture} options={{ headerShown: false }} />
            <Stack.Screen name='TourMuseum' component={TourMuseum} options={{ headerShown: false }} />
        </Stack.Navigator>

    );
}

   
function VehiclesStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Vehicles' component={Vehicles} options={{ headerShown: false }} />
            <Stack.Screen name='Select Model' component={SelectModel} options={{ headerShown: false }} />
        </Stack.Navigator>
    );}

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

            <Drawer.Screen name="HOME" component={HomeStack} />
            <Drawer.Screen name="VEHICLES" component={VehiclesStack} />
            <Drawer.Screen name="ART & CULTURE" component={CultureStack} />
            <Drawer.Screen name="SERVICES" component={Service} />
            {/* <Drawer.Screen name="AI ENGINE" component={AIEngine} /> */}
            <Drawer.Screen name="LOGIN" component={Login} />
            <Drawer.Screen name="REGISTER" component={Register} />
            <Drawer.Screen name="CUSTOM" component={Custom} />
            <Drawer.Screen name="VIDEO" component={Videito} />


        </Drawer.Navigator>
    )
}
