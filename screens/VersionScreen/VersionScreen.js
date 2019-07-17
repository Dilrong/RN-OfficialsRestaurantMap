import React from 'react';
import { StyleSheet, SafeAreaView, View, Text, Image, StatusBar } from 'react-native';
import { expo } from '../../app.json';

export default class VersionScreen extends React.Component{
    render(){
        return(
            <SafeAreaView style={styles.container}>
                <View>
                    <Text style={styles.headerText}>Version</Text>
                    <View style={{backgroundColor: '#ffffff', width: '100%', height: 1}}/>
                </View>
                <Image source={require('../../assets/Logo.png')}/>
                <Text style={styles.versionText}>Current v{expo.version}</Text>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#182026',
        marginTop: StatusBar.currentHeight
    },
    headerText: {
        color: '#ffffff',
        fontSize: 24,
        paddingTop: 20,
        paddingBottom: 20
    },
    versionText: {
        color: '#ffffff',
        fontSize: 16,
        paddingTop: 20
    }
})