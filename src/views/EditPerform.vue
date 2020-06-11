<template>
	<div>
		<el-dialog  :close-on-click-modal="false" title="修改成绩" :visible.sync="dialogVisibale">
	       <el-form label-position="top"  label-width="70px"  class="demo-form-inline">
		    <el-form-item label="成绩">
		      <el-input
				  :rows="2"
				  placeholder="请输入内容"
				  v-model="rowData.performance">
				</el-input>
		    </el-form-item>
		  </el-form>
	      <div slot="footer" class="dialog-footer">
	        <el-button @click="closeAddMenuDialog">取 消</el-button>
	        <el-button type="primary" @click="updateMyPerform" :disabled="validateErr">确 定</el-button>
	      </div>
	    </el-dialog>
	</div>
</template>

<script>
	import {updatePerform} from '../model/client-model.js'
	export default {
		name: 'addmenu',
		props: {
	      isShowDialog: {
	        type: Boolean,
	        default: false
	      },
	      userid: {
	      	type: String
	      },
	      rowData: {
	      	type: Object
	      }
	    },
		data () {
			return {
				performValue: '',
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
      // perform: {
      // 	get () {
      // 		return this.performValue||this.rowData.performance
      // 	},
      // 	set (val) {
      // 		this.performValue = val
      // 	}
      // }
    },
    methods: {
    	closeAddMenuDialog (flag) {
    		this.$emit('closeCreateMenuDialog', flag)
    	},
    	updateMyPerform () {
    		if(this.rowData.performance === '') {
    			this.$message.error('成绩不能为空')
    			return
    		}
    		const jsonData = {
    			userid: this.rowData.userid,
    			score: Number(this.rowData.performance)
    		}
    		updatePerform(jsonData)
    			.then(res => {
    				this.$message({
		          message: '修改成功',
		          type: 'success'
		        });
		        this.closeAddMenuDialog('success')
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