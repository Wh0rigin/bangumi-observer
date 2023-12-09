import {bangumi} from '@/utils/request'

export function recommend(query) {
  return bangumi({
    url: '/recommend',
    method: 'get',
    params: query
  })
}