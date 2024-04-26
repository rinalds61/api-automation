import { getbooks } from '../../steps/books/get_books.js'
import { generateTestData } from '../../utils/helpers.js'

before(async () => {
    await generateTestData()
})

describe('Get Book', () => {
    describe(`Get Book`, () => {
        getbooks()
    })
})
