import { setupServer } from 'msw/node'
import { handlers } from './handlers'

export const server = setupServer(...handlers)
//서버 인스턴스가 생성