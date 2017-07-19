import * as m from 'mithril'

import { GeneratedUser, generateData } from '../../../generator/DataGenerator'

import { ButtonComponent } from './ButtonComponent'
import { Component } from 'mithril'
import { ICON } from '../Constants'
import { ImageComponent } from './ImageComponent'
import { LoaderComponent } from './LoaderComponent'
import { Request } from '../data/Request'

export declare namespace MainComponent {
    interface Attrs { }
    interface State { }
}

type Vnode = m.Vnode<MainComponent.Attrs, MainComponent.State>
type VnodeDOM = m.VnodeDOM<MainComponent.Attrs, MainComponent.State>

export const MainComponent: Component<MainComponent.Attrs, MainComponent.State> = {

    // oninit(vnode) { },

    view(vnode) {

        let getUsers: ButtonComponent.Attrs = {
            label: `Get users`,
            onclick: () => {
                m.request({
                    method: `GET`,
                    url: `http://localhost:3000/users`,
                    withCredentials: true,
                })
                    .then(data => console.log(data))
            }
        }

        let createUser: ButtonComponent.Attrs = {
            label: `Create user`,
            onclick: () => {
                m.request({
                    data: {
                        kind: Request.USER_CREATE,
                        user: generateData(GeneratedUser)
                    }, 
                    method: `POST`,
                    url: `http://localhost:3000/users`,
                    withCredentials: true,
                })
                    .then(data => console.log(data))
            }
        }

        let deleteLastUser: ButtonComponent.Attrs = {
            label: `Delete last user`,
            onclick: () => {
                m.request({
                    data: {
                        kind: Request.USER_DELETE,
                    }, 
                    method: `POST`,
                    url: `http://localhost:3000/users`,
                    withCredentials: true,
                })
                    .then(data => console.log(data))
            }
        }

        return (
            m(`main`,
                `MainComponent`,
                m(LoaderComponent),
                m(ButtonComponent, getUsers),
                ` `,
                m(ButtonComponent, createUser),
                ` `,
                m(ButtonComponent, deleteLastUser),
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