import React from 'react';
import { StyleSheet, SafeAreaView, View, TextInput, ScrollView, StatusBar } from 'react-native';
import { RestaurantItem } from '../../components';
import firebase from '../../firebase';

export default class ListScreen extends React.Component{
    state = {
        data: [],
        keyword: ''
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
        const mapToList = (data) => {
            console.log(this.state.keyword)
            data = data.filter(
                (data) => {
                    return data.name.indexOf(this.state.keyword) > -1;
                }
            );

            return data.map((data, index) => {
                return <RestaurantItem
                key={index}
                data={data}/>
            })
        }
        return(
            <SafeAreaView style={styles.container}>
                <View style={styles.searchBar}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search"
                        placeholderTextColor="#bdc3c7"
                        onChangeText={(keyword) => this.setState({keyword})}
                        value={this.state.keyword}
                    />
                </View>
                <ScrollView style={styles.scroll}>
                        {mapToList(data)}
                    </ScrollView>
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
    scroll: {
        flex: 1,
        width: '100%',
        marginTop: 10,
        marginLeft: 20
    },
    searchBar: {
        width: '100%', 
        marginTop: 10,
        marginLeft: 30,
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
        width: '100%', 
        height: 30,
        color: '#ffffff',
        margin: 5,
        fontSize: 12
    }
})