import React from 'react';
import { TouchableHighlight,StyleSheet,Text } from 'react-native';

function Button(props) {
    return (
       <TouchableHighlight style={[styles.button,{backgroundColor:props.color}]} onPress={props.onPress}>
<Text style={{fontSize:20, fontFamily:"Avenir",fontWeight:"bold",color:props.txtcolor}}>{props.title}</Text>
       </TouchableHighlight>
    );
}

export default Button;
const styles = StyleSheet.create({
 button:{
     height:45,
     width:"90%",
     margin:15,
     borderWidth:1,
     borderRadius:25,
     justifyContent:"center",
     alignItems:"center"

 }   
})