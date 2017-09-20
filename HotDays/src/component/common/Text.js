/**
 * Created by ritamashin on 2017/9/20.
 */
import React from 'react';
import {StyleSheet, Text} from 'react-native'
import {COLOR} from '../../config'

export default ({children, style, ...props}) => {
    return (
        <Text {...props} style={[styles.text, style]}>{children}</Text>
    )
}


const styles = StyleSheet.create({
    text : {
        fontSize : 12,
        color : COLOR.textNormal,
        backgroundColor : 'transparent'
    }
})