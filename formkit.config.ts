import { genesisIcons } from '@formkit/icons'
import { rootClasses } from './formkit.theme'
import { defineFormKitConfig } from '@formkit/vue'
import { createProPlugin, inputs } from '@formkit/pro'
import { createI18nPlugin } from '@formkit/i18n'
import { pt, en } from '@formkit/i18n'

// https://pro.formkit.com/luana-correia-49di/projects
const pro = createProPlugin('fk-3bb996322', inputs) // Substitua pela sua chave do Pro

export default defineFormKitConfig(() => ({
  plugins: [pro],
  locales: { pt, en },
  locale: 'pt',
  icons: { ...genesisIcons },
  config: { rootClasses },
}))
