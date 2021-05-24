import React from 'react';
import { View , TextInput,StyleSheet,Dimensions} from 'react-native';
let height = Dimensions.get('window').height;
let width = Dimensions.get('window').width;

function InputSecond({placeholder, ...other}) {
    return (
        <View>
        <TextInput style={styles.textinput}
       placeholder={placeholder}
       {...other}
       />
   </View>
    );
}

export default InputSecond; 
const styles = StyleSheet.create({
    textinput:{
        width:"60%",
        height:75,
        backgroundColor:"#F9A602",
        padding:10,
        fontSize:17,
        borderWidth:1.5,
        alignSelf:"flex-end",
        marginTop:height*0.01,
        borderTopLeftRadius:40,
        borderBottomLeftRadius:40,
        //alignItems:"center",
        justifyContent:"center",
        padding:20,

    },
})