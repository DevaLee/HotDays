/**
 * Created by ritamashin on 2017/9/18.
 */
import React, {Component} from 'react'
import {ScrollView} from 'react-native'
import * as components from '../'

export default class EditProfile extends Component{
    static navigationOptions = {
        title : '编辑资料'
    }

    // 构造
      constructor(props) {
        super(props);
        this.screenId = props.screenId || 'EditProfile'
      }

      render(){
        let {navigation} = this.props.navigation;
        return (
            <View>

            </View>
        )
      }
}