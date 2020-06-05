<template>
    <header>
        <!--<h1 :class="$style.myTitle">积分商城</h1>-->
      <div class="my-header">
        <div class="logo" style="color: #4d3cff"><span class="logo-icon"></span>考核管理</div>
        <div class="user-info"><span style="color: #4d3cff;font-weight: 777;">{{userName}}</span>员工，您好，今天是<span>{{nowDate}}</span><span class="login-out" @click="loginOut">退出</span></div>
      </div>
    </header>
</template>

<script>
  import cookie from '../util/cookie.js'
  import moment from 'moment'
  export default {
    name: 'order-header',
    data() {
      return {
        
      }
    },
    computed: {
      userName() {
        return this.$store.state.username
      },
      nowDate() {
        return moment().format('YYYY-MM-DD')
      }
    },
    methods: {
      loginOut () {
        cookie.delCookie('username')
        this.$router.replace('/login')
      }
    }
  }
</script>

<style  scoped>
  .logo-icon {
    width: 40px;
    height: 40px;
    display: inline-block;
    background: url("../static/kaoqin.png") center no-repeat;
    background-size: contain;
  }
  .my-header {
    padding: 0 5px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #555;
    box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.2), 0px 3px 10px 0px rgba(0, 0, 0, 0.19);
  }
  .logo {
    align-items: center;
    display: flex;
    font-family: fantasy;
  }
  .login-out {
    display: inline-block;
    font-size: 14px;
    margin:0 10px;
    cursor: pointer;
    font-weight: 777;
  }
  .user-info {
    font-size: 14px;
  }
</style>
