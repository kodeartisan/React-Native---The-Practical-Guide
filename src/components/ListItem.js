import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const listItem = (props) => (
    <TouchableOpacity onPress={props.onItemPressed}>
        <View style={styles.listItem} >
            <Image style={styles.placeImage} source={props.placeImage}/>
            <Text>{props.placeName}</Text>
        </View>
    </TouchableOpacity>
    
);

const styles = StyleSheet.create({
    listItem: {
        marginBottom: 5,
        width: "100%",
        padding: 10,
        backgroundColor: "#eee",
        flexDirection: "row",
        alignItems: "center"
    },
    placeImage: {
        marginRight: 8,
        height: 40,
        width: 40
    }
});

export default listItem;