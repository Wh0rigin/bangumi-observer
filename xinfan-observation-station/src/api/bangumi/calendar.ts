import {bangumi} from '@/utils/request'

export function calendar() {
  return bangumi({
    url: '/calendar',
    method: 'get',
  })
}