import React from 'react';
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  FlatList,
  ScrollView,
} from 'react-native';
import Button from '../components/Button';
let height = Dimensions.get('window').height;
let width = Dimensions.get('window').width;
import axios from 'axios';
import {useEffect} from 'react';
import {useState} from 'react';
var config = {
  method: 'get',
  url: 'http://amcrecipes.suretostop.com/getCuisines',
};
function HomeScreen({navigation}) {
  useEffect(() => {
    axios(config)
      .then(function (response) {
        setCuisines(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  const [cuisines, setCuisines] = useState([]);
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={{fontWeight: 'bold', fontSize: 30}}>Welcome Chef</Text>
        <Text
          style={{
            fontWeight: '500',
            marginTop: height * 0.04,
            fontSize: 19,
            width: '50%',
            alignSelf: 'center',
          }}>
          Please choose your favourite cuisine
        </Text>
        <FlatList
          data={cuisines}
          keyExtractor={item => {
            item.id;
          }}
          key={() => {
            item.id;
          }}
          renderItem={({item}) => (
            <View
              style={{
                marginTop: height * 0.03,
                width: width,
              }}>
              <Button
                title={item.title}
                color="#FF8C00"
                txtcolor="white"
                onPress={() => navigation.navigate('indianCusines', item)}
              />
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
}

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
