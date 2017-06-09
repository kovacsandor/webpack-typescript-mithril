import * as m from 'mithril'

import { Component } from 'mithril'

export interface Attrs { }
interface State { }

type Vnode = m.Vnode<Attrs, State>
type VnodeDOM = m.VnodeDOM<Attrs, State>

export let TestComponent: Component<Attrs, State> = {

	// oninit(vnode) { },

	view(vnode) {
		return (
			m(`div`,
				`TestComponent`
			)
		)
	},

	// oncreate(vnode) { },
	// onbeforeupdate(vnode, old) { },
	// onupdate(vnode) { },
	// onbeforeremove(vnode) { },
	// onremove(vnode) { }
}