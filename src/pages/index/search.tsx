import React from 'react'
import cx from 'classnames'
import { View } from '@tarojs/components'
import styles from './search.module.less'
import { useRouter } from '@tarojs/taro'


function SearchPage(){
  const {params} = useRouter();
  console.log(params)
  return <View className={cx(styles.SearchPage,'page')}>
    检索内容：{params?.keyword}
  </View>
}

export default SearchPage
