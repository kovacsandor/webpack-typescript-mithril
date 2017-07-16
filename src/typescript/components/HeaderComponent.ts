import * as m from 'mithril'

import { Component } from 'mithril'

export declare namespace HeaderComponent {
    interface Attrs { }
    interface State { }
}

type Vnode = m.Vnode<HeaderComponent.Attrs, HeaderComponent.State>
type VnodeDOM = m.VnodeDOM<HeaderComponent.Attrs, HeaderComponent.State>

export const HeaderComponent: Component<HeaderComponent.Attrs, HeaderComponent.State> = {

    // oninit(vnode) { },

    view(vnode) {
        return (
            m(`header`,
                `HeaderComponent`
            )
        )
    },

    // oncreate(vnode) { },
    // onbeforeupdate(vnode, old) { },
    // onupdate(vnode) { },
    // onbeforeremove(vnode) { },
    // onremove(vnode) { }
}