import React from 'react';
import {StyleSheet, View, Text, Dimensions } from 'react-native';
import  Icon  from '../components/Icon'

const Category = (props:any) => {
  const {name,icon,subcategory} = props;
    return(
    <View style={subcategory ? styles.subcategory : styles.category}>
         {icon && <Icon style={styles.icon} name={icon} color='white' />}
    <Text style={subcategory ? styles.subcategoryText : styles.categoryText}>{name.name? name.name : name}</Text>   
    </View>)
}

const styles = StyleSheet.create({
  category:{
    height:50,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#615D8D',
    borderRadius: 80,    
    
  },
  subcategory:{
    height:25,
    flexDirection:'row',
    justifyContent:'center',
    backgroundColor:'#F9A074',
    borderRadius: 80,
    marginBottom:0,
    paddingHorizontal:15,

    
    
  },
    container: {
      flexDirection:'row',
        borderRadius: 80,
        height:50,
        paddingHorizontal:10,
        justifyContent:'center',
       
        
   
      },
      categoryText:{
          color:"#FFFF",
          fontSize:18,
          fontFamily:'futura-pt-heavy',
          lineHeight:50,
      

      },
      subcategoryText:{
        color:"#FFFF",
        fontSize:16,
        fontFamily:'futura-pt-heavy',
        lineHeight:25,
    
        
      
      },
      icon:{
        lineHeight:50,
        marginRight:10,
        marginLeft:15,
    
        
        
      }
})

export default Category;