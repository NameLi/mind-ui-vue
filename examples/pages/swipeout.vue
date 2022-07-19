<template>
  <page class="dmeo-page__swipeout" title="滑动菜单 Swipeout">
    <demo-card title="左滑按钮">
      <m-swipeout
        v-for="item in list"
        :key="item.id"
        auto-close
        @click="handleClick(item.id)"
        @change="handleChange"
      >
        <div class="demo-content swipeout-demo-item m-hairline--bottom">
          <div class="name">{{ item.name }}</div>
          <div class="content">
            <div class="title">{{ item.title }}</div>
            <div class="desc">{{ item.desc }}</div>
          </div>
          <div class="info">
            <div class="time">{{ item.time }}</div>
          </div>
        </div>

        <div class="btn-group" slot="button">
          <div class="btn up" style="width: 80px" @click="handleUp(item.id)">
            置顶
          </div>
          <div
            v-if="item.id === 2"
            class="btn delete"
            style="width: 80px"
            @click="handleDelete(item.id)"
          >
            删除
          </div>
        </div>
      </m-swipeout>
    </demo-card>
  </page>
</template>

<script>
export default {
  name: "demo-swipeout",
  data() {
    return {
      list: [
        {
          id: 1,
          name: "盖",
          title: "德玛西亚之力-盖伦",
          desc: "人在塔在！",
          time: "下午5:01",
        },
        {
          id: 2,
          name: "赵",
          title: "德邦总管-赵信",
          desc: "一点寒芒先到，随后枪出如龙。",
          time: "下午5:01",
        },
        {
          id: 3,
          name: "嘉",
          title: "德玛西亚皇子-嘉文四世",
          time: "下午5:01",
        },
        {
          id: 4,
          name: "泰",
          title: "蛮族之王-泰达米尔",
          time: "昨天",
        },
        {
          id: 5,
          name: "凯",
          title: "皮城女警-凯瑟琳",
          desc: "真抱歉，少年们，我把真皮手套忘在家里了。",
          time: "星期五",
        },
      ],
      instance: null,
    };
  },

  methods: {
    handleChange(instance) {
      this.instance = instance;
    },

    handleUp(id) {
      this.$message(`tap ID: ${id}`);
    },

    handleDelete(id) {
      const toast = this.$toast({
        message: "删除中",
        type: "loading",
      });

      setTimeout(() => {
        toast.close();

        this.instance.close();

        let index = this.list.findIndex((item) => item.id === id);
        this.list.splice(index, 1);

        this.$toast("删除成功");
      }, 1200);
    },

    //
    handleClick(id) {
      this.$message(`click ID: ${id}`);
    },
  },
};
</script>

<style lang="scss">
.dmeo-page__swipeout {
  .demo-card__content {
    margin: 0 -32px;
  }
  .demo-content {
    display: flex;
    padding: 5px 20px;
    height: 150px;
    align-items: center;
  }

  .demo-content .name {
    width: 100px;
    height: 100px;
    color: #fff;
    font-size: 36px;
    line-height: 100px;
    text-align: center;
    background: #ccc;
    border-radius: 6px;
  }

  .demo-content .content {
    flex: 1;
    width: 0;
    padding-left: 20px;
  }

  .demo-content .content .title {
    font-size: 32px;
    height: 55px;
    vertical-align: top;
    color: #111;
  }

  .demo-content .content .desc {
    font-size: 28px;
    height: 45px;
    line-height: 50px;
    color: #888;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .demo-content .info {
    width: 120px;
    height: 100px;
    text-align: right;
  }

  .demo-content .info .time {
    color: #999;
    font-size: 28px;
    vertical-align: top;
  }

  .btn-group {
    display: flex;
    align-items: stretch;
    height: 100%;
  }

  .btn-group .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    color: #fff;
    text-align: center;
  }

  .btn-group .up {
    background: #ccc;
  }

  .btn-group .delete {
    background: red;
  }
}
</style>
