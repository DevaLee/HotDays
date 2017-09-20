/**
 * Created by ritamashin on 2017/9/18.
 */
import React,{Component} from 'react'
import {View, Text, StatusBar} from 'react-native'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actions from '../../actions'
import common from '../common'

 class PreLogin extends Component{
    static navigationOptions = {
        header : null
    }

    // 构造
      constructor(props) {
        super(props);
        this.screenId = props.screenId || 'PreLogin'
      }

    render(){
        let {navigation} = this.props

        return(
           <common.Layout
                screenId = {this.screenId}
                containerStyle = {{justifyContent : 'center'}}
           >
               <StatusBar barStyle='dark-content'/>
               <common.Image source={require('../../../res/Img/zqc-icon-middle.png')}
                             style={{alignSelf : 'center', borderRadius: 15}}/>
               <common.Button
                   text="登录"
                   onPress={()=> {}}
                   containerStyle={{marginTop : 100}}
                   textStyle={{fontSize : 16}}
               />

               <common.Button
                   text="注册"
                   onPress={()=> {}}
                   containerStyle={{marginTop : 30}}
                   textStyle={{fontSize : 16}}
               />

           </common.Layout>
        )
    }
}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions,dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PreLogin)