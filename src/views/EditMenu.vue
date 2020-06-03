<template>
	<div>
		<el-dialog  :close-on-click-modal="false" title="修改菜单" :visible.sync="dialogVisibale">
	    <el-form  label-width="70px"  :inline="true" :model="rowData"  class="demo-form-inline">
		    <el-form-item label="店铺名称">
		      <el-input v-model="rowData.shopname" autocomplete="off"></el-input>
		    </el-form-item>
		    <el-form-item label="店铺地址">
		      <el-input v-model="rowData.address" autocomplete="off"></el-input>
		    </el-form-item>
		    <el-form-item label="电话">
		      <el-input v-model="rowData.phone" autocomplete="off"></el-input>
		    </el-form-item>
		    <el-form-item label="经营时间">
		      <el-input v-model="rowData.open_time" autocomplete="off"></el-input>
		    </el-form-item>
		    <el-form-item label="配送时间">
		      <el-input v-model="rowData.delivery_time" autocomplete="off"></el-input>
		    </el-form-item>
		    <el-form-item label="综合评分">
		      <el-input v-model="rowData.scores" autocomplete="off"></el-input>
		    </el-form-item>
		    <el-form-item label="起送价">
		      <el-input v-model="rowData.price" autocomplete="off"></el-input>
		    </el-form-item>
		    <el-form-item label="类别">
		      <el-input v-model="rowData.family" autocomplete="off"></el-input>
		    </el-form-item>
		  </el-form>
	      <div slot="footer" class="dialog-footer">
	        <el-button @click="closeMenuDialog">取 消</el-button>
	        <el-button type="primary" @click="editMenu" :disabled="validateErr">确 定</el-button>
	      </div>
	    </el-dialog>
	</div>
</template>

<script>
	import {updateMenu} from '../model/client-model.js'
	export default {
		name: 'editmenu',
		props: {
	      isShowEditDialog: {
	        type: Boolean,
	        default: false
	      },
	      rowData: {
	      	type: Object
	      },
	    },
		data () {
			return {
				formLabelWidth: '100px',
				validateErr: false,
				validateMsg: ''
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