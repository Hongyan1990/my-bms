<template>
	<div>
	  <el-main>
	  	<el-row>
	  		<el-col :span="4">
	  			<el-button 
	  				type="primary" 
	  				icon="el-icon-plus"
	  				size="small"
	  				@click="dialogFormVisible=true">添加菜单</el-button>
	  		</el-col>
	  	</el-row>
	  	<el-table
		    :data="tableData"
		    v-loading="loading"
		    max-height="500px"
            	stripe
		    style="width: 100%">
		    <template slot="empty">
                <img :src="imgUrl" style="width: 200px; margin-top: 20px;"/>
                <p style="margin: 0; line-height: 30px">暂无数据</p>
            </template>
		    <el-table-column
		      label="店铺ID">
		      <template slot-scope="scope">
		        <span style="margin-left: 10px">{{ scope.row.rowKey }}</span>
		      </template>
		    </el-table-column>
		    <el-table-column
		      label="店铺名称">
		      <template slot-scope="scope">
		        <span>{{scope.row.shopname}}</span>
		      </template>
		    </el-table-column>
		    <el-table-column
		      label="店铺地址">
		      <template slot-scope="scope">
		        <span>{{scope.row.address}}</span>
		      </template>
		    </el-table-column>
		    <el-table-column
		      label="电话">
		      <template slot-scope="scope">
		        <span>{{scope.row.phone}}</span>
		      </template>
		    </el-table-column>
		    <el-table-column
		      label="经营时间">
		      <template slot-scope="scope">
		        <span>{{scope.row.open_time}}</span>
		      </template>
		    </el-table-column>
		    <el-table-column
		      label="配送时间">
		      <template slot-scope="scope">
		        <span>{{scope.row.delivery_time}}</span>
		      </template>
		    </el-table-column>
		    <el-table-column
		      label="综合评分">
		      <template slot-scope="scope">
		        <span>{{scope.row.scores}}</span>
		      </template>
		    </el-table-column>
		    <el-table-column
		      label="配送价">
		      <template slot-scope="scope">
		        <span>{{scope.row.price}}</span>
		      </template>
		    </el-table-column>
		    <el-table-column
		      label="类别">
		      <template slot-scope="scope">
		        <span>{{scope.row.family}}</span>
		      </template>
		    </el-table-column>

		    <el-table-column label="操作" width="150">
		      <template slot-scope="scope">
		      	<el-upload
						  class="upload-demo"
						  action="/api/file/upload"
						  :data="uploadData"
						  :on-success="handleAvatarSuccess"
						  :show-file-list="false">
						  <el-tooltip class="item" effect="dark" content="上传图片" placement="top">
			      		<el-button type="primary" icon="el-icon-upload" circle size="mini"></el-button>
			      	</el-tooltip>
						</el-upload>
		      	
		      	<!-- <el-tooltip class="item" effect="dark" content="修改" placement="top">
		      		<el-button 
		      			type="primary" 
		      			icon="el-icon-edit" 
		      			circle 
		      			size="mini"
		      			@click="handleEdit(scope.$index, scope.row)">
		      			</el-button>
		      	</el-tooltip> -->
		      	<el-tooltip class="item" effect="dark" content="删除" placement="top">
		      		<el-button 
		      			type="danger" 
		      			icon="el-icon-delete" 
		      			circle size="mini"
		      			@click="handleDelete(scope.$index, scope.row)"
		      			></el-button>
		      	</el-tooltip>
		      	<!-- <el-button
		          size="mini"
		          @click="handleEdit(scope.$index, scope.row)">上传</el-button>
		        <el-button
		          size="mini"
		          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
		        <el-button
		          size="mini"
		          type="danger"
		          @click="handleDelete(scope.$index, scope.row)">删除</el-button> -->
		      </template>
		    </el-table-column>
		  </el-table>
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
			    imgUrl
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