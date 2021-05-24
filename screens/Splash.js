import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, Dimensions, View} from 'react-native';

let height = Dimensions.get('window').height;
function Splash({navigation}) {
  useEffect(() => {
    setTimeout(async () => {
      navigation.replace('landingPage');
    }, 3000);
  }, []);
  return (
    <View style={styles.container}>
      <Image
        style={{width: '100%'}}
        resizeMode="cover"
        source={require('../assets/logo.jpeg')}></Image>
    </View>
  );
}

export default Splash;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: height * 0.5,
    fontWeight: 'bold',
    fontSize: 40,
    fontFamily: 'Cochin',
  },
});
