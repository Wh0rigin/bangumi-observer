import {bangumi} from '@/utils/request'

export function recommend(query:any) {
  return bangumi({
    url: '/recommend',
    method: 'get',
    params: query
  })
}