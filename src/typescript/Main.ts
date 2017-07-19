import * as m from 'mithril'

import { WrapperComponent } from './components/WrapperComponent'

setTimeout(() => m.mount(document.body, { view: () => m(WrapperComponent) }), 1000)