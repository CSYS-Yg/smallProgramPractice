// pages/Card/Card.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    images: ['1', '2', '3'], // 轮播图片
    swiperIndex: 1, // 当前展示卡片
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
    wx.createSelectorQuery().selectAll('page').boundingClientRect(function (rect) {
      console.log(rect[0].height)
      console.log(rect[0].width)
    }).exec()  
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
  // 卡片轮播触发事件
  swiperChange(e) {
    this.setData({
      swiperIndex: e.detail.current
    })
  },
})