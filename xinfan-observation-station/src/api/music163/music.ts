import {music163Net} from '@/utils/request'
import { Music163GetUrlParam } from '@/interfaces/Music163GetUrlParam'

export function songUrl(query:Music163GetUrlParam) {
  return music163Net({
    url: '/song/url',
    method: 'get',
    params: query
  })
}