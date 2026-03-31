import { NG_EVENT_PLUGINS, provideEventPlugins } from '@taiga-ui/event-plugins';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideEventPlugins(),
    provideHttpClient(),
    // O Taiga v4 as vezes precisa dessa declaração extra de plugins:
    // { provide: NG_EVENT_PLUGINS, useValue: {} }
  ],
};
