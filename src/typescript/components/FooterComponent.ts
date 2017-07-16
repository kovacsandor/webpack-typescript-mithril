import * as m from 'mithril'

import { Component } from 'mithril'

export declare namespace FooterComponent {
    interface Attrs { }
    interface State { }
}

type Vnode = m.Vnode<FooterComponent.Attrs, FooterComponent.State>
type VnodeDOM = m.VnodeDOM<FooterComponent.Attrs, FooterComponent.State>

export const FooterComponent: Component<FooterComponent.Attrs, FooterComponent.State> = {

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