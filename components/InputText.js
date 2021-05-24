import React from 'react';
import { View , TextInput,StyleSheet,Dimensions} from 'react-native';
let height = Dimensions.get('window').height;
let width = Dimensions.get('window').width;
function InputText({placeholder, ...other}) {
    return (
       <View>
            <TextInput style={styles.textinput}
           placeholder={placeholder}
           {...other}
           
           />
       </View>
    );
}

export default InputText;
const styles = StyleSheet.create({
    textinput:{
        width:"60%",
        height:75,
        backgroundColor:"#F9A602",
        borderWidth:1.5,
        padding:10,
        fontSize:17,
        alignSelf:"flex-start",
        //marginTop:height*0.05,
        borderTopRightRadius:40,
        borderBottomEndRadius:40,
        //alignItems:"center",
        justifyContent:"center",
        padding:20,}
})