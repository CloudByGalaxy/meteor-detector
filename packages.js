// packages.js - Most used Meteor/Atmosphere packages to detect
window.__METEOR_DETECTOR_PACKAGES__ = [
  // Core
  'mongo', 'tracker', 'reactive-var', 'reactive-dict',
  'session', 'accounts-base', 'accounts-password', 'accounts-ui',
  'blaze', 'blaze-html-templates', 'templating',
  'react-meteor-data', 'angular-meteor-data',
  'ddp-client', 'ddp-server', 'webapp',
  'email', 'http', 'fetch',
  'check', 'ejson', 'random',
  'minimongo', 'mobile-experience',

  // Schemas & Forms
  'aldeed:simple-schema', 'aldeed:collection2',
  'aldeed:autoform', 'aldeed:autoform-select2',
  'aldeed:autoform-bs-datepicker', 'aldeed:template-extension',

  // Auth & Roles
  'alanning:roles', 'pauli:accounts-linkedin',

  // Routing & Layout
  'iron:router', 'kadira:flow-router', 'ostrio:flow-router-extra',
  'kadira:blaze-layout', 'zimme:active-route',
  'reywood:iron-router-ga', 'manuelschoebel:wait-on-lib',

  // Collections & Data
  'matb33:collection-hooks', 'dburles:collection-helpers',
  'reywood:publish-composite', 'tmeasday:publish-counts',
  'dburles:factory', 'maximum:server-transform',
  'sakulstra:aggregate', 'meteorhacks:aggregate',

  // Testing & Coverage
  'meteortesting:mocha', 'practicalmeteor:chai',
  'tmeasday:acceptance-test-driver', 'glasser:package-for-selftest',
  'lmieulet:meteor-coverage', 'lmieulet:meteor-legacy-coverage',

  // Files & Storage
  'ostrio:files', 'jalik:ufs', 'jalik:ufs-gridfs', 'jalik:ufs-local',
  'edgee:slingshot',

  // i18n
  'tap:i18n', 'tap:i18n-ui', 'gwendall:autoform-i18n', 'rocketchat:tap-i18n',

  // REST APIs
  'nimble:restivus', 'rocketchat:restivus',

  // Realtime & Communication
  'rocketchat:streamer', 'rocketchat:oauth2-server',

  // UI & Styling
  'fourseven:scss', 'juliancwirko:postcss',
  'twbs:bootstrap', 'nemo64:bootstrap',
  'fortawesome:fontawesome', 'deepwell:bootstrap-datepicker2',
  'mrt:bootstrap-select',
  'raix:handlebar-helpers', 'raix:ui-dropped-event',
  'nooitaf:colors',

  // Utilities
  'ostrio:cookies', 'momentjs:moment', 'dispatch:run-as-user',
  'mystor:device-detection', 'dandv:caret-position',
  'mrt:reactive-store', 'jparker:gravatar',
  'konecty:user-presence', 'konecty:multiple-instances-status',
  'johanbrook:publication-collector',
  'simple:reactive-method', 'mdg:validated-method',
  'deanius:promise', 'meteorhacks:async',
  'mizzao:user-status', 'nschwarz:cluster',
  'meteorhacks:picker',

  // SSR & Injection
  'meteorhacks:ssr', 'meteorhacks:inject-initial',

  // Scheduling & Jobs
  'littledata:synced-cron',

  // Monitoring & Migrations
  'montiapm:agent', 'mdg:meteor-apm-agent', 'percolate:migrations',

  // Vue & Svelte
  'akryum:vue-component', 'zodern:melte',
  'rdb:svelte-meteor-data',

  // GraphQL & Types
  'swydo:graphql', 'zodern:types',

  // Build & Tooling
  'vite:bundler', 'rspack',
  'zodern:standard-minifier-js', 'zodern:hide-production-sourcemaps'
];
