import * as m from 'mithril'

import { Component } from 'mithril'
import { tryWithFallback } from '../Constants'

export interface Attrs {
	alt?: string
	name: string
}
interface State { }

type Vnode = m.Vnode<Attrs, State>
type VnodeDOM = m.VnodeDOM<Attrs, State>

export let ImageComponent: Component<Attrs, State> = {

	// oninit(vnode) { },

	view(vnode) {
		return (
			m(`img`, {
                alt: tryWithFallback(vnode.attrs.alt),
                src: require(`file-loader?emitFile=false&name=assets/images/[name].[ext]!../../assets/images/${vnode.attrs.name}`)
            })
		)
	},

	// oncreate(vnode) { },
	// onbeforeupdate(vnode, old) { },
	// onupdate(vnode) { },
	// onbeforeremove(vnode) { },
	// onremove(vnode) { }
}