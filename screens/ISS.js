import *as React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default class ISSScreen extends React.Component{
    render(){
        return(
            <View style = {styles.container}>
                <Text style = {styles.text}>ISS Tracker Screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {backgroundColor : "lightblue", flex : 1},
    text : {alignItems : "center", marginTop : 200, fontSize : 25, fontWeight : "bold"}
})