import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  TextInput,
} from 'react-native';
import axios from 'axios';
import FormData from 'form-data';
import Button from '../components/Button';
import {useState} from 'react';
var data = new FormData();
let height = Dimensions.get('window').height;
let width = Dimensions.get('window').width;
function Login({navigation}) {
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();
  var config = {
    method: 'post',
    url: 'http://amcrecipes.suretostop.com/loginUser',
    data: data,
  };
  const handleSubmit = () => {
    data.append('email', login);
    data.append('password', password);
    axios(config)
      .then(function (response) {
        if (response.data) {
          navigation.navigate('homePage');
        } else {
          alert('Check Your Login Credentials');
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <View style={styles.container}>
      <Image
        style={{
          height: 130,
          width: 130,
          marginTop: height * 0.1,
          marginLeft: width * 0.1,
        }}
        source={require('../assets/logo.jpeg')}
      />
      <Text style={{fontWeight: 'bold', fontSize: 20, marginLeft: width * 0.1}}>
        Proceed with your
      </Text>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 20,
          marginLeft: width * 0.1,
          marginTop: height * 0.04,
        }}>
        Login
      </Text>
      <View style={{marginTop: height * 0.08, alignItems: 'center'}}>
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: 'lightgrey',
            borderRadius: 13,
            padding: 10,
            height: 55,
            width: '90%',
          }}
          placeholder="Email/Username*"
          onChangeText={text => setLogin(text)}
          value={login}
        />
      </View>
      <View style={{marginTop: height * 0.02, alignItems: 'center'}}>
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: 'lightgrey',
            borderRadius: 13,
            padding: 10,
            height: 55,
            width: '90%',
          }}
          onChangeText={text => setPassword(text)}
          placeholder="Password*"
          secureTextEntry
          value={password}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Login"
          color="red"
          txtcolor="white"
          onPress={() => handleSubmit()}
        />
        <Text style={{fontWeight: 'bold', fontSize: 17}}>or</Text>
        <Button
          title="Sign Up"
          color="white"
          txtcolor="black"
          onPress={() => navigation.navigate('signUp')}
        />
      </View>
    </View>
  );
}
//
//
export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 25,
    fontFamily: 'Avenir',
  },
  inputContainer: {
    marginTop: height * 0.05,
  },
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: height * 0.07,
  },
  imgContainer: {
    backgroundColor: 'red',
    height: 150,
    width: 150,
    borderWidth: 1,
    marginTop: height * 0.05,
    borderRadius: 16,
  },
  buttonContainer: {
    marginTop: height * 0.06,
    alignItems: 'center',
  },
  touchText: {
    alignItems: 'center',
    marginTop: height * 0.03,
  },
});
