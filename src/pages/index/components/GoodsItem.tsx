import React from 'react'
import { View,Image } from '@tarojs/components'
import styles from './GoodsItem.module.less'
import { AtAvatar } from 'taro-ui'

export interface GoodsItemProps  {
  className?: string
  children?:React.ReactNode
  style?:string|React.CSSProperties|undefined
}

function GoodsItem(props:GoodsItemProps){
  const {

  } = props
  return <View className={styles.GoodsItem}>
    <View className={styles.content}>
      <View className={styles.coverContainer}>
        <Image className={styles.cover} src={require("@/images/goodsitem.png")} />
      </View>
      <View className={styles.title}>商品标题</View>
      <View className={styles.desc}>
        <View className={styles.price}>1111.0</View>
        <View className={styles.sells}>已拼110件</View>
        <AtAvatar
          circle
          size='small' className={styles.avatar}
        />
      </View>
    </View>
  </View>
}
export { GoodsItem }
