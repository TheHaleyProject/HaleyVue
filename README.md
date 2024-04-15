Haley Vue is a UI Components library for [Vue.js](https://vuejs.org/). Most of the component concepts are inspired from other opensource projects and primarily the Haley Components for WPF.

### Setup Haley Vue

1. Install Haley Vue.

```bash
npm install @haley/vue
```

2. Import the components:

 - To register component manually:

    ```js
    import { createApp } from 'vue'
    import { AnimatedLoader } from '@haley/vue'
    
    createApp(...)
      .use(AnimatedLoader)
    ```