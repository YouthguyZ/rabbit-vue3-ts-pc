import useCategoryStore from '@/store/modules/category'

export default function useStore() {
  return {
    category: useCategoryStore()
  }
}
