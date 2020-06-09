<template>
	<div>
		<el-table
	    :data="leaveData"
	    v-loading="loading"
	    max-height="500px"
      stripe
	    style="width: 100%">
	    <template slot="empty">
          <img :src="imgUrl" style="width: 200px; margin-top: 20px;"/>
          <p style="margin: 0; line-height: 30px">暂无数据</p>
      </template>
	    <el-table-column
	      label="请假员工" width="200">
	      <template slot-scope="scope">
	        <span style="margin-left: 10px">{{ scope.row.user_name }}</span>
	      </template>
	    </el-table-column>
	    <el-table-column
	      label="请假理由">
	      <template slot-scope="scope">
	        <span style="margin-left: 10px">{{ scope.row.ask_leave_reason }}</span>
	      </template>
	    </el-table-column>
	    <el-table-column label="操作" width="150">
	      <template slot-scope="scope">
					<el-button
	          size="mini"
	          type="primary" plain
	          :disabled="scope.row.ask_leave !== 1"
	          @click="handleEdit(scope.$index, scope.row)">通过请假</el-button>
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
	import {getSignInfoByPage, approveLeave} from '../model/client-model.js'
	export default {
		name: 'apply-leave',
		props: ["imgUrl"],
		data() {
			return {
				leaveData: [],
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
						this.leaveData = Array.prototype.slice.call(res.data.signList)
					})
					.catch(err => {})
			},
			handleEdit(i, row) {
				approveLeave(row.userid, row.overtime_count)
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