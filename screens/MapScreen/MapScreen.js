import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import firebase from '../../firebase';

export default class MapScreen extends React.Component{

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
                <MapView
                    style={styles.mapview}
                    provider={PROVIDER_GOOGLE}
                    showsMyLocationButton={true}
                    showsUserLocation
                    followsUserLocation
                    initialRegion={{
                        latitude: 36.464496,
                        longitude: 127.768667,
                        latitudeDelta: 4,
                        longitudeDelta: 4,
                    }}
                >
                {data.map((marker, index) => (
                    <Marker
                        key={index}
                        image={require('../../assets/pin.png')}
                        coordinate={marker.location}
                    >
                        <Callout style={styles.callout}>
                            <Text style={styles.title}>{marker.name}</Text>
                            <Text style={styles.descrtion}>{marker.address}</Text>
                        </Callout>
                    </Marker>
                ))}
                </MapView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    mapview: {
        flex: 1, 
        ...StyleSheet.absoluteFillObject,
    },
    callout: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: '500',
        fontSize: 14,
        paddingBottom: 4
    },
    descrtion: {
        fontWeight: '100',
        fontSize: 10
    }
})