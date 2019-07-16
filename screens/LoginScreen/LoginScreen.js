import React from 'react';
import { StyleSheet, SafeAreaView, ImageBackground, Image, TouchableHighlight, StatusBar, Text } from 'react-native';

export default class LoginScreen extends React.Component{

    render(){
        return(
            <SafeAreaView style={styles.container}>
                <ImageBackground source={require('../../assets/splash.png')} style={{width: '100%', height: '100%'}}>
                <TouchableHighlight style={styles.googleButton} onPress={()=> this.googleSignIn()}>
                        <Image source={require('../../assets/googleSignin.png')}/>
                    </TouchableHighlight>
                </ImageBackground>
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
    },
    googleButton: {
        position: 'absolute',
        bottom: 50,
        left: 90,
    }
})