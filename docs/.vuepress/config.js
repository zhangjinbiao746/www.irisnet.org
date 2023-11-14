module.exports = {
    title: 'IRIS Network',
    description:
        'IRISnet is an Interchain NFT Hub tailored for next-generation business dApps. Built using the Cosmos SDK, it facilitates cross-chain interoperability of NFTs, services, and on/off-chain systems. ',
    base: '/',
    head: [
        ['link', { rel: 'icon', href: '/images/favicon.ico' }],
        [
            'meta',
            {
                name: 'keywords',
                content: 'IRISnet,irisnet,IRISHUB,IRIS HUB,IRIS hub'
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
                name: 'google-site-verification',
                content: 'RHIq057T0RfccugQbApFIL2-0Jy4hHA6wGDBXQobLwc'
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
        ],
        [
            'meta',
            {
                'http-equiv': 'pragma',
                content: 'no-cache'
            }
        ],
        [
            'meta',
            {
                'http-equiv': 'cache-control',
                content: 'no-cache'
            }
        ],
        [
            'meta',
            {
                'http-equiv': 'expires',
                content: '0'
            }
        ],
        [
            'script',
            {
                src: 'https://www.google.com/recaptcha/api.js?hl=en',
                async: true,
                defer: true
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
                },
                footer: {
                    topFooter: [
                        {
                            title: 'Community',
                            communityIcon: [
                                {
                                    src: 'cmc.png',
                                    href: 'https://www.coinmarketcap.com/currencies/irisnet/'
                                },
                                {
                                    src: 'irisnet_telegram.png',
                                    href: 'https://t.me/irisnetwork'
                                },
                                {
                                    src: 'irisnet_twitter.png',
                                    href: 'https://twitter.com/irisnetwork'
                                },

                                {
                                    src: 'irisnet_medium.png',
                                    href: 'https://medium.com/irisnet-blog'
                                },
                                {
                                    src: 'irisnet_mail.png',
                                    href: 'mailto:contact@irisnet.org'
                                }
                            ]
                        },
                        {
                            title: 'Developers',
                            communityIcon: [
                                {
                                    src: 'irisnet_github.png',
                                    href: 'https://github.com/irisnet'
                                },
                                {
                                    src: 'discord.png',
                                    href: 'https://discord.gg/bmhu9F9xbX'
                                }
                            ]
                        },
                        {
                            title: 'Validators',
                            communityIcon: [
                                {
                                    src: 'discord.png',
                                    href: 'https://discord.gg/bmhu9F9xbX'
                                }
                            ]
                        },
                        {
                            title: 'Products',
                            communityText: [
                                {
                                    name: 'Rainbow Wallet',
                                    href: 'https://www.rainbow.one/'
                                },
                                {
                                    name: 'IOBScan',
                                    href: 'https://ibc.iobscan.io/'
                                },
                                {
                                    name: 'Endpoints & SDKs',
                                    href: 'https://www.irisnet.org/docs/endpoints/intro.html'
                                },
                                {
                                    name: 'CLI Client',
                                    href: ' https://www.irisnet.org/docs/cli-client/intro.html'
                                }
                            ]
                        },
                        {
                            title: 'Resources',
                            communityText: [
                                {
                                    name: 'Blog',
                                    href: 'https://medium.com/irisnet-blog'
                                },
                                {
                                    name: 'Docs',
                                    href: 'https://www.irisnet.org/docs/'
                                },
                                {
                                    name: 'Press Kit',
                                    route: '/en/community/press-kit'
                                },
                                {
                                    name: 'Explorer',
                                    href: 'https://irishub.iobscan.io/'
                                },
                                {
                                    name: 'Awesome IRISnet',
                                    href: 'https://github.com/irisnet/awesome'
                                }
                            ]
                        },
                        {
                            title: 'Newsletter',
                            inputBtn: {
                                btn: {
                                    subscribe: 'Subscribe',
                                    placeholder: 'Please enter your email address',
                                    warningTip: 'Please enter a valid email address'
                                },
                                dialogs: {
                                    confirm: 'Confirm',
                                    subscribeStatusTip: {
                                        success: 'Welcome to The IRISnet Newsletter',
                                        successTip:
                                            'Thank you for your interest in and subscription to our project infomation. Please check your email box and click the button to confirm the subscription and to start receiving our newsletters and other latest updates.',
                                        failed: 'Subscription Failed',
                                        failedTip:
                                            'Maybe you are already subscribed? If not then please try again or contact us via email contact@irisnet.org.'
                                    }
                                }
                            }
                        }
                    ],
                    bottomFooter: {
                        intro: 'Named after the Greek goddess Iris, IRISHUB aspires to bridge the gap between blockchains and real-world business systems, much like Iris connects earth and the heavens.',
                        copyright: `Copyright ©2019-${new Date().getFullYear()} IRIS Foundation Ltd. All rights reserved.`,
                        agreement: [
                            {
                                name: 'Privacy',
                                route: '/en/privacy'
                            },
                            {
                                name: 'Terms',
                                route: '/en/terms'
                            }
                        ]
                    },
                    communityInfo: [
                        {
                            img: 'irisnet_telegram.png',
                            link: 'https://t.me/irisnetwork'
                        },
                        {
                            img: 'irisnet_github.png',
                            link: 'https://github.com/irisnet/irishub'
                        },
                        {
                            img: 'irisnet_twitter.png',
                            link: 'https://twitter.com/irisnetwork'
                        }
                    ]
                }
            }
        }
    }
};
