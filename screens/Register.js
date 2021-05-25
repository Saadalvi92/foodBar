import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Button from '../components/Button';
import axios from 'axios';
import FormData from 'form-data';

let height = Dimensions.get('window').height;
let width = Dimensions.get('window').width;
function Register({navigation}) {
  const [fullName, setFullName] = useState();
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [repeatPassword, setRepeatPassword] = useState();

  const signUp = () => {
    if (password === repeatPassword) {
      var data = new FormData();
      data.append('email', email);
      data.append('password', password);
      var config = {
        method: 'post',
        url: 'http://amcrecipes.suretostop.com/signup',
        data: data,
      };
      axios(config)
        .then(function (response) {
          if (response.data == 1) {
            alert('Signup Successfull');
            navigation.navigate('SignIn');
          } else {
            alert('Something Went Wrong');
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      alert('Your Password Doesnt match');
    }
  };
  return (
    <View style={styles.container}>
      <Text
        style={{fontWeight: 'bold', fontSize: 20, marginLeft: width * 0.25}}>
        Create Your Account
      </Text>
      <Text
        style={{
          fontWeight: '500',
          alignSelf: 'center',
          fontSize: 20,
          marginLeft: width * 0.1,
          marginTop: height * 0.03,
          width: '80%',
          color: '#383838',
        }}>
        Enter your Email ID and password to create your account
      </Text>
      <View style={{marginTop: height * 0.08, alignItems: 'center'}}>
        <TextInput
          placeholderTextColor="grey"
          style={{
            backgroundColor: 'white',
            borderRadius: 8,
            padding: 10,
            height: 55,
            width: '90%',
          }}
          placeholder="fullName*"
          value={fullName}
          onChangeText={text => setFullName(text)}
        />
      </View>
      <View style={{marginTop: height * 0.01, alignItems: 'center'}}>
        <TextInput
          placeholderTextColor="grey"
          style={{
            backgroundColor: 'white',
            borderRadius: 8,
            padding: 10,
            height: 55,
            width: '90%',
          }}
          placeholder="userName*"
          value={userName}
          onChangeText={text => setUserName(text)}
        />
      </View>
      <View style={{marginTop: height * 0.01, alignItems: 'center'}}>
        <TextInput
          placeholderTextColor="grey"
          style={{
            backgroundColor: 'white',
            borderRadius: 8,
            padding: 10,
            height: 55,
            width: '90%',
          }}
          placeholder="Email*"
          value={email}
          onChangeText={text => setEmail(text)}
        />
      </View>
      <View style={{marginTop: height * 0.01, alignItems: 'center'}}>
        <TextInput
          placeholderTextColor="grey"
          style={{
            backgroundColor: 'white',
            borderRadius: 8,
            padding: 10,
            height: 55,
            width: '90%',
          }}
          placeholder="Enter Password*"
          value={password}
          onChangeText={text => setPassword(text)}
        />
      </View>
      <View style={{marginTop: height * 0.01, alignItems: 'center'}}>
        <TextInput
          placeholderTextColor="grey"
          style={{
            backgroundColor: 'white',
            borderRadius: 8,
            padding: 10,
            height: 55,
            width: '90%',
          }}
          placeholder="Repeat Password*"
          onChangeText={text => setRepeatPassword(text)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Sign Up" color="white" onPress={() => signUp()} />
      </View>

      <TouchableOpacity
        style={styles.touchText}
        onPress={() => navigation.navigate('SignIn')}>
        <Text style={{fontWeight: 'bold', fontSize: 15, fontFamily: 'Avenir'}}>
          Have an account? SignIn
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default Register;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CB4E47',
    justifyContent: 'center',
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 25,
    fontFamily: 'Avenir',
  },
  inputContainer: {
    marginTop: height * 0.03,
  },
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: height * 0.05,
  },
  imgContainer: {
    height: 132,
    width: 132,
    borderWidth: 1,
    marginTop: height * 0.05,
    borderRadius: 16,
  },
  buttonContainer: {
    marginTop: height * 0.04,
    alignItems: 'center',
  },
  touchText: {
    alignItems: 'center',
    marginTop: height * 0.03,
  },
});
