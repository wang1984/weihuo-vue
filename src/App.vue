<template>
  <div id="app">
    <div  class="main">
            <mt-header title="微活">
                  <mt-button class="fa fa-bars fa-lg" slot="left"  @click="hideMask"></mt-button> 
            </mt-header> 
            
            <transition  name="slide-down">
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </transition>  
            
            <mt-tabbar v-model="selected">
                      <mt-tab-item id="外卖" > 
                         <span slot="icon"  class="fa fa-bell"></span>
                        外卖
                      </mt-tab-item>
                      <mt-tab-item id="订单">
                         <span slot="icon"  class="fa fa-bell"></span>
                        订单
                      </mt-tab-item>
                      <mt-tab-item id="发现">
                          <span slot="icon"  class="fa fa-bell"></span>
                        发现
                      </mt-tab-item>
                      <mt-tab-item id="我的">
                          <span slot="icon"  class="fa fa-bell"></span>
                        我的
                      </mt-tab-item>
            </mt-tabbar>
            <div class="mask" :class="drawerShow ? 'active' : ''" @click="hideMask"></div>
    </div>
    <div  class="drawer" :class="[drawerShow ? 'active' : '']" >
          <div class="layout">
             sada
          </div>
    </div>


      
 
  </div>
</template>

<script>

export default {
  name: 'hello',
  data(){
    return {
      selected:true,
      drawerShow: false
    } 
  },
  methods: {
     hideMask() {
      this.drawerShow=!this.drawerShow
     }
   }
}
</script>
 
<style scoped>
 
#app {
    position: fixed;
    top: 0;
    left: 0;
    bottom:0;
    right:0;
  }
 
.main {
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   transition: transform ease-in-out 0.38s, visibility 0.38s;
 }

.main > .mask {
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   visibility: hidden;
   opacity: 0;
   transition: opacity ease-in-out 0.38s, visibility ease-in-out 0.38s;
   background-color: rgba(0, 0, 0, 0.3);
 }

.main > .active {
   visibility: visible;
   opacity: 1;
 }
 
.drawer {
   max-width: 600px;
   background-color: #fff;
   position: absolute;
   top: 0;
   height:100%;
   overflow: hidden;
   visibility: hidden;
   transition: transform ease-in-out 0.38s, visibility 0.38s;
   left: 0;
   transform: translateX(-100%);
 }
.layout{
    width: 260px;
  }
  
.drawer.active {
   visibility: visible;
   transform: translateX(0%);
 }
  
 .slide-down-enter-active, .slide-down-leave-active {
    transition: all .4s ease;
    opacity: .7;
   
  }
  .slide-down-enter,.slide-down-leave-active{
    opacity: .1;
    transform: translate3d(-50%, 0, 0);
  }
   
</style>
