import * as m from 'mithril'

import { AsideComponent } from './AsideComponent'
import { Component } from 'mithril'
import { FooterComponent } from './FooterComponent'
import { HeaderComponent } from './HeaderComponent'
import { ImageComponent } from './ImageComponent'
import { MainComponent } from './MainComponent'

export interface Attrs { }
interface State { }

type Vnode = m.Vnode<Attrs, State>
type VnodeDOM = m.VnodeDOM<Attrs, State>

export const WrapperComponent: Component<Attrs, State> = {

    // oninit(vnode) { },

    view(vnode) {
        return [
            m(HeaderComponent),
            m(MainComponent),
            m(AsideComponent),
            m(FooterComponent),
            m(ImageComponent, {
                path: `assets/images/test-image.svg`
            })
        ]
    },

    // oncreate(vnode) { },
    // onbeforeupdate(vnode, old) { },
    // onupdate(vnode) { },
    // onbeforeremove(vnode) { },
    // onremove(vnode) { }
}  