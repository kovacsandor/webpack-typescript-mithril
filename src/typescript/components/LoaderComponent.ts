import * as m from 'mithril'

import { Component } from 'mithril'
import { P } from '../Constants'
import { renderMultiple } from '../Helpers'

export interface Attrs {
	isBig?: boolean
}
interface State { }

type Vnode = m.Vnode<Attrs, State>
type VnodeDOM = m.VnodeDOM<Attrs, State>

export const LoaderComponent: Component<Attrs, State> = {

	// oninit(vnode) {},

	view(vnode) {
		return (
			m(`div`, {
				'class': `${P}-loader`
			},
				renderMultiple(3,
					m(`div`, {
						'class': `${P}-loader-dot ${vnode.attrs.isBig ? `` : `${P}--small`}`
					})
				)
			)
		)
	},

	// oncreate(vnode) { },
	// onbeforeupdate(vnode, old) { },
	// onupdate(vnode) { },
	// onbeforeremove(vnode) { },
	// onremove(vnode) { }
}