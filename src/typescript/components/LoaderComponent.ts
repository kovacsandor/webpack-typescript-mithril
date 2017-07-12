import * as m from 'mithril'

import { Component } from 'mithril'
import { P } from '../Constants'
import { renderMultiple } from '../Helpers'

export declare namespace LoaderComponent {
	interface Attrs {
		isBig?: boolean
	}
	interface State { }
}

type Vnode = m.Vnode<LoaderComponent.Attrs, LoaderComponent.State>
type VnodeDOM = m.VnodeDOM<LoaderComponent.Attrs, LoaderComponent.State>

export const LoaderComponent: Component<LoaderComponent.Attrs, LoaderComponent.State> = {

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