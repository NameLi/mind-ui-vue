<template>
  <page class="demo-page__grid" title="宫格 Grid">
    <demo-card title="标题">
      <div slot="header-suffix">
        <m-icon name="category" @click="handleSwitchModel" />
      </div>

      <m-grid :column-count="columnCount" :border="borderSwitch">
        <m-grid-item
          v-for="(item, index) in menus"
          :key="index"
          :icon="item.icon"
          :icon-color="item.iconColor"
          :text="item.text"
          :url="item.url"
          :badge-dot="item.dot"
          :badge-value="item.badgeValue"
        />
      </m-grid>
    </demo-card>

    <!-- 选项模态框 -->
    <m-modal
      :visible.sync="visible"
      :show-cancel-button="false"
      :show-confirm-button="false"
    >
      <m-cell-group>
        <m-radio-group v-model="columnCount">
          <m-cell title="3列">
            <m-radio :name="3" />
          </m-cell>
          <m-cell title="4列">
            <m-radio :name="4" />
          </m-cell>
          <m-cell title="5列">
            <m-radio :name="5" />
          </m-cell>
        </m-radio-group>

        <m-cell title="边框">
          <m-switch v-model="borderSwitch" />
        </m-cell>
      </m-cell-group>
    </m-modal>
  </page>
</template>

<script>
export default {
  name: "demo-grid",
  data() {
    return {
      menus: [
        {
          icon: "boy",
          text: "文字",
          iconColor: "#0181ff",
        },
        {
          icon: "love",
          text: "文字",
          dot: true,
          iconColor: "#EE5C42",
        },
        {
          icon: "news",
          text: "文字",
          badgeValue: 'new',
          iconColor: "#e54d42",
        },
        {
          icon: "girl",
          text: "文字",
          badgeValue: 100,
          iconColor: "#e54d42",
        },
        {
          icon: "star-fill",
          text: "跳转链接",
          url: "/pages/home/index",
          iconColor: "#f27a1d",
        },
        {
          icon: "star",
          text: "跳转链接",
          url: "/pages/home/index",
          iconColor: "#fcbe01",
        },
      ],
      columnCount: 3,
      borderSwitch: true,
      visible: false,
    };
  },
  methods: {
    handleSwitchModel() {
      this.visible = true;
    },

    onClick(name) {
      this.columnCount = name;
    },
  },
};
</script>
