<template>
    <div class="community">
        <a
            class="community_item"
            v-for="(item, index) in communityInfo"
            :key="index"
            :href="item.link"
            target="_blank"
            rel="noopener noreferrer"
        >
            <img :src="getImageUrl(item.img)" alt="" />
        </a>
    </div>
</template>

<script>
    export default {
        name: 'Community',
        props: ['communityInfo'],
        methods: {
            getImageUrl(img) {
				return new URL(`../assets/footer/${img}`, import.meta.url)
            }
        }
    };
</script>

<style lang="less" scoped>
    .community {
        position: fixed;
        right: 0.2rem;
        bottom: 0.2rem;
        display: flex;
        flex-direction: column;
        .community_item {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 0.2rem;
            width: 0.5rem;
            height: 0.5rem;
            background: #6f21c1;
            border-radius: 50%;
            &:hover {
                background: linear-gradient(153deg, #9f48f9 0%, #7021c1 100%);
                box-shadow: 0 0.02rem 0.2rem 0 rgb(3 0 35 / 25%);
            }
            &:first-child {
                margin-top: 0;
            }
            @media (max-width: 1200px) {
                &:nth-of-type(1) {
                    display: none;
                }
                &:nth-of-type(2) {
                    display: none;
                }
            }
            img {
                width: 50%;
            }
        }
    }
</style>
