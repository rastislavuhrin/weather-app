import React, { useContext } from 'react';
import {
   StyleSheet,
   Dimensions,
   ActivityIndicator,
} from 'react-native';
import DetailsList from './DetailItems/DetailsList';
import { Context } from '../Utils/Context';
import { ScrollView } from 'react-native-gesture-handler';

import MainRow from './MainRow/MainRow';
import Header from './Header/Header';
import NextDays from './NextDays/DaysList';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

function Panel() {
   const { loading } = useContext(Context);

   return (

      <ScrollView style={styles.container} >
         {loading && (
            <ActivityIndicator
               style={styles.activityIndicator}
               size='large'
               color='#000000'
            />
         )}

         <Header />
         <MainRow />
         <DetailsList />
         <NextDays />
         </ScrollView>

   );
}
const styles = StyleSheet.create({
   container: {
      backgroundColor: '#ffffff',
      width: '100%',
      flex: 1,
      position: 'absolute',
      top: height > width ? width * 0.8 * 0.93 : height / 2.67,
      height: height > width ? height - width * 0.8 : height / 1.6,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
   },
   activityIndicator: {
      position: 'absolute',
      alignSelf: 'center',
      top: 0,
      left: 200,
   },
});
export default Panel;
