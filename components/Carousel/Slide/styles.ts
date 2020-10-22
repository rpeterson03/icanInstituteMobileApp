import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  slide: {

    paddingBottom: 10,
    paddingTop: 30,
    flexBasis: '80%',
    flex: 1,
    maxWidth: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    height: 200,
    backgroundColor:'red'
    
  },
  slideText: {
    width: '80%',
    textAlign: 'center',
    fontSize: 20,
    height:100,
    backgroundColor:'yellow'
  },
});

export default styles;