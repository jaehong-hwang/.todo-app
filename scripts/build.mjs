import { build } from 'vite'

await build({ configFile: 'app/vite.config.ts' })
await build({ configFile: 'preload/vite.config.ts' })
await build({ configFile: 'renderer/vite.config.ts' })
