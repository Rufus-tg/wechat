// index.js
// 获取应用实例
// const app = getApp()

Page({
  //页面级别的周期函数
  onLoad(){
    //页面被加载到内存里的时候，或者说页面第一次启动的时候执行
    // console.log(app.sayHello(),app.getDate,'indexonLoad')
    // console.log('onLoad')
    //设置转发分享功能
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
    })
  },
  //页面被加载到内存里的时候，或者说页面第一次启动的时候执行
  //并且，页面被渲染完成之后自动执行
  onReady(){
    // console.log('onReady')
  },
  onShow(){
//页面每次被展示的时侯执行
// console.log('onShow')
// wx.showToast({
//   //微信弹窗功能 
//   title: 'title',
// }),
// wx.switchTab({
//   //微信跳转功能
//   url: '/pages/logs/logs',
// }),
// wx.request({
//   //远程接口获取数据
//   url: 'https://www.fastmock.site/mock/13f02988b79ff508a5ea5b244b5a08fd/wx/api/getData',
//   success(res){
//     console.log(res)
//   }
// })
  },
  onHide(){
//页面每次被取消展示的时侯执行
// console.log('onHide')
  },
  onPullDownRefresh(){
    //每次下拉刷新时执行
    // console.log('下拉刷新')
  },
  onReachBottom(){
    //页面到最底部时自动执行
    // console.log('到最底部了')
  }, onPageScroll(e){
    //页面滚动中执行
    // console.log('滚动中》》》')
  },
  onShareAppMessage(msg){
    //点击分享按钮时自动执行
    // console.log('正在准备分享')
    // return{
    //   title:'share',
    //   "pagePath": "pages/index/index",
    // }
  },
 data:{
showname:true,
name:'点击从页面上移除',
showhidden:true,
name2:'长按从页面上隐藏',
arr:[{name:'aaaaa'},{name:'bbbbb'},{name:'ccccc'},{name:'ddddd'}],
content:'插入include',
content2:'template模块插入data数据'
 },
 clicktap(){
   this.setData({showname:false})
 },clicklongtap(){
  this.setData({showhidden:false})
}})
