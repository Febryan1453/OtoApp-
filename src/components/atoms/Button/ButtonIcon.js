import React from 'react';
import { TouchableOpacity } from 'react-native';
import { IconBack } from '../../../assets';

const ButtonIcon = ({...rest}) => {
    return (
        <TouchableOpacity {...rest}>
            {rest.name === 'back' && <IconBack style={styles.iconBack} />}            
        </TouchableOpacity>
    );
};

const styles = {  
    iconBack:{
      width:23, 
      height:17, 
      // backgroundColor:'blue'
    },  
  };

export default ButtonIcon
