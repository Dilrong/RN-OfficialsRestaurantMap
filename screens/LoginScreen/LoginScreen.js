import React from 'react';
import { StyleSheet, SafeAreaView, ImageBackground, Image, TouchableHighlight, StatusBar } from 'react-native';
import firebase from '../../firebase';

export default class EtcScreen extends React.Component{
    googleSignIn(){
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
            console.log('ok')
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
            console.log(error)
          });
    }
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