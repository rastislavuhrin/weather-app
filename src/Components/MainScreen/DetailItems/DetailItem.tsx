import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {
   useFonts,
   Barlow_500Medium,
   Barlow_300Light,
} from '@expo-google-fonts/barlow';
interface Props {
   day?: string;
   WeatherIcon?: 'sunny' | 'windy';
}
function DetailItem({ icon, term, value, scale }: any) {
   let [fontsLoaded] = useFonts({
      Barlow_500Medium,
      Barlow_300Light,
   });

   return (
      <>
         {fontsLoaded && (
            <View style={styles.container}>
               <Image style={styles.icon} source={icon} />
               <Text style={styles.value}>
                  {value} {scale}
               </Text>
               <Text style={styles.name}>{term}</Text>
            </View>
         )}
      </>
   );
}
const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: 95,
      height: 101,
   },
   value: {
      fontSize: 16,
      fontFamily: 'Barlow_500Medium',
      letterSpacing: -1,
   },
   name: {
      color: '#999999',
      fontSize: 10,
      fontFamily: 'Barlow_500Medium',
   },
   icon: {},
});
export default DetailItem;
