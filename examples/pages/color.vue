<template>
  <page title="Color 主题色">
    <div class="wrap">
      <demo-card title="主题色">
        <div class="grid">
          <div class="color-item primary">
            <div class="label">主题色</div>
            <div class="value">#409EFF</div>
          </div>
          <div class="color-item"></div>
          <div class="color-item"></div>
        </div>
      </demo-card>

      <demo-card title="辅助色">
        <div class="grid">
          <div class="color-item success">
            <div class="label">Success</div>
            <div class="value">#67C23A</div>
          </div>
          <div class="color-item warning">
            <div class="label">Warning</div>
            <div class="value">#67C23A</div>
          </div>
          <div class="color-item danger">
            <div class="label">Danger</div>
            <div class="value">#67C23A</div>
          </div>
        </div>
      </demo-card>

      <demo-card title="文字色">
        <div class="grid">
          <div class="color-item text-primary">
            <div class="label">主要文字</div>
            <div class="value">#303133</div>
          </div>
          <div class="color-item text-regular">
            <div class="label">常规文字</div>
            <div class="value">#606266</div>
          </div>
          <div class="color-item text-secondary">
            <div class="label">次要文字</div>
            <div class="value">#909399</div>
          </div>
        </div>
      </demo-card>

      <demo-card title="边框色">
        <div class="grid">
          <div class="color-item border">
            <div class="label">边框色</div>
            <div class="value">#DCDEE2</div>
          </div>
          <div class="color-item"></div>
          <div class="color-item"></div>
        </div>
      </demo-card>

      <demo-card title="遮罩色">
        <div class="grid">
          <div class="color-item mask">
            <div class="label">遮罩色</div>
            <div class="value">rgba(0, 0, 0, 0.55)</div>
          </div>
          <div class="color-item"></div>
        </div>
      </demo-card>
    </div>
  </page>
</template>

<script>
export default {
  name: "home",
};
</script>

<style lang="scss" scoped>
.wrap {
  .custom-card {
    margin: 0 -12px;
  }

  .color-item {
    flex: 1;
    margin: 12px;
    padding: 24px 0;
    color: #fff;
    text-align: center;
    border-radius: 6px;
  }

  .color-item .label {
    font-size: 32px;
  }

  .color-item .value {
    font-size: 28px;
    margin-top: 20px;
  }

  .grid {
    display: flex;
  }

  .color-item.primary {
    background-color: $color-primary;
  }

  .color-item.success {
    background-color: $color-success;
  }

  .color-item.warning {
    background-color: $color-warning;
  }

  .color-item.danger {
    background-color: $color-danger;
  }

  .color-item.text-primary {
    background-color: $color-text-primary;
  }

  .color-item.text-regular {
    background-color: $color-text-regular;
  }

  .color-item.text-secondary {
    background-color: $color-text-secondary;
  }

  .color-item.border {
    background-color: $color-border;
  }

  .color-item.mask {
    background-color: $color-mask;
  }
}
</style>