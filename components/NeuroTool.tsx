import React from 'react';
import {StyleSheet, View, Text,Dimensions } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const screenWidth = Math.round(Dimensions.get('window').width);


export const NeuroTool = (props) => {
  const {onPressNeuroTool} = props;
  const {title,description} = props;

    return(
    <TouchableWithoutFeedback onPress={()=>onPressNeuroTool()}>
    <View style={styles.container} >
         <Text style={styles.title}>{title}</Text>
         <Text style={styles.description}>{description}</Text>
    </View>
    </TouchableWithoutFeedback>
    )
    
}

const styles = StyleSheet.create({
 container:{
   height:100,
   backgroundColor:'#C8E4E6',
   borderRadius:8,
   marginVertical:10,
   padding:5,
   width:screenWidth *.85,

  },
  title:{
    fontFamily:'futura-pt-heavy',
    fontSize:15,
    paddingLeft:20,
    paddingTop:10,
    marginTop:10

  },
  description:{
    paddingLeft:20,
    fontFamily:'futura-pt-book'

  }
})

