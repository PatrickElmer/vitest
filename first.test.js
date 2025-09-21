import { describe, it, expect } from 'vitest'
import { returnOne } from './index.js'

describe('First', () => {
    it('should pass', () => {
        expect(returnOne()).toBe(1)
    })
})
