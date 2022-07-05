import { defineStore } from 'pinia'
import request from '@/utils/request'
import { CategoryItem, ApiRes } from '@/types'
import { topCategory } from '@/store/constants'

// 对顶部导航列表进行优化，使其有初始值，首屏不会显示空白
const defaultTopCategory = topCategory.map(item => ({name: item}))

export default defineStore('category', {
  state: () => ({
    // 导航栏一级导航以及二级导航数据
    list: defaultTopCategory as CategoryItem[]
  }),
  actions: {
    // 获取导航栏数据
    async getAllCategory() {
      const res = await request.get<ApiRes<CategoryItem>>('/home/category/head')
      // console.log(res)
      this.list = res.data.result
    }
  }
})
