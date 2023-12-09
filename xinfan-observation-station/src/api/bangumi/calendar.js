import {bangumi} from '@/utils/request'

export function calendar(query) {
  return bangumi({
    url: '/calendar',
    method: 'get',
    params: query
  })
}