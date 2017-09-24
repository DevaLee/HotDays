/**
 * Created by ritamashin on 2017/9/21.
 */
import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {COLOR} from '../../config'

export default ({children, containerStyle}) => {
    return (
        <View style={[styles.container, containerStyle]}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
   container :{
       margin : 10,
       backgroundColor : COLOR.backgroundLighter,
       borderWidth : 1,
       borderColor : COLOR.lineNormal,
       borderRadius : 5,
   }
});