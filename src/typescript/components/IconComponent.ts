import * as m from 'mithril'

import { Component } from 'mithril'
import { P } from '../Constants'

export interface Attrs {
	icon: string
	link?: boolean
}
interface State { }

type Vnode = m.Vnode<Attrs, State>
type VnodeDOM = m.VnodeDOM<Attrs, State>

export let IconComponent: Component<Attrs, State> = {

	// oninit(vnode) { },

	view(vnode) {
		return (
			m(`i`, {
				'class': `${P}-icon ${vnode.attrs.link ? `${P}--link` : ``}`
			},
				m.trust(vnode.attrs.icon)
			)
		)
	},

	// oncreate(vnode) { },
	// onbeforeupdate(vnode, old) { },
	// onupdate(vnode) { },
	// onbeforeremove(vnode) { },
	// onremove(vnode) { }
}