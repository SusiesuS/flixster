import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

import BioDataButtonContainer from '../components/BioDataButtonContainer';

import { Feather } from '@expo/vector-icons';

const MainScreen = ( { navigation } ) => {
    let bioDataList =  [{color:"#ff6347", bioDataPic:"heartbeat", bioDataType:"Heartbeat", meaurement:"BPM"}, 
                    {color:"#87cefa", bioDataPic:"soap", bioDataType:"SpO2", meaurement:"%"},
                    {color:"#cd5c5c", bioDataPic:"thermometer-half", bioDataType:"Temperature", meaurement:"F"}
                    ];
                console.log(bioDataList);
    return <View backgroundColor="#f5f5f5">
        <Text>l</Text>
        <Text>l</Text>
        <Text>l</Text>
        <Text>l</Text>

        <View style={styles.bioData}>
            <FlatList 
                keyExtractor={(bioDataList) => bioDataList.bioDataPic}
                data={bioDataList}
                renderItem={({item}) => {
                    return <BioDataButtonContainer color={item.color} bioDataPic={item.bioDataPic} bioDataType={item.bioDataType} meaurement={item.meaurement} />
            
                    // <Text> {item.bioDataPic}</Text>
                    // <View style={ {height: 100, width: 100} } /> 

                }}
                horizontal={false}
                numColumns={2}

            />

        </View>
        {/* <BioDataButtonContainer bioDataPic="heartbeat" bioDataType="Heartbeat" meaurement="BPM" /> */}

        </View>
};

const styles = StyleSheet.create({
    bioData: {
        backgroundColor: "#f5f5f5",
        marginVertical: 20,
        marginHorizontal: 25,
        // paddingHorizontal: 30,
        paddingVertical: 40,
        borderColor: "#ffffff",
        borderWidth: 1,
        borderRadius: 20,
        elevation: 5,

    }
});

export default MainScreen;

