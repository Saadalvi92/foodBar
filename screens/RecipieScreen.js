import React from 'react';
import {View, StyleSheet, Text, Dimensions, ScrollView} from 'react-native';
let height = Dimensions.get('window').height;
let width = Dimensions.get('window').width;
function recipieScreen(props) {
  const Recipe = props.route.params;
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text
          style={{
            fontWeight: '600',
            fontSize: 20,
            marginTop: height * 0.05,
            marginLeft: width * 0.03,
          }}>
          {Recipe.title}
        </Text>
        <Text
          style={{
            fontSize: 16,
            marginLeft: width * 0.03,
            letterSpacing: 1,
            marginRight: width * 0.03,
            marginTop: height * 0.02,
          }}>
          {Recipe.description}
        </Text>
        <Text
          style={{
            fontWeight: '600',
            fontSize: 20,
            marginTop: height * 0.05,
            marginLeft: width * 0.03,
          }}>
          Recipe
        </Text>
        <Text
          style={{
            fontSize: 16,
            marginLeft: width * 0.03,
            letterSpacing: 1,
            marginRight: width * 0.03,
            marginTop: height * 0.02,
          }}>
          {Recipe.method}
        </Text>
      </View>
    </ScrollView>
  );
}

export default recipieScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // alignItems:"center",
    // justifyContent:"center"
  },
});
