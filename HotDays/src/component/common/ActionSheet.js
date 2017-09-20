/**
 * Created by ritamashin on 2017/9/18.
 */
import React, {Component, PropTypes} from 'react'
import {TouchableOpacity} from 'react-native'

export default class ActionSheet extends Component {
    static contextTypes = {
        // options: BUTTONS,
        // cancelButtonIndex: CANCEL_INDEX,
        // destructiveButtonIndex: DESTRUCTIVE_INDEX,
        // tintColor: 'green'

        showActionSheetWithOptions : PropTypes.func
    }

    showActionSheetWithOptions(options, onPress){
        return this.context.showActionSheetWithOptions(options, onPress);
    }

    render(){
        let {children, onPress, onLongPress, delayLongPress = 0} = this.props;
        return (
            <TouchableOpacity
                onPress={() => onPress(this.context.showActionSheetWithOptions)}
                onLongPress={() => onLongPress(this.context.showActionSheetWithOptions)}
                delayLongPress={delayLongPress}
            >
                {children}
            </TouchableOpacity>
        )
    }
}