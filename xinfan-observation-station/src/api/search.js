import {bangumi} from '@/utils/request'

export function search(keywords,query) {
  return bangumi({
    url: '/search/subject/'+keywords,
    method: 'post',
    params: query
  })
}