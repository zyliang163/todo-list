// pages/todos1/todos1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  addinput:'',
  todos:[
    {content:'6点起床',status:true},
    { content: '6点半晨跑', status: true },
    { content: '8点吃早餐', status: false },
    { content: '8点半上班', status: false },
    { content: '20点夜跑', status: true }
    ],
    startState:false,
    leftnum:2,
    show:true
  },
  inputHandle:function(e){
    this.setData({ addinput: e.detail.value});
  },
  imgHandle:function(){
    var addinput = this.data.addinput;
    if (!addinput)
    {
      wx.showToast({
        title: '内容不得为空!',
        image:'/images/no.png',
        duration:2000
      })
      return;
    }
    var todos = this.data.todos;
    todos.push({ content: this.data.addinput, status:false})
    this.data.leftnum += 1
    this.setData({ todos: todos, leftnum: this.data.leftnum, show: true})
  }
  ,
  clearHandle:function(e){
        var dindex=e.currentTarget.dataset.index;
        console.log(dindex);
        var todos = this.data.todos;
        if (!todos[dindex].status){
            this.data.leftnum-=1
        }
        todos.splice(dindex,1);
        if (todos.length==0){
            this.setData({ show:false});
        } else {
            this.setData({ todos: todos, leftnum: this.data.leftnum, show: true });
        }
  },
  changeStatus:function(e){
    var index = e.currentTarget.id;
    //console.log(index);
    var item = this.data.todos[index];
    item.status = !item.status;

    if (item.status){
        this.data.leftnum -= 1;
    }else{
        this.data.leftnum += 1;
    }
    this.setData({ todos: this.data.todos, leftnum: this.data.leftnum});
  },
  toggleHandle:function(){
    //   if (!this.data.startState){
    //       for(var i=0;i<this.data.todos.length;i++){
    //           this.data.todos[i].status = true;
    //           this.setData({ todos: this.data.todos,leftnum:0 })
    //       }
    //   }
    var todos = this.data.todos;
    if (this.data.startState == false){
        todos.forEach(function(item){
            item.status = false;
        });
        this.setData({ todos: todos, leftnum: todos.length, startState: true })
    } else {
        todos.forEach(function (item) {
            item.status = true;
        });
        this.setData({ todos: todos, leftnum:0, startState: false })
    }
  },
  clearAllHandle:function(){
      this.setData({ todos: this.data.todos.splice(0, this.data.todos.length), leftnum: 0, startState: false, show: false});
  }
  ,
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