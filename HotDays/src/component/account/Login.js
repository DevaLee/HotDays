/**
 * Created by ritamashin on 2017/9/21.
 */
import React,{PureComponent} from 'react'
import {View,Text} from 'react-native'
import dismissKeyboard from 'dismissKeyboard'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {ENV_NAMES} from '../../const'

import * as actions from '../../actions'
import * as components from '../common'

class Login extends PureComponent{

    static navigationOptions = ({navigation}) => {
        return {
            title : '登录'
        }
    };
    // 构造
      constructor(props) {
        super(props);
        this.screenId = props.screenId || 'Login'
      }

      changeAppEnv (showActionSheetWithOptions){
          let {app, setAppEnv} = this.props;
          let options = ['生产', '测试','开发'];
          showActionSheetWithOptions(
              {
              options,
              title:`切换环境为(当前环境为 ${ENV_NAMES[app.env]})`
              },
              buttonIndex => {
                  if(buttonIndex === options.findIndex(v => v === '生产')){
                      setAppEnv('production');
                  }else if(buttonIndex === options.findIndex(v => v === '测试')){
                      setAppEnv('testing');
                  }else if(buttonIndex === options.findIndex(v => v === '开发')){
                      setAppEnv('development');
                  }
              })

      }
      submit(){
            let {navigation, input, validateInput, login} = this.props;
            validateInput(this.screenId, input[this.screenId], () =>{
                let {account, password} = input[this.screenId];
                let userName, mobile, email
                if (account.match(/^\d+$/)){
                    mobile = account;
                }else if(account.match(/^.+ @.+ $/) !== null){
                    email = account;
                }else {
                    userName = account;
                }

                login({
                    userName,
                    mobile,
                    email,
                    password,
                    cbOk: user => {
                        console.log('登录成功');
                    }
                })
            })
      }


    render(){
          let {app, input, saveInput} = this.props;
          let {account, password} = input[this.screenId];

        return (

                <components.Layout screenId = {this.screenId}>
                    <components.Form>
                           <components.FormItem icon = 'account-circle'
                                                containerStyle = {{borderWidth: 0}}>
                                <components.TextInput
                                    placeholder='输入手机号或绑定邮箱'
                                    returnKeyType='next'
                                    defaultValue={account}
                                    maxLength={50}
                                    onSubmitEditing={() => this.refPassword.focus()}
                                    onChangeText={text => saveInput(this.screenId,
                                        {account :text.trim()})}
                                    // trim():复制一个字符串去掉开头和结尾的空白字符
                                />

                           </components.FormItem>
                           <components.FormItem icon = 'lock'>
                               <components.TextInput
                                   placeholder='输入密码'
                                   returnKeyType='done'
                                   secureTextEntry
                                   defaultValue={password}
                                   maxLength={20}
                                   onRef = {ref => this.refPassword = ref}
                                   onChangeText={text => saveInput(this.screenId,
                                       {password : text.trim()})}

                               />
                           </components.FormItem>
                       </components.Form>
                    <components.ActionSheet
                        onPress={() =>{
                            dismissKeyboard()
                            this.submit();
                        }}
                        onLongPress={(showActionSheetWithOptions) => {
                            this.changeAppEnv(showActionSheetWithOptions)
                        }}
                        delayLongPress={2000}
                    >
                        <components.ButtonWithTag
                            text={`登录${app.env === 'production' ? '' : ENV_NAMES[app.env]}` }
                            textStyle={{fontSize : 16}}
                        >

                        </components.ButtonWithTag>
                    </components.ActionSheet>
                </components.Layout>

        )
    }
}
function mapStateToProps(state) {
    let {app, input} = state;
    return {
        app,
        input // 数组
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions,dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Login)

