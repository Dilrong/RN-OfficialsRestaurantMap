import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Moment from 'moment';

const Feed = ({data}) => (
    <View style={styles.feed}>
    <Image style={styles.feed__image} source={{uri: data.image}}/>
        <View style={styles.profile}>
            <Image style={styles.profile__image} source={{uri: data.profileImage}}/>
                <View style={styles.profile_textContainer}>
                    <Text style={styles.profile__name}>{data.name}</Text>
                    <Text style={styles.profile__date}>{Moment(Date(data.time)).format('YYYY.MM.DD')}</Text>
                </View>
        </View>
        <Text style={styles.content}>{data.content}</Text>
    </View>
)

const styles = StyleSheet.create({
    feed: {
        width: '90%',
        marginTop: 10
    },
    feed__image: {
        width: '100%',
        height: 200,
        borderRadius: 8,
        paddingBottom: 10
    },
    profile: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 10,
    },
    profile__image: {
        width: 30, 
        height: 30, 
        borderRadius: 30/2
    },
    profile_textContainer: {
        justifyContent: 'center',
    },
    profile__name: {
        color: '#ffffff',
        fontSize: 10,
        marginBottom: 5,
        marginLeft: 5
    },
    profile__date: {
        color: '#bdc3c7',
        fontSize: 8,
        marginLeft: 5
    },
    content: {
        width: '90%',
        color: '#ffffff',
        marginTop: 5,
        fontSize: 12
    }
})

export default Feed;