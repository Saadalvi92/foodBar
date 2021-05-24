import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Button from '../components/Button';

function LandingScreen(props) {
  return (
    <View style={styles.container}>
      <Image
        style={{height: 400, width: 400}}
        source={require('../assets/logo.jpeg')}
      />
      <Button
        title="Login"
        color="red"
        txtcolor="white"
        onPress={() => props.navigation.navigate('SignIn')}
      />
      <Button
        title="Sign Up"
        color="white"
        txtcolor="black"
        onPress={() => props.navigation.navigate('signUp')}
      />
    </View>
  );
}

export default LandingScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
