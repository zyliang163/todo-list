// pages/todos/todos.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addinput:'',
    text1:[{a:1234}],
    leftitem:2,
    select:true,
    todos:[
      {content:'6点起床',status:true},
      {content:'7点晨跑', status:true },
      {content: '8点早餐', status: false },
      {content: '9点上班', status: false },
      {content: '20点睡觉', status: true }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
  },
  plux:function(){
    //var num = this.data.text1++;
    //console.log(num);
    //var text1 = this.data.text1;
    this.setData({ 'text1[0].a': '---->'})
  },
  inputHandle:function(e){
    this.setData({addinput:e.detail.value})
  },
  imgHandle:function(e){
     if (!this.data.addinput){
        wx.showToast({
          title: '内容不能为空!',
          image:'/images/no.png',
          duration:2000
        })
        return;
     }
   
     var todos = this.data.todos;
     todos.push({ content: this.data.addinput,status:false});
     this.setData({ todos: this.data.todos, leftitem: this.data.leftitem+1});
  },
  //更新剩余项目数量
  changeStatus:function(e){
        var index = e.currentTarget.id;
        var item = this.data.todos[index];
        item.status = !item.status;
        if (item.status){
            this.data.leftitem-=1;
        }else{
            this.data.leftitem+= 1;
        }
        this.setData({ todos: this.data.todos, leftitem: this.data.leftitem, select: this.data.leftitem!=0?true:false});
  },
//   删除项目并统计剩余项目
  clearHandle:function(e){
      var delitem=this.delItem
      wx.showModal({
          title: '删除',
          content: '是否删除该项',
          success: function (res) {
              if (res.confirm) {
                  console.log('用户点击确定')
                  delitem(e);
              } else if (res.cancel) {
                  console.log('用户点击取消')
                  return
              }
          }
      })
      
      
  },
  delItem:function(e){
      var index = e.currentTarget.dataset.index;
      var todos = this.data.todos;
      todos.splice(index, 1);
      this.setData({ todos: todos, leftitem: this.data.leftitem });
      var leftitem = 0;
      for (var i = 0; i < todos.length; i++) {
          if (!todos[i].status)
              leftitem += 1;
      }
      this.setData({ leftitem: leftitem, select: leftitem==0? false : true});
  }
  ,
  allSelHandle:function(e){
      var todos = this.data.todos;
      var select = !this.data.select;
      for(var i=0;i<todos.length;i++){
          todos[i].status = !select;
      }
    
      this.setData({ todos: this.data.todos, leftitem: select ? todos.length:0, select: select });
  }
  ,
  emptyHandle:function(){
        var empty=[];
        this.setData({ todos: [], leftitem:0});
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