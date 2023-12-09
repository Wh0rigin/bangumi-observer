import {music163} from '@/utils/request'

export function detail(query) {
  return music163({
    url: '/playlist/detail',
    method: 'get',
    params: query
  })
}