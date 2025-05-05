<!--
文件名: App.vue
描述: 拼饭微信小程序根组件
-->
<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app';

onLaunch(() => {
  console.log('App Launch');
});

onShow(() => {
  console.log('App Show');
});

onHide(() => {
  console.log('App Hide');
});
</script>

<style>
/* 全局样式 */
page {
  background-color: #F8F9FA;
  color: #333333;
  font-size: 28rpx;
  line-height: 1.5;
  font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica,
    Segoe UI, Arial, Roboto, 'PingFang SC', 'miui', 'Hiragino Sans GB', 'Microsoft Yahei',
    sans-serif;
}

/* 公共组件样式 */
.container {
  padding: 30rpx;
}

.btn {
  display: inline-block;
  padding: 16rpx 32rpx;
  border-radius: 8rpx;
  font-size: 28rpx;
  text-align: center;
  transition: opacity 0.2s;
}

.btn:active {
  opacity: 0.8;
}

.btn-primary {
  background-color: #FF6B35;
  color: white;
  border: none;
}

.btn-secondary {
  background-color: white;
  color: #FF6B35;
  border: 1px solid #FF6B35;
}

.card {
  background-color: white;
  border-radius: 24rpx;
  padding: 24rpx;
  margin-bottom: 30rpx;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.input {
  width: 100%;
  padding: 20rpx;
  border: 1px solid #DDDDDD;
  border-radius: 16rpx;
  font-size: 28rpx;
  margin-bottom: 30rpx;
}

.input:focus {
  border-color: #FF6B35;
  outline: none;
}
</style>