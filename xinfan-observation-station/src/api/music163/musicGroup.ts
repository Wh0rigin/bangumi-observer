import {music163} from '@/utils/request'
import { Music163DetailParam } from '@/interfaces/Music163DetailParam'

export function detail(query:Music163DetailParam) {
  return music163({
    url: '/playlist/detail',
    method: 'get',
    params: query
  })
}