<template>
	<div>
		<el-table
	    :data="attendanceData"
	    v-loading="loading"
	    max-height="500px"
      stripe
	    style="width: 100%">
	    <template slot="empty">
          <img :src="imgUrl" style="width: 200px; margin-top: 20px;"/>
          <p style="margin: 0; line-height: 30px">暂无数据</p>
      </template>
	    <el-table-column label="ID">
	      <template slot-scope="scope">
	        <span style="margin-left: 10px">{{ scope.row.userid }}</span>
	      </template>
	    </el-table-column>
	    <el-table-column label="姓名">
	      <template slot-scope="scope">
	        <span style="margin-left: 10px">{{ scope.row.user_name }}</span>
	      </template>
	    </el-table-column>
	    <el-table-column label="签到时间">
	      <template slot-scope="scope">
	        <span style="margin-left: 10px">{{ scope.row.sign_time }}</span>
	      </template>
	    </el-table-column>
	    <el-table-column label="本月签到次数">
	      <template slot-scope="scope">
	        <span style="margin-left: 10px">{{ scope.row.sign_count }}</span>
	      </template>
	    </el-table-column>
	  </el-table>
	  <div class="page">
      <el-pagination
        small
        layout="prev, pager, next"
        @current-change="changePage"
        :page-count="count">
      </el-pagination>
    </div>
	</div>
</template>
<script>
	import moment from 'moment'
	import {getSignInfoByPage, approveLeave} from '../model/client-model.js'
	export default {
		name: 'sign-data',
		props: ["imgUrl"],
		data() {
			return {
				attendanceData: [],
				loading: false,
				count: 0,
				pageParams: {
          p: 1,
          page_size: 5
        }
			}
		},
		methods: {
			changePage(e) {
				this.pageParams.p = e
				this.getAllSignInfoByPage(this.pageParams.p)
			},
			getAllSignInfoByPage(page) {
				getSignInfoByPage(page)
					.then(res => {
						this.attendanceData = []
						this.count = res.data.count
						res.data.signList.forEach(data => {
							this.attendanceData.push(Object.assign(data, {sign_time: moment(data.sign_time).format('YYYY-MM-DD HH:mm:ss')}))
						})
						
					})
					.catch(err => {})
			}
		},
		mounted() {
			this.getAllSignInfoByPage(this.pageParams.p)
		}
	}
</script>
<style scoped>
	.page {
		text-align: right;
	}
</style>