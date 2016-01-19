const assert = require('assert')
const InMemoryData = require('../')

const TEST_KEY = 'test-key'
const FAKE_KEY = 'fake-key'

describe('InMemoryData', function(){
  var record = {
    id: TEST_KEY,
    name: 'cats.png',
    size: 4444,
    mimeType: 'image/png'
  }

  var plugin = new InMemoryData
  it('should put() successfully', () => {
    return plugin.put(record)
  })

  it('should get() successfully', () => {
    return plugin.get(TEST_KEY).then(fetched => {
      assert.deepEqual(record, fetched)
    })
  })

  it('should return null for a missing key', () => {
    return plugin.get(FAKE_KEY).then(data => {
      assert.equal(data, null)
    })
  })
})
