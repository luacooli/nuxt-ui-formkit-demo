import { genesisIcons } from '@formkit/icons'
import { rootClasses } from './formkit.theme'
import { defineFormKitConfig } from '@formkit/vue'
import { createProPlugin, inputs } from '@formkit/pro'
import { pt, en } from '@formkit/i18n'
import { generateClasses } from '@formkit/themes'

// https://pro.formkit.com/luana-correia-49di/projects
const pro = createProPlugin('fk-3bb996322', inputs) // Substitua pela sua chave do Pro

const customTheme = generateClasses({
  global: {
    label: '$reset font-thin text-gray-500',
    inner:
      'border-0 border-b-2 border-indigo-500 rounded-none drop-shadow-none	shadow-none focus-within:border-0 focus-within:border-b-red-500',
  },
})

export default defineFormKitConfig(() => ({
  plugins: [pro],
  locales: { pt, en },
  locale: 'pt',
  icons: { ...genesisIcons },
  config: { rootClasses, classes: customTheme },
}))
