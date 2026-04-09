// @ts-check

import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import starlight from '@astrojs/starlight'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'
import starlightLlmsTxt from 'starlight-llms-txt'
import starlightOpenAPI, { openAPISidebarGroups } from 'starlight-openapi'
import sidebarEn from './src/i18n/sidebar/en.json'
import sidebarEs from './src/i18n/sidebar/es.json'
import sidebarJa from './src/i18n/sidebar/ja.json'
import { remarkGlobalReferences } from './src/plugins/remarkGlobalReferences'

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    starlight({
      title: 'Xahau Docs',
      description: 'Documentation for the Xahau blockchain',
      locales: {
        root: { label: 'English', lang: 'en' },
        es: { label: 'Español', lang: 'es' },
        ja: { label: '日本語', lang: 'ja' },
      },
      tableOfContents: {
        minHeadingLevel: 1,
        maxHeadingLevel: 3,
      },
      editLink: {
        baseUrl: 'https://github.com/Xahau/xahau-web/edit/main/',
      },
      components: {
        PageFrame: './src/layouts/DocsLayout.astro',
        TwoColumnContent: './src/components/DocsTwoColumnContent.astro',
        PageSidebar: './src/components/DocsPageSidebar.astro',
        Sidebar: './src/components/DocsSidebar.astro',
        MobileMenuToggle: './src/components/DocsMobileMenuToggle.astro',
        ThemeProvider: './src/components/DocsForceLightTheme.astro',
      },
      plugins: [
        starlightOpenAPI([
          {
            base: 'docs/data-apis/data-api',
            schema: './src/schemas/dataapi.json',
            sidebar: {
              label: 'Xahau Data API',
            },
          },
        ]),
        starlightLlmsTxt({
          customSets: [
            {
              label: 'Hook Concepts',
              description: 'Xahau Hook Concepts',
              paths: ['docs/hooks/**'],
            },
            {
              label: 'Hook API',
              description: 'Documentation for the Hook API',
              paths: ['docs/hooks/functions/**'],
            },
            {
              label: 'Transactions',
              description: 'Documentation for Xahau Transactions',
              paths: ['docs/protocol-reference/transactions/**'],
            },
            {
              label: 'Ledger Entries',
              description: 'Documentation for Xahau Ledger Entries',
              paths: ['docs/protocol-reference/ledger-data/**'],
            },
          ],
        }),
      ],
      sidebar: [
        {
          label: sidebarEn.get_started,
          translations: {
            es: sidebarEs.get_started,
            ja: sidebarJa.get_started,
          },
          items: ['docs', 'docs/what-is-different'],
        },
        {
          label: sidebarEn.features,
          translations: { es: sidebarEs.features, ja: sidebarJa.features },
          items: [
            'docs/features/public-nodes-rpc',
            'docs/features/amendments',
            {
              label: sidebarEn.transaction_signing,
              translations: {
                es: sidebarEs.transaction_signing,
                ja: sidebarJa.transaction_signing,
              },
              autogenerate: { directory: 'docs/features/transaction-signing' },
              collapsed: true,
            },
            {
              label: sidebarEn.developer_tooling,
              translations: {
                es: sidebarEs.developer_tooling,
                ja: sidebarJa.developer_tooling,
              },
              autogenerate: { directory: 'docs/features/developer-tooling' },
              collapsed: true,
            },
            {
              label: sidebarEn.http_websocket_apis,
              translations: {
                es: sidebarEs.http_websocket_apis,
                ja: sidebarJa.http_websocket_apis,
              },
              autogenerate: { directory: 'docs/features/http-websocket-apis' },
              collapsed: true,
            },
            {
              label: sidebarEn.network_features,
              translations: {
                es: sidebarEs.network_features,
                ja: sidebarJa.network_features,
              },
              autogenerate: { directory: 'docs/features/network-features' },
              collapsed: true,
            },
            'docs/features/faucet-and-explorer',
            'docs/features/balance-adjustments',
            'docs/features/governance-game',
            'docs/features/burn-2-mint',
            'docs/features/versioning-process',
          ],
        },
        {
          label: sidebarEn.protocol_reference,
          translations: {
            es: sidebarEs.protocol_reference,
            ja: sidebarJa.protocol_reference,
          },
          items: [
            {
              label: sidebarEn.transactions,
              translations: {
                es: sidebarEs.transactions,
                ja: sidebarJa.transactions,
              },
              collapsed: true,
              items: [
                'docs/protocol-reference/transactions',
                {
                  label: sidebarEn.transaction_types,
                  translations: {
                    es: sidebarEs.transaction_types,
                    ja: sidebarJa.transaction_types,
                  },
                  autogenerate: {
                    directory:
                      'docs/protocol-reference/transactions/transaction-types',
                  },
                  collapsed: true,
                },
                {
                  label: sidebarEn.pseudo_transaction_types,
                  translations: {
                    es: sidebarEs.pseudo_transaction_types,
                    ja: sidebarJa.pseudo_transaction_types,
                  },
                  autogenerate: {
                    directory:
                      'docs/protocol-reference/transactions/pseudo-transaction-types',
                  },
                  collapsed: true,
                },
                {
                  label: sidebarEn.transaction_results,
                  translations: {
                    es: sidebarEs.transaction_results,
                    ja: sidebarJa.transaction_results,
                  },
                  autogenerate: {
                    directory:
                      'docs/protocol-reference/transactions/transaction-results',
                  },
                  collapsed: true,
                },
                'docs/protocol-reference/transactions/transaction-common-fields',
                'docs/protocol-reference/transactions/transaction-metadata',
              ],
            },
            {
              label: sidebarEn.ledger_data,
              translations: {
                es: sidebarEs.ledger_data,
                ja: sidebarJa.ledger_data,
              },
              collapsed: true,
              items: [
                'docs/protocol-reference/ledger-data',
                {
                  label: sidebarEn.ledger_objects_types,
                  translations: {
                    es: sidebarEs.ledger_objects_types,
                    ja: sidebarJa.ledger_objects_types,
                  },
                  autogenerate: {
                    directory:
                      'docs/protocol-reference/ledger-data/ledger-objects-types',
                  },
                  collapsed: true,
                },
                'docs/protocol-reference/ledger-data/ledger-header',
                'docs/protocol-reference/ledger-data/ledger-object-ids',
              ],
            },
            {
              label: sidebarEn.data_types,
              translations: {
                es: sidebarEs.data_types,
                ja: sidebarJa.data_types,
              },
              collapsed: true,
              items: [
                'docs/protocol-reference/data-types',
                'docs/protocol-reference/data-types/currency-formats',
                'docs/protocol-reference/data-types/base-58-encodings',
              ],
            },
            'docs/protocol-reference/binary-format',
          ],
        },
        {
          label: 'Hooks',
          items: [
            'docs/hooks',
            {
              label: sidebarEn.concepts,
              translations: { es: sidebarEs.concepts, ja: sidebarJa.concepts },
              collapsed: true,
              items: [
                'docs/hooks/concepts/introduction',
                'docs/hooks/concepts/terminology',
                'docs/hooks/concepts/loops-and-guarding',
                'docs/hooks/concepts/compiling-hooks',
                'docs/hooks/concepts/chaining',
                'docs/hooks/concepts/weak-and-strong',
                'docs/hooks/concepts/collect-call',
                'docs/hooks/concepts/sethook-transaction',
                'docs/hooks/concepts/parameters',
                'docs/hooks/concepts/namespaces',
                'docs/hooks/concepts/grants',
                'docs/hooks/concepts/hookon-field',
                'docs/hooks/concepts/reference-counted-hook-definitions',
                'docs/hooks/concepts/hook-fees',
                'docs/hooks/concepts/execution-metadata',
                'docs/hooks/concepts/debugging-hooks',
                'docs/hooks/concepts/state-management',
                'docs/hooks/concepts/slots-and-keylets',
                'docs/hooks/concepts/floating-point-numbers-xfl',
                'docs/hooks/concepts/emitted-transactions',
                'docs/hooks/concepts/serialized-objects',
              ],
            },
            {
              label: sidebarEn.functions,
              translations: {
                es: sidebarEs.functions,
                ja: sidebarJa.functions,
              },
              collapsed: true,
              items: [
                {
                  label: sidebarEn.overview,
                  translations: {
                    es: sidebarEs.overview,
                    ja: sidebarJa.overview,
                  },
                  collapsed: true,
                  autogenerate: { directory: 'docs/hooks/functions/overview' },
                },
                {
                  label: sidebarEn.developer_defined,
                  translations: {
                    es: sidebarEs.developer_defined,
                    ja: sidebarJa.developer_defined,
                  },
                  collapsed: true,
                  autogenerate: {
                    directory: 'docs/hooks/functions/developer-defined',
                  },
                },
                {
                  label: 'Control',
                  collapsed: true,
                  autogenerate: { directory: 'docs/hooks/functions/control' },
                },
                {
                  label: sidebarEn.utilities,
                  translations: {
                    es: sidebarEs.utilities,
                    ja: sidebarJa.utilities,
                  },
                  collapsed: true,
                  autogenerate: { directory: 'docs/hooks/functions/utilities' },
                },
                {
                  label: sidebarEn.serialization,
                  translations: {
                    es: sidebarEs.serialization,
                    ja: sidebarJa.serialization,
                  },
                  collapsed: true,
                  autogenerate: {
                    directory: 'docs/hooks/functions/serialization',
                  },
                },
                {
                  label: sidebarEn.emitted_transaction,
                  translations: {
                    es: sidebarEs.emitted_transaction,
                    ja: sidebarJa.emitted_transaction,
                  },
                  collapsed: true,
                  autogenerate: {
                    directory: 'docs/hooks/functions/emitted-transaction',
                  },
                },
                {
                  label: 'Float',
                  collapsed: true,
                  autogenerate: { directory: 'docs/hooks/functions/float' },
                },
                {
                  label: 'Ledger',
                  collapsed: true,
                  autogenerate: { directory: 'docs/hooks/functions/ledger' },
                },
                {
                  label: sidebarEn.hook_context,
                  translations: {
                    es: sidebarEs.hook_context,
                    ja: sidebarJa.hook_context,
                  },
                  collapsed: true,
                  autogenerate: {
                    directory: 'docs/hooks/functions/hook-context',
                  },
                },
                {
                  label: 'Slot',
                  collapsed: true,
                  autogenerate: { directory: 'docs/hooks/functions/slot' },
                },
                {
                  label: sidebarEn.state,
                  translations: { es: sidebarEs.state, ja: sidebarJa.state },
                  collapsed: true,
                  autogenerate: { directory: 'docs/hooks/functions/state' },
                },
                {
                  label: sidebarEn.trace_debug,
                  translations: {
                    es: sidebarEs.trace_debug,
                    ja: sidebarJa.trace_debug,
                  },
                  collapsed: true,
                  autogenerate: {
                    directory: 'docs/hooks/functions/trace-debug',
                  },
                },
                {
                  label: sidebarEn.originating_transaction,
                  translations: {
                    es: sidebarEs.originating_transaction,
                    ja: sidebarJa.originating_transaction,
                  },
                  collapsed: true,
                  autogenerate: {
                    directory: 'docs/hooks/functions/originating-transaction',
                  },
                },
                {
                  label: 'WebSocket APIs',
                  collapsed: true,
                  autogenerate: {
                    directory: 'docs/hooks/functions/websocket-apis',
                  },
                },
              ],
            },
          ],
        },
        {
          label: 'Data APIs',
          items: ['docs/data-apis', ...openAPISidebarGroups],
        },
        {
          label: sidebarEn.compliance,
          translations: { es: sidebarEs.compliance, ja: sidebarJa.compliance },
          items: [
            'docs/compliance/security-audit',
            'docs/compliance/responsible-disclosure',
          ],
        },
        {
          label: sidebarEn.infrastructure,
          translations: {
            es: sidebarEs.infrastructure,
            ja: sidebarJa.infrastructure,
          },
          items: [
            'docs/infrastructure/system-requirements',
            'docs/infrastructure/installing-xahaud',
            'docs/infrastructure/updating-xahaud',
            'docs/infrastructure/enabling-validation',
            'docs/infrastructure/identity',
            'docs/infrastructure/interacting',
            'docs/infrastructure/advanced-configuration',
            {
              label: sidebarEn.build_xahaud,
              translations: {
                es: sidebarEs.build_xahaud,
                ja: sidebarJa.build_xahaud,
              },
              collapsed: true,
              items: [
                'docs/infrastructure/build-xahaud',
                'docs/infrastructure/build-xahaud/linux',
                'docs/infrastructure/build-xahaud/macos',
              ],
            },
          ],
        },
        {
          label: sidebarEn.resources,
          translations: { es: sidebarEs.resources, ja: sidebarJa.resources },
          items: ['docs/resources/whitepaper', 'docs/resources/media-kit'],
        },
        {
          label: sidebarEn.support,
          translations: { es: sidebarEs.support, ja: sidebarJa.support },
          autogenerate: { directory: 'docs/support' },
        },
      ],
    }),
    mdx(),
  ],
  markdown: {
    remarkPlugins: [remarkGlobalReferences],
  },
  vite: {
    plugins: [tailwindcss()],
  },
  site: 'https://xahau.network/',
})
