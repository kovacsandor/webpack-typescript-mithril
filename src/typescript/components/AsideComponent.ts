import * as m from 'mithril'

import { Component } from 'mithril'

export declare namespace AsideComponent {
    interface Attrs { }
    interface State { }
}

type Vnode = m.Vnode<AsideComponent.Attrs, AsideComponent.State>
type VnodeDOM = m.VnodeDOM<AsideComponent.Attrs, AsideComponent.State>

export const AsideComponent: Component<AsideComponent.Attrs, AsideComponent.State> = {

    // oninit(vnode) { },

    view(vnode) {
        return (
            m(`aside`,
                `AsideComponent`
            )
        )
    },

    // oncreate(vnode) { },
    // onbeforeupdate(vnode, old) { },
    // onupdate(vnode) { },
    // onbeforeremove(vnode) { },
    // onremove(vnode) { }
}