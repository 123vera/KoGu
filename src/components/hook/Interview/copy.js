/**
 * @description 是否在 APP ios客户端内打开，APP_IOS是约定名称
 * @return {boolean} true 为真，false 为假
 */
// export const isAppIOS = () => navigator.userAgent.includes(devices.APP_IOS);


/**
 * @description IOS通信
 * @param {object} msg 通信体
 */
export const nativeIOSMessage = (msg) => window.webkit.messageHandlers.jsCallOC.postMessage(msg);


/**
 * @description 调用APP通信
 * @param {object} msg 通信体
 */
export const nativeMessage = (msg) => {
  let msgStr = {};
  if (typeof msg === 'object') {
    msgStr = JSON.stringify(msg);
  } else {
    msgStr = msg;
  }

  //  if (isAppIOS()) {
  //     nativeIOSMessage(msgStr);
  //   }
};



/**
 * @description 给app端发送调取复制权限的消息名（名称自定义，双方约定）
 */
export const MSG_TYPE_COPY = 'MSG_TYPE_COPY';



/**
 * @description 检查复制权限
 */
export const nativeGalleryPermissionRequired = () =>
  nativeMessage({
    type: MSG_TYPE_COPY,
  });



// 想要调取权限的页面 调用 nativeGalleryPermissionRequired();