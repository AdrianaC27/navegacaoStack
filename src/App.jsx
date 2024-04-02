import React from "react";
import { SafeAreaView, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./components/HomeScreen";
import DetailsScreen from "./components/DetailsScreen";
import Produtos from "./components/Produtos";
import About from "./components/About";



const Stack = createNativeStackNavigator();

export default props =>{
    return (
        <SafeAreaView style={{flex:1}}>
            <NavigationContainer>

                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={HomeScreen} 
                    options={
                        {title:'Inicio'}
                    }/> 
                    
                    <Stack.Screen name="DetailsScreen" component={DetailsScreen}
                    options={
                        {title:"Detalhes"}
                    }/> 

                    <Stack.Screen name="Produtos" component={Produtos}
                    options={
                        {title:"Produtos"}
                    }/> 
                    <Stack.Screen name="About" component={About}
                    options={
                        {title:"About"}
                    }/> 
                </Stack.Navigator>
                
            </NavigationContainer>
        
        
        </SafeAreaView>
    )
        
    }
