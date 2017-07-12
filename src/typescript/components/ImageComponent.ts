import * as m from 'mithril'

import { Component } from 'mithril'
import { ifExists } from '../Helpers'

export declare namespace ImageComponent {
	interface Attrs {
		alt?: string
		path: string
	}
	interface State { }
}

type Vnode = m.Vnode<ImageComponent.Attrs, ImageComponent.State>
type VnodeDOM = m.VnodeDOM<ImageComponent.Attrs, ImageComponent.State>

export const ImageComponent: Component<ImageComponent.Attrs, ImageComponent.State> = {

	// oninit(vnode) { },

	view(vnode) {
		return (
			m(`img`, {
				'alt': ifExists(vnode.attrs.alt),
				'src': vnode.attrs.path
			})
		)
	},

	// oncreate(vnode) { },
	// onbeforeupdate(vnode, old) { },
	// onupdate(vnode) { },
	// onbeforeremove(vnode) { },
	// onremove(vnode) { }
}