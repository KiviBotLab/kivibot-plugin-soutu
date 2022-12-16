import { http, randomInt, randomItem } from '@kivibot/core'

export async function fetchSearchResult(word: string) {
  const api = 'https://m.baidu.com/sf/vsearch/image/search/wisesearchresult'
  const params = { word, pn: randomInt(1, 6), rn: 60 }

  const { data } = await http.get(api, { params })

  const images = data?.linkData?.map(({ objurl, hoverURL, thumbnailUrl }: any) => {
    return objurl || hoverURL || thumbnailUrl
  })

  return images ? randomItem(images) : ''
}
