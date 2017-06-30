import * as m from 'mithril'

export function ifExists<T>(primary: T, fallback?: string): string | T {
	return primary ? primary : (fallback ? fallback : ``)
}

export function renderMultiple(count: number, vnode: m.Vnode<any, any>): m.Children {
	let children: m.Vnode<any, any>[] = []
	for (let i = 0; i < count; i++) children.push(vnode)
	return children
}