<template>
	<div>
		<el-tabs style="padding:0 20px;" v-model="activeName" @tab-click="handleClick">
		  	<el-tab-pane label="我的考勤" name="first">
		    	<el-main>
		    		<section>
		    			<el-button size="small" @click="dialogFormVisible=true">申请请假</el-button>
		    			<el-button size="small">申请加班</el-button>
		    			<el-button size="small" type="primary" @click="editDialogFormVisible=true">打卡</el-button>
		    		</section>
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
					        <span style="margin-left: 10px">{{ scope.row.a }}</span>
					      </template>
					    </el-table-column>
					    <el-table-column
					      label="姓名">
					      <template slot-scope="scope">
					        <span>{{scope.row.b}}</span>
					      </template>
					    </el-table-column>
					    <el-table-column
					      label="性别">
					      <template slot-scope="scope">
					        <span>{{scope.row.c}}</span>
					      </template>
					    </el-table-column>
					    <el-table-column
					      label="工作年限">
					      <template slot-scope="scope">
					        <span>{{scope.row.d}}</span>
					      </template>
					    </el-table-column>
					    <el-table-column
					      label="本月迟到次数">
					      <template slot-scope="scope">
					        <span>{{scope.row.e}}</span>
					      </template>
					    </el-table-column>
					    <el-table-column
					      label="本月请假次数">
					      <template slot-scope="scope">
					        <span>{{scope.row.f}}</span>
					      </template>
					    </el-table-column>
					    <el-table-column
					      label="本月签到次数">
					      <template slot-scope="scope">
					        <span>{{scope.row.g}}</span>
					      </template>
					    </el-table-column>
					    <el-table-column
					      label="本月加班次数">
					      <template slot-scope="scope">
					        <span>{{scope.row.h}}</span>
					      </template>
					    </el-table-column>
					  </el-table>
				  </el-main>
		    </el-tab-pane>
		    <el-tab-pane label="本月销售" name="second">
		    	<el-main>
				  	<el-table
					    :data="hotTableData"
					    v-loading="loading"
					    max-height="500px"
              			stripe
					    style="width: 100%">
					    <template slot="empty">
			                <img :src="imgUrl" style="width: 200px; margin-top: 20px;"/>
			                <p style="margin: 0; line-height: 30px">暂无数据</p>
			            </template>
					    <el-table-column
					      label="商品代号">
					      <template slot-scope="scope">
					        <span style="margin-left: 10px">{{ scope.row.a }}</span>
					      </template>
					    </el-table-column>
					    <el-table-column
					      label="商品单价">
					      <template slot-scope="scope">
					        <span>{{scope.row.b}}</span>
					      </template>
					    </el-table-column>
					    <el-table-column
					      label="销售数量">
					      <template slot-scope="scope">
					        <span>{{scope.row.c}}</span>
					      </template>
					    </el-table-column>
					    <el-table-column
					      label="用户好评数量">
					      <template slot-scope="scope">
					        <span>{{scope.row.d}}</span>
					      </template>
					    </el-table-column>
					    <el-table-column
					      label="用户差评数量">
					      <template slot-scope="scope">
					        <span>{{scope.row.e}}</span>
					      </template>
					    </el-table-column>
					    <el-table-column
					      label="好评率">
					      <template slot-scope="scope">
					        <span>{{scope.row.f}}</span>
					      </template>
					    </el-table-column>
					    <el-table-column
					      label="销售额">
					      <template slot-scope="scope">
					        <span>{{scope.row.g}}</span>
					      </template>
					    </el-table-column>
					    
					  </el-table>
				  </el-main>
		    </el-tab-pane>
		 </el-tabs>
		 <add-menu 
			:isShowDialog="dialogFormVisible"
			@closeCreateMenuDialog="closeCreateMenuDialog">
		</add-menu>
		<edit-menu
			:isShowEditDialog="editDialogFormVisible"
			:userid="userid"
			@closeEditMenuDialog="closeEditMenuDialog"></edit-menu>
	</div>
</template>
<script>
	import {getAllMenus, addOrder} from '../model/client-model.js'
	import AddMenu from './AddMenu.vue'
	import EditMenu from './EditMenu.vue'
	import imgUrl from '../static/no-data2.png'
	export default {
		name: 'userorder',
		components: {
			AddMenu, EditMenu
		},
		data () {
			return {
				loading: false,
				activeName: 'first',
				hotTableData: [
				],
				tableData: [],
		        multipleSelection: [],
		        recommendData: [],
		        imgUrl,
		        dialogFormVisible: false,
		        editDialogFormVisible: false
			}
		},
		computed: {
			userid() {
				return this.$store.state.userid
			}
		},
		methods: {
			handleSelectionChange (val) {
			},
			handleClick(tab, event) {
				
		  },
		  closeCreateMenuDialog (flag) {
				this.dialogFormVisible = false
			},
			closeEditMenuDialog (flag) {
				this.editDialogFormVisible = false
			},
		},
		mounted () {
			
		}
	}
</script>
<style>
</style>