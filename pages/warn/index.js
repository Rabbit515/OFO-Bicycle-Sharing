// pages/warn/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    picUrls:[],
    bikeInfo: {
      number: 0,
      desc: ""
    },
    btnBg: "",
    checkboxValues:[],
    actionText:"照相/相册",
    itemsValues:[{
      value:"私锁私用",
      color: "#b9dd08",
      checked:false
    },{
        value: "车牌缺损",
        color: "#b9dd08",
        checked: false
      }, {
        value: "轮胎坏了",
        color: "#b9dd08",
        checked: false
    }, {
      value: "车锁坏了",
      color: "#b9dd08",
      checked: false
      }, {
        value: "违规乱停",
        color: "#b9dd08",
        checked: false
    }, {
      value: "密码不对",
      color: "#b9dd08",
      checked: false
      }, {
        value: "刹车坏了",
        color: "#b9dd08",
        checked: false
    }, {
      value: "其他故障",
      color: "#b9dd08",
      checked: false
    }
    ]
  },
  changeCheckBox: function (e) {
    let _values = e.detail.value;
    this.setData({
      checkboxValues: _values
    })
    if(_values.length === 0) {
      this.setData({
        btnBg: ""
      })
    }else{
      this.setData({
        btnBg: "#b9dd08"
      })
    }
  },
  bindPhoto : function () {
    wx.chooseImage({
      success:(res) => {
        let tfps = res.tempFilePaths;
        let _picUrls = this.data.picUrls;
        for(let i = 0; i < tfps.length; i++) {
          _picUrls.push(tfps[i])
        }
        this.setData({
          picUrls: _picUrls,
          actionText: "+"
        })
      },
    })
  },
  delete: function (e) {
    let index = e.target.dataset.index;
    let _picUrls = this.data.picUrls;
    _picUrls.splice(index,1);
    if(_picUrls.length === 0){
      this.setData({
        picUrls: _picUrls,
        actionText: "照相/相册"
      })
    }
    this.setData({
      picUrls: _picUrls
    })
  },
  changeNumber: function (e) {
    this.setData({
      bikeInfo:{
        number: e.detail.value,
        desc: this.data.bikeInfo.desc
      }
    })
  },
  changeDesc: function () {
    this.setData({
      bikeInfo: {
        number: this.data.bikeInfo.number,
        desc: e.detail.value
      }
    })
  },
  submit: function () {
    if(this.data.picUrls.length > 0 && this.data.checkboxValues.length > 0) {
      wx.request({
        url: 'https://www.easy-mock.com/mock/59310de791470c0ac1ffa866/url/submitSuccess',
        // method: "POST",
        // data: {
        //   checkboxValues: this.data.checkboxValues
        // },
        success: (res) => {
          wx.showToast({
            title: '提交成功',
            icon: "success",
            duration: 2000
          })
        }
      })
    }else{
      wx.showModal({
        title: '请填写信息',
        content: '你愁啥？赶紧去填，削你啊',
        confirmText:"我服我填",
        cancelText:"老子不填",
        success: (res) =>{
          if(res.confirm) {

          }else{
            wx.redirectTo({
              url: '../index/index',
            })
          }
        }
      })
    }
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
  
  }
})