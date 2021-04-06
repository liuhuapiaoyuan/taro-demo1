import React from 'react'
import { View } from '@tarojs/components'
import classnames from 'classnames'
import styles from './GoodsList.module.less'
import { GoodsItem } from './GoodsItem'

export interface GoodsListProps  {
  className?: string
  children?:React.ReactNode
  style?:string|React.CSSProperties|undefined
}

function GoodsList(props:GoodsListProps){
  const {

  } = props
  return <View className={styles.GoodsList}>
    <GoodsItem />
    <GoodsItem />
    <GoodsItem />
    <GoodsItem />
    <GoodsItem />
  </View>
}
export { GoodsList }
