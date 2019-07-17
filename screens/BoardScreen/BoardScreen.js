import React from 'react';
import { StyleSheet, SafeAreaView, StatusBar, TouchableHighlight } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import { Feed } from '../../components';
import firebase from '../../firebase';

export default class BoardScreen extends React.Component{
    state = {
        data: [],
    }

    componentDidMount(){
        this.getFirebaseData();
    }

    getFirebaseData(){
        const db = firebase.firestore();
        db.collection("board").get().then(querySnapshot => {
            let dataSet = querySnapshot.docs.map(doc => doc.data());

            this.setState({
                data: dataSet
            });
            console.log(dataSet)
        })
    }

    render(){
        const { data } = this.state;
        return(
            <SafeAreaView style={styles.container}>
                {data.map((data, index) => (
                    <Feed
                        key={index}
                        data={data}/>
                ))}
                <TouchableHighlight style={styles.write} underlayColor='#182026'>
                    <Octicons
                        name='pencil'
                        color='white'
                        size={20}
                    />
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
    },
    write: {
        position: 'absolute',
        right: 10,
        bottom: 10,
        width: 40, 
        height: 40,
        alignItems: 'center',
        justifyContent: 'center', 
        borderRadius: 40/2, 
        backgroundColor: '#1f2b32',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }
})