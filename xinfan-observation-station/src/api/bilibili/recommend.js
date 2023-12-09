import {bilibili} from '@/utils/request'

export function recommend(query) {
  return bilibili({
    url: '/x/web-interface/archive/related',
    method: 'get',
    params: query
  })
}