import React from 'react';
import { Text, View } from 'react-native';
import { IconBack, IllustrationRegisterImage } from '../../assets';
import { Input } from '../../components';
import { colors } from '../../utils';

const Register = () => {
    return (
    <View style={styles.wrapper.page}>
      <IconBack style={styles.iconBack} />
      {/* <View style={styles.illustration} /> */}
      <View style={{alignItems:'center'}}>
      <IllustrationRegisterImage style={styles.illustration} />     
       
        <Text style={styles.text.desc}>
          Please fill in some data to process your list.
        </Text>
      </View>

        <View style={styles.space(54)} />
        <Input placeholder="Full name" />
        <View style={styles.space(33)} />
        <Input placeholder="Email" />
        <View style={styles.space(33)} />
        <Input placeholder="Password" />

    </View>
    );
};

const styles = {
  wrapper:{
    page:{
      padding:24
    }
  },

  iconBack:{
    width:23, 
    height:17, 
    // backgroundColor:'blue'
  },

  illustration:{
    width:134, 
    height:134, 
    // backgroundColor:'blue',
    marginTop:14,
  },

  text:{
    desc:{
        fontSize:14, 
        fontWeight:'bold', 
        maxWidth:148,
        textAlign:'center',
        marginTop:17,
        color:colors.default
    }
  },

  space: (value) => {
    return{
      height: value,
    };
  },

};

export default Register;