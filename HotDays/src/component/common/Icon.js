/**
 * Created by ritamashin on 2017/9/19.
 */
import React, {Component} from 'react'
import {StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {COLOR} from '../../config'


export default ({name, style, ...props}) => {
    return (
        <Icon {...props} name = {name} style={style}/>
    )
}

const styles = StyleSheet.create({
    icon : {
        fontSize : 12,
        color : COLOR.textNormal,
        backgroundColor: 'transparent'
    }
})

