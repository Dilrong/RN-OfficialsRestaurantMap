import React from 'react';
import { StyleSheet, SafeAreaView, View, Text, Image, TouchableHighlight, StatusBar, Linking, Switch } from 'react-native';

export default class EtcScreen extends React.Component{
    render(){
        return(
            <SafeAreaView style={styles.container}>
                <View style={styles.profile}>
                    <Image 
                        source={{uri: 'https://cdnimg.melon.co.kr/cm/artistcrop/images/002/61/143/261143_500.jpg?32b7688ac5eb168fa11891d572f7b23d/melon/resize/416/quality/80/optimize'}}
                        style={{width: 70, height: 70, borderRadius: 70/2}}
                    />
                    <Text style={styles.profile__text}>Hello!</Text>
                </View>
                <View style={{backgroundColor: '#ffffff', width: '100%', height: 1}}/>
                <View style={styles.menuList}>
                    <TouchableHighlight underlayColor="#1f2b32" onPress={()=>{Linking.openURL('https://dilrong.blog.me/')}}>
                        <Text style={styles.menuList__text}>Announcements</Text>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor="#1f2b32" onPress={()=>{Linking.openURL('https://dilrong.blog.me/221511909943')}}>
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