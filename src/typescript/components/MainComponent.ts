import * as m from 'mithril'

import { Component } from 'mithril'
import { LoaderComponent } from './LoaderComponent'

import { ICON, P } from '../Constants'
import { ButtonComponent } from './ButtonComponent'

import { ImageComponent } from './ImageComponent'
import { IconComponent } from './IconComponent'

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
                m(LoaderComponent),
                m(ButtonComponent, {
                    icon: ICON.menu,
                    isLabelVisible: true,
                    label: `Button`
                }),
                m(ImageComponent, {
                    path: require(`../../assets/images/test-image.svg`)
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