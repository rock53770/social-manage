
<template>
  <div>
      <van-uploader :after-read="onRead" class="w-100 h-100" v-if="max>1" multiple="multiple">
          <slot></slot>
      </van-uploader>
      <van-uploader :after-read="onRead" class="w-100 h-100" v-else>
          <slot></slot>
      </van-uploader>
  </div>
</template>

<script>
import commonService from '@/api/commonService'
import "./lrz.all.bundle";
export default {
  name: "upload",
  data() {
    return {
      show: false,
      localData:[]
    };
  },
  computed: {
    option: function() {
      var defaultOption = {
        position: "bottom",
        getContainer: function() {
          return document.getElementsByTagName("body")[0];
        }
      };
      return { ...defaultOption, ...this.popupOption };
    }
  },
  mounted() {

  },
  props: {
    needCompress: {
      type: Boolean,
      default: true
    },
    pics: {
        type: Array|Object,
        default: () => []
    },
    max: {
        type: Number|String,
        default: () => 9
    }
  },
  methods: {
    onRead(file, content) {
      var self = this;
      var files = [];
      var queue = []; //压缩后需要上传的文件

      if (!Util.isArray(file)) {
        files[0] = file;
      } else {
        files = file;
      }

      var len = files.length;
      var i = 0;

      files.forEach(function(k, v) {
        k.percent = 0;
        k.status = 1;
        k.result = {};

        lrz(k.file, 0.7)
          .then(function(rst) {
            console.log(rst);
            i++;
            queue.push(rst);
            upload(rst, v, len);
          })
          .catch(function(err) {
            console.log(err);
          });
          if(Util.isArray(self.pics)){
            if(self.max == 1){
              self.pics.unshift(k)
            } else {
              self.pics.push(k)
            }
            if(self.pics.length > self.max){
              self.pics.length = self.max;
            }
          } else {
            // self.pics = k;
            // self.$emit('update:pics', k);
            // console.log(JSON.stringify(self.pics))
            // console.log(self.pics)
          }
      });
      function upload(k, index, len) {
        var fd = new FormData();
        fd.append("file", k.file, k.origin.name);
        //  fd.append('fileType', index);

        const toast = Toast.loading({
          duration: 0, // 持续展示 toast
          forbidClick: true, // 禁用背景点击
          loadingType: "spinner",
          message: "正在上传"
        });

        commonService.upload(fd).then((data)=>{
          toast.clear();
          if (data.code == 1) {
            files[index].status = 2;
            files[index].result = data.object;
            self.$emit("upload-success")
          } else if (data.code == 1000) {
            files[index].status = 3;
            Toast(data.message); //登出
          } else {
            files[index].status = 3;
            Toast(data.message);
          }
        }).catch((e) => {
          files[index].status = 3;
          Toast(data.message);
        })
      }
      function upload1(k, index, len) {
        setTimeout(function() {
          console.log(index + "/" + len);
          files[index].percent = 0.2;
        }, 1000);
      }
    },
  }
};
</script>

