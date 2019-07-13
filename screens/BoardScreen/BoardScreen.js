import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

export default class BoardScreen extends React.Component{
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
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#182026'
    }
})