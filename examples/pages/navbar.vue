<template>
  <page title="选项卡 Navbar">
    <demo-card title="基础用法">
      <m-navbar-group @click="onClick" @change="onChange">
        <m-navbar title="标签1" name="tab1"></m-navbar>
        <m-navbar title="标签2" name="tab2"></m-navbar>
        <m-navbar title="标签3" name="tab3"></m-navbar>
      </m-navbar-group>
    </demo-card>

    <demo-card title="自定义">
      <m-navbar-group
        active-color="red"
        line-color="red"
        line-width="30"
        @click="onClick"
        @change="onChange"
      >
        <m-navbar title="标签1" name="tab1"></m-navbar>
        <m-navbar title="标签2" name="tab2"></m-navbar>
        <m-navbar title="标签3" name="tab3"></m-navbar>
      </m-navbar-group>
    </demo-card>

    <demo-card title="多菜单 异步">
      <m-navbar-group @click="onClick" active-name="tab4" @change="onChange">
        <m-navbar
          v-for="n in navbars"
          :title="n.title"
          :name="n.name"
          :key="n.name"
        ></m-navbar>
      </m-navbar-group>
    </demo-card>

    <demo-card title="设置默认选中项">
      <m-navbar-group active-name="tab4" @click="onClick" @change="onChange">
        <m-navbar title="标签1" name="tab1"></m-navbar>
        <m-navbar title="标签2" name="tab2"></m-navbar>
        <m-navbar title="标签3" name="tab3"></m-navbar>
        <m-navbar title="标签4" name="tab4"></m-navbar>
        <m-navbar title="标签5" name="tab5"></m-navbar>
        <m-navbar title="标签6" name="tab6"></m-navbar>
        <m-navbar title="标签7" name="tab7"></m-navbar>
      </m-navbar-group>
    </demo-card>

    <demo-card title="徽章统计">
      <m-navbar-group @click="onClick" @change="onChange">
        <m-navbar title="标签1" name="tab1"></m-navbar>
        <m-navbar title="标签2" name="tab2" value="8"></m-navbar>
        <m-navbar title="标签3" name="tab3"></m-navbar>
        <m-navbar title="标签4" name="tab4" value="100"></m-navbar>
        <m-navbar title="标签5" name="tab5"></m-navbar>
      </m-navbar-group>
    </demo-card>
  </page>
</template>

<script>
export default {
  name: "navbar",

  data() {
    return {
      navbars: []
    }
  },

  mounted() {
    setTimeout(() => {
      for(let i = 0; i < 9; i++) {
        let item = {
          title: '标签'+ i,
          name: 'tab'+i
        }

        this.navbars.push(item)
      }
    }, 1000)
  },

  methods: {
    onClick(detail) {
      console.log(detail);
    },

    onChange(detail) {
      console.log(detail);
    },
  },
};
</script>

<style scoped lang="scss">
/deep/ .custom-content-class {
  margin: 0 -32px;
}

.custom-group {
  background: #fff !important;
}
</style>
