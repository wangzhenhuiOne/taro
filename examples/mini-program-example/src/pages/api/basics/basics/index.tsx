import React from 'react'
import Taro from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import './index.scss'

/**
 * 基础
 * @returns 
 */

export default class Index extends React.Component {
    state = {
        list: [
            {
                id: 'env',
                func: () => {
                    console.log('Taro.env ', Taro.env);
                },
            }, 
            {
                id: 'canIUse',
                func: () => {
                    console.log('Taro.canIUse openBluetoothAdapter ', Taro.canIUse('openBluetoothAdapter'));
                    console.log('Taro.canIUse getSystemInfoSync.return.screenWidth ', Taro.canIUse('getSystemInfoSync.return.screenWidth'));
                    console.log('Taro.canIUse getSystemInfo.success.screenWidth ', Taro.canIUse('getSystemInfo.success.screenWidth'));
                    console.log('Taro.canIUse showToast.object.image ', Taro.canIUse('showToast.object.image'));
                    console.log('Taro.canIUse onCompassChange.callback.direction ', Taro.canIUse('onCompassChange.callback.direction'));
                    console.log('Taro.canIUse request.object.method.GET ', Taro.canIUse('request.object.method.GET'));
                    console.log('Taro.canIUse live-player ', Taro.canIUse('live-player'));
                    console.log('Taro.canIUse text.selectable ', Taro.canIUse('text.selectable'));
                    console.log('Taro.canIUse button.open-type.contact ', Taro.canIUse('button.open-type.contact'));  
                },
            },
            {
                id: 'canIuseWebp',
                func: null,
            }, 
            {
                id: 'base64ToArrayBuffer',
                func: null,
            }, 
            {
                id: 'arrayBufferToBase64',
                func: null,
            }, 
            {
                id: 'perload',
                func: null,
            }, 
        ], 
    }
    render () {
        return (
            <View className='api-page'>
                {
                    this.state.list.map((item) => {
                        return (
                            <Button
                                className='api-page-btn'
                                type='primary'
                                onClick={item.func == null ? () => {} : item.func}
                            >
                                {item.id}
                                {
                                    item.func == null && (<Text className='navigator-state tag'>未创建Demo</Text>)
                                }
                            </Button>
                        )
                    })
                }
            </View>
        )
    }
}
