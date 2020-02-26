<template>
    <div class="collaboration_container">
        <div class="collaboration_content_container collaboration_common_container">
            <p class="collaboration_common_title">
                {{$store.state.messages.collaborationThree.core.title}}
            </p>
            <div class="collaboration_common_content">
                <div class="collaboration_common_img_container right_border">
                    <img :src="$store.state.messages.collaborationThree.core.list[0].img"
                         @click="toLinkUrl($store.state.messages.collaborationThree.core.list[0].href)"
                         alt="" class="collaboration_img">
                </div>
                <div class="collaboration_common_img_container">
                    <img :src="$store.state.messages.collaborationThree.core.list[1].img"
                         @click="toLinkUrl($store.state.messages.collaborationThree.core.list[1].href)"
                         alt="" class="collaboration_img">
                </div>
            </div>
        </div>
        <div class="collaboration_common_container">
            <p class="collaboration_common_title">
                {{$store.state.messages.collaborationThree.strategy.title}}
            </p>
            <div class="collaboration_common_content">
                <div class="collaboration_common_img_container right_border">
                    <img :src="$store.state.messages.collaborationThree.strategy.list[0].img"
                         @click="toLinkUrl($store.state.messages.collaborationThree.strategy.list[0].href)"
                    alt="" class="collaboration_img">
                </div>
                <div class="collaboration_common_img_container">
                    <img :src="$store.state.messages.collaborationThree.strategy.list[1].img"
                         @click="toLinkUrl($store.state.messages.collaborationThree.strategy.list[1].href)"
                    alt="" class="collaboration_img">
                </div>
            </div>
        </div>
        <div class="collaboration_common_container">
            <p class="collaboration_common_title">
                {{$store.state.messages.collaborationThree.ecosystem.title}}
            </p>
            <div class="collaboration_common_content">
                <div class="collaboration_common_img_container right_border">
                    <img :src="$store.state.messages.collaborationThree.ecosystem.list[0].img"
                         @click="toLinkUrl($store.state.messages.collaborationThree.ecosystem.list[0].href)"
                         alt="" class="collaboration_img">
                </div>
                <div class="collaboration_common_img_container right_border">
                    <img :src="$store.state.messages.collaborationThree.ecosystem.list[1].img"
                         @click="toLinkUrl($store.state.messages.collaborationThree.ecosystem.list[1].href)"
                         alt="" class="collaboration_img">
                </div>
                <div class="collaboration_common_img_container">
                    <img :src="$store.state.messages.collaborationThree.ecosystem.list[2].img"
                         @click="toLinkUrl($store.state.messages.collaborationThree.ecosystem.list[2].href)"
                         alt="" class="collaboration_img">
                </div>

            </div>
        </div>
        <div class="collaboration_common_container">
            <p class="collaboration_common_title">

            </p>
        </div>

    </div>
</template>

<script>
    export default {
        name : "CollaborationThree",
        data(){
            return {}
        },
        computed : {
            announcementList(){
                let announcementList = JSON.parse(JSON.stringify(this.$store.state.messages.announce.announcementList));
                announcementList.shift();
                announcementList.shift();
                return announcementList;
            }
        },
        mounted(){

        },
        methods : {
            toLinkUrl(url){
                window.open(url);
            }
        }
    }
</script>

<style scoped lang="less">
    @import '../style/mixin.less';

    .collaboration_container {
        width: 100%;
        padding-top: 0.6rem;
        .collaboration_content_container {

        }
        .collaboration_common_container {
            max-width: 12rem;
            margin: 0 auto;
            .flexColumn;
            align-items: center;
            padding-top: 1rem;
            &:nth-child(odd) {
                background: #ffffff;
            }
            &:nth-child(even) {
                background: #F8F9FC;
            }
            .collaboration_common_title {
                margin-bottom: 0.8rem;
                font-size: 0.28rem;
                color: #263035;
            }
            .collaboration_common_content {
                height: 2rem;
                .flexRow;
                .collaboration_common_img_container {
                    padding: 0.65rem 0.46rem;
                    .collaboration_img {
                        width: 2rem;
                        height: 0.7rem;
                        cursor: pointer;
                    }
                }

            }

        }
    }


</style>