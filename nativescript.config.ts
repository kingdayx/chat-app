import { NativeScriptConfig } from '@nativescript/core'

export default {
  id: 'studio.impressive.mobileapp',
  appResourcesPath: 'app/App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none',
  },
  appPath: 'app',
} as NativeScriptConfig
