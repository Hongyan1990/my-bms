<template>
	<div>
	  <el-main>
	  	<el-tabs style="padding:0 20px;" v-model="activeName" @tab-click="handleClick">
		  	<el-tab-pane label="加班申请" name="first">
		    	<el-main>
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
					    <el-table-column label="操作" width="150">
					      <template slot-scope="scope">
									<el-button
					          size="mini"
					          type="primary" plain
					          @click="handleEdit(scope.$index, scope.row)">分配加班</el-button>
					      </template>
					    </el-table-column>
					  </el-table>
				  </el-main>
		    </el-tab-pane>
		    <el-tab-pane label="请假审批" name="second">
		    	<el-main>
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
					        <span style="margin-left: 10px">{{ scope.row.a }}</span>
					      </template>
					    </el-table-column>
					    <el-table-column
					      label="请假理由">
					      <template slot-scope="scope">
					        <span style="margin-left: 10px">{{ scope.row.b }}</span>
					      </template>
					    </el-table-column>
					    <el-table-column label="操作" width="150">
					      <template slot-scope="scope">
									<el-button
					          size="mini"
					          type="primary" plain
					          @click="handleEdit(scope.$index, scope.row)">通过请假</el-button>
					      </template>
					    </el-table-column>
					  </el-table>
				  </el-main>
		    </el-tab-pane>
		    <el-tab-pane label="打卡数据" name="third">
		    	<el-main>
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
					        <span style="margin-left: 10px">{{ scope.row.a }}</span>
					      </template>
					    </el-table-column>
					    <el-table-column label="姓名">
					      <template slot-scope="scope">
					        <span style="margin-left: 10px">{{ scope.row.b }}</span>
					      </template>
					    </el-table-column>
					    <el-table-column label="签到时间">
					      <template slot-scope="scope">
					        <span style="margin-left: 10px">{{ scope.row.c }}</span>
					      </template>
					    </el-table-column>
					    <el-table-column label="本月签到次数">
					      <template slot-scope="scope">
					        <span style="margin-left: 10px">{{ scope.row.d }}</span>
					      </template>
					    </el-table-column>
					  </el-table>
				  </el-main>
		    </el-tab-pane>
		    <el-tab-pane label="员工绩效" name="fourth">
		    	<el-main>
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
					        <span style="margin-left: 10px">{{ scope.row.a }}</span>
					      </template>
					    </el-table-column>
					    <el-table-column label="本月成绩">
					      <template slot-scope="scope">
					        <span style="margin-left: 10px">{{ scope.row.b }}</span>
					      </template>
					    </el-table-column>
					    <el-table-column label="排名">
					      <template slot-scope="scope">
					        <span style="margin-left: 10px">{{ scope.row.c }}</span>
					      </template>
					    </el-table-column>
					    
					  </el-table>
				  </el-main>
		    </el-tab-pane>
		 </el-tabs>
	  </el-main>
		<add-menu 
			:isShowDialog="dialogFormVisible"
			@closeCreateMenuDialog="closeCreateMenuDialog">
		</add-menu>
		<edit-menu
			:isShowEditDialog="editDialogFormVisible"
			:rowData="rowData" 
			@closeEditMenuDialog="closeEditMenuDialog"></edit-menu>
	</div>
</template>
<script>
	import AddMenu from './AddMenu.vue'
	import EditMenu from './EditMenu.vue'
	import cookie from '../util/cookie.js'
	import {getAllMenus, deleteMenu} from '../model/client-model.js'
	import imgUrl from '../static/no-data2.png'
	export default {
		name: 'adminorder',
		components: {
			AddMenu, EditMenu
		},
		beforeRouteEnter (to, from, next) {
		    const username = cookie.getCookie('username')
		    if(username === 'admin' && from.path === '/user') {
		    	next('/login')
		    } else {
		    	next()
		    }
		},
		data () {
			return {
				tableData: [],
				loading: false,
		    dialogFormVisible: false,
		    editDialogFormVisible:false,
		    rowData: {},
		    uploadData: {
		    	directory: '\/user'
		    },
		    imgUrl,
		    recommendData: [
		    	{'a': '423985', b: '刘忠诚', c: '男', d: '2年', e: '1', f: '2', g: '20', h: '5'},
		    	{'a': '424570', b: '张翔', c: '男', d: '1年', e: '0', f: '0', g: '22', h: '8'},
		    	{'a': '423970', b: '许二和', c: '男', d: '4年', e: '2', f: '3', g: '19', h: '2'},
		    ],
		    leaveData: [
		    	{a: '赵一搏', b: '参加朋友婚礼'},
		    	{a: '何亮', b: '回家探亲'},
		    ],
		    activeName: 'first',
		    attendanceData: [
		    	{'a': '423985', b: '刘忠诚', c: '2020-06-22 18:03', d: '20'},
		    	{'a': '424570', b: '张翔', c: '2020-06-23 18:06', d: '22'},
		    	{'a': '423970', b: '许二和', c: '2020-06-22 18:11', d: '19'},
		    ],
		    performanceData: [
		    	{'a': '423985', b: '98.5', c: '1'},
		    	{'a': '424570', b: '96.7', c: '2'},
		    	{'a': '423970', b: '95', c: '3'},
		    ]
			}
		},
		methods: {
			handleEdit(i, data) {
				this.rowData = Object.assign({}, data);
				this.editDialogFormVisible = true;
			},
			handleAvatarSuccess() {
				this.$message({
		          message: '上传成功',
		          type: 'success'
		        });
			},
			handleDelete(i, data) {
				deleteMenu(data.rowKey)
					.then(res => {
						this.$message({
				          message: '删除成功',
				          type: 'success'
				        });
				        this.getMenus();
					})
					.catch(err => {
						this.$message.error('删除失败');
					})
			},
			handleClick(tab, event) {},
			getMenus () {
				getAllMenus('shop')
					.then(data => {
						this.tableData = data.data;
						this.loading = false;
					})
					.catch(err => {
						this.loading = false;
					})
			},
			closeCreateMenuDialog (flag) {
				if(flag === 'add') {
					this.getMenus()
				}
				this.dialogFormVisible = false
			},
			closeEditMenuDialog (flag) {
				if(flag === 'modify') {this.getMenus()}
				this.editDialogFormVisible = false
			}
		},
		mounted () {
			this.getMenus();
		}
	}
</script>
<style>
	.upload-demo {
		display: inline-block;
		margin-right: 10px;
	}
</style>