import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import CustomDrawer from '../components/CustomDrawer';

import Home from '../screens/Home';
import Mangas from '../screens/Mangas';
import MangaDetails from '../screens/MangaDetails';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


function DetailsStack() {
    return (
        <Stack.Navigator >
            <Stack.Screen name="ListMangas" component={Mangas} options={{ headerShown: false }} />
            <Stack.Screen name="MangaDetails" component={MangaDetails} options={{ headerShown: false }} />
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
            <Drawer.Screen name="ART & CULTURE" component={DetailsStack} />
            <Drawer.Screen name="VEHICLES" component={DetailsStack} />
            <Drawer.Screen name="AI ENGINE" component={DetailsStack} />
            <Drawer.Screen name="CART" component={DetailsStack} />
        </Drawer.Navigator>
    )
}
