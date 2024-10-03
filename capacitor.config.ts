import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'v2-pwa',
  webDir: 'out',
  bundledWebRuntime: false,
  server: { 
    url: 'http://10.11.21.180:3000',
    cleartext: true
  }
  
};

export default config;
