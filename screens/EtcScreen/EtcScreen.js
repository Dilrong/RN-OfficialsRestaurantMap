import React from 'react';
import { StyleSheet, SafeAreaView, View, Text, Image, TouchableHighlight, StatusBar } from 'react-native';

export default class EtcScreen extends React.Component{
    render(){
        return(
            <SafeAreaView style={styles.container}>
                <View style={styles.profile}>
                    <Text>Hello, ...!</Text>
                </View>
                <View style={styles.menuList}>
                    <TouchableHighlight underlayColor="#1f2b32">
                        <Text style={styles.menuList__text}>Announcements</Text>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor="#1f2b32">
                        <Text style={styles.menuList__text}>Terms of service</Text>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor="#1f2b32">
                        <Text style={styles.menuList__text}>Push Alert</Text>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor="#1f2b32">
                        <Text style={styles.menuList__text}>Version</Text>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor="#1f2b32">
                        <Text style={styles.menuList__text}>Logout</Text>
                    </TouchableHighlight>
                </View>
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
    profile: {
        width: '100%'
    },
    menuList: {
        width: '100%'
    },
    menuList__text: {
        color: '#ffffff'
    }
})