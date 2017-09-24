/**
 * Created by ritamashin on 2017/9/21.
 */
import React from 'react';
import {StyleSheet, View} from 'react-native'
import {COLOR} from '../../config'
import Layout from './Layout'
import Icon from './Icon'

export default ({icon, children, containerStyle, iconStyle}) => {
    return (
        <View style={[styles.container, containerStyle]}>
            {icon ? <Icon name={icon} style={[styles.icon, iconStyle]}/> : null}
            {children}
        </View>
    )
}


const styles = StyleSheet.create({
    container : {
        padding : 5,
        flexDirection : 'row',
        alignItems : 'center',
        borderWidth : 1,
        borderColor : COLOR.linePrompt
    },
    icon :{
        width : 30,
        fontSize :16,
        textAlign : 'center',
        color : COLOR.textEmpha,
    }
})