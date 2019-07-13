import React from 'react';
import { StyleSheet, Text, View, Image, Linking, TouchableHighlight } from 'react-native';

const RestaurantItem = ({data}) => (
    <TouchableHighlight onPress={()=>{Linking.openURL(data.url)}} underlayColor="#1f2b32">
    <View>
        <View style={styles.rowContainer}>
            <Image style={styles.thumb} source={{uri: data.image}}/>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{data.name}</Text>
                <Text style={styles.address}>{data.address}</Text>
                <Text style={styles.visitor}>{data.visitor+'이 '+data.visit+'번 방문한 식당'}</Text>
            </View>
        </View>
    </View>
    </TouchableHighlight>
)

const styles = StyleSheet.create({
    thumb: {
      width: 50,
      height: 50,
      marginRight: 10
    },
    textContainer: {
      flex: 1
    },
    separator: {
      height: 1,
      backgroundColor: '#bdc3c7'
    },
    title: {
      fontSize: 12,
      fontWeight: 'bold',
      color: '#ffffff',
      marginBottom: 5
    },
    address: {
        fontSize: 10,
        fontWeight: '500',
        color: '#ffffff',
        marginBottom: 5
    },
    visitor: {
        fontSize: 8,
        fontWeight: '100',
        color: '#bdc3c7'
    },
    rowContainer: {
      flexDirection: 'row',
      padding: 10
    },
  });

  export default RestaurantItem;