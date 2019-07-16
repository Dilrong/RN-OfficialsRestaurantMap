import React from 'react';
import { StyleSheet, SafeAreaView, View, Text, Image, TouchableHighlight, StatusBar, Linking, Switch } from 'react-native';

export default class EtcScreen extends React.Component{
    render(){
        return(
            <SafeAreaView style={styles.container}>

            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#182026',
        marginTop: StatusBar.currentHeight
    },
})