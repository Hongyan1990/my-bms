<template>
	<div>
		<el-table
	    :data="performanceData"
	    v-loading="loading"
	    max-height="500px"
      stripe
	    style="width: 100%">
	    <template slot="empty">
          <img :src="imgUrl" style="width: 200px; margin-top: 20px;"/>
          <p style="margin: 0; line-height: 30px">暂无数据</p>
      </template>
	    <el-table-column label="员工ID">
	      <template slot-scope="scope">
	        <span style="margin-left: 10px">{{ scope.row.userid }}</span>
	      </template>
	    </el-table-column>
	    <el-table-column label="本月成绩">
	      <template slot-scope="scope">
	        <span style="margin-left: 10px">{{ scope.row.performance }}</span>
	      </template>
	    </el-table-column>
	    <el-table-column label="排名">
	      <template slot-scope="scope">
	        <span style="margin-left: 10px">{{ scope.row.index }}</span>
	      </template>
	    </el-table-column>
	    <el-table-column label="操作" width="150">
	      <template slot-scope="scope">
					<el-button
	          size="mini"
	          type="primary" plain
	          @click="handleEdit(scope.$index, scope.row)">修改成绩</el-button>
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
    <edit-perform 
			:isShowDialog="dialogFormVisible"
			:rowData="rowData"
			@closeCreateMenuDialog="closeCreateMenuDialog">
		</edit-perform>
	</div>
</template>
<script>
	import moment from 'moment'
	import {getPerformance, approveLeave} from '../model/client-model.js'
	import EditPerform from './EditPerform.vue'
	export default {
		name: 'employee-performance',
		props: ["imgUrl"],
		components: {EditPerform},
		data() {
			return {
				performanceData: [],
				loading: false,
				count: 0,
				rowData: {},
				dialogFormVisible: false,
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
				getPerformance(page)
    				.then(res => {
    					this.count = res.data.count
    					this.performanceData  = []
							res.data.performList.forEach((data, index) => {
								data['index'] = index + 1
								this.performanceData.push(data)
							})
    				})
    				.catch(err => {
    					
    				})
			},
			handleEdit(i, row) {
				this.dialogFormVisible = true
				this.rowData = row
			},
			closeCreateMenuDialog (flag) {
				this.dialogFormVisible = false
				if(flag === 'success') {
					this.getAllSignInfoByPage(this.pageParams.p)
				}
			},
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