/**
 * 请求订阅消息
 * 
 * @canUse requestSubscribeMessage
 * @__object [tmplIds]
 * @__success [errMsg]
 */
export const requestSubscribeMessage = (options) => {
  try {
    // @ts-ignore
    native.requestSubscribeMessage(options).then((res) => {
      if (res.errMsg === 'requestSubscribeMessage:ok') {
        options.success?.(res)
      } else {
        options.fail?.(res)  
      }
      options.complete?.(res)
    })
  } catch (res) {
    options.fail?.(res) 
    options.complete?.(res)
  }
}

/**
 * 订阅设备消息接口，调用后弹出授权框，用户同意后会允许开发者给用户发送订阅模版消息
 * 
 * @canNotUse requestSubscribeDeviceMessage
 */
export { requestSubscribeDeviceMessage } from '@tarojs/taro-h5'