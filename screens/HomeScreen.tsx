import * as React from 'react';
import { StyleSheet,ScrollView,Image,Dimensions } from 'react-native';


const { width } = Dimensions.get('window');


export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Image style={{width:380,}}  source={require('../assets/images/home_placeholder.png')}/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
