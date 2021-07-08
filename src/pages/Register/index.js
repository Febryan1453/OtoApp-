import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { IllustrationRegisterImage } from '../../assets';
import { Button, Input } from '../../components';
import { colors } from '../../utils';

// ALT + Shift + O ====> untuk mengapus objek yg ga ke pake

const Register = ({navigation}) => {

  const {form} = useSelector(state => state.RegisterReducer);

  // useEffect(() => {
  //   console.log('global: ', RegisterReducer);
  // }, [RegisterReducer]);

  const sendData = () => {
    console.log('Data yang kirim: ', form);
  };
  
  const dispatch = useDispatch();

  // const [form, setForm] = useState({
  //   fullName: '',
  //   email: '',
  //   password: '',
  // });

  const onInputChange = (value, input) => {
    // setForm({
    //   ...form,
    //   [input]: value,
    // });

    // type adalah parameter yang wajib pada dispatch untuk keperluan di reducer
    // dispatch(setForm(Input, value));
    dispatch({type: 'SET_FORM', inputType: input, inputValue: value});
  };

    return (
    <View style={styles.wrapper.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* <IconBack style={styles.iconBack} /> */}
        <Button type="icon" name="back" onPress={() => navigation.goBack()} />
        {/* <View style={styles.illustration} /> */}
        <View style={{alignItems:'center'}}>
        <IllustrationRegisterImage style={styles.illustration} />
          <Text style={styles.text.desc}>
          Please fill in some data to process your list.
          </Text>
        </View>

          <View style={styles.space(54)} />

          <Input 
            placeholder="Full name" 
            value={form.fullName} 
            onChangeText={(value) => onInputChange(value, 'fullName')} 
          />

          <View style={styles.space(25)} />

          <Input 
            placeholder="Email" 
            value={form.email} 
            onChangeText={(value) => onInputChange(value, 'email')} 
          />

          <View style={styles.space(25)} />

          <Input 
            placeholder="Password" 
            value={form.password} 
            onChangeText={(value) => onInputChange(value, 'password')} 
            secureTextEntry={true}
          />
          <View style={styles.space(40)} />
          <Button title="registrasi" onPress={sendData} />
      </ScrollView>
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