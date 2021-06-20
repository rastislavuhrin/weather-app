import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
   day?: string;
   WeatherIcon?: 'sunny' | 'windy';
}
function Day(props: Props) {
   return (
      <View style={styles.container}>
         <Text style={styles.icon}>icon</Text>

         <Text style={styles.day}>Day</Text>
         <View style={styles.group}>
            <Text>group</Text>
         </View>
      </View>
   );
}
const styles = StyleSheet.create({
   container: {
      flex: 1,
      // position: 'relative',
      justifyContent: 'center',
      alignItems:'center',
      backgroundColor: '#ffffff',
      width: 95,
      height: 101, 
      borderRadius: 16,
      margin:20,
      // paddingLeft:30,

      shadowColor: '#000',
      shadowOffset: {
         width: 0,
         height: 8,
      },
      shadowOpacity: 1,
      shadowRadius: 24,
      elevation: 24,
   },
   day: {},
   icon: {},
   group: {
      // marginBottom:16,
   },
});
export default Day;
