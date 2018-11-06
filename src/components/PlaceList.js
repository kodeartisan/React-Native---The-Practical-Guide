import React from 'react';
import { View, StyleSheet, ScrollView, FlatList } from 'react-native';

import ListItem from './ListItem';

const placeList = props => {
    const placesOutput = props.places.map((place, i) => (
        <ListItem key={i} placeName={place} onItemPressed={() => props.onItemDeleted(i)}/>
      ));

    return (
        <FlatList 
            style={styles.listContainer}
            data={props.places}
            renderItem={(info) => (
                <ListItem  
                    placeImage={info.item.image}
                    placeName={info.item.name} 
                    onItemPressed={() => props.onItemSelected(info.item.key)}/>
            )}
        />
    );
}

const styles = StyleSheet.create({
    listContainer: {
        width: "100%"
      }
});

export default placeList;