import { routeConfig } from './route-config'

describe('route-config', () => {
    test('basic route', () => {
        const result = routeConfig('/main')
        expect(result[0].title).toBe('Main')
    })

    test('unknown route', () => {
        const result = routeConfig('/unknown')
        expect(result[0].title).toBe('Unknown')
    })
})
