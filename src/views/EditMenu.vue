<template>
	<div>
		<el-dialog  :close-on-click-modal="false" title="打卡" :visible.sync="dialogVisibale">
	    	<div >
	    		<el-upload
					  class="upload-demo"
					  action="/api/file/upload"
					  :data="uploadData"
					  :on-success="handleAvatarSuccess"
					  :show-file-list="false">
		      	<el-button type="primary" size="small">上传图片<i class="el-icon-upload el-icon--right"></i></el-button>
					</el-upload>
	    	</div>
	    	<div style="margin-top: 10px;">
	    		<el-table
					    :data="attendanceData"
              stripe
					    style="width: 100%">
					    <template slot="empty">
	                <img :src="imgUrl" style="width: 200px; margin-top: 20px;"/>
	                <p style="margin: 0; line-height: 30px">暂无数据</p>
	            </template>
					    <el-table-column label="ID">
					      <template slot-scope="scope">
					        <span style="margin-left: 10px">{{ scope.row.rowKey }}</span>
					      </template>
					    </el-table-column>
					    <el-table-column label="姓名">
					      <template slot-scope="scope">
					        <span style="margin-left: 10px">{{ scope.row.rowKey }}</span>
					      </template>
					    </el-table-column>
					    <el-table-column label="签到时间">
					      <template slot-scope="scope">
					        <span style="margin-left: 10px">{{ scope.row.rowKey }}</span>
					      </template>
					    </el-table-column>
					    <el-table-column label="本月签到次数">
					      <template slot-scope="scope">
					        <span style="margin-left: 10px">{{ scope.row.rowKey }}</span>
					      </template>
					    </el-table-column>
					  </el-table>
	    	</div>
	      <div slot="footer" class="dialog-footer">
	        <el-button type="primary" @click="closeMenuDialog">返 回</el-button>
	      </div>
	  </el-dialog>
	</div>
</template>

<script>
	import {updateMenu} from '../model/client-model.js'
	import imgUrl from '../static/no-data2.png'
	export default {
		name: 'editmenu',
		props: {
	      isShowEditDialog: {
	        type: Boolean,
	        default: false
	      }
	    },
		data () {
			return {
				formLabelWidth: '100px',
				validateErr: false,
				validateMsg: '',
				textarea: '',
				attendanceData: [],
				uploadData: {
		    	directory: '\/user'
		    },
		    imgUrl
			}
		},
		computed: {
	      dialogVisibale: {
	        get () {
	          return this.isShowEditDialog
	        },
	        set () {
	          this.$emit('closeEditMenuDialog')
	        }
	      },

	    },
	    methods: {
	    	closeMenuDialog () {
	    		this.$emit('closeEditMenuDialog')
	    	},
	    	handleAvatarSuccess() {
					this.$message({
			          message: '上传成功',
			          type: 'success'
			        });
				},
	    	editMenu () {
	    		const jsonData = Object.assign({}, this.rowData, {id: this.rowData.rowKey}) 
	    		updateMenu(jsonData)
	    			.then(res => {
	    				this.$message({
				          message: '修改菜单成功',
				          type: 'success'
				        });
				        this.$emit('closeEditMenuDialog', 'modify')
	    			})
	    			.catch(res => {
	    				this.$message.error('修改菜单失败');
	    			})
	    	}
	    }
	}

</script>
<style>
  .err-tip {
    color: red;
    margin-bottom: 10px;
    display: inline-block;
  }
</style>