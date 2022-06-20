import *as React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default class HomeScreen extends React.Component{
    render(){
        return(
            <View style = {styles.container}>
                <Text style = {styles.text}>Home Screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {backgroundColor : "lightgreen", flex : 1},
    text : {alignItems : "center", marginTop : 200, fontSize : 25, fontWeight : "bold"}
})