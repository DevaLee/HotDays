/**
 * Created by ritamashin on 2017/9/20.
 */

import React from 'react'
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native'
import flattenStyle from 'flattenStyle'

import {COLOR} from '../../config'
import Icon from './Icon'
import Text from './Text'
import helps from '../../helps'

export default ({playIconVisible = false, duration , onPress, containerStyle,
                style , playIconStyle, ...props}) => {
    let child = <Image style={style} {...props}/>
    if (onPress){
        let {width, height} = flattenStyle(containerStyle);
        let left = Math.floor((width - fontSize) / 2);
        let top = Math.floor((height - fontSize) / 2);
        return (
            <TouchableOpacity onPress={onPress} style={containerStyle}>
                {child}
                {playIconVisible ? <Icon name='play-circle-outline'
                                         style={[styles.playIcon, playIconStyle, {top, left}]}/> : null}
                {duration
                    ? <Text style={[styles.durationText]}>
                    {helps.time.durationText(duration)}
                </Text> : null}

            </TouchableOpacity>
        )
    }else {
        return(
            <View style={containerStyle}>
                {child}
            </View>
        )
    }
}

const styles = StyleSheet.create({
   playIcon: {
       position : 'absolute',
       top : 0,
       left : 0,
       color : COLOR.textLightNormal,
       opacity : 0.8,
       backgroundColor : 'transparent',
       fontSize: 36,
   },
    durationText :{
       position: 'absolute',
        bottom : 0,
        right : 0,
        color : COLOR.textLightNormal,
        fontSize:12,
        padding :5,
    }
});