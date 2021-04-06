import React from 'react'
import cx from 'classnames'
import { View } from '@tarojs/components'
import styles from './mime.module.less'


function MimePage(){
  return <View className={cx(styles.MimePage,'page')}>
    个人中心
  </View>
}

export default MimePage
