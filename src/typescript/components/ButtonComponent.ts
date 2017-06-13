import * as m from 'mithril'

import { Icon, P } from '../Constants'

import { Component } from 'mithril'
import { IconComponent } from './IconComponent'

export interface Attrs {
	icon?: string
	isDropdown?: boolean
	isLabelVisible: boolean
	label: string
}
interface State { }

type Vnode = m.Vnode<Attrs, State>
type VnodeDOM = m.VnodeDOM<Attrs, State>

export let ButtonComponent: Component<Attrs, State> = {

	// oninit(vnode) { },

	view(vnode) {
		return (
			m(`button`, {
				'class': `${P}-button`
			},
				(vnode.attrs.icon ?
					[
						m(IconComponent, {
							icon: Icon.menu
						}),
						` `
					]
					:
					``
				),
				(vnode.attrs.isLabelVisible ?
					vnode.attrs.label
					:
					m(`span`, {
						'class': `${P}-screen-readers`
					},
						vnode.attrs.label + `${vnode.attrs.isDropdown ? ` options` : ``}`
					)
				),
				(vnode.attrs.isDropdown ?
					m(IconComponent, {
						icon: Icon.dropdown
					})
					:
					``
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