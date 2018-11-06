import React, { Component } from 'react';
import { 
    ScrollView,
    View, 
    Text,
    StyleSheet,
    KeyboardAvoidingView,
    Button,
    ActivityIndicator 
} from 'react-native'; 
import { connect } from 'react-redux'; 

import PlaceInput from '../../components/PlaceInput';
import { addPlace } from '../../store/actions';
import MainText from '../../components/MainText';
import HeadingText from '../../components/HeadingText';
import PickImage from '../../components/PickImage';
import PickLocation from '../../components/PickLocation';

class SharePlaceScreen extends Component {

    constructor() {
        super();

        this.state = {
            placeName: "",
            location: null,
            placeImage: null
        };
    }

    placeNameChangedHandler = placeName => {
        this.setState(prevState => ({ placeName })) 
    }

    placeNameSubmitHandler = () => {
        if(this.state.placeName !== "") {
            this.props.onAddPlace(this.state.placeName);
            this.setState({placeName: ""});
        }
    }

    onImagePickHandler = imagePicker => {
        this.setState(prevState => ({ placeImage }));
    }

    addPlaceHandler = () => {
        const { placeName, location, placeImage } = this.state;

        if(!placeName.trim()) {
            alert("Input is empty");
        } else {
            this.props.onAddPlace(placeName, location, placeImage);
            this.setState(prevState => ({ placeName: "" }));
        }
    }

    render() {
        const { placeName, placeImage } = this.state;
        const { isLoading } = this.props;
        let submitButton = (
            <Button
                title="Share the place"
                onPress={this.addPlaceHandler}
                disabled={!placeName || !placeImage}
                />
        );

        if(isLoading) {
            submitButton = <ActivityIndicator size="large"/>
        }

        return(
            <ScrollView>
                <KeyboardAvoidingView style={styles.wrapper} behavior="padding">
                     
                    <MainText>
                        <HeadingText>Very Good</HeadingText>
                    </MainText>

                    
                    <PlaceInput 
                        placeHolder="Place name"
                        placeName={this.state.placeName}
                        placeNameChangedHandler={this.placeNameChangedHandler}
                        placeNameSubmitHandler={this.placeNameSubmitHandler}/>

                    <PickImage onImagePick={this.onImagePickHandler} />  

                    <PickLocation />

                    <View style={styles.button}>{submitButton}</View>
                     
                         
                </KeyboardAvoidingView>
                
            </ScrollView>
        );
    }

}

const styles = StyleSheet.create({
    wrapper: {
        padding: 10,
        flex: 1,
        alignItems: "center"
    },
    button: {
        margin: 10
    },
    inputWrap: {
        width: "100%",
        paddingTop: 10,
        paddingBottom: 10
    }
}); 

const mapStateToProps = ({ ui: { isLoading } }) => ({ isLoading })

const mapDispatchToProps = dispatch => {
    return {
        onAddPlace: (placeName) => dispatch(addPlace(placeName))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SharePlaceScreen);