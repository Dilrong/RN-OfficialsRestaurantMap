import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const TaxItem = ({data}) => (
    <View>
        <View style={styles.rowContainer}>
            <Image style={styles.thumb} source={{uri: data.image}}/>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{data.name}</Text>
                <Text style={styles.address}>{data.content}</Text>
                <Text style={styles.visitor}>{data.visitor+'이 '+data.price+'원 사용'}</Text>
            </View>
        </View>
    </View>
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

  export default TaxItem;