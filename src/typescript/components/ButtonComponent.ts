import * as m from 'mithril'

import { ICON, P } from '../Constants'

import { Component } from 'mithril'
import { IconComponent } from './IconComponent'

export declare namespace ButtonComponent {
	interface Attrs {
		icon?: string
		isDropdown?: boolean
		isLabelHidden?: boolean
		label: string
		onclick: Function
	}
	interface State { }
}

type Vnode = m.Vnode<ButtonComponent.Attrs, ButtonComponent.State>
type VnodeDOM = m.VnodeDOM<ButtonComponent.Attrs, ButtonComponent.State>

export const ButtonComponent: Component<ButtonComponent.Attrs, ButtonComponent.State> = {

	// oninit(vnode) { },

	view(vnode) {

		return (
			m(`button`, {
				'class': `${P}-button`,
				'onclick': vnode.attrs.onclick
			},
				(vnode.attrs.icon ?
					[
						m(IconComponent, {
							icon: vnode.attrs.icon
						}),
						` `
					]
					:
					``
				),
				(vnode.attrs.isLabelHidden ?
					m(`span`, {
						'class': `${P}-screen-readers`
					},
						vnode.attrs.label + `${vnode.attrs.isDropdown ? ` options` : ``}`
					)
					:
					vnode.attrs.label
				),
				(vnode.attrs.isDropdown ?
					m(IconComponent, {
						icon: ICON.dropdown
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