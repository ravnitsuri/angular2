import { bootstrap }    from '@angular/platform-browser-dynamic';
import { appRouterProviders } from './app.router';
import { AppComponent } from './component.app';

bootstrap(AppComponent , [appRouterProviders]);