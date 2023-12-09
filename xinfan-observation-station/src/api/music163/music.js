import {music163} from '@/utils/request'

export function songUrl(query) {
  return music163({
    url: '/song/url',
    method: 'get',
    params: query
  })
}