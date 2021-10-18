import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';


import { Feather, FontAwesome5 } from '@expo/vector-icons';

const BioDataButtonContainer = ( { color, bioDataPic, bioDataType, meaurement, navigation } ) => {

    // Fetch the data to get the biometeric data

    return (
    <TouchableOpacity 
        onPress={() => {
            navigation.navigate("Main");
        }}
        style={styles.container}>

        {/* <View style={styles.view1} >  */}
            <FontAwesome5 style={styles.icon} color={color} name={bioDataPic} />
            {/* <View>  */}
                <Text style={styles.text}>{bioDataType}</Text>
                <Text style={styles.dataNum}>100</Text>
                <Text style={styles.meaurement}>{meaurement}</Text>
            {/* </View> */}
        {/* </View> */}

    </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff",
        marginVertical: 10,
        marginHorizontal: 10,
        // paddingHorizontal: 30,
        paddingVertical: 30,
        borderColor: "#dcdcdc",
        borderWidth: 1,
        borderRadius: 20,
        elevation: 5,
        height: 220,
        width: 160
    },
    view1: {
        justifyContent: 'space-between', 
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,    
        // borderTopWidth: 1, 
    
    },
    text: {
        color: "#a9a9a9",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
    },
    dataNum: {
        color: "#000000",
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
    },
    meaurement: {
        color: "#808080",
        fontSize: 20,
        // fontWeight: "bold",
        textAlign: "center",
    },
    icon: {
        fontSize: 80, 
        textAlign: "center",
    }

});

export default withNavigation(BioDataButtonContainer);
