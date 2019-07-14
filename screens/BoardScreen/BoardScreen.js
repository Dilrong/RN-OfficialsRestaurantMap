import React from 'react';
import { StyleSheet, SafeAreaView, View, Image, TouchableHighlight, StatusBar } from 'react-native';

export default class BoardScreen extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <SafeAreaView style={styles.container}>
                    <TouchableHighlight onPress={()=> this.props.navigation.navigate('Login')}>
                        <Image source={require('../../assets/googleSignin.png')}/>
                    </TouchableHighlight>
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
    }
})