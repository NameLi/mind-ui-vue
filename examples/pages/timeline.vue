<template>
  <page class="demo-page__timeline" title="时间轴 Timeline">
    <div class="demo-timeline">
      <m-timeline>
        <m-timeline-item text="start">
          <div class="content">时光荏苒</div>
        </m-timeline-item>

        <m-timeline-item icon="boy" color="#0181ff">
          <div class="content" style="background: #0181ff; color: #fff">
            <span>
              力拔山兮气盖世。<br />
              时不利兮骓不逝。<br />
              骓不逝兮可奈何！<br />
              虞兮虞兮奈若何！<br />
            </span>
          </div>
        </m-timeline-item>

        <m-timeline-item icon="love" color="#EE5C42">
          <div class="content" style="background: #ee5c42; color: #fff">
            今天不学习，明天变垃圾。
          </div>
        </m-timeline-item>

        <m-timeline-item icon="girl" color="#e54d42">
          <div class="content" style="background: #e54d42; color: #fff">
            桃之夭夭，灼灼其华。
          </div>
        </m-timeline-item>

        <m-timeline-item text="12:00">
          <div class="content">百川东到海，何时复西归。</div>
          <div class="content" style="margin-top: 20px">
            少壮不努力，老大徒伤悲。
          </div>
        </m-timeline-item>

        <m-timeline-item text="end">
          <div class="content">岁月如梭</div>
        </m-timeline-item>
      </m-timeline>
    </div>
  </page>
</template>

<script>
export default {
  name: "demo-timeline",
};
</script>

<style lang="scss">
.demo-page__timeline {
  .demo-timeline {
    padding-top: 30px;
    .content {
      padding: 32px;
      background-color: #f1f1f1;
      border-radius: 6px;
    }
  }
}
</style>
