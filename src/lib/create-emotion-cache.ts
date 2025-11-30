import createCache from '@emotion/cache'

export const createAppCache = () => createCache({ key: 'css', prepend: true })
