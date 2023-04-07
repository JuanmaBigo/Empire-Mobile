import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CustomDrawer from '../components/CustomDrawer';

import Home from '../screens/Home';
import Login from '../screens/Login';
import Register from '../screens/Register';



const Drawer = createDrawerNavigator();

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
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Login" component={Login} />
            <Drawer.Screen name="Register" component={Register} />
        </Drawer.Navigator>
    )
}
