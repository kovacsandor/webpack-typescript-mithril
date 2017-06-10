import * as m from 'mithril'
import { Component } from 'mithril'

export interface Attrs { }
interface State { }

type Vnode = m.Vnode<Attrs, State>
type VnodeDOM = m.VnodeDOM<Attrs, State>

export let FooterComponent: Component<Attrs, State> = {

    // oninit(vnode) { },

    view(vnode) {
        return (
            m(`footer`,
                `FooterComponent`
            )
        )
    },

    // oncreate(vnode) { },
    // onbeforeupdate(vnode, old) { },
    // onupdate(vnode) { },
    // onbeforeremove(vnode) { },
    // onremove(vnode) { }
}