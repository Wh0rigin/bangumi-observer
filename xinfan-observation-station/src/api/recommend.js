import request from '@/utils/request'

export function recommend(query) {
  return request({
    url: '/recommend',
    method: 'get',
    params: query
  })
}