module.exports = {
    title: 'IRIS Network',
    description: 'irisnet.org',
    base: '/',
    head: [
        ['link', { rel: 'icon', href: '/images/favicon.ico' }],
        [
            'meta',
            {
                name: 'keywords',
                content:
                    'IRIS,COSMOS,Tendermint,ABCI,blockchains,IBC protocl,IRIS HUB,Interoperability,Inter-blockchain Communication,InterBlockchain Communication'
            }
        ],
        [
            'meta',
            {
                name: 'description',
                content:
                    'Interchain Service Infrastructure and Protocol Technology Foundation for a Distributed Business Ecosystem'
            }
        ],
        [
            'meta',
            {
                property: 'og:image',
                content: 'https://www.irisnet.org/resources/IRISnet/IRISnet-Logo-Vertical-White.png'
            }
        ],
        ['meta', { property: 'og:title', content: 'IRIS Network' }],
        [
            'meta',
            {
                property: 'og:description',
                content:
                    'Interchain Service Infrastructure and Protocol Technology Foundation for a Distributed Business Ecosystem'
            }
        ],
        [
            'meta',
            {
                name: 'viewport',
                content:
                    'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0'
            }
        ]
    ],
    themeConfig: {
        search: false,
        navbar: false,
        locales: {
            '/en/': {
                nav: {
                    leftNav: [
                        { text: 'Collaboration', link: '/en/#collaboration' },
                        { text: 'Developers', link: '/en/developers' }
                    ],
                    rightNav: [
                        { text: 'Mainnet', link: '/en/mainnet' },
                        { text: 'Docs', link: 'https://www.irisnet.org/docs/', target: '_blank' },
                        { text: 'Blog', link: 'https://medium.com/irisnet-blog', target: '_blank' }
                    ]
                }
            }
        }
    }
};
