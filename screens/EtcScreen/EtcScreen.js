import React from 'react';
import { StyleSheet, SafeAreaView, View, Text, Image, TouchableHighlight, StatusBar, Linking, Switch } from 'react-native';

export default class EtcScreen extends React.Component{
    render(){
        return(
            <SafeAreaView style={styles.container}>
                <View style={styles.profile}>
                    <Text style={styles.profile__text}>ETC</Text>
                </View>
                <View style={{backgroundColor: '#ffffff', width: '100%', height: 1}}/>
                <View style={styles.menuList}>
                    <TouchableHighlight underlayColor="#182026" onPress={()=>{Linking.openURL('https://dilrong.blog.me/')}}>
                        <Text style={styles.menuList__text}>Announcements</Text>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor="#182026" onPress={()=>{Linking.openURL('https://dilrong.blog.me/221511909943')}}>
                        <Text style={styles.menuList__text}>Terms of service</Text>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor="#182026" onPress={()=>{this.props.navigation.navigate('Version')}}>
                        <Text style={styles.menuList__text}>Version</Text>
                    </TouchableHighlight>
                </View>
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
    profile: {
        width: '100%',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20
    },
    profile__text: {
        fontSize: 24,
        color: '#ffffff',
        paddingBottom: 24
    },
    menuList: {
        width: '100%',
        paddingLeft: 16
    },
    menuList__text: {
        color: '#ffffff',
        fontSize: 16,
        paddingTop: 24
    }
})