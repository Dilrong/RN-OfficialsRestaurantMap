import React from 'react';
import { StyleSheet, SafeAreaView, View, TextInput, ScrollView } from 'react-native';
import { RestaurantItem } from '../../components';
import firebase from '../../firebase';

export default class ListScreen extends React.Component{
    state = {
        data: []
    }

    componentDidMount(){
        this.getFirebaseData();
    }

    getFirebaseData(){
        const db = firebase.firestore();
        db.collection("restaurant").get().then(querySnapshot => {
            let dataSet = querySnapshot.docs.map(doc => doc.data());

            this.setState({
                data: dataSet
            });
        })
    }

    render(){
        const { data } = this.state;
        return(
            <SafeAreaView style={styles.container}>
                <View style={styles.searchBar}>
                    <TextInput
                        style={styles.searchInput}
                    />
                    <ScrollView>
                        {data.map((data, index) => (
                            <RestaurantItem
                                key={index}
                                data={data}
                            />
                        ))}
                    </ScrollView>
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
        backgroundColor: '#182026'
    },
    searchBar: {
        backgroundColor: '#1f2b32',
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    searchInput: {
        width: 330, 
        height: 30,
        color: '#ffffff',
        margin: 5,
        fontSize: 12
    }
})