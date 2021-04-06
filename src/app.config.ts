import { Config } from '@tarojs/taro';

const config: Config = {
  pages: ["pages/mime/mime", "pages/index/search", 'pages/index/index'],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#eef0f3',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
};
export default config;