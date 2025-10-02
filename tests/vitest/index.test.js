import { describe, it, expect } from 'vitest'
import { add } from '../../index.js'

describe('First', () => {
    it('should add 1 and 2', () => {
        expect(add(1, 2)).toBe(3)
    })
})
