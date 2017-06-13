import * as m from 'mithril'

import { Icon, P } from '../Constants'

import { AsideComponent } from './AsideComponent'
import { ButtonComponent } from './ButtonComponent'
import { Component } from 'mithril'
import { FooterComponent } from './FooterComponent'
import { HeaderComponent } from './HeaderComponent'
import { IconComponent } from './IconComponent'
import { ImageComponent } from './ImageComponent'
import { MainComponent } from './MainComponent'

interface Attrs { }
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
            m(ButtonComponent, {
                icon: Icon.menu,
                isLabelVisible: true,
                label: `Button`
            }),
            m(ImageComponent, {
                path: require(`../../assets/images/test-image.svg`)
            })
        ]
    },

    // oncreate(vnode) { },
    // onbeforeupdate(vnode, old) { },
    // onupdate(vnode) { },
    // onbeforeremove(vnode) { },
    // onremove(vnode) { }
}  