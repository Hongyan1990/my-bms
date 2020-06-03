<template>
	<div>
		<el-dialog  :close-on-click-modal="false" title="创建菜单" :visible.sync="dialogVisibale">
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
	        <el-button @click="closeAddMenuDialog">取 消</el-button>
	        <el-button type="primary" @click="addMyMenu" :disabled="validateErr">确 定</el-button>
	      </div>
	    </el-dialog>
	</div>
</template>

<script>
	import {addMenu} from '../model/client-model.js'
	export default {
		name: 'addmenu',
		props: {
	      isShowDialog: {
	        type: Boolean,
	        default: false
	      }
	    },
		data () {
			return {
				rowData: {
					shopname: '',
					address: '',
					phone: '',
					open_time: '',
					delivery_time: '',
					scores: '',
					price: '',
					family: ''
				},
				formLabelWidth: '100px',
				validateErr: false,
				validateMsg: ''
			}
		},
		computed: {
	      dialogVisibale: {
	        get () {
	          return this.isShowDialog
	        },
	        set () {
	          this.$emit('closeCreateMenuDialog')
	        }
	      },

	    },
	    methods: {
	    	closeAddMenuDialog () {
	    		this.$emit('closeCreateMenuDialog')
	    	},
	    	addMyMenu () {
	    		const jsonData = Object.assign({}, this.rowData, {id: Math.floor(Math.random () * 900) + 100 + ''}) 
	    		addMenu(jsonData)
	    			.then(res => {
	    				this.$message({
				          message: '新增菜单成功',
				          type: 'success'
				        });
				        this.$emit('closeCreateMenuDialog', 'add')
	    			})
	    			.catch(err => {
	    				this.$message.error('新增菜单失败');
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