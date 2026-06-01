import type { Object3D } from 'three'

const HEAD_RE = /head|skull|face/i
const SKIP_RE = /ground|plane|shadow/i

/** Hide ground meshes and find a head group if the GLB has one. */
export function prepareModel(root: Object3D): { head: Object3D | null } {
  let head: Object3D | null = null

  root.traverse((child) => {
    const name = child.name

    if (name && SKIP_RE.test(name) && 'isMesh' in child && child.isMesh) {
      child.visible = false
      return
    }

    if (!head && name && HEAD_RE.test(name)) {
      head = child
    }
  })

  return { head }
}
