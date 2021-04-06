import cx from 'classnames'
import React, { useState } from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtSearchBar } from 'taro-ui'
import styles from './index.module.less'
import { GoodsList } from './components/GoodsList'

function IndexPage(){
  const [keyword,setkeyword] = useState("")


  return <View className={cx(styles.IndexPage,'page')}>
    <AtSearchBar
      value={keyword}
      onChange={setkeyword}
      onActionClick={()=>{
        //进行检索
        Taro.navigateTo({
          url:"/pages/index/search?keyword="+keyword
        })
      }}
      placeholder='商品信息检索'
    />
    <GoodsList />
  </View>
}

export default IndexPage
