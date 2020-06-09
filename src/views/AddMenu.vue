<template>
	<div>
		<el-dialog  :close-on-click-modal="false" title="申请请假" :visible.sync="dialogVisibale">
	       <el-form label-position="top"  label-width="70px"  :model="rowData"  class="demo-form-inline">
		    <el-form-item label="请假原因">
		      <el-input
				  type="textarea"
				  :rows="2"
				  placeholder="请输入内容"
				  v-model="textarea">
				</el-input>
		    </el-form-item>
		  </el-form>
	      <div slot="footer" class="dialog-footer">
	        <el-button @click="closeAddMenuDialog">取 消</el-button>
	        <el-button type="primary" @click="applyMyLeave" :disabled="validateErr">确 定</el-button>
	      </div>
	    </el-dialog>
	</div>
</template>

<script>
	import {applyLeave} from '../model/client-model.js'
	export default {
		name: 'addmenu',
		props: {
	      isShowDialog: {
	        type: Boolean,
	        default: false
	      },
	      userid: {
	      	type: String
	      }
	    },
		data () {
			return {
				textarea: '',
				formLabelWidth: '100px',
				validateErr: false,
				validateMsg: '',
				rowData: {}
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
    	applyMyLeave () {
    		if(this.textarea === '') {
    			this.$message.error('申请理由不能为空')
    			return
    		}
    		const jsonData = {
    			userid: this.userid,
    			reason: this.textarea
    		}
    		applyLeave(jsonData)
    			.then(res => {
    				this.$message({
		          message: '申请提交成功',
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