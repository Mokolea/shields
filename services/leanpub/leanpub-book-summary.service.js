import { deprecatedService } from '../index.js'

export default deprecatedService({
  route: {
    base: 'leanpub/book',
    pattern: ':various+',
  },
  category: 'funding',
  label: 'leanpub',
  dateAdded: new Date('2019-12-30'),
})
