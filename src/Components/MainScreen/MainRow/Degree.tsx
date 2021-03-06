import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context } from '../../Utils/Context';
import {
   useFonts,
   Barlow_500Medium,
   Barlow_300Light,
} from '@expo-google-fonts/barlow';
import { useContext } from 'react';

function ItemMainValue() {
   const { data } = useContext(Context);

   let [fontsLoaded] = useFonts({
      Barlow_500Medium,
      Barlow_300Light,
   });

   return (
      <>
         {fontsLoaded && data && (
            <View style={styles.container}>
               <Text style={styles.value}>{Math.round(data.main.temp)}</Text>
               <Text style={styles.celsius}>&deg;C</Text>
            </View>
         )}
      </>
   );
}
const styles = StyleSheet.create({
   container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
   },
   celsius: {
      fontSize: 24,
      fontFamily: 'Barlow_500Medium',
      alignSelf: 'flex-start',
   },
   value: {
      fontSize: 64,
      lineHeight: 64,
      height: 54,
      marginLeft: 15,
      letterSpacing: -3,
      fontFamily: 'Barlow_300Light',
   },
});
export default ItemMainValue;
