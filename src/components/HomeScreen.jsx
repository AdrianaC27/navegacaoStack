import React from "react";
import { View, Text, Button} from "react-native";

export default props =>{
    
    return(
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent:'center',
            backgroundColor: '#DC143C'
        }} >
            <Text> Home Screen</Text>
            <Button title= "Go to Details"
             onPress={()=>props.navigation.navigate('DetailsScreen')}
            />
        </View>
    )
    }
