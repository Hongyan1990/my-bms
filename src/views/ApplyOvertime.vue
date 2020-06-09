<template>
	<div>
		<el-table
	    :data="recommendData"
	    v-loading="loading"
	    max-height="500px"
      stripe
	    style="width: 100%">
	    <template slot="empty">
        <img :src="imgUrl" style="width: 200px; margin-top: 20px;"/>
        <p style="margin: 0; line-height: 30px">暂无数据</p>
  		</template>
	    <el-table-column
	      label="ID">
	      <template slot-scope="scope">
	        <span style="margin-left: 10px">{{ scope.row.userid }}</span>
	      </template>
	    </el-table-column>
	    <el-table-column
	      label="姓名">
	      <template slot-scope="scope">
	        <span>{{scope.row.user_name}}</span>
	      </template>
	    </el-table-column>
	    <el-table-column
	      label="性别">
	      <template slot-scope="scope">
	        <span>{{scope.row.sex}}</span>
	      </template>
	    </el-table-column>
	    <el-table-column
	      label="工作年限">
	      <template slot-scope="scope">
	        <span>{{scope.row.year_work}}</span>
	      </template>
	    </el-table-column>
	    <el-table-column
	      label="本月迟到次数">
	      <template slot-scope="scope">
	        <span>{{scope.row.late_count}}</span>
	      </template>
	    </el-table-column>
	    <el-table-column
	      label="本月请假次数">
	      <template slot-scope="scope">
	        <span>{{scope.row.leave_count}}</span>
	      </template>
	    </el-table-column>
	    <el-table-column
	      label="本月签到次数">
	      <template slot-scope="scope">
	        <span>{{scope.row.sign_count}}</span>
	      </template>
	    </el-table-column>
	    <el-table-column
	      label="本月加班次数">
	      <template slot-scope="scope">
	        <span>{{scope.row.overtime_count}}</span>
	      </template>
	    </el-table-column>
	    <el-table-column label="操作" width="150">
	      <template slot-scope="scope">
					<el-button
	          size="mini"
	          type="primary" 
	          plain
	          :disabled="scope.row.apply_overtime !== 1"
	          @click="handleEdit(scope.$index, scope.row)">分配加班</el-button>
	      </template>
	    </el-table-column>
	  </el-table>
	  <div class="page">
      <el-pagination
        small
        layout="prev, pager, next"
        @current-change="changePage"
        :total="count">
      </el-pagination>
    </div>
	</div>
</template>
<script>
	import {getSignInfoByPage, approveOvertime} from '../model/client-model.js'
	export default {
		name: 'apply-overtime',
		props: ["imgUrl", "userid"],
		data() {
			return {
				recommendData: [],
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
						this.count = res.data.count
						this.recommendData = Array.prototype.slice.call(res.data.signList)
					})
					.catch(err => {})
			},
			handleEdit(i, row) {
				approveOvertime(row.userid, row.overtime_count)
					.then(res => {
						this.$message({
		          message: '审批成功',
		          type: 'success'
		        });
		        this.getAllSignInfoByPage(this.pageParams.p)
					})
					.catch(err => {

					})
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