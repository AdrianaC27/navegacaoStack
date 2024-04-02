import React from "react";
import { View, Text, Button} from "react-native";

export default props =>{
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent:'center'
        }} >
            <Text>Produtos</Text>
            <Button title= "Go to About"
             onPress={()=>props.navigation.navigate('About')}
             />
        
        </View>
    )
}