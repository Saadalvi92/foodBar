import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import axios from 'axios';
import FormData from 'form-data';
let height = Dimensions.get('window').height;
let width = Dimensions.get('window').width;
function IndianCuisine(props) {
  const Cuisine = props.route.params;

  useEffect(() => {
    var form_data = new FormData();
    form_data.append('cuisineId', props.route.params.id);
    var config = {
      method: 'post',
      url: 'https://amcrecipes.suretostop.com/getCuisinCategories',
      data: form_data,
    };
    axios(config)
      .then(function (response) {
        setCategories(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  const [categories, setCategories] = useState();
  return (
    <View style={styles.container}>
      <Text
        style={{fontWeight: 'bold', fontSize: 25, marginTop: height * 0.05}}>
        {Cuisine.title}
      </Text>
      <Image
        source={{uri: Cuisine.image}}
        style={{width: '100%', height: '45%', backgroundColor: '#000'}}
        resizeMode="contain"
      />
      <View
        style={{
          width: '95%',
          height: '10%',
          borderRadius: 10,
          marginLeft: '1%',
          // marginLeft: width * -0.2,
          marginTop: height * -0.1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#CB4E47',
        }}>
        <Text style={{color: 'white', fontWeight: '600', fontSize: 16}}>
          {Cuisine.title}
        </Text>
      </View>
      <Text
        style={{
          fontWeight: '600',
          fontSize: 23,
          marginTop: height * 0.05,
          marginLeft: width * -0.2,
          marginTop: height * 0.02,
        }}>
        {Cuisine.title} categories
      </Text>
      <FlatList
        data={categories}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => props.navigation.navigate('appitizerScreen', item)}>
            <View
              style={{
                width: width,
                height: 55,
                backgroundColor: '#F0E68C',
                marginLeft: width * -0.2,
                marginTop: height * 0.02,
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                borderRadius: 10,
              }}>
              <Text>{item.title} </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>

    //
  );
}

export default IndianCuisine;
const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
  },
});
