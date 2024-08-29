import { genesisIcons } from '@formkit/icons'
import { rootClasses } from './formkit.theme'
import { defineFormKitConfig } from '@formkit/vue'
import { createProPlugin, inputs } from '@formkit/pro'

// https://pro.formkit.com/luana-correia-49di/projects
const pro = createProPlugin('fk-3bb996322', inputs) // Substitua pela sua chave do Pro

export default defineFormKitConfig(() => ({
  plugins: [pro],
  icons: { ...genesisIcons },
  config: { rootClasses },
}))
