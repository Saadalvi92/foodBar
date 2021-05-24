import React, {useEffect} from 'react';
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import axios from 'axios';
import FormData from 'form-data';
import {useState} from 'react';
var data = new FormData();
let height = Dimensions.get('window').height;
let width = Dimensions.get('window').width;
function IndianCuisine(props) {
  const Cuisine = props.route.params;

  useEffect(() => {
    data.append('cuisineId', Cuisine.id);
    var config = {
      method: 'post',
      url: 'http://amcrecipes.suretostop.com/getCuisinCategories',
      data: data,
    };
    axios(config)
      .then(function (response) {
        console.log(response.data);
        setCategories(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  const [categories, setCategories] = useState();
  return (
    <View style={styles.container}>
      {console.log(Cuisine.image)}
      <Text
        style={{fontWeight: 'bold', fontSize: 25, marginTop: height * 0.05}}>
        {Cuisine.title}
      </Text>
      <Image
        style={{width: '100%', marginTop: '100%'}}
        backgroundColor="#000"
        resizeMode="contain"
        source={{uri: Cuisine.image}}
      />
      <TouchableOpacity
        style={{
          width: '60%',
          height: 55,
          borderRadius: 10,
          marginLeft: width * -0.2,
          marginTop: height * -0.1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#CB4E47',
        }}>
        <Text style={{color: 'white', fontWeight: '600', fontSize: 16}}>
          About Indian food
        </Text>
      </TouchableOpacity>
      <Text
        style={{
          fontWeight: '600',
          fontSize: 23,
          marginTop: height * 0.05,
          marginLeft: width * -0.2,
          marginTop: height * 0.02,
        }}>
        Indian food categories
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
                borderRadius: 10,
              }}>
              <Text>{item.title} </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default IndianCuisine;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
});
