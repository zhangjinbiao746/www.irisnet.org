<template>
    <div id="mask_container" class="mask_container" :class="$store.state.showMask ? 'show_mask' : '' " @touchmove.prevent>
        <div class="mask_content">
            <h2 class="mask_title">{{$store.state.newsLetterTitle}}</h2>
            <p class="mask_text_content">{{$store.state.textContent}}</p>
            <div class="confirm_btn">
              <span @click="confirm()">{{$store.state.confirm}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Mask1",
        data(){
            return {

            }
        },
        methods:{
            confirm:function(){
                this.$store.commit('showMask',false)
            }
        }
    }
</script>

<style scoped lang="less">
 @import "../assets/style/mask.less";
</style>