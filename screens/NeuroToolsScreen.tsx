import React, {useEffect,useState}  from 'react';
import { StyleSheet,View, Text} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import {NeuroTool} from '../components/NeuroTool'
import Categories from '../components/Categories';
import CategorySelector from '../components/CategorySelector';
import {Audio} from 'expo-av';
// import {findAll} from '../mock/neurotools-object-mock';
import axios from 'axios';
import Category from '../components/Category';


export default function NeuroToolsScreen() {

  const [neuroTools, setNeuroTools] = useState([]);
  const [isPlaying,setIsPLaying] = useState(false);
  const [playbackInstance, setPlayBackInstance] = useState();
  const [volume, setVolume ] = useState(1.0);
  const [isBuffering, setIsBuffering] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubCategory, setSelectedSubCategory] = useState('');


  useEffect( ()=>{
    const BEARER_TOKEN = "5f907dd7bfb55"
      const fetchNeuroTools = async() => {
        axios.get("https://proofing.icaninstituteportal.com/api/neurotools",{headers:{'Authorization':'Bearer ' + BEARER_TOKEN}})
        .then(response => {
          console.log(`getting neurotools...`);
          setTimeout(()=>{
            setNeuroTools(response.data);
            setIsLoading(false);
          },2000)
        })
        .catch(e => {console.log(e)});

      }
      const fetchCategories = async() => {
        axios.get("https://proofing.icaninstituteportal.com/api/nt_categories",{headers:{'Authorization':'Bearer ' + BEARER_TOKEN}})
        .then(response => {
          console.log(`getting categories...`);
          const categoryMap = [...new Set(response.data.map(category => category.top_level))] //should just have deduped map of categories
         
           setTimeout(()=>{
            setCategories(categoryMap);
            setSubCategories(response.data);
           });
          },2000)
        .catch(e => {console.log(e)});
      } 
    
      fetchNeuroTools();
      fetchCategories();
      } ,[])

  useEffect(()=>{
    try {
       Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
        interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
        playsInSilentModeIOS: true,
        interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
        shouldDuckAndroid: true,
        staysActiveInBackground: true,
        playThroughEarpieceAndroid: true
      });

      loadAudio();
      
      
    } catch (e) {
      console.log(e)
    }
  },[])
  const onPlaybackStatusUpdate = status => {
    setIsBuffering(status);
  }
  async function loadAudio(){
    try{
       const playbackInstance= new Audio.Sound()
       const source = {
         uri:"https://ia800204.us.archive.org/11/items/hamlet_0911_librivox/hamlet_act1_shakespeare.mp3",
       }
     const status = {
       shouldPlay: isPlaying,
       volume
     }
     playbackInstance.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate)  
      await playbackInstance.loadAsync(source,status,false);
      setPlayBackInstance(playbackInstance);
    }
    catch(e){
      console.log(e);
    }
  }
  const handlePlayPause = async () => {
    isPlaying ? await playbackInstance.pauseAsync() : await playbackInstance.playAsync()
    setIsPLaying(true);
  }
  const setCategory = (index) => {
    //Handle the work of take the current index looking up the appropriate category and setting it
     const categoryName = categories[index];
     setSelectedCategory(categoryName);
     setSubCategory(categoryName);
  }
  const setSubCategory = (categoryName)=> {
     const filteredSubCategories = categories.filter(subCategory => subCategory.top_level === categoryName)
    setSubCategories(filteredSubCategories);
  }
    return (isLoading ? <Text>Loading...</Text> :
   <View style={styles.container}>
      <View style={styles.categories}>
      <CategorySelector setCategory={ index => setCategory(index)} categories={categories}/>
      <CategorySelector setCategory={console.log('hi')} categories={subCategories} subcategory={true} />
      {/* <CategorySelector subcategory={'solution'} categories={categories}/> */}
      </View>
      <FlatList
      data={neuroTools}
      renderItem={(item) =>{ const {name,description} = item.item ; return (<NeuroTool title={name} description={description} onPressNeuroTool={handlePlayPause}/>);}}
      keyExtractor={(item) => item.name}
      />
    </View>);

}
const styles = StyleSheet.create({
  categories:{
    height:120,
    paddingTop:20,
  },
  container: {
    flex: 1,
    alignItems: 'center',
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
