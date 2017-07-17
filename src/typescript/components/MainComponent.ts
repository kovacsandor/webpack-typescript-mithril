import * as m from 'mithril'

import { ButtonComponent } from './ButtonComponent'
import { Component } from 'mithril'
import { ICON } from '../Constants'
import { ImageComponent } from './ImageComponent'
import { LoaderComponent } from './LoaderComponent'

export declare namespace MainComponent {
    interface Attrs { }
    interface State { }
}

type Vnode = m.Vnode<MainComponent.Attrs, MainComponent.State>
type VnodeDOM = m.VnodeDOM<MainComponent.Attrs, MainComponent.State>

export const MainComponent: Component<MainComponent.Attrs, MainComponent.State> = {

    // oninit(vnode) { },

    view(vnode) {

        let buttonComponentAttrs: ButtonComponent.Attrs = {
            icon: ICON.menu,
            label: `Button`,
            onclick: () => {
                m.request({
                    method: `GET`,
                    url: `http://localhost:3000/users?id=id:1516&firstName=Accumsan`,
                    withCredentials: true,
                })
                    .then(data => console.log(data))
            }
        }

        return (
            m(`main`,
                `MainComponent`,
                m(LoaderComponent),
                m(ButtonComponent, buttonComponentAttrs),
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