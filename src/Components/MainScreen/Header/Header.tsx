import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HeaderLocation from './HeaderLocation';
import moment from 'moment';

function Header() {
   const [time, setTime] = useState(
      moment().format('dddd, DD MMM YYYY | hh:mmA')
  );
  
   useEffect(() => {
      setTime(moment().format('dddd, DD MMM YYYY | hh:mmA'));
   }, [time]);

   return (
      <View style={styles.container}>
         <Text style={styles.timeDateText}>{time}</Text>
         <HeaderLocation />
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
   },
   timeDateText: {
      alignSelf: 'center',
      marginLeft: 10,
      fontSize: 14,
      color: '#999999',
      flex: 1,
      flexWrap: 'wrap'
   },
});

export default Header;
