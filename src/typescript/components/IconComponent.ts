import * as m from 'mithril'

import { Component } from 'mithril'
import { P } from '../Constants'

export declare namespace IconComponent {
	interface Attrs {
		icon: string
		link?: boolean
	}
	interface State { }
}

type Vnode = m.Vnode<IconComponent.Attrs, IconComponent.State>
type VnodeDOM = m.VnodeDOM<IconComponent.Attrs, IconComponent.State>

export const IconComponent: Component<IconComponent.Attrs, IconComponent.State> = {

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