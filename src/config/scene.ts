import cyberdogUrl from '../assets/cyberdog.glb?url'

const envUrl = import.meta.env.VITE_DOG_MODEL_URL as string | undefined

/** Static cyberdog in src/assets, or override via env. */
export const DOG_MODEL_URL = envUrl === 'none' ? undefined : (envUrl ?? cyberdogUrl)

export const DOG_MODEL_TARGET_HEIGHT = 5.2
export const DOG_MODEL_SCALE = 1
