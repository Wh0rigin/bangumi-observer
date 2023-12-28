import {music163Net} from '@/utils/request'

export function songUrl(query) {
  return music163Net({
    url: '/song/url',
    method: 'get',
    params: query
  })
}