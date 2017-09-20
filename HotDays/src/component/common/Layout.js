/**
 * Created by ritamashin on 2017/9/19.
 */
import React, {Component } from 'react'
import {StyleSheet, View, StatusBar} from 'react-native'
import {ActionSheetProvider } from '@expo/react-native-action-sheet'
import {COLOR, SCREEN_WIDTH, SCREEN_HEIGHT } from '../../config'
import Processing from './Processing'
import ErrorInput from './ErrorInput'
import Loading from './Loading'
import ErrorFlash from './ErrorFlash'
export default class Layout extends Component{
    // 构造
      constructor(props) {
        super(props);
            this.layout = {
                x : 0,
                y : 0,
                width : SCREEN_WIDTH,
                height : SCREEN_HEIGHT
            }
      }

      render(){
          let {screenId, children, containerStyle} = this.props;
          return (
              <ActionSheetProvider>
                  <View
                      onLayout={(event) => {
                            this.layout = event.nativeEvent.layout
                      }}
                      style={[styles.container, containerStyle]}
                  >
                      <StatusBar barStyle='light-content'/>
                      <Processing/>
                      <ErrorInput screenId = {screenId}/>
                      {children}
                      <Loading layout = {this.layout}/>
                      <ErrorFlash/>
                      {/*<component.ErrorInput screenId = {screenId}/>*/}
                      {/*{children}*/}
                      {/*<component.Loading layout={this.layout}/>*/}
                      {/*<component.ErrorFlash/>*/}
                  </View>
              </ActionSheetProvider>
           )
          // return (
          //     <View/>
          // )
      }
}

const styles = StyleSheet.create({
    container :{
        flex : 1,
        backgroundColor : COLOR.backgroundNormal
    }
})