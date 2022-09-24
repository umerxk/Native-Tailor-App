
import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector } from "react-redux";
import * as Progress from 'react-native-progress';

const SplashScreen = ({navigation}) => {
  // const user_info = useSelector((state) => state.auth.SearchValue);
  useEffect(() => {
    setTimeout(() => {
      AsyncStorage.getItem('user_id').then((value) => {
        navigation.navigate(value === null ? 'RegisterUser' : 'Users')
      }
      );
    }, 3000);
  }, []);

  return (
    <View style={styles.mainContainer}>
    <View style={styles.container}>
      <Text style={styles.myText}>E-Tailors</Text>
      <Ionicons
          name={"cut-outline"}
          size={60}
          color={"#fff"}
          style={{ marginLeft: 20, marginTop: -10 }}
        />

    </View>
    <Progress.Bar progress={0.3} width={200} borderColor="#fff" color="#fff" indeterminate={true} style={{ marginTop: 30 }} />

    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333',
  },
  container: {
    display:'flex',
    flexDirection: 'row',
  },
  activityIndicator: {
    height: 80,
  },
  myText: {
    fontSize: 40,
    color: '#fff'
  }
});