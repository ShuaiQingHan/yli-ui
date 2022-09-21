import YliButton from './components/button.vue'

import type { App } from 'vue'

const components = [
  YliButton
]

export function install(app: App) {
  components.forEach(component => {
    app.component(component.name, component)
  })
}

export default {
  install
}

export {
  YliButton
}
