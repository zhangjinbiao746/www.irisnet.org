<template>
    <title-component :title="announcements.title">
        <div class="announcements">
            <ul class="announcements_list">
                <li
                    class="announcement"
                    v-for="(item, index) in announcements.announcementList"
                    :key="index"
                >
                    <a
                        class="announcement_link"
                        :href="item.href"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            class="announcement_img"
                            :src="getImgRandom(item.img)"
                            alt=""
                            @mouseenter="scaleItemImage(index)"
                            @mouseleave="hideItemImage(index)"
                        />
                    </a>
                    <a
                        class="announcement_title"
                        :href="item.href"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {{ item.title }}
                    </a>
                    <p class="announcement_date">{{ item.date }}</p>
                </li>
            </ul>
            <hr class="hr" />
            <a
                class="view_more"
                :href="announcements.viewMoreHref"
                target="_blank"
                rel="noopener noreferrer"
                >{{ announcements.viewMore }}</a
            >
        </div>
    </title-component>
</template>

<script>
    import TitleComponent from '../../../components/common/TitleComponent.vue';
    import { getImgRandom } from '../../../utils';

    export default {
        name: 'Announcements',
        components: {
            TitleComponent
        },
        props: ['announcements'],
        data() {
            return {
                announcementListItemImgDom: null,
                getImgRandom
            };
        },
        methods: {
            scaleItemImage(index) {
                this.announcementListItemImgDom[index].classList.remove('reversion_item_image');
                this.announcementListItemImgDom[index].classList.add('scale_item_image');
            },
            hideItemImage(index) {
                this.announcementListItemImgDom[index].classList.remove('scale_item_image');
                this.announcementListItemImgDom[index].classList.add('reversion_item_image');
            }
        },
        mounted() {
            this.announcementListItemImgDom = document.getElementsByClassName('announcement_img');
        }
    };
</script>

<style lang="less" scoped>
    .announcements {
        margin-top: 0.56rem;
        .announcements_list {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 0.6rem;
            margin: 0 auto;
            max-width: 11rem;
            @media (max-width: 1000px) {
                grid-template-columns: repeat(1, 1fr);
            }
            .announcement {
                .announcement_link {
                    max-width: 5.22rem;
                    .scale_item_image {
                        animation: scale 0.3s ease-in-out;
                        animation-fill-mode: forwards;
                    }
                    .reversion_item_image {
                        animation: unscale 0.3s ease-in-out;
                        animation-fill-mode: forwards;
                    }
                    .announcement_img {
                        width: 100%;
                        border-radius: 0.08rem;
                        border: 0.01rem solid rgba(44, 57, 117, 1);
                    }
                }
                .announcement_title {
                    display: inline-block;
                    margin-top: 0.36rem;
                    font-size: var(--font-24);
                    color: #fff;
                    line-height: 0.4rem;
                    &:hover {
                        color: var(--hover-text-color);
                    }
                    @media (max-width: 768px) {
                        margin-top: 0.24rem;
                        font-size: var(--font-20);
                    }
                }
                .announcement_date {
                    margin-top: 0.24rem;
                    color: rgba(255, 255, 255, 0.75);
                }
            }
        }
        .hr {
            margin-top: 0.59rem;
        }
        .view_more {
            display: inline-block;
            margin-top: 0.35rem;
            padding: 0.14rem 0.4rem;
            color: rgba(155, 100, 237, 1);
            border: 0.02rem solid rgba(155, 100, 237, 1);
            border-radius: 0.04rem;
        }
    }
    @keyframes scale {
        from {
            transform: scale(1);
        }
        to {
            transform: scale(1.03);
        }
    }
    @keyframes unscale {
        from {
            transform: scale(1.03);
        }
        to {
            transform: scale(1);
        }
    }
</style>
