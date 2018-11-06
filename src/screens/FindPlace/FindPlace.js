import React, { Component } from 'react';
import { View, Text } from 'react-native'; 
import { connect } from 'react-redux'; 
import PlaceList from '../../components/PlaceList';

 

class FindPlaceScreen extends Component {

    static get options() {
        return {
          topBar: {
            title: {
              text: 'Find Place'
            },
          }
        };
      }

    constructor() {
        super();
    }  

    render() {
         
        return(
            <View>
                 <PlaceList places={this.props.places}/>
            </View>
        );
    }

}

const mapStateToProps = state => {
     
    return {
        places: state.places.places
    };
};

export default connect(mapStateToProps)(FindPlaceScreen);