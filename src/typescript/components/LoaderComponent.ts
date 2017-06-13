import * as m from 'mithril'

import { Component } from 'mithril'
import { P } from '../Constants'

export interface Attrs {
	isSmall?: boolean
}
interface State { }

type Vnode = m.Vnode<Attrs, State>
type VnodeDOM = m.VnodeDOM<Attrs, State>

export const LoaderComponent: Component<Attrs, State> = {

	// oninit(vnode) { },

	view(vnode) {
		return (
			m(`div`, {
				'class': `${P}-loader`
			},
				m(`div`, {
					'class': `${P}-loader-dot ${vnode.attrs.isSmall ? `${P}--small` : ``}`
				}),
				m(`div`, {
					'class': `${P}-loader-dot ${vnode.attrs.isSmall ? `${P}--small` : ``}`
				}),
				m(`div`, {
					'class': `${P}-loader-dot ${vnode.attrs.isSmall ? `${P}--small` : ``}`
				})
			)
		)
	},

	// oncreate(vnode) { },
	// onbeforeupdate(vnode, old) { },
	// onupdate(vnode) { },
	// onbeforeremove(vnode) { },
	// onremove(vnode) { }
}