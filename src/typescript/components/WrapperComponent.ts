import * as m from 'mithril'

import { AsideComponent } from './AsideComponent'
import { Component } from 'mithril'
import { FooterComponent } from './FooterComponent'
import { HeaderComponent } from './HeaderComponent'
import { MainComponent } from './MainComponent'

export declare namespace WrapperComponent {
    interface Attrs { }
    interface State { }
}

type Vnode = m.Vnode<WrapperComponent.Attrs, WrapperComponent.State>
type VnodeDOM = m.VnodeDOM<WrapperComponent.Attrs, WrapperComponent.State>

export const WrapperComponent: Component<WrapperComponent.Attrs, WrapperComponent.State> = {

    // oninit(vnode) { },

    view(vnode) {

        return [
            m(HeaderComponent),
            m(MainComponent),
            m(AsideComponent),
            m(FooterComponent),
        ]
    },

    // oncreate(vnode) { },
    // onbeforeupdate(vnode, old) { },
    // onupdate(vnode) { },
    // onbeforeremove(vnode) { },
    // onremove(vnode) { }
}