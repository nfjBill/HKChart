# HKChart
中创华科图表插件

# 引入
将需要的功能从dist文件夹引入即可，例如
```html
<script src="dist/ring.js"></script>
```
# API
## ring
```javaScript
new HKChart("#demo", {
  //设置图标宽度 不设置则根据父元素宽度自适应
  // width: 500, 
  //设置图标高度 原理同上
  // height: 500,
  //背景颜色
  bgColor: '#0c0e33',
  //背景圆颜色
  bgCircle: '#232c45',
  //圆环显示百分比
  percent: 96,
  //圆环宽度
  space: 30,
  //文本设置
  txt: {
    title: 'PM2.5',
    intro: '空气质量：中度污染',
    topValue: '300',
    botValue: 'AQI:A60',
  },
});
```