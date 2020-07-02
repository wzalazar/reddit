import { getImage } from './getImage'

describe('getImage', () => {
  describe('when image has the text self', () => {
    it('should return default image', () => {
      const actual = getImage('self')

      expect(actual).toBe('https://picsum.photos/100/100')
    })
  })

  describe('when image has the text default', () => {
    it('should return default image', () => {
      const actual = getImage('self')

      expect(actual).toBe('https://picsum.photos/100/100')
    })
  })
})
