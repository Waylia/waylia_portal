import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const htmlPath = resolve('dist/client/index.html');
const siteName = 'Waylia';
const siteDescription = 'Waylia 智能旅行助手';
const siteIcon = '/favicon.svg';
const siteUrl = 'https://yunora.top/';
const platformData = '{"showBadge":false}';

let html = readFileSync(htmlPath, 'utf8');

const replacements = new Map([
  ['{{appName}}', siteName],
  ['{{appDescription}}', siteDescription],
  ['{{{appAvatar}}}', siteIcon],
  ['{{appAvatar}}', siteIcon],
  ['{{currentUrl}}', siteUrl],
  ['{{environment}}', 'production'],
  ['{{{__platform__}}}', platformData],
]);

for (const [placeholder, value] of replacements) {
  html = html.split(placeholder).join(value);
}

writeFileSync(htmlPath, html);
