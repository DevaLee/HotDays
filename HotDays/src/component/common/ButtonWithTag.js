/**
 * Created by ritamashin on 2017/9/21.
 */
import React from 'react'
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import flattenStyle from 'flattenStyle'
import {COLOR} from '../../config'

export default ({text, disabled = false, onPress, containerStyle, textStyle}) => {
    let {fontSize} = flattenStyle(textStyle || styles.text)
    containerStyle = [styles.container, (disabled ? styles.containerDisable : null),
        {padding:Math.round(fontSize / 2)}, containerStyle];
    let children = <Text style={[styles.text,(disabled ? styles.textDisabled : null),
        textStyle]}>{text}</Text>
    if (onPress){
        return (
            <TouchableOpacity onPress={onPress} style={containerStyle}>
                {children}
            </TouchableOpacity>
        )
    }else {
        return (
            <View style={containerStyle}>
                {children}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container :{
        margin :10,
        padding : 10,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : COLOR.theme,
        borderRadius : 5,
    },
    containerDisable :{
        backgroundColor: COLOR.backgroundDarker,
    },
    text : {
        color : COLOR.textLightNormal,
        fontSize :14,
    },
    textDisabled:{
        color: COLOR.textPrompt,
    }




})

