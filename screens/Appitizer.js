import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import axios from 'axios';
import FormData from 'form-data';
import {useEffect} from 'react';
import {useState} from 'react';
let height = Dimensions.get('window').height;

function Appitizer(props) {
  const cuisine_cat = props.route.params;
  useEffect(() => {
    var form_data = new FormData();
    form_data.append('cuisineCategoryId', cuisine_cat.id);
    var config = {
      method: 'post',
      url: 'https://amcrecipes.suretostop.com/getCuisinItems',
      data: form_data,
    };
    axios(config)
      .then(function (response) {
        setCuisineItem(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  const [cuisineItem, setCuisineItem] = useState([]);
  return (
    <View style={styles.container}>
      <Text style={{fontWeight: '600', fontSize: 20, marginTop: height * 0.05}}>
        Chooese your dish to prepare
      </Text>
      <FlatList
        data={cuisineItem}
        renderItem={({item}) => (
          <TouchableOpacity
            style={{alignItems: 'center'}}
            onPress={() => props.navigation.navigate('recipeScreen', item)}>
            <View>
              <Image
                source={{uri: item.image}}
                style={{
                  height: 300,
                  width: 300,
                  marginTop: height * 0.03,
                }}
              />
              <Text
                style={{
                  fontWeight: '500',
                  fontSize: 20,
                  marginTop: height * 0.02,
                }}>
                {item.title}
              </Text>
            </View>
          </TouchableOpacity>
          // <TouchableOpacity
          //   style={{alignItems: 'center'}}
          //   onPress={() => props.navigation.navigate('recipeScreen')}>
          //   <Image
          //     style={{height: 300, width: 300, marginTop: height * 0.03}}
          //     source={require('../assets/samosa.jpeg')}
          //   />
          //   <Text
          //     style={{
          //       fontWeight: '500',
          //       fontSize: 20,
          //       marginTop: height * 0.02,
          //     }}>
          //     Samosa
          //   </Text>
          // </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default Appitizer;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
});

/* <TouchableOpacity
        style={{alignItems: 'center'}}
        onPress={() => props.navigation.navigate('recipeScreen')}>
        <Image
          style={{height: 300, width: 300, marginTop: height * 0.03}}
          source={require('../assets/samosa.jpeg')}
        />
        <Text
          style={{fontWeight: '500', fontSize: 20, marginTop: height * 0.02}}>
          Samosa
        </Text>
      </TouchableOpacity> */
