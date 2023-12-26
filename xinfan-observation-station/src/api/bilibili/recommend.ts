import {bilibili} from '@/utils/request'
import { BiliRecommendParam } from '@/interfaces/BiliRecommendParam'

export function recommend(query:BiliRecommendParam) {
  return bilibili({
    url: '/x/web-interface/archive/related',
    method: 'get',
    params: query
  })
}