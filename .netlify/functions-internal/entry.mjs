import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_2211ba2e.mjs';
import 'react';
import 'react-dom/server';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import 'html-escaper';
import 'clsx';
import './chunks/astro_3054e7fa.mjs';
import 'mime';
import 'path-to-regexp';

const _page0  = () => import('./chunks/image-endpoint_3dc24b21.mjs');
const _page1  = () => import('./chunks/index_c67b9eca.mjs');
const _page2  = () => import('./chunks/services_0425eba8.mjs');
const _page3  = () => import('./chunks/contact_0d81bc09.mjs');
const _page4  = () => import('./chunks/about_e242606c.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/image-endpoint.js", _page0],["src/pages/index.astro", _page1],["src/pages/services.astro", _page2],["src/pages/contact.astro", _page3],["src/pages/about.astro", _page4]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
