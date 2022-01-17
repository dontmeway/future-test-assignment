import compose from 'compose-function'
import { withRedux } from './withRedux'
import { withRouter } from './withRouter'

export const withProviders = compose(withRouter, withRedux)