import React from 'react';
import {
   View,
   StyleSheet,
   ImageBackground,
   Text,
   Dimensions,
} from 'react-native';
import { Image } from 'react-native-elements';
import Panel from '../Components/MainScreen/Panel';

function MainScreen() {
   return (
      <ImageBackground
         source={require('../../assets/graphic.jpg')}
         style={styles.graphic}
         imageStyle={{ resizeMode : 'contain' }}></ImageBackground>
   );
}
const styles = StyleSheet.create({
   container: {},
   graphic: {
      height: 333,
   },
   text: {},
});
export default MainScreen;
