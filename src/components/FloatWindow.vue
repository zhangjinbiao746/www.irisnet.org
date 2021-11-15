<template>
  <div class="float_window_container">
    <div class="float_content">
      <a
        :href="$store.state.messages.home.sectionOne.shareUrl.telegramUrl"
        target="_blank"
        ><img src="../assets/hoverIcon/telegramIconHover.png" alt=""
      /></a>
      <a
        :href="$store.state.messages.home.sectionOne.shareUrl.githubUrl"
        target="_blank"
        ><img src="../assets/hoverIcon/githubIconHover.png" alt=""
      /></a>
    </div>
    <div class="float_window_forum_container">
      <a href="https://forum.irisnet.org/" target="_blank">
        <div class="forum_img_content">
          <img src="../../public/irisnet/irisnet_forum.png" />
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "FloatWindow",
  data() {
    return {
      flShowWeChat: false,
    };
  },
  methods: {
    showWeChat() {
      this.flShowWeChat = true;
    },
    hideWeChat() {
      this.flShowWeChat = false;
    },
  },
};
</script>

<style scoped lang="less">
.float_window_container {
  position: fixed;
  right: 0.2rem;
  bottom: 0.2rem;
  z-index: 10;
  display: flex;
  flex-direction: column;
  .float_content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    a {
      position: relative;
      display: inline-block;
      width: 0.5rem;
      height: 0.5rem;
      background: rgba(49, 65, 201, 1);
      text-align: center;
      border-radius: 0.25rem;
      margin-top: 0.2rem;
      cursor: pointer;
      &:hover {
        background: linear-gradient(147deg, #5f76e6 0%, #3141c9 100%);
        box-shadow: 0 0.02rem 0.2rem 0 rgba(3, 0, 35, 0.25);
      }
      img {
        padding: 0.11rem;
        width: 0.28rem;
      }
      .mobileBox {
        position: absolute;
        right: 2rem;
        bottom: 1rem;
        .qrcode {
          width: 1.35rem;
          height: 1.35rem;
          background: #fff;
          position: absolute;
          border-radius: 0.12rem;
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: 0 0.02rem 0.1rem 0 rgba(19, 18, 35, 0.2);
          overflow: hidden;
          img {
            width: 97%;
            margin: 0;
            opacity: 1;
          }
          .arrow {
            display: none;
          }
          .closeIcon {
            position: absolute;
            width: 0.41rem;
            bottom: 0;
            transform: translateY(200%);
          }
        }
      }
    }
  }
  .float_window_forum_container {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 0.45rem;
    margin-top: 0.2rem;
    background: rgba(49, 65, 201, 1);
    box-shadow: 0 0.02rem 0.2rem 0 rgba(3, 0, 35, 0.25);
    &:hover {
      background: linear-gradient(147deg, #5f76e6 0%, #3141c9 100%);
      box-shadow: 0 0.02rem 0.2rem 0 rgba(3, 0, 35, 0.25);
    }
    a {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      .forum_img_content {
        width: 0.25rem;
        height: 0.25rem;
        img {
          width: 100%;
        }
      }
      span {
        padding-top: 0.07rem;
        font-size: 0.14rem;
        color: #fff;
        line-height: 0.16rem;
      }
    }
  }
}
@media screen and (max-width: 1200px) {
  .float_window_container {
    .float_content {
      display: none;
    }
  }
}
@media screen and (max-width: 420px) {
  .float_window_container {
    transform: scale(1);
  }
}
</style>
