<template>
  <page class="demo-page__cell" title="单元格 Cell">
    <div class="demo-cell__wrap">
      <m-cell-group
        title="单元格分组"
        :border="borderSwitch"
        :card="cardSwitch"
      >
        <div slot="group-suffix">
          <m-icon name="category" @click="visible = true" />
        </div>

        <m-cell icon="love" icon-color="#e54d42" title="图标+标题" />

        <m-cell
          icon="https://note-file.ixook.com/FkwInL0tWpqDeRNtYHMfmaHlioTq"
          title="图片+标题"
        />

        <m-cell icon="location" icon-color="#00CDA2" title="跳转" url="/" />

        <m-cell icon="tag" icon-color="#00CDA2" title="标签">
          <div class="tag-group">
            <m-tag type="warning" round>标签</m-tag>
            <m-tag type="success" round>标签</m-tag>
            <m-tag type="warning">标签</m-tag>
          </div>
        </m-cell>

        <m-cell icon="feed" icon-color="#00CDA2" title="表单组件">
          <m-switch v-model="switchValue" />
        </m-cell>

        <m-cell icon="feed" icon-color="#00CDA2" title="表单组件">
          <m-checkbox v-model="switchValue" />
        </m-cell>

        <m-cell
          icon="edit"
          @click="onClick"
          icon-color="#00CDA2"
          title="文本"
          ellipsis
          value="单行内容超出单行内容超出单行内容超出单行内容超出"
        />

        <m-cell
          icon="edit"
          @click="onClick"
          icon-color="#00CDA2"
          title="文本"
          value="内容多行内容多行内容多行内容多行内容多行内容多行内容多行内容多行内容多行内容多行"
        />
      </m-cell-group>

      <!-- 选项模态框 -->
      <m-modal
        :visible.sync="visible"
        :show-cancel-button="false"
        :show-confirm-button="false"
      >
        <m-cell-group border>
          <m-cell title="卡片式">
            <m-switch v-model="cardSwitch" />
          </m-cell>
          <m-cell title="下边框">
            <m-switch v-model="borderSwitch" />
          </m-cell>
        </m-cell-group>
      </m-modal>
    </div>
  </page>
</template>

<script>
export default {
  name: "demo-cell",
  data() {
    return {
      switchValue: false,
      checked: false,
      cardSwitch: false,
      borderSwitch: true,
      visible: false,
    };
  },
  methods: {
    onClick(e) {
      console.log(e);
    },
  },
};
</script>

<style lang="scss">
.demo-page__cell {
  .demo-page__main {
    background-color: #f5f5f5 !important;
  }
  .demo-cell__wrap {
    .tag-group .m-tag {
      margin-left: 12px;
    }
  }
}
</style>