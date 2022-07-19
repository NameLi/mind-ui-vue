<template>
  <page class="demo-collapse" title="折叠面板 Collapse">
    <div class="button-group">
      <m-button @click="handleSwitch1">默认展开</m-button>
    </div>

    <m-collapse :visible="switch1">
      <div class="demo-card">
        <div>
          <p>《赠药山高僧惟俨》</p>
          <p>练得身形似鹤形，千株松下两函经。</p>
          <p>我来问道无馀说，云在青霄水在瓶。</p>
          <p>选得幽居惬野情，终年无送亦无迎。</p>
          <p>有时直上孤峰顶，月下披云啸一声。</p>
        </div>
      </div>
    </m-collapse>

    <div class="button-group">
      <m-button @click="handleSwitch2">默认折叠</m-button>
    </div>
    <m-collapse :visible="switch2">
      <div class="demo-card">
        <div>
          <p>《沁园春·雪》</p>
          <p>北国风光，千里冰封，万里雪飘。</p>
          <p>望长城内外，惟余莽莽；大河上下，顿失滔滔。</p>
          <p>山舞银蛇，原驰蜡象，欲与天公试比高。</p>
          <p>须晴日，看红装素裹，分外妖娆。</p>
          <p>江山如此多娇，引无数英雄竞折腰。</p>
          <p>惜秦皇汉武，略输文采；唐宗宋祖，稍逊风骚。</p>
          <p>一代天骄，成吉思汗，只识弯弓射大雕。</p>
          <p>俱往矣，数风流人物，还看今朝。</p>
        </div>
      </div>
    </m-collapse>

    <div class="button-group">
      <m-button @click="handleSwitch3">默认折叠(动画时长100ms)</m-button>
    </div>
    <m-collapse :visible="switch3" duration="150">
      <div class="demo-card">
        <div>
          <p>《沁园春·雪》</p>
          <p>北国风光，千里冰封，万里雪飘。</p>
          <p>望长城内外，惟余莽莽；大河上下，顿失滔滔。</p>
          <p>山舞银蛇，原驰蜡象，欲与天公试比高。</p>
          <p>须晴日，看红装素裹，分外妖娆。</p>
          <p>江山如此多娇，引无数英雄竞折腰。</p>
          <p>惜秦皇汉武，略输文采；唐宗宋祖，稍逊风骚。</p>
          <p>一代天骄，成吉思汗，只识弯弓射大雕。</p>
          <p>俱往矣，数风流人物，还看今朝。</p>
        </div>
      </div>
    </m-collapse>
  </page>
</template>

<script>
export default {
  name: "demo-collapse",
  data() {
    return {
      switch1: false,
      switch2: false,
      switch3: false,
    };
  },
  mounted() {
    this.switch1 = true;
  },
  methods: {
    handleSwitch1() {
      this.switch1 = !this.switch1;
    },

    handleSwitch2() {
      this.switch2 = !this.switch2;
    },

    handleSwitch3() {
      this.switch3 = !this.switch3;
    },
  },
};
</script>

<style lang="scss">
.demo-collapse {
  .button-group {
    margin-top: 15px;
    .m-button {
      margin-bottom: 0 !important;
    }
  }
  .demo-card {
    margin: 0 32px;
    padding: 20px;
    background: #f5f5f5;
    text-align: center;
    color: #777;
    line-height: 46px;
    font-size: 28px;
  }
}
</style>
