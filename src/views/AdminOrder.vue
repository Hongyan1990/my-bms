<template>
	<div>
	  <el-main>
	  	<el-tabs style="padding:0 20px;" v-model="activeName" @tab-click="handleClick">
		  	<el-tab-pane label="加班申请" name="first">
		    	<el-main>
		    		<apply-overtime :imgUrl="imgUrl" :userid="userid"></apply-overtime>
				  </el-main>
		    </el-tab-pane>
		    <el-tab-pane label="请假审批" name="second">
		    	<el-main>
				  	<apply-leave :imgUrl="imgUrl"></apply-leave>
				  </el-main>
		    </el-tab-pane>
		    <el-tab-pane label="打卡数据" name="third">
		    	<el-main>
				  	<sign-data :imgUrl="imgUrl"></sign-data>
				  </el-main>
		    </el-tab-pane>
		    <el-tab-pane label="员工绩效" name="fourth">
		    	<el-main>
				  	<employee-performance :imgUrl="imgUrl"></employee-performance>
				  </el-main>
		    </el-tab-pane>
		    <el-tab-pane label="智能添加" name="five">
		    	<el-main>
				  	<iframe  name = "iframeMap" id="iframeMapViewComponent"  src="dist/test.html"
               width="100%" :height="localHeight-40"
               frameborder="0" scrolling="no" ref="iframeDom"
      			></iframe>
				  </el-main>
		    </el-tab-pane>
		    
		 </el-tabs>
	  </el-main>
	</div>
</template>
<script>
	import cookie from '../util/cookie.js'
	import {getSignInfoByPage} from '../model/client-model.js'
	import imgUrl from '../static/no-data2.png'

	import ApplyOvertime from './ApplyOvertime.vue'
	import ApplyLeave from './ApplyLeave.vue'
	import SignData from './SignData.vue'
	import EmployeePerformance from './EmployeePerformance.vue'
	export default {
		name: 'adminorder',
		beforeRouteEnter (to, from, next) {
		    const username = cookie.getCookie('username')
		    if(username === 'admin' && from.path === '/user') {
		    	next('/login')
		    } else {
		    	next()
		    }
		},
		components: {
			ApplyOvertime, ApplyLeave, SignData, EmployeePerformance
		},
		data () {
			return {
				tableData: [],
				loading: false,
		    imgUrl,
		    recommendData: [],
		    leaveData: [],
		    activeName: 'first',
		    attendanceData: [],
		    performanceData: []
			}
		},
		computed: {
			userid() {
				return this.$store.state.userid
			},
			localHeight () {
				return window.innerHeight;
			}
		},
		methods: {
			handleEdit(i, data) {
			},
			handleClick(tab, event) {}
		},
		mounted () {
		}
	}
</script>
<style>
	.upload-demo {
		display: inline-block;
		margin-right: 10px;
	}
</style>