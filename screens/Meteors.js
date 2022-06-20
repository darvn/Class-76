import *as React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default class MeteorScreen extends React.Component{
    render(){
        return(
            <View style = {styles.container}>
                <Text style = {styles.text}>Meteor Tracker Screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {backgroundColor : "lightorange", flex : 1},
    text : {alignItems : "center", marginTop : 200, fontSize : 25, fontWeight : "bold"}
})