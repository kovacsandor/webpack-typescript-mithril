import * as m from 'mithril'

import { Component } from 'mithril'
import { ifExists } from '../Constants'

export interface Attrs {
	alt?: string
	path: string
}
interface State { }

type Vnode = m.Vnode<Attrs, State>
type VnodeDOM = m.VnodeDOM<Attrs, State>

export let ImageComponent: Component<Attrs, State> = {

	// oninit(vnode) { },

	view(vnode) {
		return (
			m(`img`, {
				alt: ifExists(vnode.attrs.alt),
				src: vnode.attrs.path
			})
		)
	},

	// oncreate(vnode) { },
	// onbeforeupdate(vnode, old) { },
	// onupdate(vnode) { },
	// onbeforeremove(vnode) { },
	// onremove(vnode) { }
}