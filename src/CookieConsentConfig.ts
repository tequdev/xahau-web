import type { CookieConsentConfig } from 'vanilla-cookieconsent'

export const config: CookieConsentConfig = {
  guiOptions: {
    consentModal: {
      layout: 'box',
      position: 'bottom left',
      equalWeightButtons: true,
      flipButtons: false,
    },
    preferencesModal: {
      layout: 'box',
      position: 'right',
      equalWeightButtons: true,
      flipButtons: false,
    },
  },
  categories: {
    necessary: {
      readOnly: true,
    },
    functionality: {
      enabled: true,
    },
    analytics: {
      enabled: true,
    },
  },
  language: {
    default: 'en',
    autoDetect: 'document',
    translations: {
      en: {
        consentModal: {
          title: 'Select your cookie preferences',
          description:
            'We use cookies to ensure you get the best experience on our website.',
          acceptAllBtn: 'Accept all',
          acceptNecessaryBtn: 'Reject all',
          showPreferencesBtn: 'Manage preferences',
          footer: '<a href="/privacy-policy">Privacy Policy</a>',
        },
        preferencesModal: {
          title: 'Consent Preferences Center',
          acceptAllBtn: 'Accept all',
          acceptNecessaryBtn: 'Reject all',
          savePreferencesBtn: 'Save preferences',
          closeIconLabel: 'Close modal',
          serviceCounterLabel: 'Service|Services',
          sections: [
            {
              title:
                'Strictly Necessary Cookies <span class="pm__badge">Always Enabled</span>',
              description:
                'Some cookies are essential in order to use the website and use some of its features.',
              linkedCategory: 'necessary',
            },
            {
              title: 'Functionality Cookies',
              description:
                'These cookies are used to enhance the performance and functionality of the website but are non-essential to their use. However, without these cookies, certain functionality (like videos) may become unavailable.',
              linkedCategory: 'functionality',
            },
            {
              title: 'Analytics Cookies',
              description:
                'We use analytics cookies to understand how you use our website so we can improve it.',
              linkedCategory: 'analytics',
            },
            {
              title: 'More information',
              description:
                'For any query in relation to the policy on cookies and your choices, please refer to the <a class="cc__link" href="/privacy-policy">Privacy Policy</a>.',
            },
          ],
        },
      },
      es: {
        consentModal: {
          title: 'Seleccione sus preferencias de cookies',
          description:
            'Utilizamos cookies para garantizar que obtenga la mejor experiencia en nuestro sitio web.',
          acceptAllBtn: 'Aceptar todo',
          acceptNecessaryBtn: 'Rechazar todo',
          showPreferencesBtn: 'Gestionar preferencias',
          footer: '<a href="/es/privacy-policy">Política de Privacidad</a>',
        },
        preferencesModal: {
          title: 'Centro de Preferencias de Consentimiento',
          acceptAllBtn: 'Aceptar todo',
          acceptNecessaryBtn: 'Rechazar todo',
          savePreferencesBtn: 'Guardar preferencias',
          closeIconLabel: 'Cerrar modal',
          serviceCounterLabel: 'Servicio|Servicios',
          sections: [
            {
              title:
                'Cookies Estrictamente Necesarias <span class="pm__badge">Siempre Habilitadas</span>',
              description:
                'Algunas cookies son esenciales para utilizar el sitio web y algunas de sus funciones.',
              linkedCategory: 'necessary',
            },
            {
              title: 'Cookies de Funcionalidad',
              description:
                'Estas cookies se utilizan para mejorar el rendimiento y la funcionalidad del sitio web, pero no son esenciales para su uso. Sin embargo, sin estas cookies, ciertas funcionalidades (como los videos) pueden no estar disponibles.',
              linkedCategory: 'functionality',
            },
            {
              title: 'Cookies de Análisis',
              description:
                'Utilizamos cookies de análisis para comprender cómo utiliza nuestro sitio web y así poder mejorarlo.',
              linkedCategory: 'analytics',
            },
            {
              title: 'Más información',
              description:
                'Para cualquier consulta en relación con la política de cookies y sus opciones, consulte la <a class="cc__link" href="/es/privacy-policy">Política de Privacidad</a>.',
            },
          ],
        },
      },
      ja: {
        consentModal: {
          title: 'Cookieの設定を選択してください',
          description:
            '当サイトでは最高の体験を提供するためにCookieを使用しています。',
          acceptAllBtn: 'すべて承認',
          acceptNecessaryBtn: 'すべて拒否',
          showPreferencesBtn: '設定を管理',
          footer: '<a href="/ja/privacy-policy">プライバシーポリシー</a>',
        },
        preferencesModal: {
          title: '同意設定センター',
          acceptAllBtn: 'すべて承認',
          acceptNecessaryBtn: 'すべて拒否',
          savePreferencesBtn: '設定を保存',
          closeIconLabel: 'モーダルを閉じる',
          serviceCounterLabel: 'サービス',
          sections: [
            {
              title: '必須Cookie <span class="pm__badge">常に有効</span>',
              description:
                '一部のCookieはウェブサイトの利用および一部の機能の使用に不可欠です。',
              linkedCategory: 'necessary',
            },
            {
              title: '機能性Cookie',
              description:
                'これらのCookieはウェブサイトのパフォーマンスと機能性を向上させるために使用されますが、必須ではありません。ただし、これらのCookieがないと、特定の機能（動画など）が利用できなくなる場合があります。',
              linkedCategory: 'functionality',
            },
            {
              title: '分析Cookie',
              description:
                'お客様が当サイトをどのように利用しているかを理解し、改善するために分析Cookieを使用しています。',
              linkedCategory: 'analytics',
            },
            {
              title: '詳細情報',
              description:
                'Cookieポリシーおよびお客様の選択肢に関するお問い合わせは、<a class="cc__link" href="/ja/privacy-policy">プライバシーポリシー</a>をご参照ください。',
            },
          ],
        },
      },
    },
  },
}
