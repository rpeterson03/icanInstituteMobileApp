import React, { Component } from 'react';
import Carousel from 'react-native-snap-carousel'
import {StyleSheet,Dimensions} from 'react-native';

import Category from '../components/Category';


const screenWidth = Math.round(Dimensions.get('window').width);

class CategorySelector extends Component{

    constructor(props){
        super(props);
        this._carousel={};
    }
   

    render(){
        const {categories,subcategory,setCategory} = this.props;
    return(
      <Carousel
      ref={ref => this.carousel = ref}
     onSnapToItem={ index => setCategory(index) }
     style={styles.categoryselector}
     layout={"default"}
      renderItem={(item)=> {
        
          return( <Category subcategory={subcategory} name={item.item ? item.item : item.item.name} />)}}
      data={categories}
      sliderWidth={screenWidth}
      itemWidth={screenWidth * .85}
      enableSnap
      inactiveSlideScale={.98}
      inactiveSlideOpacity={.8}
      containerCustomStyle={styles.categoryselector}
      />)}
     
}

const styles = StyleSheet.create({
    categoryselector:{
      
    }
})

export default CategorySelector;