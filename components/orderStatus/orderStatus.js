// components/orderStatus/orderStatus.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    typeId: { // 类别 id
      type: Number,
      value: 0,
    },
    orderTypeId: { // _type 订单内定状态下标
      type: Number,
      value: 0,
      // 转义
      observer: function (newVal, oldVal) {
        let typeId = 0
        switch (newVal) {
          case 1:
            typeId = 7
            break;
          case 2:
            typeId = 13
            break;
          case 3:
            typeId = 14
            break;
          case 4:
            typeId = 1
            break;
          case 6:
            typeId = 12
            break;
          case 7:
            typeId = 15
            break;
          case 8:
            typeId = 16
            break;
          case 9:
            typeId = 17
            break;
        }
        this.setData({
          typeId: typeId
        })
      }
    },
    typeName: { // 提示标题
      type: String,
    },
    typeIcon: { // 提示图标
      type: String,
    },
    typeColor: { // 提示颜色
      type: String
    },
    typePrompt: { // 一句话提示
      type: String
    },
    typeTradingTime: { // 提示固定时
      type: String
    },
    typeFront: { // 提示插值前置语句
      type: String
    },
    typeTime: { // 提示插值倒计时，传入秒数
      type: Number,
      observer: function (newVal, oldVal) {
        if (newVal > 0) {
          this.countDown(newVal)
        }
      }
    },
    typePromptTime: { // 提示插值固定时间
      type: String
    },
    typeRear: { // 提示插值后置语句
      type: String
    },
    typeCancel: { // 退款 9 OR 取消 12
      type: String
    },
    QRimage: { // 二维码地址
      type: String
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    _typeTime: '',
    // type 设置默认数据
    _type: [{
        "typeId": 0,
        "typeName": "待定",
        "typeIcon": "",
        "typeColor": "",
        "typePrompt": "",
        "typeFront": "",
        "typeTime": "",
        "typeCancel": '',
        "typeRear": ""
      },
      {
        "typeId": 1,
        "typeName": "已完成",
        "typeIcon": "iconorder_icon_succeed_def",
        "typeColor": "paymentIconGreen",
        "typePrompt": "订单已完成，祝您生活愉快～",
        "typeFront": "",
        "typeTime": "",
        "typeCancel": '',
        "typeRear": ""
      },
      {
        "typeId": 2,
        "typeName": "已拒绝",
        "typeIcon": "icon_order_icon_information_def",
        "typeColor": "paymentIconRed",
        "typePrompt": "申请已被活动发起人拒绝",
        "typeFront": "",
        "typeTime": "",
        "typeCancel": '',
        "typeRear": ""
      },
      {
        "typeId": 3,
        "typeName": "待定",
        "typeIcon": "",
        "typeColor": "",
        "typePrompt": "",
        "typeFront": "",
        "typeTime": "",
        "typeCancel": '',
        "typeRear": ""
      },
      {
        "typeId": 4,
        "typeName": "已退款",
        "typeIcon": "icon_order_icon_succeed_def",
        "typeColor": "paymentIconGreen",
        "typePrompt": "您的订单已退款完成，请注意查收！",
        "typeFront": "",
        "typeTime": "",
        "typeCancel": '',
        "typeRear": ""
      },
      {
        "typeId": 5,
        "typeName": "待定",
        "typeIcon": "",
        "typeColor": "",
        "typePrompt": "",
        "typeFront": "",
        "typeTime": "",
        "typeCancel": '',
        "typeRear": ""
      },
      {
        "typeId": 6,
        "typeName": "待验票",
        "typeIcon": "icon_order_icon_receive_def",
        "typeColor": "paymentIconYellow",
        "typePrompt": "",
        "typeFront": "您的订单审核已通过了, 请于",
        "typeTime": "",
        "typeCancel": '9',
        "typeRear": "准时参加活动哦～"
      },
      {
        "typeId": 7,
        "typeName": "待付款",
        "typeIcon": "icon_order_icon_payment_def",
        "typeColor": "paymentIconRed",
        "typePrompt": "订单会为你保存一段时间，超时将自动取消~",
        "typeFront": "",
        "typeTime": "",
        "typeCancel": '',
        "typeRear": ""
      },
      {
        "typeId": 8,
        "typeName": "待定",
        "typeIcon": "",
        "typeColor": "",
        "typePrompt": "",
        "typeFront": "",
        "typeTime": "",
        "typeCancel": '',
        "typeRear": ""
      },
      {
        "typeId": 9,
        "typeName": "待退款",
        "typeIcon": "icon_order_icon_receive_def",
        "typeColor": "paymentIconBlue",
        "typePrompt": "我们将为您尽快办理退款，请耐心等待哦～",
        "typeFront": "",
        "typeTime": "",
        "typeCancel": '',
        "typeRear": ""
      },
      {
        "typeId": 10,
        "typeName": "现金未支付",
        "typeIcon": "icon_order_icon_payment_def",
        "typeColor": "paymentIconRed",
        "typePrompt": "订单会为你保存一段时间，超时将自动取消~",
        "typeFront": "",
        "typeTime": "",
        "typeCancel": '',
        "typeRear": ""
      },

      {
        "typeId": 11,
        "typeName": "待审核",
        "typeIcon": "icon_order_icon_receive_def",
        "typeColor": "paymentIconYellow",
        "typePrompt": "您的订单已提交, 我们将为您尽快审核，请耐心 等待哦～",
        "typeFront": "",
        "typeTime": "",
        "typeCancel": '9',
        "typeRear": ""
      },
      {
        "typeId": 12,
        "typeName": "已取消",
        "typeIcon": "icon_icon_confirmed",
        "typeColor": "paymentIconGray",
        "typePrompt": "你的订单已取消成功！",
        "typeFront": "",
        "typeTime": "",
        "typeCancel": '',
        "typeRear": ""
      },
      {
        "typeId": 13,
        "typeName": "待发货",
        "typeIcon": "icon_icon_confirmed",
        "typeColor": "paymentIconBlue",
        "typePrompt": "我们将为您尽快发货，请耐心等待～",
        "typeFront": "",
        "typeTime": "",
        "typeCancel": '',
        "typeRear": ""
      },
      {
        "typeId": 14,
        "typeName": "已发货",
        "typeIcon": "icon_icon_effective",
        "typeColor": "paymentIconBlue",
        "typePrompt": "订单已发货，请耐心等待～",
        "typeFront": "",
        "typeTime": "",
        "typeCancel": '',
        "typeRear": ""
      },
      {
        "typeId": 15,
        "typeName": "待自提",
        "typeIcon": "icon_order_icon_receive_def",
        "typeColor": "paymentIconYellow",
        "typePrompt": "您已付款成功了, 请尽快到商城服务台领取~",
        "typeFront": "",
        "typeTime": "",
        "typeCancel": '',
        "typeRear": ""
      },
      {
        "typeId": 16,
        "typeName": "直接发放我的卡劵",
        "typeIcon": "icon_order_icon_succeed_def",
        "typeColor": "paymentIconBlue",
        "typePrompt": "已直接发放至卡劵，请注意查收~",
        "typeFront": "",
        "typeTime": "",
        "typeCancel": '',
        "typeRear": ""
      },
      {
        "typeId": 17,
        "typeName": "积分已支付，现金未支付",
        "typeIcon": "icon_vip_icon_aboutus_def",
        "typeColor": "paymentIconRed",
        "typePrompt": "订单会为你保存一段时间，超时将自动取消~",
        "typeFront": "",
        "typeTime": "",
        "typeCancel": '',
        "typeRear": ""
      }
    ],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //带天数的倒计时 传入秒数
    countDown(times) {
      const that = this;
      let timer = null;
      timer = setInterval(function () {
        let day = 0,
          hour = 0,
          minute = 0,
          second = 0; //时间默认值
        if (times > 0) {
          day = Math.floor(times / (60 * 60 * 24));
          hour = Math.floor(times / (60 * 60)) - (day * 24);
          minute = Math.floor(times / 60) - (day * 24 * 60) - (hour * 60);
          second = Math.floor(times) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
        }
        if (day <= 9) day = '0' + day;
        if (hour <= 9) hour = '0' + hour;
        if (minute <= 9) minute = '0' + minute;
        if (second <= 9) second = '0' + second;
        if (times <= 0) {
          console.log("倒计时结束")
          clearInterval(timer);
        }
        that.setData({
          _typeTime: hour + "时" + minute + "分" + second + "秒"
        })
        times--;
      }, 1000);
    },
    // 向父组件传递 类别id
    setStatusId(e) {
      this.triggerEvent('cancelRegistration', {
        statusType: e.currentTarget.dataset.statusid
      });
    }
  }
})
