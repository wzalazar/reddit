import { LocalStorage } from './LocalStorage'

describe('LocalStorage', () => {
  describe('when state is null', () => {
    it('should return undefined', () => {
      const local = LocalStorage()
      const actual = local.loadState()

      expect(actual).toBeUndefined()
    })
  })

  describe('when state is not null', () => {
    it('should return the data', () => {
      Object.defineProperty(global, 'localStorage', {
        value: {
          getItem: () => '{"data": 1}',
          setItem: jest.fn(() => null),
        },
        writable: true,
      })

      const local = LocalStorage()
      const actual = local.loadState()

      expect(actual).toStrictEqual({ data: 1 })
    })
  })
})
