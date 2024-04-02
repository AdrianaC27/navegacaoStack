import React from "react";
import {View, Text, Button} from "react-native";

export default props =>{
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent:'center',
            backgroundColor: '#FF00FF'
        }} >
            <Text>DetailsScreen</Text>
            <Button title= "Go to Produtos"
             onPress={()=>props.navigation.navigate('Produtos')}
             />
            
        
        </View>
    )
}