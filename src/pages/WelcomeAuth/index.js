import React from 'react';
import { Image, Text, View } from 'react-native';
import { welcomeAuth } from '../../assets';
import { colors } from '../../utils';
import ActionButton from './ActionButton';

const WelcomeAuth = () => {
    return(
    <View style={styles.wrapper.page}>
      {/* <View style={styles.wrapper.ilustration} /> */}
      <Image source={welcomeAuth} style={styles.wrapper.ilustration} />
      <Text style={styles.text.welcome}>
          Welcome to OTO
      </Text>

      <ActionButton 
        desc="Please select login,
if you already have an account." 
        title="Login"/>

      <ActionButton 
        desc="Or
Please register, if you don't have an account yet." 
        title="Register"/>
    </View>
    
    );
};

const styles = {
  wrapper:{
    page:{
      alignItems:'center', 
      justifyContent:'center', 
      flex:1
    },
    ilustration:{
      width: 255, 
      height: 180, 
      // backgroundColor: colors.default, 
      marginBottom:27
    }
  },

  text:{
    welcome:{
      fontSize: 18, 
      fontWeight:'bold', 
      color: colors.default, 
      marginBottom:59
    }
  }
}

export default WelcomeAuth;