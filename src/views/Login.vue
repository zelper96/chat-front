<template>
    <div id="Login" >

        <div>
            <input type="text"  placeholder="대화명" v-model="name">
            <button type="button" @click="MessageBtn()">메세지</button>
        </div>



        <!--<div>-->
            <!--<input :ref="fileInput" type="file" hidden @change="fileDataValue">-->
            <!--<button @colick="fileLoad">파일 </button>-->
            <!--<img :src="uploadFileData" style="width: 200px; height: 200px" v-if="uploadFileData.length>0"/>-->
        <!--</div>-->

        <div>
            <input ref="fileInput" name="files" accept="*/*" type="file" hidden @change="onChangeFileEvent">
            <button type="button" @click="fileBtn">이미지 업로드</button>
            <img :src="imageUrl" style="width: 200px; height: 200px" v-if="imageUrl.length>0"/>
        </div>


    </div>


</template>




<script>

    export default{
        name: 'Login',
        data(){
            return{

                name:'',
                msg:'',
                imageUrl:'',

            };
        },
        methods:{
            MessageBtn(){

                this.$socket.emit('message',{
                    name: this.name,
                    message:'',
                });

            },
            fileBtn() {

                fileUpload();
                this.$refs.fileInput.click();


            },
            onChangeFileEvent(e) {

                // 이미지 미리보기 데이터 가져오기
                ((function () {
                    console.log(e.target.files[0]);
                    const file = e.target.files[0]; // Get first index in files
                    this.imageUrl = URL.createObjectURL(file); // Create File URL



                })());


                // server 메세지 보내기
                (function () {
                    this.$socket.emit('fileupload',{

                    });
                }());

            },

        }
    }
</script>

<style scoped>

</style>