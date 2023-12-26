import {bangumi} from '@/utils/request'
import { SearchParam } from '@/interfaces/SearchParam'

export function search(keywords:string,query:SearchParam) {
  return bangumi({
    url: '/search/subject/'+keywords,
    method: 'post',
    params: query
  })
}