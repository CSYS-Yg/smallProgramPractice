const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

/**
 * 格式化参数
 * @param [params] 参数
 */
function formatParams(params) {
  var keys = [];
  var paramList = [];

  for (var key in params) {
    keys.push(key);
  }

  for (var i = 0; i < keys.length; i++) {
    var tempKey = keys[i];
    params[tempKey] = params[tempKey] ? params[tempKey] : "";
    paramList.push(tempKey + '=' + params[tempKey]);
  }
  return paramList.join('&');
}


/**
 * 判断是否为空
 */
function isEmpty(value) {
  if (typeof value === "undefined" || value === '' || value == null) {
    return true;
  } else {
    return false;
  }
};

/**
 * 获取指定路由
 * @param [key] url的key
 * @param [params] 跳转需要传的参数
 * @param [jumpType] 跳转方式 1-navigateTo 2-redirectTo 3-reLaunch
 */
function goto(key, params, jumpType) {
  //参数默认为空
  let myParams = params || '';
  if (!isEmpty(params)) {
    myParams = '?' + formatParams(params);
  }
  //跳转方式默认为1-navigateTo
  jumpType = jumpType || 1;
  if (jumpType == 1) { //保留当前页面，跳转到应用内的某个页面
    console.log(`../${key}/${key}${myParams}`)
    wx.navigateTo({
      url: `../${key}/${key}${myParams}`,
      fail(err) {
        wx.showModal({
          title: '提示',
          content: err.errMsg
        })
      }
    })
  }
  if (jumpType == 2) { //关闭当前页面，跳转到应用内的某个页面
    wx.redirectTo({
      url: url + params,
      fail(err) {
        wx.showModal({
          title: '提示',
          content: err.errMsg
        })
      }
    })
  }
  if (jumpType == 3) { //跳转到首页
    wx.reLaunch({
      url: url + params,
      fail(err) {
        wx.showModal({
          title: '提示',
          content: err.errMsg
        })
      }
    })
  }
}
module.exports = {
  formatParams:formatParams,
  goto: goto,
  formatTime: formatTime
}