import request from '@/utils/request'

export function search(keywords,query) {
  return request({
    url: '/search/subject/'+keywords,
    method: 'post',
    params: query
  })
}