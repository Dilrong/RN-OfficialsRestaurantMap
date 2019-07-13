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
                        <Callout>
                            <Text>{marker.name}</Text>
                            <Text>{marker.address}</Text>
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
      }
})