import test from 'ava'

import { fetchSearchResult } from './lib/serviecs.js'

test('fetchSearchResult', async t => {
  const imgUrl = await fetchSearchResult('可莉表情包')
  t.log(imgUrl)
  t.true(imgUrl !== '')
})
