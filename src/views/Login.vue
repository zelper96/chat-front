<template>
    <div id="Login" >

        <div>
            <input type="text"  placeholder="대화명" v-model="name">
            <button type="button" @click="MessageBtn()">메세지</button>
        </div>

        <!--<button type="button" @click="fileUpload()">파일</button>-->

        <div>
            <input type="file" @change="fileload()" ref="fileload()" accept="image/*">
            <img :src="uploadImageFile" style="width: 200px; height: 200px" v-if="uploadImageFile.length>0"/>
        </div>

    </div>


</template>

<script>

    export default{
        name: 'Login',
        data(){
            return{

                name:'',
                msg:[],
                uploadImageFile:'',

            };
        },
        methods:{
            MessageBtn(){

                this.$socket.emit('message',{
                    name: this.name,
                    message:'hello world',
                });

            },
            fileUpload(){
                this.$socket.emit('fileupload',{

                });
            },
            fileload(event){
                let input = event.target;

                if (input.file && input.files[0]){

                    let reader = new FileReader();

                    reader.onload = function (event) {
                        console.log(event.target.result);
                        this.uploadImageFile = event.target.result;

                    };

                    reader.readAsDataURL(input.files[0]);
                }

            },

        }
    }
</script>

<style scoped>

</style>