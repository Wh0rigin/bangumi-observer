import request from '@/utils/request'

export function calendar(query) {
  return request({
    url: '/calendar',
    method: 'get',
    params: query
  })
}