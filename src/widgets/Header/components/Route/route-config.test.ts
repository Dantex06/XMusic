import { routeConfig } from './route-config'

describe('route-config', () => {
    test('test', () => {
        const result = routeConfig('/main')
        expect(result[0].title).toBe('Main')
    })
})
