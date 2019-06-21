// pages/Home/Home.js
const util = require('../../utils/util.js');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    value: '',
    bottomLine: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  onChange(event) {
    // event.detail 为当前输入的值
    console.log(event.detail);
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },


  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  /**
   * 页面滚动监控
   */
  onPageScroll: function (e) {
    // console.log(e)
    this.setData({
      bottomLine: true
    })
  },
  // 页面路由跳转
  goto(e) {
    console.log(e)
    let key=e.target.dataset.key
    let params={
    }
    util.goto(key,params)
    // wx.switchTab({
    //   url: '../../pages/Content/Content'
    // })
  },
})