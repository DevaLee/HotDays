/**
 * Created by ritamashin on 2017/9/18.
 */
import React,{Component} from 'react'
import {View, Text, StatusBar} from 'react-native'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actions from '../../actions'
import * as components from '../common'

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
           <components.Layout
                screenId = {this.screenId}
                containerStyle = {{justifyContent : 'center'}}
           >
               <StatusBar barStyle='dark-content'/>
               <components.Image source={require('../../../res/Img/zqc-icon-middle.png')}
                             style={{alignSelf : 'center', borderRadius: 15}}/>
               <components.Button
                   text="登录"
                   onPress={this.loginClick.bind(this)}
                   containerStyle={{marginTop : 100}}
                   textStyle={{fontSize : 16}}
               />

               <components.Button
                   text="注册"
                   onPress={()=> {}}
                   containerStyle={{marginTop : 30}}
                   textStyle={{fontSize : 16}}
               />

           </components.Layout>
        )
    }

    loginClick = () =>{
        this.props.navigation.navigate('Login')
    }
}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions,dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PreLogin)