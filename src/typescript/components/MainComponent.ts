import * as m from 'mithril'

import { Component } from 'mithril'
import { LoaderComponent } from './LoaderComponent'

export interface Attrs { }
interface State { }

type Vnode = m.Vnode<Attrs, State>
type VnodeDOM = m.VnodeDOM<Attrs, State>

export const MainComponent: Component<Attrs, State> = {

    // oninit(vnode) { },

    view(vnode) {
        return (
            m(`main`,
                `MainComponent`,
                m(LoaderComponent, {
                    isSmall: true
                })
            )
        )
    },

    // oncreate(vnode) { },
    // onbeforeupdate(vnode, old) { },
    // onupdate(vnode) { },
    // onbeforeremove(vnode) { },
    // onremove(vnode) { }
}