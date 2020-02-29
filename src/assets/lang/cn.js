export const message = {
    //TODO
    navigation:{
        home:'首页',
        aboutUs:'关于我们',
        developer:'开发者',
        community:'社区生态',
        language:'语言',
        forum:'论坛',
        blog:'博客',
        lang:'English',
        secondMenu:{
            mainnet:'主网',
            whitepaper:'白皮书',
            announcement:'公告',
            collaboration:'合作伙伴',
            devPortal:'开发者入口',
            testnet:'测试网',
            doc:'文档',
            ibc:'IBC',
            IRISEcosystem:'IRIS 生态',
            community:'社区',
            pressKit:'宣传资料',
            events:'活动',
            irisnetBianjie:'IRISnet-Bianjie'
        }
    },
    homeThree:{
        banner:[
            {
                h5Title:'IRISnet - Bianjie',
                h1Title:'Cosmos Hub Validator',
                section:'由 IRISnet 核心开发团队维护的 Cosmos Hub 创世节点',
                sectionSecond:'查看节点详情',
                sectionThree:'委托ATOM',
            },
            {
                h5Title:'主网 IRIS Hub 上线一周年',
                h1Title:'下一代分布式应用的跨链服务枢纽',
                section:'——支持Defi的自进化区块链',
                medium:'微信周年文'
            }
        ],
        irisnet:{
            title:"IRIS 网络",
            secondTitle:'下一代分布式应用程序的跨链服务枢纽——自我进化的BPoS区块链',
            section: 'IRISnet（主网 IRIS Hub）是支持DeFi等各种复杂分布式应用的跨链服务枢纽。IRIS Hub采用 <a href="https://tendermint.com/sdk/" target="_blank">Cosmos SDK </a>开发，是第一个可自进化的BPoS网络，其开发团队包括获得多个技术创新大奖的边界智能（<a href="https://www.bianjie.ai/" target="_blank">Bianjie</a>）以及Cosmos核心开发团队<a     href="https://tendermint.com/" target="_blank">Tendermint</a>。',
            secondSection:'IRISnet提供支持DeFi应用开发的多种基础模块，并能支持公有链、联盟链以及传统商业系统之间的无缝集成，使得数据和复杂计算能够跨异构网络互联互通，实现服务的跨链调用。',
            whitePaperBtn:'白皮书',
            mainnetBtn:'主网'
        },
        product:{
            irisHub:{
                title:'IRIS Hub',
                section:'IRIS 网络的跨链服务枢纽'
            },
            irisSdk:{
                title:'IRIS SDK',
                section:'一个用于开发与IRIS网络兼容的区块链的框架'
            },
            iservice:{
                title:'iService',
                section:'开发分布式商业应用的「超级适配器」'
            },
            OnChainGov:{
                title:'On-chain Gov',
                section:'通过链上治理和软件升级增强整个社区的能力'
            },
        },
        roadMap:{
            title:'预期的项目路线图',
            youyi:{
                title:'后羿',
                date:'后羿（2020年4月之后）',
                section:'第四阶段将专注通过技术创新，不断完善IRIS网络、SDK和手机客户端，吸引更多开发者参与。'
            },
            kuafu:{
                title:'夸父',
                date: '夸父（2019年11月~2020年3月）',
                section:'第三阶段主要专注于通过 IBC， 完成 IRIS Hub 与应用专有链网络的连接。我们还计划升级IRISnet移动客户端以支持这些应用。第三阶段还将重点实现IRIS网络的迭代升级，以支持复杂的IRIS服务管理功能。'
            },
            nuwa:{
                title:'女娲',
                date: '女娲（2019年4月~2019年10月）',
                section:'第二阶段我们将增加更多的基本模块以支持应用开发，特别是DeFi应用。这些新模块计划在本阶段发布，包括多资产管理、Coinswap、多签账户等。我们计划与1-2个生态伙伴合作，使用这些模块开发应用。我们还计划在此阶段完成与Cosmos Hub的测试连接。'
            },
            pangu:{
                title:'盘古',
                date:'盘古（2018年1月~2019年3月）',
                section:'IRISnet项目的第一阶段，我们专注于构建并启动 IRISnet 主网（Hub）。 初始版本的IRIS网络移动客户端已在本阶段发布。同时，我们也专注于 IRISnet 基本服务层的建立，已将其发布在 IRIS Hub 上，实现：服务定义、绑定、调用和查询。'
            }
        }
    },
    mainnetThree:{
        title:"介绍",
        section:'IRIS Hub 是IRIS网络的“中心”枢纽，是一个基于<a href="https://tendermint.com/sdk/" target="_blank"> Cosmos SDK</a> 和 <a href="https://tendermint.com/core/" target="_blank">Tendermint</a>。构建的Proof-of-Stake（PoS）区块链，也将成为第一个连接<a href="https://hub.cosmos.network/master/hub-overview/overview.html" target="_blank">Cosmos Hub</a>枢纽的区域性枢纽。',
        secondSection:'IRIS Hub 配备了 IRIS 服务协议，该协议将链上的交易处理与链下的数据处理和业务逻辑执行进行协调。我们还增强了IBC协议，以促进那些链下服务在有需要的情况下被跨链调用。',
        threeSection:'IRIS 服务协议和增强的 IBC 协议最终可以回馈到 Cosmos SDK 中，允许 Cosmos SDK 用户开发与IRIS网络兼容的区块链。',
        fourSection:"我们也会提供面向客户的、针对特定编程语言的IRIS SDK，方便在IRIS网络内轻松提供和使用链下服务。",
        token:{
            title:'IRIS 通证',
            section:'IRIS Hub 有自己的原生通证，称为 IRIS，在网络中有三个作用。',
            staking:{
                title:'质押',
                section:'与Cosmos Hub中的ATOM通证类似，IRIS通证将用作质押通证以保护 BPoS 区块链的安全运行。',
            },
            transactionFee:{
                title:'交易费用',
                section:'IRIS通证也将用于支付IRIS网络中所有交易的费用。',
            },
            serviceFee: {
                title:'IRIS网络中的服务提供者需要以IRIS通证为单位收取服务费。',
                section:'IRIS网络最终将支持来自Cosmos网络的所有列入白名单的费用通证，它们可用于支付交易费用和服务费用。'
            },
            bottomSection:'IRIS网络最终将支持来自Cosmos网络的所有列入白名单的费用通证，它们可用于支付交易费用和服务费用。'
        },
        wallet:{
            title:'钱包',
            section:'这些钱包支持IRIS及ATOM的转账和质押，请充分研究其安全性再使用。列示这些信息仅为方便下载，并不代表对钱包使用的安全性负责。'
        },
        explorer:{
            title:'浏览器',
            section:'您可通过以下区块链浏览器查询和分析 IRIS Hub 的区块、交易、验证人等信息。'
        },
        stakingTools:{
            title:'委托工具箱',
            section:'这些工具由IRISnet的社区验证人或开发者贡献，方便IRIS的持有者通过网页钱包、Ledger硬件钱包等进行委托，请充分研究其安全性再使用。'
        }
    },
    testnetThree:{
        title:'介绍',
        secondTitle:'有两个测试网可供开发者或者验证人使用。',
        section:'自主网启动以来，Fuxi 测试网 开始作为稳定的应用程序测试网运行，该测试网具有与主网相同的版本，因此IRISnet的服务提供商可以在不运行节点和LCD实例的情况下在IRIShub上开发和测试其应用程序。',
        secondSection:'但是，在IRIShub的新版本升级到主网之前，我们还需要和验证人一起进行升级和新功能相关的测试，这是Nyancat 测试网所关注的重点。新的验证人也可以使用 Nyancat 测试网来熟悉验证人相关操作。',
        fuxi:{
            title:'伏羲测试网',
            section:'伏羲测试网跟IRISnet主网运行相同的软件，为开发者社区提供稳定的测试环境（包括钱包、浏览器、服务提供者/消费者）。',
            linkName:'如何使用伏羲测试网 ',
            fuxiExplorer:'FUXI 浏览器'
        },
        nyancat:{
            title:'彩虹猫测试网',
            section:'彩虹猫测试网通常运行比IRISnet主网更新版本，重点是在新版本发布到生产环境之前，为验证人提供参与网络共识、治理升级的验证测试环境。',
            linkName:'如何加入彩虹猫测试网',
            nyancatExplorer:'Nyancat 浏览器 '
        }
    },
    presskitThree:{
        title:'品牌资料',
        secondTitle:'获取您可能需要的所有品牌资源和标志',
        resources:'资源目录',
        about:{
            AboutIRISnet:'关于IRISnet',
            title:'IRISnet：可以自进化的BPoS跨链服务枢纽',
            section:'IRISnet（主网 IRIS Hub）是支持DeFi等各种复杂分布式应用的跨链服务枢纽。IRIS Hub采用Cosmos SDK开发，是第一个可自进化的BPoS网络，其开发团队包括获得多个技术创新大奖的边界智能（<a href="https://www.bianjie.ai/" target="_blank">Bianjie</a>）以及Cosmos核心开发团队<a href="https://tendermint.com/" target="_blank">Tendermint</a>。',
            secondSection:'IRISnet提供支持DeFi应用开发的多种基础模块，并能支持公有链、联盟链以及传统商业系统之间的无缝集成，使得数据和复杂计算能够跨异构网络互联互通，实现服务的跨链调用。',
            more:"更多说明内容...",
            moreLink:'https://github.com/irisnet/irisnet/blob/master/pressKit_CN.md',
        }
    },
    footerThree:{
        newsLetter: '订阅',
        placeholder:'请输入邮箱地址订阅',
        socialCommunityTitle: '社区',
        validatorCommunityTitle:'验证人',
        TechCommunityTitle: '开发者',
        submitBtn:"提交",
        errEmail:'请输入一个有效的邮箱地址',
        socialCommunity:[
            {
                id:0,
                hoverSrc: "irisnet_telegram_hover.png",
                src: "irisnet_telegram.png",
                href: "https://t.me/irisnetworkcn"
            },
            {
                id:1,
                hoverSrc: "irisnet_twitter_hover.png",
                src: "irisnet_twitter.png",
                href: "https://twitter.com/irisnetwork"
            },
            {
                id:2,
                hoverSrc: "irisnet_mail_hover.png",
                src: "irisnet_mail.png",
                href: "mailto:contact@irisnet.org"
            },
            {
                id:3,
                hoverSrc: "irisnet_medium_hover.png",
                src: "irisnet_medium.png",
                href: "https://medium.com/irisnet-blog"
            },
            {
                id:4,
                hoverSrc: "irisnet_wechat_hover.png",
                src: "irisnet_wechat.png",
                "txt": "Wechat"
            },
            {
                id:5,
                hoverSrc: "irisnet_weibo_hover.png",
                src: "irisnet_weibo.png",
                href: "https://weibo.com/u/6455513027"
            },
        ],
        validatorCommunity:[
            {
                id:0,
                hoverSrc: "irisnet_qq_hover.png",
                src: "irisnet_qq.png",
                href: "http://qm.qq.com/cgi-bin/qm/qr?group_code=795301695"
            },
            {
                id:1,
                hoverSrc: "irisnet_riot_hover.png",
                src: "irisnet_riot.png",
                href: "https://riot.im/app/#/room/#irisvalidators:matrix.org"
            },
            {
                id:2,
                hoverSrc: "irisnet_monitor_hover.png",
                src: "irisnet_monitor.png",
                href: "https://www.irisnet.org/docs/tools/monitor.html"
            },
            {
                id:3,
                hoverSrc: "irisnet_daemon_hover.png",
                src: "irisnet_daemon.png",
                href: " https://www.irisnet.org/docs/daemon/intro.html"
            },
        ],
        techCommunity:[
            {
                id:0,
                hoverSrc: "irisnet_github_hover.png",
                src: "irisnet_github.png",
                href: "https://github.com/irisnet"
            },
            {
                id:1,
                hoverSrc: "irisnet_riot_hover.png",
                src: "irisnet_riot.png",
                href: "https://riot.im/app/#/room/#iris:matrix.org"
            },
            {
                id:2,
                hoverSrc: "irisnet_qq_hover.png",
                src: "irisnet_qq.png",
                href: "https://jq.qq.com/?_wv=1027&k=51eKP77"
            },
            {
                id:3,
                hoverSrc: "irisnet_riot_hover.png",
                src: "irisnet_riot.png",
                href: "https://riot.im/app/#/room/#iris:matrix.org"
            },

        ],
        productList: [
            {
                id:0,
                name:'Rainbow Wallet',
                href:'https://www.rainbow.one/'
            },
            {
                id:1,
                name:'IRISplorer',
                href:'https://www.irisplorer.io'
            },
            {
                id:2,
                name:'Light Client',
                href:'https://www.irisnet.org/docs/light-client/intro.html'
            },
            {
                id:3,
                name:'CLI Client',
                href:' https://www.irisnet.org/docs/cli-client/intro.html'
            }
        ],
        resourceList: [
            {
                id:0,
                name:'FAQ',
                href:'https://www.irisnet.org/docs/resources/'
            },
            {
                id:1,
                name:'Blog',
                href:'https://medium.com/irisnet-blog'
            },
            {
                id:2,
                name:'Docs',
                href:'https://www.irisnet.org/docs/zh/'
            },
            {
                id:3,
                name:'Press Kit',
                href:'/community/press-kit'
            }
        ],
        productsTitle:'产品',
        resourcesTitle:'资源',
        errEmailAddress:{
            error:'Please enter a valid email address'
        },
        irisnetInproduction:'IRISnet以希腊彩虹女神Iris命名，她是在人间和天堂之间传递信息的忠诚使者'
    },
    cosmosNode:{
        header:{
            title:'Bianjie',
            commission:'佣金率',
            product:'由IRISnet核心开发团队维护的验证人节点',
            validatorAddress:'验证人地址',
            address:'cosmosvaloper1ssm0d433seakyak8kcf93yefhknjleeds4y3em',
            toastHint:'复制成功',
            bondedAtoms:'ATOM总数',
            votingPower:'权重',
            commissionRate:'佣金率',
            uptime:'活跃度',
            guide:'Cosmos Hub 钱包',
            guideHref:'https://hub.cosmos.network/#cosmos-hub-wallets'
        },
        about:{
            title:'关于IRISnet-Bianjie',
            secondTitle:'IRISnet的核心开发者，Cosmos的开源社区贡献者',
            irisnet:{
                title:'IRISnet 核心开发者',
                list:[
                    {
                        item:'在<a href="https://cosmos.network/about" target="_blank" style="color:rgba(77, 150, 223, 1)">Interchain Foundation (ICF)</a>的支持下构建IRISnet，这是一个用于构建分布式商业应用的Cosmos Hub'
                    },
                    {
                        item:'<a href="https://www.irisnet.org/" target="_blank" style="color:rgba(77, 150, 223, 1)">IRISnet</a> - 自进化的BPoS区块链'
                    },
                ]
            },
            cosmos:{
                title:'Cosmos的开源社区贡献者',
                list:[
                    {
                        item:'2019年3月14日成为Cosmos Hub主网创世验证人'
                    },
                    {
                        item:'从Gaia-1000直至主网上线成功参与Cosmos全部测试网'
                    },
                    {
                        item:'自2017年8月起为Cosmos中国社区提供专业的技术支持'
                    }
                ]
            }

        },
        bianjie:{
            title:'安全的边界，放心的委托',
            product:[
                {
                    src:require('../../assets/cosmosThree/service_room.png'),
                    text:'安全可靠的企业级机房',
                },
                {
                    src:require('../../assets/cosmosThree/net.png'),
                    text:'高可用性网络',
                },
                {
                    src:require('../../assets/cosmosThree/node.png'),
                    text:'可扩展的哨兵节点',
                },
                {
                    src:require('../../assets/cosmosThree/lock.png'),
                    text:'硬件加密保证安全',
                },
                {
                    src:require('../../assets/cosmosThree/hour.png'),
                    text:'7*24小时专业监控',
                },
                {
                    src:require('../../assets/cosmosThree/shield.png'),
                    text:'商业DDos攻击防护',
                }
            ]
        },
        cosmosExplorerTitle:'Cosmos Hub 浏览器',
        cosmosExplorer:[
            {
                active:false,
                whiteImg:require('../../assets/cosmosThree/big_dipper_plorer.png'),
                title:'Big Dipper',
                href:'https://cosmos.bigdipper.live/account/cosmos1ssm0d433seakyak8kcf93yefhknjleed4psy4g'
            },
            {
                active:false,
                whiteImg:require('../../assets/cosmosThree/hubble_plorer.png'),
                title:'Hubble',
                href:'https://hubble.figment.network/cosmos/chains/cosmoshub-2/validators/696ABC95186FD65A07050C28AB00C9358A315030'
            },
            {
                active:false,
                whiteImg:require('../../assets/cosmosThree/mintsacn_plorer.png'),
                title:'Mintscan',
                href:'https://www.mintscan.io/account/cosmos1ssm0d433seakyak8kcf93yefhknjleed4psy4g'
            },
            {
                active:false,
                whiteImg:require('../../assets/cosmosThree/Stargazer_plorer.png'),
                title:'Stargazer',
                href:'https://stargazer.certus.one/accounts/cosmos1ssm0d433seakyak8kcf93yefhknjleed4psy4g'
            },
        ]
    },
    ecosystemThree: {
        first: {
            title: 'IRIS 生态',
            content: 'IRIS 生态系统通过 IRIS 网络由不同的参与者组成，包括 IRIS Hub 的用户、开发者及验证人、连接 IRIS Hub 的区块链、构建在 IRIS SDK 或 Cosmos SDK 上的区块链应用、区块链开发工具、IRIS 跨链服务以及外部现实世界。',
            partner: '合作伙伴',
            img: require('../ecosystem_first.png')
        },
        second: {
            title: 'IRIS 生态',
            content1: 'Cosmos Hub是最终组成Cosmos网络的数千个互相连接的区块链中的第一个Hub。',
            content2: 'IRIS Hub 是支持 DeFi 等各种复杂分布式应用的跨链服务枢纽。IRIS Hub 采用 Cosmos SDK 开发，是第一个可自进化的 BPoS 网络。',
            content3: 'IRISnet 的核心开发团队维护了一个 Cosmos Hub 上的创世验证节点。',
            link1: '可使用',
            link2: 'Rainbow 钱包',
            link3: '将 ATOM 委托给',
            link4: 'cosmosvaloper1ssm0d433seakyak8kcf93yefhknjleeds4y3em',
            img: require('../ecosystem_second.png'),
            more: '了解更多',
            moreLink: '',
            rainbowLink: 'https://www.rainbow.one/',
            cosmosLink: 'https://hubble.figment.network/cosmos/chains/cosmoshub-3/validators/696ABC95186FD65A07050C28AB00C9358A315030'
        },
        third: {
            title: 'IBC 和 跨链大生态',
            content: 'IBC 跨链协议是连接全球经济和区块链技术的互操作性协议。',
            details: '查看详情',
            img: require('../ecosystem_third.png'),
            detailLink: 'https://cosmos.network/ibc',
        },
        fourth: {
            title: '验证人节点',
            content: '来自世界各地的验证人节点担负着代表委托人共同维护Bonded PoS区块链网络共识、安全运行和治理进化的光荣使命！',
            details: '查看详情',
            img: require('../ecosystem_fourth.png'),
            detailLink: 'https://mp.weixin.qq.com/s/CfCma5Lv7FnBYdimg_EZ1Q',
        },
        fifth: {
            title: 'IRITA',
            content1: '跨域行业互信联盟产品（Inter-Realm Industry Trust Alliance，简称 IRITA)，是 Cosmos 生态中第一个企业级联盟链产品，是基于现代区块链技术框架',
            content2: 'Tendermint ',
            content3: '和',
            content4: 'IRIS SDK ',
            content5: '，并结合边界智能团队多年行业经验打造的联盟链产品',
            details: '查看详情',
            img: require('../ecosystem_fifth.png'),
            detailLink: 'https://www.bianjie.ai/products/irita',
            tendermintLink: 'https://tendermint.com/',
            sdkLink: 'https://stage.bianjie.ai/products/irisnet'
        },
        brand: {
            title: '品牌资料',
            content: '这里有一些您可能需要的品牌资源和标志。',
            details: '查看详情',
            detailLink: 'https://www.irisnet.org/community/press-kit?lang=CN',
        },
    },
    announcement:{
        title:'基金会公告',
        viewMore:'查看更多',
        publicToken:{
            title:'IRISnet的公开地址',
            section:'IRIS基金会和开发团队的地址',
            date:'2019年3月2日',
            href:'https://github.com/irisnet/iris-foundation/blob/master/iris-public-token-address.md'
        },
        latestAnnouncement:[
            {
                title:'公告 | IRIS基金会第三次执行通证销毁计划，并宣布2020年延续该通证销毁计划',
                section:'2019年12月31日，IRIS基金会根据为期一年的通证销毁计划，执行了第三次销毁，通过两笔交易共销毁了 15,029,472 个 IRIS 通证，目前 IRIS 通证的总量为20亿个。',
                date:'2019年12月31日',
                href:'https://forum.irisnet.org/t/iris/314'
            },
            {
                title:'公告 | IRIS基金会第二次执行通证销毁计划',
                section:'2019年9月27日，IRIS基金会根据为期一年的通证销毁计划，执行了第二次销毁，通过两笔交易共销毁了14,304,888 个 IRIS 通证，目前 IRIS  通证的总量为20亿个。',
                date:'2019年9月27日',
                href:'https://forum.irisnet.org/t/iris/271'
            }
        ],
        faq:{
            title:'常见问题',
            viewMore:'查看更多',
            href:'https://medium.com/irisnet-blog/irisnet-%E5%B8%B8%E8%A7%81%E9%97%AE%E7%AD%94-cc7a59293823',
            list:[
                {
                    title:'什么是IRISnet？'
                },
                {
                    title:'IRIS的初始分配是怎样的？'
                },
                {
                    title:'IRISnet经济模型的架构是怎样的？'
                },
                {
                    title:'IRISnet和Cosmos是什么关系？'
                }
            ]
        }
    },
    events:{
        title: '近期活动',
        betaTitle:'IRISnet的公开地址',
        betaDate:'2019年3月2日',
        betaContent:'IRIS基金会和开发团队的地址',
        historyTitle:'全部历史',
        eventsList:[
            {
                id:'0',
                href:'https://mp.weixin.qq.com/s/bdNvbZMA7NOKWyfx4FRfEw',
                date:'2019年11月11日',
                title:'开发跨链的IRISnet--如何打通数字经济和实体经济',
                content:'抹茶AMA',
                src:require('../events_economy.jpg')
            },
            {
                id:'1',
                href:'https://mp.weixin.qq.com/s/bQCfqkB5TJLzkAKmV-HwuA',
                date:'2019年11月08日~2019年11月09日',
                title:'乌镇·一文读懂Web3.0的概念、推进与盈利模式',
                content:'2019世界区块链大会·乌镇',
                src:require('../events_wuzhen.png')
            },
            {
                id:'2',
                href:'https://mp.weixin.qq.com/s/PSFWeqWXS3dcfhO5A22Gsg',
                date:'2019年10月31日~2019年11月2日',
                year:'2019',
                month:'9月',
                day:'17',
                title:'2019中国系统架构师大会：数字转型 架构演进',
                content:'中国系统架构师大会',
                src:require('../events_architecture.png')
            },
            {
                id:'3',
                href:'https://mp.weixin.qq.com/s/LncVvKe3X8I7GAugYtwTZA',
                date:'2019年10月31日',
                year:'2019',
                month:'10月',
                day:'31',
                title:'IRISnet币安DEX空投活动来袭，500,000 大礼包等你来拿！',
                content:'币安DEX空投活动'
            },
            {
                id:'4',
                href:'https://mp.weixin.qq.com/s/NV34GBOfapbXAJUs9GzXog',
                date:'2019年10月15日~2019年10月21日',
                year:'2019',
                month:'10月',
                day:'15',
                title:'IRISnet发起币安DEX上币提案，助力赢50,000 IRIS大奖！',
                content:'助力赢50,000 IRIS大奖！'
            },
            {
                id:'5',
                href:'https://mp.weixin.qq.com/s/rLCi2By-yGFyu1-ysSqYtg',
                date:'2019年9月16日',
                year:'2019',
                month:'9月',
                day:'16',
                title:'IRISnet及Cosmos生态中的项目进展与应用 | 币乎直播回顾',
                content:'币乎直播回顾'
            },
            {
                id:'6',
                href:'https://mp.weixin.qq.com/s/rLCi2By-yGFyu1-ysSqYtg',
                date:'2019年8月30日',
                year:'2019',
                month:'8月',
                day:'30',
                title:'2019MiiX全球区块链应用生态开发者峰会',
                content:'MiiXCON'
            },
        ]
    },
    //TODO(lsc)
    announce:{
        title: '公告',
        betaTitle:'IRISnet的公开地址',
        betaDate:'2019年3月2日',
        betaContent:'IRIS基金会和开发团队的地址',
        historyTitle:'全部历史',
        src:require('../announcement_3.0.png'),
        announcementList:[
            {
                id:'0',
                href:'https://forum.irisnet.org/t/iris/314',
                date:'2019年12月31日',
                title:'公告 | IRIS基金会第三次执行通证销毁计划，并宣布2020年延续该通证销毁计划',
                content:'2019年12月31日，IRIS基金会根据为期一年的通证销毁计划，执行了第三次销毁，通过两笔交易共销毁了 15,029,472 个 IRIS 通证，目前 IRIS 通证的总量为20亿个。'
            },
            {
                id:'1',
                href:'https://forum.irisnet.org/t/iris/271',
                date:'2019年9月27日',
                title:'公告 | IRIS基金会第二次执行通证销毁计划',
                content:'2019年9月27日，IRIS基金会根据为期一年的通证销毁计划，执行了第二次销毁，通过两笔交易共销毁了14,304,888 个 IRIS 通证，目前 IRIS  通证的总量为20亿个。'
            },
            {
                id:'2',
                href:'https://forum.irisnet.org/t/irisnet-betanet-mainnet/263',
                date:'2019年9月17日',
                year:'2019',
                month:'9月',
                day:'17',
                title:'IRIS Hub上线200天，Betanet正式升级为Mainnet',
                content:'2019年3月1日，IRISHub的Betanet产出创世区块，网络正式启动。在上线200天之际正式宣布IRIS Hub开始以主网（Mainnet）身份运行。'
            },
            {
                id:'3',
                href:'https://forum.irisnet.org/t/iris-hub-v0-15-defi/254',
                date:'2019年8月30日',
                year:'2019',
                month:'8月',
                day:'30',
                title:'BPoS区块链历史首次！IRIS Hub v0.15平滑升级成功，三大核心功能赋能DeFi',
                content:'IRISnet主网IRIS Hub于北京时间2019年8月29日升级完成，这次升级是BPoS网络中首次对一个非兼容版本，在不硬分叉、不清空数据情况下的平滑升级。'
            },
            {
                id:'4',
                href:'https://forum.irisnet.org/t/irisnet/219',
                date:'2019/7/29',
                year:'2019',
                month:'7月',
                day:'29',
                title:'IRISnet发起新一轮漏洞赏金计划，参与赢大奖！',
                content:'IRISnet主网IRIS Hub即将升级至v0.15.0，为了确保新版本没有重大Bug或安全漏洞，我们将推出IRISnet 漏洞赏金计划 II，为v0.15.0主网升级做好准备。'
            },
            {
                id:'5',
                href:'https://forum.irisnet.org/t/iris/184',
                date:'2019/6/28',
                year:'2019',
                month:'6月',
                day:'28',
                title:'公告 | IRIS基金会第一次执行通证销毁计划',
                content:'IRISnet主网IRIS Hub于北京时间2019年8月29日升级完成，这次升级是BPoS网络中首次对一个非兼容版本，在不硬分叉、不清空数据情况下的平滑升级。'
            },
            {
                id:'6',
                href:'https://forum.irisnet.org/t/rainbow-v2-0-atom/166',
                date:'2019/6/21',
                year:'2019',
                month:'6月',
                day:'21',
                title:'Rainbow发布v2.0，新增支持ATOM钱包',
                content:'Rainbow v2.0于2019年6月21日发布，接入第二条公链Cosmos Hub，新增ATOM钱包功能'
            },
            {
                id:'7',
                href:'https://forum.irisnet.org/t/irisnet-tendermint/44',
                date:'2019/5/13',
                year:'2019',
                month:'5月',
                day:'13',
                title:'IRISnet & Tendermint携手加速开源区块链技术发展',
                content:'ICosmos 核心开发团队Tendermint 宣布IRISnet 为首要生态合作伙伴。'
            },
            {
                id:'8',
                href:'https://forum.irisnet.org/t/iris-foundation/37',
                date:'2019/5/12',
                year:'2019',
                month:'5月',
                day:'12',
                title:'IRIS Foundation 节点委托标准的说明',
                content:'基金会选择验证人节点的标准做出如下公开说明：'
            },
            {
                id:'9',
                href:'https://github.com/irisnet/iris-foundation/blob/master/iris-public-token-address.md',
                date:'2019/3/2',
                year:'2019',
                month:'3月',
                day:'2',
                title:'IRISnet的公开地址',
                content:'IRIS基金会和开发团队的地址'
            },
            {
                id:'10',
                href:'',
                date:'2019/2/1',
                year:'2019',
                month:'2月',
                day:'1',
                title:'Betanet 工作计划',
                content:'IRIS基金会非常高兴地宣布：IRIS主网启动的第一步，IRIS Betanet即将于2019年春节后（2月中旬）上线！'
            },
            {
                id:'11',
                href:'https://github.com/irisnet/iris-foundation/blob/master/iris-betanet-expectations_cn.md',
                date:'2019/1/16',
                year:'2019',
                month:'1月',
                day:'16',
                title:'对IRIS Betanet的期望',
                content:'为了帮助社区更好的参与IRIS Betanet，特此向社区沟通明确Betanet的一些期望：'
            },
            {
                id:'12',
                href:'https://github.com/irisnet/iris-foundation/blob/master/iris-betanet-plan_cn.md',
                date:'2019/1/16',
                year:'2019',
                month:'1月',
                day:'16',
                title:'IRIS基金会宣布Betanet启动计划 - IRIS主网启动的第一步',
                content:'新年伊始，IRIS基金会高兴地宣布，IRIS Betanet即将于2019年春节后（2月中旬）上线！'
            },


        ]
    },
    home: {
        bannerHref:"https://mp.weixin.qq.com/s/ybf5pt49dtVqRVYlVPuTNg",
        sectionOne: {
            title: '多资产功能赋能DeFi',
            time: '2019.8.29',
            content:'率先实现BPoS主网平滑升级',
            shareUrl: {
                telegramUrl: 'https://t.me/irisnetworkcn',
                githubUrl: 'https://github.com/irisnet/irishub',
                weChatUrl: ''
            },
            button: {
                buttonName: {
                    rainbowName: 'Rainbow 钱包',
                    explorerName: 'IRIS 浏览器'
                },
                buttonUrl: {
                    rainbowUrl: 'https://www.rainbow.one/',
                    explorerUrl: 'https://www.irisplorer.io'
                }
            }
        },
        irisnetBianJie:{
            commission:'Cosmos Hub Validator',
            development:'由IRISnet核心开发团队维护的 Cosmos Hub 创世节点',
            button:{
                buttonName: {
                    rainbowName: '委托ATOM',
                    explorerName: '查看节点详情'
                },
                buttonUrl: {
                    rainbowUrl: 'https://www.rainbow.one/',
                    explorerUrl: '/irisnet-bianjie'
                }
            }
        },
        irisnetVote:{
            commission:'委托IRIS参与链上治理 ',
            development:'为提案投票',
            button:{
                buttonName: {
                    voteName: '如何投票',
                },
                buttonUrl: {
                    voteUrl: 'https://mp.weixin.qq.com/s/3TqZr8GgySmzb8tWxo7GgQ',
                }
            }
        },
        bianDex:{
            commission:'充值Binance DEX 领空投活动',
            development:'500,000 IRIS 等你来拿',
            button:{
                buttonName: {
                    eventDetail: '活动详情',
                    howIsDex: '为何链接DEX',
                },
                buttonUrl: {
                    eventDetail: 'https://mp.weixin.qq.com/s/LncVvKe3X8I7GAugYtwTZA',
                    howIsDexUrl: 'https://mp.weixin.qq.com/s/RgyB7qBlwmc-VZyIqGv0sQ',
                }
            }
        },
        sectionTwo: {
            KeyInnovations: {
                title: '核心创新',
                list: [
                    {id: 0, msg: '将面向服务的基础设施融入到Cosmos网络中'},
                    {id: 1, msg: '整合由异构系统提供的商业服务，包括公共链、联盟链以及现有系统'},
                    {id: 2, msg: '通过区块链互联网实现服务的互联互通'}
                ],
                buttonMsg: '白皮书',
                WHITEPAPERUrl: 'https://github.com/irisnet/irisnet/blob/master/白皮书.md'
            },
            NetworkDesign: {
                title: '网络设计',
                list: [
                    {id: 0, msg: '通过标准的ABCI交易实现IRIS服务（也称为iServices）的注册，绑定，调用，查询，分析和管理'},
                    {id: 1, msg: 'iService提供商充当公共链、联盟区块链以及现有企业系统中业务逻辑的适配器'},
                    {id: 2, msg: '可以通过扩展的IBC协议在区块链互联网中调用iServices'}]
            }
        },
        sectionThree: {
            title: '路线图',
            road: [
                {id: 0, caption: '后羿', time: '2020年4月之后', msg: '第四阶段将专注通过技术创新，不断完善IRIS网络、SDK和手机客户端，吸引更多开发者参与。'},
                {id: 1, caption: '夸父', time: '2019年11月 - 2020年3月', msg: '第三阶段主要专注于通过 IBC， 完成 IRIS Hub 与应用专有链网络的连接。我们还计划升级IRISnet移动客户端以支持这些应用。第三阶段还将重点实现IRIS网络的迭代升级，以支持复杂的IRIS服务管理功能。'},
                {id: 2, caption: '女娲', time: '2019年4月 - 2019年10月', msg: '第二阶段我们将增加更多的基本模块以支持应用开发，特别是DeFi应用。这些新模块计划在本阶段发布，包括多资产管理、uni-swap、多签账户等。我们计划与1-2个生态伙伴合作，使用这些模块开发应用。我们还计划在此阶段完成与Cosmos Hub的测试连接。'},
                {id: 3, caption: '盘古', time: '2018年1月- 2019年3月', msg: 'IRISnet项目的第一阶段，我们专注于构建并启动 IRISnet 主网（Hub）。 初始版本的IRIS网络移动客户端已在本阶段发布。同时，我们也专注于 IRISnet 基本服务层的建立，已将其发布在 IRIS Hub 上，实现：服务定义、绑定、调用和查询。'}
            ]
        },
        sectionFour: {
            Collaboration: '合作方',
            CoreDevelopmentTeams: {
                title: '核心开发团队',
                logos: [
                    {id:0, path: require('../logos/irisnet_bianjiehover.png'), url: 'https://www.bianjie.ai/'},
                    {id:1, path: require('../logos/irisnet_tenderminthover.png'), url: 'https://tendermint.com/'}
                ]
            },
            StrategicPartners: {
                title: '战略合作伙伴',
                logos: [
                    {id:0, path: require('../logos/irisnet_InTERCHAIN.png'), url: 'https://cosmos.network/about'},
                   
                    {id:3, path: require('../logos/irisnet_HASHKEY.png'), url: 'https://www.hashkey.com/#/'}
                ]
            },
            EcosystemPartners: {
                title: '生态合作伙伴',
                logos: [
                    {id:0, path: require('../logos/irisnet_Platonlogo.png'), url: 'https://www.platon.network/#/index'},
                    {id:1, path: require('../logos/irisnet_coirfan.png'), url: 'http://iris.fan/#/'},
                    {id:2, path: require('../logos/irisnet_axonomy.png'), url: 'https://www.axonomy.pro'},
                    {id:3, path: require('../logos/irisnet_Gdex.png'), url: 'https://www.gdex.io/'},
                    {id:4, path: require('../logos/irisnet_hashgardhover.png'), url: 'https://www.hashgard.io/#/'},
                    {}
                ]
            },
            Institutional: {
                title: {msg1: '支持机构', msg2: '(排名不分先后)'},
                logos: [
                    {id:0, path: require('../logos/irisnet_AminoCapital.png'), url: 'http://www.aminocapital.com/'},
                    {id:1, path: require('../logos/irisnet_Bibox.png'), url: 'https://www.bibox.com/'},
                    {id:2, path: require('../logos/irisnet_huobi.png'), url: 'https://www.hbg.com/en-us/capital/'},
                    {id:3, path: require('../logos/irisnet_GBIC.png'), url: 'https://gbic.io/'},
                    {id:4, path: require('../logos/irisnet_8decim.png'), url: ''},
                    {id:5, path: require('../logos/irisnet_bihu.png'), url: 'https://bihu.com/'},// 1
                    {id:7, path: require('../logos/irisnet_BKfund.png'), url: ''},
                    {id:8, path: require('../logos/irisnet_byz.png'), url: ''},
                    {id:9, path: require('../logos/irisnet_ChainPE.png'), url: 'http://www.chainpe.com/'},
                    {id:10, path: require('../logos/irisnet_CP.png'), url: 'https://chainpool.io/'},
                    {id:11, path: require('../logos/irisnet_COEFFICIENT.png'), url: 'http://coefficient.network/'},// 2
                    {id:12, path: require('../logos/irisnet_gongshi.png'), url: 'http://consensuscapital.ca/'},
                    {id:13, path: require('../logos/irisnet_dushu.png'), url: ''},
                    {id:14, path: require('../logos/irisnet_genblock.png'), url: 'https://genblock.capital/'},
                    {id:15, path: require('../logos/irisnet_HAYEK.png'), url: ''},
                    {id:16, path: require('../logos/irisnet_INK.png'), url: 'http://ink.one/'},
                    {id:17, path: require('../logos/irisnet_LINKVCcopy.png'), url: 'http://www.linkvc.com/'},// 3
                    {id:18, path: require('../logos/irisnet_MediSHares.png'), url: 'http://medishares.org/'},
                    {id:19, path: require('../logos/irisnet_jieshi.png'), url: 'http://www.milestonevc.com/index.html'},
                    {id:20, path: require('../logos/irisnet_nirvana-logo-white.png'), url: 'http://nirvana.capital/'},
                    {id:21, path: require('../logos/irisnet_NGC.png'), url: 'http://ngc.fund/'},
                    {id:22, path: require('../logos/irisnet_origin.png'), url: 'http://www.theorigincapital.com/'},
                    {id:23, path: require('../logos/irisnet_SatoshiFUnd.png'), url: 'https://satoshi.fund/'},// 4
                    {id:24, path: require('../logos/irisnet_guigu.png'), url: 'http://www.svinsight.com/'},
                    {id:25, path: require('../logos/irisnet_shicuo.png'), url: 'http://www.8timescap.com/'},
                    {id:26, path: require('../logos/irisnet_huixiang.png'), url: ''},
                    {id:27, path: require('../logos/irisnet_Unetwork.png'), url: 'https://u.network/'},
                    {id:28, path: require('../logos/irisnet_jiuhe.png'), url: 'http://www.unityvc.com/'},
                    {id:29, path: require('../logos/irisnet_UA.png'), url: ''},//5
                    {id:30, path: require('../logos/irisnet_shuidi.png'), url: 'http://waterdrip.io/'},
                    {id:31, path: require('../logos/irisnet_yidao.png'), url: ''},
                    {id:32, path: require('../logos/irisnet_snz.png'), url: 'http://snzholding.com/'},
                ]
            }
        }
    },















    logo: 'irisnet.png',
    floatWindow:{
      title:'论坛',
    },
    header:{
        left:[
            {
                id:0,
                title:'白皮书',
                active:false,
            },
            {
                id:1,
                title:'合作方',
                active:false,
            },
            {
                id:2,
                title:'社区',
                active:false,
            }
        ],
        right:[
            {
                id:0,
                title:'主网',
                href:'',
                active: false,
            },
            {
                id:1,
                title:'文档',
                href:'https://www.irisnet.org/docs/',
                active: false,
            },
            {
                id:2,
                title:'论坛',
                href:'https://forum.irisnet.org/',
                active: false,
            },
            {
                id:3,
                title:'博客',
                href:'https://medium.com/irisnet-blog',
                active: false,
            },
        ],
        mobileNavigation:[
            {
                id:0,
                title:'主网',
                activeIndex: '',
                active:false,
            },
            {
                id:1,
                title:'测试网',
                activeIndex: '',
                active:false,
            },
            {
                id:2,
                title:'白皮书',
                activeIndex: 0,
                active:false,
            },
            {
                id:3,
                title:'路线图',
                activeIndex: 3,
                active:false,
            },
            {
                id:4,
                title:'合作方',
                activeIndex: 1,
                active:false,
            },
            {
                id:5,
                title:'社区',
                activeIndex: 2,
                active:false,
            },
           
        ],
        mobileLinkHrefNavigation:[
            {
                id: 0,
                title:'文档',
                href: "https://www.irisnet.org/docs/zh/",
            },
            {
                id:1,
                title:'论坛',
                href: "https://forum.irisnet.org/",
                activeIndex: '',
            },{
                id: 2,
                title:'博客',
                href: "https://medium.com/irisnet-blog",
            },
        ]
    },
    footer:{
        socialCommunityTitle: '社区',
        validatorCommunityTitle:'验证人',
        TechCommunityTitle: '开发者',
        socialCommunity:[
            {
                id:0,
                src: "irisnet_telegram_hover.png",
                href: "https://t.me/irisnetworkcn"
            },
            {
                id:1,
                src: "irisnet_twitter_hover.png",
                href: "https://twitter.com/irisnetwork"
            },
            {
                id:2,
                src: "irisnet_mail_hover.png",
                href: "mailto:contact@irisnet.org"
            },
            {
                id:3,
                src: "irisnet_medium_hover.png",
                href: "https://medium.com/irisnet-blog"
            },
            {
                id:4,
                src: "irisnet_wechat_hover.png",
                "txt": "Wechat"
            },
            {
                id:5,
                src: "irisnet_weibo_hover.png",
                href: "https://weibo.com/u/6455513027"
            },
        ],
        validatorCommunity:[
            {
                id:0,
                src: "irisnet_qq_hover.png",
                href: "http://qm.qq.com/cgi-bin/qm/qr?k=95CgDIPMXy5ZLEPF1pvd9GEh7ldWRI32"
            },
            {
                id:1,
                src: "irisnet_riot_hover.png",
                href: "https://riot.im/app/#/room/#irisvalidators:matrix.org"
            },
        ],
        techCommunity:[
            {
                id:0,
                src: "irisnet_github_hover.png",
                href: "https://github.com/irisnet"
            },
            {
                id:1,
                src: "irisnet_qq_hover.png",
                href: "https://jq.qq.com/?_wv=1027&k=51eKP77"
            },
            {
                id:2,
                src: "irisnet_riot_hover.png",
                href: "https://riot.im/app/#/room/#iris:matrix.org"
            },
        ],
        productList: [
            {
                id:0,
                name:'Rainbow Wallet',
                href:'https://www.rainbow.one/'
            },
            {
                id:1,
                name:'IRISplorer',
                href:'https://www.irisplorer.io'
            },
            {
                id:2,
                name:'Light Client',
                href:'https://www.irisnet.org/docs/zh/light-client/'
            },
            {
                id:3,
                name:'CLI Client',
                href:'https://www.irisnet.org/docs/zh/cli-client/'
            }
        ],
        resourceList: [
            {
                id:0,
                name:'FAQ',
                href:'https://www.irisnet.org/docs/resources/'
            },
            {
                id:1,
                name:'Blog',
                href:'https://medium.com/irisnet-blog'
            },
            {
                id:2,
                name:'Docs',
                href:'https://www.irisnet.org/docs/zh/'
            },
            {
                id:3,
                name:'Press Kit',
                href:'/community/press-kit'
            }
        ],
        productsTitle:'产品',
        resourcesTitle:'资源',
        submitBtn:{
            title: '获取最新资讯',
            subscribe: '提交',
            success: "Success"
        },
        errEmailAddress:{
            error:'Please enter a valid email address'
        },
        irisnetInproduction:'IRISnet以希腊彩虹女神Iris命名，她是在人间和天堂之间传递信息的忠诚使者'
    },
    mainnet:{
        title: 'IRIS Hub',
        production: '下一代分布式应用的跨链服务枢纽——自进化的BPoS区块链',
        wallet: 'Rainbow 钱包',
        walletHref:'https://www.rainbow.one/',
        explorer: 'IRIS 浏览器',
        explorerHref:'https://www.irisplorer.io/'
    },
    //todo(lsc)
    collaborationThree:{
        "title": "合作方",
        "core":{
            "title":"核心开发团队",
            "list":[
                {
                    "img":require("../collaboration/bianjieai.png"),
                    "pos":-56*0,
                    "title":"BIANJIE.AI",
                    "href":"https://www.bianjie.ai/"
                },
                {
                    "img":require("../collaboration/newtendermint.png"),
                    "pos":-56*1,
                    "title":"Tendermint",
                    "href":"https://tendermint.com"
                },
            ]
        },

        "strategy":{
            "title":"战略合作伙伴",
            "img":require("../collaboration/strategy.png"),
            "list":[
                {
                    "img":require("../collaboration/interchain.png"),
                    "pos":-56*0,
                    "title":"Interchain Foundation",
                    "href":"https://cosmos.network/about"
                },

                {
                    "img":require("../collaboration/hashkeygroup.png"),
                    "pos":-56*2,
                    "href":"https://www.hashkey.com/#/"
                },
            ]
        },
        "ecosystem":{
            "title":"生态合作伙伴",
            "img":require("../collaboration/hashgard.png"),
            "list":[
                {
                    "img":require("../collaboration/Platonlogo.png"),
                    "pos":-56*3,
                    "title":"Hashgard",
                    "href":" https://www.platon.network/#/index?lang=zh"
                },
                {
                    "img":require("../collaboration/hashquark.png"),
                    "pos":-56*3,
                    "title":"Hashgard",
                    "href":"https://www.hashquark.io/#/"
                },
                {
                    "img":require("../collaboration/hashgard.png"),
                    "pos":-56*3,
                    "title":"Hashgard",
                    "href":"https://www.hashgard.io/#/"
                }

            ]
        },
        "investment":{
            "title":"支持机构",
            "subtitle":"( 排名不分先后 )",
            "img":require("../collaboration/investment.png"),
            "list":[
                {
                    "img":require("../collaboration/AminoCapital.png"),
                    "pos":-56*0,
                    "title":"Amino Capital",
                    "href":"http://www.aminocapital.com"
                },
                {
                    "img":require("../collaboration/bibox.png"),
                    "title":"Bibox",
                    "href":"https://www.bibox.com/"
                },
                {
                    "img":require("../collaboration/huobiCapital.png"),
                    "title":"火币资本",
                    "href":"https://www.hbg.com/en-us/capital/"
                },
                {
                    "img":require("../collaboration/gbic.png"),
                    "title":"GBIC",
                    "href":"https://gbic.io/"
                },
                {
                    "img":require("../collaboration/bawei.png"),
                    "pos":-56*1,
                    "title":"8维资本",
                    "href":""
                },
                {
                    "img":require("../collaboration/bihu.png"),
                    "pos":-56*2,
                    "title":"BIHU",
                    "href":"https://bihu.com/"
                },
                {
                    "img":require("../collaboration/newbtts.png"),
                    "pos":-56*3,
                    "title":"BA Capital",
                    "href":""
                },
                {
                    "img":require("../collaboration/newBKfund.png"),
                    "pos":-56*4,
                    "title":"BKFund",
                    "href":""
                },
                {
                    "img":require("../collaboration/bzt.png"),
                    "pos":-56*5,
                    "title":"Byzantium",
                    "href":""
                },
                {
                    "img":require("../collaboration/chainPEter.png"),
                    "pos":-56*6,
                    "title":"Chain PE",
                    "href":"http://www.chainpe.com"
                },
                {
                    "img":require("../collaboration/cp.png"),
                    "pos":-56*7,
                    "title":"Chain Pool",
                    "href":"https://chainpool.io"
                },
                {
                    "img":require("../collaboration/coefficient.png"),
                    "pos":-56*8,
                    "title":"Coefficient",
                    "href":"http://coefficient.network"
                },
                {
                    "img":require("../collaboration/gszb.png"),
                    "pos":-56*9,
                    "title":"共识资本",
                    "href":"http://consensuscapital.ca"
                },
                {
                    "img":require("../collaboration/dsjj.png"),
                    "pos":-56*10,
                    "title":"读数资本",
                    "href":""
                },
                {
                    "img":require("../collaboration/genblock.png"),
                    "pos":-56*11,
                    "title":"Genblock",
                    "href":"https://genblock.capital"
                },
                {
                    "img":require("../collaboration/hayek.png"),
                    "pos":-56*12,
                    "title":"Hayak",
                    "href":""
                },
                {
                    "img":require("../collaboration/ink.png"),
                    "pos":-56*13,
                    "title":"Ink Labs",
                    "href":"http://ink.one"
                },
                {
                    "img":require("../collaboration/linkvc.png"),
                    "pos":-56*14,
                    "title":"LinkVC",
                    "href":"http://www.linkvc.com"
                },
                {
                    "img":require("../collaboration/newmedishares.png"),
                    "pos":-56*15,
                    "title":"Medi Shares",
                    "href":"http://medishares.org/"
                },
                {
                    "img":require("../collaboration/js.png"),
                    "pos":-56*16,
                    "title":"MILESTONE",
                    "href":"http://www.milestonevc.com/index.html"
                },
                {
                    "img":require("../collaboration/nirvanacapital.png"),
                    "pos":-56*16,
                    "title":"Nirvana Capital",
                    "href":"http://nirvana.capital/"
                },
                {
                    "img":require("../collaboration/ngc.png"),
                    "pos":-56*17,
                    "title":"NEO GLOBAL",
                    "href":"http://ngc.fund"
                },
                {
                    "img":require("../collaboration/y.png"),
                    "pos":-56*18,
                    "title":"Origin Capital",
                    "href":"http://www.theorigincapital.com"
                },
                {
                    "img":require("../collaboration/satoshifund.png"),
                    "pos":-56*19,
                    "title":"Satoshi Fund",
                    "href":"https://satoshi.fund"
                },
                {
                    "img":require("../collaboration/ggtm.png"),
                    "pos":-56*20,
                    "title":"SV Insight",
                    "href":"http://www.svinsight.com"
                },
                {
                    "img":require("../collaboration/sczb.png"),
                    "pos":-56*21,
                    "title":"时戳资本",
                    "href":""
                },
                {
                    "img":require("../collaboration/hxjj.png"),
                    "pos":-56*22,
                    "title":"Transference Fund",
                    "href":""
                },
                {
                    "img":require("../collaboration/unetwork.png"),
                    "pos":-56*23,
                    "title":"U Network",
                    "href":"https://u.network"
                },
                {
                    "img":require("../collaboration/jhct.png"),
                    "pos":-56*24,
                    "title":"WATERDRIP CAPITAL",
                    "href":"http://www.unityvc.com"                },
                {
                    "img":require("../collaboration/ua.png"),
                    "pos":-56*25,
                    "title":"",
                    "href":""
                },
                {
                    "img":require("../collaboration/sdzb.png"),
                    "pos":-56*25,
                    "title":"WATERDRIP CAPITAL",
                    "href":"http://waterdrip.io"
                },
                {
                    "img":require("../collaboration/ydzb.png"),
                    "pos":-56*25,
                    "title":"WATERDRIP CAPITAL",
                    "href":""
                }
            ]
        },

        "counsel":{
            "title":"Counsel",
            "img":require("../collaboration/counsel.png"),

            "list":[
                {
                    "img":require("../collaboration/ey.png"),
                    "pos":-56*0,
                    "title":"E&Y",
                    "href":"http://www.ey.com"
                },
                {
                    "img":require("../collaboration/king.png"),
                    "pos":-56*1,
                    "title":"KWM",
                    "href":"http://www.kwm.com/"
                }
            ]
        },


        "txt": [
            '核心技术团队',
            '战略合作伙伴'
        ],

        "list": [
            {
                "img":require("../collaboration/bianjie.png"),
                "title": "边界智能",
                "text": "bianjie.ai",
                "href": "https://bianjie.ai"
            },
            {
                "img":require("../collaboration/cosmos.png"),
                "title": "COSMOS",
                "text": "cosmos.network",
                "href": "https://cosmos.network"
            },
            {
                "img":require("../collaboration/tendermint.png"),
                "title": "Tendermint",
                "text": "tendermint.com",
                "href": "https://tendermint.com"
            },
            {
                "img":require("../collaboration/hashkeygroup.png"),
                "href": "https://www.hashkey.com/#/"
            },
            {
                "img":require("../collaboration/base.png"),
                "title": "万向新链加速器",
                "text": "newchainbase.com",
                "href": "http://www.newchainbase.com"
            },
            {
                "img":require("../collaboration/waterdrip.png"),
                "title": "水滴资本",
                "text": "waterdrip.io",
                "href": "http://waterdrip.io/"
            },
            {
                "img":require("../collaboration/medishares.png"),
                "title": "Medishares",
                "text": "medishares.org",
                "href": "https://medishares.org"
            },
            {
                "img":require("../collaboration/transference.png"),
                "title": "Transference",
                "text": "",
                "href": ""
            },
            {
                "img":require("../collaboration/bkfund.png"),
                "title": "BKFund",
                "text": "",
                "href": ""
            },
            {
                "img":require("../collaboration/timestamp.png"),
                "title": "时戳资本",
                "text": "",
                "href": ""
            },
        ],
        "btnTxt":"合作方"
    },
    devPortal:{
        first:{
            title:'在 IRIS Hub 上构建应用',
            damon:{
                title:'守护进程',
                href:'https://www.irisnet.org/docs/zh/daemon/intro.html'
            },
            client:{
                title:'命令行客户端',
                href:' https://www.irisnet.org/docs/zh/cli-client/intro.html'
            },
            server:{
                title:'API 服务器',
                href:'https://www.irisnet.org/docs/zh/light-client/intro.html'
            }
        },
        second:{
            title:'如何使用 iService？',
            content:'IRIS Services（又名“iService”）旨在对链下服务从定义、绑定（服务提供方注册）、调用到治理（分析和争端解决）的全生命周期传递，来跨越区块链世界和传统业务应用世界之间的鸿沟。',
            define:'1.服务定义',
            bind:'2.服务绑定',
            call:'3.服务调用',
            more:'了解更多',
            moreLink:'https://www.irisnet.org/docs/zh/features/service.html',
        },
        third:{
            title:'有帮助的工具',
            monitor:{
                title:'IRIS Hub 监控工具',
                href:'https://www.irisnet.org/docs/zh/tools/monitor.html',
            },
            management:{
                title:'KMS 密钥管理系统',
                href:'https://www.irisnet.org/docs/zh/tools/kms.html',
            },
            support:{
                title:'Ledger Nano 支持',
                href:'https://www.irisnet.org/docs/zh/tools/ledger.html',
            },
        },
        fourth:{
            title:'如何参与贡献',
            advice:'对开源项目 irishub 的贡献意味着很多事情，比如参与讨论或提出代码更改建议。',
            reference:'为了确保所有的参与者都能顺利地协作，这里有一份贡献的一般流程供您参考。',
            detail:'了解详情',
            detailLink:'https://github.com/irisnet/irishub/blob/master/CONTRIBUTING.md',
        },
        join : {
            title : '加入我们',
            github : {
                title : 'Github',
                href:'https://github.com/irisnet',
                src:require('../github_icon.png')
            },
            nyancat : {
                title : 'Nyancat',
                href:'https://github.com/irisnet/testnets/tree/master/nyancat',
                src:require('../nyancat_icon.png')
            },
            qq : {
                title : 'QQ',
                href:'http://qm.qq.com/cgi-bin/qm/qr?group_code=795301695',
                src:require('../qq_icon.png')
            },
            riot : {
                title : 'Riot',
                href:'https://riot.im/app/#/room/#iris:matrix.org',
                src:require('../riot_icon.png')
            }
        }
    },
    "ecosystem":{
        "title":"生态合作伙伴",
        "img":"collaboration/hashgard.png",
        "list":[
            {
                "img":"collaboration/Platonlogo.png",
                "pos":-56*3,
                "title":"Hashgard",
                "href":" https://www.platon.network/#/index?lang=zh"
            },
            {
                "img":"collaboration/hashquark.png",
                "pos":-56*3,
                "title":"Hashgard",
                "href":"https://www.hashquark.io/#/"
            },
            {
                "img":"collaboration/hashgard.png",
                "pos":-56*3,
                "title":"Hashgard",
                "href":"https://www.hashgard.io/#/"
            }

        ]
    },
    announcements:{
        title: '公告',
        viewMore: '查看更多',
        viewMoreHref:'https://github.com/irisnet/iris-foundation/blob/master/README.md',
        betaTitle:'IRISnet的公开地址',
        betaContent:'IRIS基金会和开发团队的地址',
        readMore:'Read more',
        readMoreHref:'https://github.com/irisnet/iris-foundation/blob/master/iris-public-token-address_cn.md',
        betaDate:'2019年3月2日',
        announcementList:[
            {
                id:'0',
                href:'https://forum.irisnet.org/t/iris/314',
                date:'2019年12月31日',
                title:'公告 | IRIS基金会第三次执行通证销毁计划，并宣布2020年延续该通证销毁计划',
                content:'2019年12月31日，IRIS基金会根据为期一年的通证销毁计划，执行了第三次销毁，通过两笔交易共销毁了 15,029,472 个 IRIS 通证，目前 IRIS 通证的总量为20亿个。'
            },
            {
                id:'1',
                href:'https://forum.irisnet.org/t/iris/271',
                date:'2019年9月27日',
                title:'公告 | IRIS基金会第二次执行通证销毁计划',
                content:'2019年9月27日，IRIS基金会根据为期一年的通证销毁计划，执行了第二次销毁，通过两笔交易共销毁了14,304,888 个 IRIS 通证，目前 IRIS  通证的总量为20亿个。'
            },
            {
                id:'2',
                href:'https://forum.irisnet.org/t/irisnet-betanet-mainnet/263',
                date:'2019年9月17日',
                title:'IRIS Hub上线200天，Betanet正式升级为Mainnet',
                content:'2019年3月1日，IRISHub的Betanet产出创世区块，网络正式启动。在上线200天之际正式宣布IRIS Hub开始以主网（Mainnet）身份运行。'
            },
            {
                id:'3',
                href:'https://forum.irisnet.org/t/iris-hub-v0-15-defi/254',
                date:'2019年8月30日',
                title:'BPoS区块链历史首次！IRIS Hub v0.15平滑升级成功，三大核心功能赋能DeFi',
                content:'IRISnet主网IRIS Hub于北京时间2019年8月29日升级完成，这次升级是BPoS网络中首次对一个非兼容版本，在不硬分叉、不清空数据情况下的平滑升级。'
            },
        ]
    },
    testnet:{
        fuxi:{
            title:'伏羲测试网',
            production: '伏羲测试网跟IRISnet主网运行相同的软件，为开发者社区提供稳定的测试环境（包括钱包、浏览器、服务提供者/消费者）。',
            testnetLink:'使用伏羲测试网',
            href:'https://www.irisnet.org/docs/zh/get-started/testnet.html#fuxi-%E6%B5%8B%E8%AF%95%E7%BD%91'
        },
        nyancat:{
            title:'彩虹猫测试网',
            production:'彩虹猫测试网通常运行比IRISnet主网更新版本，重点是在新版本发布到生产环境之前，为验证人提供参与网络共识、治理升级的验证测试环境。',
            testnetLink:'使用彩虹猫测试网',
            href:'https://www.irisnet.org/docs/zh/get-started/testnet.html#nyancat-%E6%B5%8B%E8%AF%95%E7%BD%91'
        }
    },
    community:{
        title: '社区',
        joinWay:[
            {
                id:'1',
                src:'irisnet_community_riot.png',
                name: 'Riot聊天室',
                linkName:'#iris:matrix.org',
                href: 'https://riot.im/app/#/room/#iris:matrix.org'
            },
            {
                id:'2',
                src:'irisnet_community_qq.png',
                name: 'QQ 群',
                linkName:'795301695',
                href: 'https://jq.qq.com/?_wv=1027&k=51eKP77'
            }
        ]
    },
    testnetPage:{
        title: '伏羲测试网',
        section:[
            {
                content:'伏羲测试网络经过数次迭代已经完成了使命。'
            },
            {
                content:'2019年2月，IRISnet开发团队发布了irishub v0.12.0，并成功启动了新的测试网络 (chain-id : fuxi)。'
            },
            {
                content:'伏羲测试网跟IRIS主网运行相同的软件，为开发者社区提供稳定的测试环境（包括钱包、浏览器、服务提供者/消费者）。'
            }
        ],
        joinTitle:'测试网浏览器（FUXI）',
        joinHref:'https://testnet.irisplorer.io/#/home',
        // faqTitle:'IRIShub常见问题',
        // faqHref:'https://www.irisnet.org/docs/zh/introduction/',
        explorerTitle:'测试网浏览器（Nyancat）',
        explorerHref:'https://nyancat.irisplorer.io/#/home',
    },
    newsLetter:{
        successTitle: '欢迎订阅IRISnet通讯',
        failedTitle: '订阅失败。',
        successText: '感谢您并对我们的项目感兴趣并加入订阅。\n' +
        '请检查您的收件箱，点击确认，开始接收我们的通讯和其他最新的更新。',
        failedText: '也许您已经订阅过了?\n' +
        '\n' +
        '如果没有，请再试一次或通过电子邮件contact@irisnet.org联系我们。',
        confirm: '确认'
    },
    communityPage:{
        pressKitContent:{
            title: '品牌资料',
            downloadTitle: '获取您可能需要的所有品牌资源和标志',
            downloadBtn: '资源目录',
            downloadHref:'https://www.irisnet.org/resources/'
        },
        ColorsContent:{
            title: '标志用色',
            colors:[
                {
                    color: '#009DDE'
                },
                {
                    color: '#694D9F'
                },
                {
                    color: '#ED3554'
                },
                {
                    color: '#2E3148'
                }
            ]
        },
        Standard:{
            title: '标志',
            StandardList:[
                {
                    id: 0,
                    imgUrl: 'presskit/irisnet_logo_black.png',
                    pngUrl: 'presskit/IRISNet rebrand Horizontal-black.png',
                    pngTitle: 'png',
                    svgUrl: 'presskit/IRISNet rebrand Horizontal-black.svg',
                    svgTitle: 'svg'
                },
                {
                    id: 1,
                    imgUrl: 'presskit/irisnet_logo_white.png',
                    pngUrl: 'presskit/IRISNet rebrand Horizontal-white.png',
                    pngTitle: 'png',
                    svgUrl: 'presskit/IRISNet rebrand Horizontal-white.svg',
                    svgTitle: 'svg'
                },
                {
                    id: 2,
                    imgUrl: 'presskit/irisnet_logo_column_black.png',
                    pngUrl: 'presskit/IRISnetlogo Vertical-black.png',
                    pngTitle: 'png',
                    svgUrl: 'presskit/IRISnetlogo Vertical-black.svg',
                    svgTitle: 'svg'
                },
                {
                    id: 3,
                    imgUrl: 'presskit/irisnet_logo_column_white.png',
                    pngUrl: 'presskit/IRISnetlogo Vertical-white.png',
                    pngTitle: 'png',
                    svgUrl: 'presskit/IRISnetlogo Vertical-white.svg',
                    svgTitle: 'svg'
                },
                {
                    id: 4,
                    imgUrl: 'presskit/iris_logo_black.png',
                    pngUrl: 'presskit/IRISnetRoundLogoWithoutText-black.png',
                    pngTitle: 'png',
                    svgUrl: 'presskit/IRISnetRoundLogoWithoutText-black.svg',
                    svgTitle: 'svg'
                },
                {
                    id: 5,
                    imgUrl: 'presskit/iris_logo_white.png',
                    pngUrl: 'presskit/IRISnetRoundLogoWithoutText-white.png',
                    pngTitle: 'png',
                    svgUrl: 'presskit/IRISnetRoundLogoWithoutText-white.svg',
                    svgTitle: 'svg'
                },
                {
                    id: 6,
                    imgUrl: 'presskit/irisnet-rebrand-capital-bg.png',
                    pngUrl: 'presskit/IRISnet-Rebrand-Capital-Black.png',
                    pngTitle: 'png',
                    svgUrl: 'presskit/IRISnet-Rebrand-Capital-Black.svg',
                    svgTitle: 'svg'
                },
            ]
        },
        aboutIrisnet:{
            title: '关于IRISnet',
            content: [
                {
                    id: 0,
                    item:'IRISnet：可以自进化的BPoS跨链服务枢纽'
                },
                {
                    id: 1,
                    item:'IRISnet（主网 IRIS Hub）是支持DeFi等各种复杂分布式应用的跨链服务枢纽。IRIS Hub采用Cosmos SDK开发，是第一个可自进化的BPoS网络，其开发团队包括获得多个技术创新大奖的边界智能（<a href="https://www.bianjie.ai/" target="_blank">Bianjie</a>）以及Cosmos核心开发团队<a href="https://tendermint.com" target="_blank">Tendermint</a>。'
                },
                {
                    id: 2,
                    item:'IRISnet提供支持DeFi应用开发的多种基础模块，并能支持公有链、联盟链以及传统商业系统之间的无缝集成，使得数据和复杂计算能够跨异构网络互联互通，实现服务的跨链调用。'
                }
            ],
            readMoreText:'更多说明内容...',
            readMoreHref:'https://github.com/irisnet/irisnet/blob/master/pressKit_CN.md',
        },
        title: '社区',
        eventsTitle:'近期活动',
        events: {
            left: [
              /*  {
                    img:'irisnet_event_2019_11_07_proof.png',
                    href:'https://www.chainnews.com/pov',
                    address:'中国，上海',
                    timestamp:'2019/12/06-/12/07',
                    title:'价值共识大会 2019',
                    signUp:'加入活动',
                    signUpUrl:'http://www.huodongxing.com/event/9511834747000?td=9802436480216',
                    viewMore:'',
                    viewMoreUrl:'',
                },*/
            ],
            right:[
            ]
        },
        faq:{
            faqTitle:'常见问题',
            faqImg:'/IRISnet_community_faq.png',
            faqList:{
                title: 'FAQ',
                list:[
                    {
                        item:'1. 什么是IRISnet？',
                    },
                    {
                        item:'2. IRIS的初始分配是怎样的？',
                    },
                    {
                        item:'3. IRISnet经济模型的架构是怎样的？',
                    },
                    {
                        item:'4. IRISnet和Cosmos是什么关系？',
                    },
                ],
                viewMore: '查看更多',
                viewMoreLink:'https://medium.com/irisnet-blog/irisnet-%E5%B8%B8%E8%A7%81%E9%97%AE%E7%AD%94-cc7a59293823'
            },
            ama:{
                title: '活动回顾',
                leftList: [
                    {
                        img:'irisnet_event_2019_11_08_max.jpg',
                        href:'https://mp.weixin.qq.com/s/bdNvbZMA7NOKWyfx4FRfEw',
                        title:'抹茶AMA',
                        content:'开发跨链的IRISnet--如何打通数字经济和实体经济'
                    },
                    {
                        img:'irisnet_event_2019_11_14.png',
                        href:'https://mp.weixin.qq.com/s/bQCfqkB5TJLzkAKmV-HwuA',
                        title:'2019世界区块链大会·乌镇',
                        content:'乌镇·一文读懂Web3.0的概念、推进与盈利模式'
                    },
                ],
                rightList:[
                    {
                        img:'irisnet_sacc.png',
                        href:'https://mp.weixin.qq.com/s/PSFWeqWXS3dcfhO5A22Gsg',
                        title:'中国系统架构师大会',
                        content:'2019中国系统架构师大会：数字转型架构演进'
                    },
                    {
                        img:'irisnet_event_10_25.png',
                        href:'https://mp.weixin.qq.com/s/NV34GBOfapbXAJUs9GzXog',
                        title:'助力赢50,000 IRIS大奖！',
                        content:'IRISnet发起币安DEX上币提案，助力赢50,000 IRIS大奖！'
                    },
                ],
            }
        },
        resources:{
            title:'资源',
            ResourceList:[
                {
                    img:'IRISnet_wallet.png',
                    name:'钱包',
                    href:'javascript:void(0);',
                    resourceList: [
                        {
                            itemName: 'Rainbow',
                            os:'(Android, iOS)',
                            href: 'https://www.rainbow.one/'
                        },
                        {
                            itemName: 'Math wallet',
                            os:'(Android, iOS)',
                            href: 'http://www.mathwallet.org/cn/'
                        },
                        {
                            itemName: 'Wetez',
                            os:'(Android, iOS)',
                            href: 'https://www.wetez.io/pc/homepage'
                        },
                        {
                            itemName: 'Cosmostation',
                            os:'(Android, iOS)',
                            href: 'https://www.cosmostation.io/'
                        },
                        {
                            itemName: ' SyncNode',
                            os:'(iOS)',
                            href: 'https://wallet.syncnode.ro/'
                        }

                    ],
                    content:'这些钱包支持IRIS及ATOM的转账和质押，请充分研究其安全性再使用。列示这些信息仅为方便下载，并不代表对钱包使用的安全性负责。',
                },
                {
                    img:'IRISnet_staking_tools.png',
                    name:'委托工具箱',
                    href:"javascript:void(0);",
                    resourceList: [
                        {
                            itemName: 'HashKey Hub',
                            href: 'https://hub.hashkey.com/#/'
                        },
                        {
                            itemName: 'Math Wallet',
                            production:'(Browser Extension, Web Wallet)',
                            href: 'https://mathwallet.net/web/irisnet'
                        },
                        {
                            itemName: '01node.com',
                            production:'(Ledger)',
                            href: 'https://iris-delegator.01node.com'
                        },
                        {
                            itemName: 'Cosmostation',
                            production:'(Ledger)',
                            href: 'https://wallet.cosmostation.io/?network=iris'
                        },

                    ],
                    content:'这些工具由IRISnet的社区验证人或开发者贡献，方便IRIS的持有者通过网页钱包、Ledger硬件钱包等进行委托，请充分研究其安全性再使用。'
                },
                {
                    img:'IRISnet_community_explorer.png',
                    name:'浏览器',
                    href:'javascript:void(0);',
                    resourceList: [
                        {
                            itemName: 'IRISplorer',
                            href: 'https://www.irisplorer.io/#/validators'
                        },
                        {
                            itemName: 'Big-Dipper',
                            href: 'https://iris.bigdipper.live/'
                        },
                        {
                            itemName: 'Hubble',
                            href: 'https://hubble.figment.network/iris/chains/irishub'
                        },
                        {
                            itemName: 'Mintscan',
                            href: 'https://irishub.mintscan.io/'
                        },
	                    {
		                    itemName: 'LOOK',
		                    href: 'https://look.ping.pub/validator?chain=irishub'
	                    }
                    ],
                    content:'您可通过以上区块链浏览器查询和分析 IRIS Hub 的区块、交易、验证人等信息。',
                },
                {
                    img:'IRISnet_press_kit.png',
                    name:'品牌资料',
                    content:'获取您可能需要的所有品牌资源和标志。',
                    href:'/community/press-kit',
                },
                {
                    img:'IRISnet_doc.png',
                    name:'文档',
                    content:'下一代分布式应用的跨链服务网络——自进化的BPoS区块链。',
                    href:'javascript:void(0);',
	                resourceList:[
		                {
			                itemName: '伏羲测试网',
			                href: 'https://www.irisnet.org/docs/zh/get-started/Join-the-Testnet.html'
		                },
		                {
			                itemName: '彩虹猫测试网',
			                href: 'https://github.com/irisnet/testnets/tree/master/nyancat'
		                },
		                {
			                itemName: '加入主网',
			                href: 'https://www.irisnet.org/docs/zh/get-started/Join-the-Mainnet.html'
		                },
		                {
			                itemName: '命令行',
			                href: 'https://www.irisnet.org/docs/zh/cli-client/'
		                },
		                {
			                itemName: '轻客户端',
			                href: 'https://www.irisnet.org/docs/zh/light-client/'
		                },
	                ]
                }
            ]
        }
    },
    cosmos:{
        cn:{
            header:{
                title:'Bianjie',
                commission:'佣金率',
                product:'由IRISnet核心开发团队维护的验证人节点',
                validatorAddress:'验证人地址',
                address:'cosmosvaloper1ssm0d433seakyak8kcf93yefhknjleeds4y3em',
                toastHint:'复制成功',
                bondedAtoms:'ATOM总数',
                votingPower:'权重',
                commissionRate:'佣金率',
                uptime:'活跃度',
                guide:'Cosmos Hub 钱包',
                guideHref:'https://hub.cosmos.network/#cosmos-hub-wallets'
            },
            about:{
                title:'关于IRISnet-Bianjie',
                secondTitle:'IRISnet的核心开发者，Cosmos的开源社区贡献者',
                irisnet:{
                    title:'IRISnet 核心开发者',
                    list:[
                        {
                            item:'在<a href="https://cosmos.network/about" target="_blank" style="color:rgba(77, 150, 223, 1)">Interchain Foundation (ICF)</a>的支持下构建IRISnet，这是一个用于构建分布式商业应用的Cosmos Hub'
                        },
                        {
                            item:'<a href="https://www.irisnet.org/" target="_blank" style="color:rgba(77, 150, 223, 1)">IRISnet</a> - 自进化的BPoS区块链'
                        },
                    ]
                },
                cosmos:{
                    title:'Cosmos的开源社区贡献者',
                    list:[
                        {
                            item:'2019年3月14日成为Cosmos Hub主网创世验证人'
                        },
                        {
                            item:'从Gaia-1000直至主网上线成功参与Cosmos全部测试网'
                        },
                        {
                            item:'自2017年8月起为Cosmos中国社区提供专业的技术支持'
                        }
                    ]
                }

            },
            bianjie:{
                title:'安全的边界，放心的委托',
                product:[
                    {
                        src:require('../../assets/cosmosThree/service_room.png'),
                        text:'安全可靠的企业级机房',
                    },
                    {
                        src:require('../../assets/cosmosThree/net.png'),
                        text:'高可用性网络',
                    },
                    {
                        src:require('../../assets/cosmosThree/node.png'),
                        text:'可扩展的哨兵节点',
                    },
                    {
                        src:require('../../assets/cosmosThree/lock.png'),
                        text:'硬件加密保证安全',
                    },
                    {
                        src:require('../../assets/cosmosThree/hour.png'),
                        text:'7*24小时专业监控',
                    },
                    {
                        src:require('../../assets/cosmosThree/shield.png'),
                        text:'商业DDos攻击防护',
                    }
                ]
            },
            cosmosExplorerTitle:'Cosmos Hub 浏览器',
            cosmosExplorer:[
                {
                    active:false,
                    whiteImg:require('../../assets/cosmosThree/big_dipper_plorer.png'),
                    // blueImg:require('../../assets/cosmos/big-dipper_blue.png'),
                    title:'Big Dipper',
                    href:'https://cosmos.bigdipper.live/account/cosmos1ssm0d433seakyak8kcf93yefhknjleed4psy4g'
                },
                {
                    active:false,
                    whiteImg:require('../../assets/cosmosThree/hubble_plorer.png'),
                    // blueImg:require('../../assets/cosmos/hubble_blue.png'),
                    title:'Hubble',
                    href:'https://hubble.figment.network/cosmos/chains/cosmoshub-2/validators/696ABC95186FD65A07050C28AB00C9358A315030'
                },
                {
                    active:false,
                    whiteImg:require('../../assets/cosmosThree/mintsacn_plorer.png'),
                    // blueImg:require('../../assets/cosmos/Mintscan_blue.png'),
                    title:'Mintscan',
                    href:'https://www.mintscan.io/account/cosmos1ssm0d433seakyak8kcf93yefhknjleed4psy4g'
                },
                {
                    active:false,
                    whiteImg:require('../../assets/cosmosThree/Stargazer_plorer.png'),
                    // blueImg:require('../../assets/cosmos/Stargazer_blue.png'),
                    title:'Stargazer',
                    href:'https://stargazer.certus.one/accounts/cosmos1ssm0d433seakyak8kcf93yefhknjleed4psy4g'
                },
            ]
        }
    },
    "white":'public/whiteDwCn.png',
    "whiteHref":"https://github.com/irisnet/irisnet/blob/master/白皮书.md",
    "next": 'what_next.png',
    "head": {
        'txt': [
            {
                'txt': "白皮书",
                "href": "#/0/1",
            },
            {
                'txt': "合作方",
                "href": "#/0/3",
            },
            {
                'txt': "联系方式",
                "href": "#/0/5",
            },
        ]
    },
    "contact": {
        "img": [
            {
                "src": "telegram-default.png",
                "src_selected": "telegram.png",
                "txt": "Telegram",
                "href": "https://t.me/irisnetworkcn"
            },
            {
                "src": "twitter-default.png",
                "src_selected": "newtwitter.png",
                "txt": "Twitter",
                "href": "https://twitter.com/irisnetwork"
            },

            {
                "src": "github-default.png",
                "src_selected": "newgithub.png",
                "txt": "Github",
                "href": "https://github.com/irisnet"
            },
            {
                "src": "email-default.png",
                "src_selected": "email.png",
                "txt": "Email",
                "href": "mailto:contact@irisnet.org"
            },
            {
                "src": "medium-default.png",
                "src_selected": "newmedium.png",
                "txt": "Medium",
                "href": "https://medium.com/irisnet-blog"
            },
            {
                "src": "riot-default.png",
                "src_selected": "newriot.png",
                "txt": "Riot",
                "href": "https://riot.im/app/#/room/!bmimZgJrUWSmxqQEmG:matrix.org"
            },
            {
                "src": "wechat-default.png",
                "src_selected": "newwechat.png",
                "txt": "Wechat"
            },
            {
                "src": "weibo-default.png",
                "src_selected": "newweibo.png",
                "txt": "Weibo",
                "href": "https://weibo.com/u/6455513027"
            },
        ],
        "title": "联系方式"
    },
    "collaboration": {
        "title": "合作方",
        "core":{
            "title":"核心开发团队",
            "list":[
                {
                    "img":"collaboration/bianjieai.png",
                    "pos":-56*0,
                    "title":"BIANJIE.AI",
                    "href":"https://www.bianjie.ai/"
                },
                {
                    "img":"collaboration/newtendermint.png",
                    "pos":-56*1,
                    "title":"Tendermint",
                    "href":"https://tendermint.com"
                },
            ]
        },

        "strategy":{
            "title":"战略合作伙伴",
            "img":"collaboration/strategy.png",
            "list":[
                {
                    "img":"collaboration/interchain.png",
                    "pos":-56*0,
                    "title":"Interchain Foundation",
                    "href":"https://cosmos.network/about"
                },

                {
                    "img":"collaboration/hashkeygroup.png",
                    "pos":-56*2,
                    "href":"https://www.hashkey.com/#/"
                },
            ]
        },
        "ecosystem":{
            "title":"生态合作伙伴",
            "img":"collaboration/hashgard.png",
            "list":[
                {
                    "img":"collaboration/Platonlogo.png",
                    "pos":-56*3,
                    "title":"Hashgard",
                    "href":" https://www.platon.network/#/index?lang=zh"
                },
                {
                    "img":"collaboration/hashquark.png",
                    "pos":-56*3,
                    "title":"Hashgard",
                    "href":"https://www.hashquark.io/#/"
                },
                {
                    "img":"collaboration/hashgard.png",
                    "pos":-56*3,
                    "title":"Hashgard",
                    "href":"https://www.hashgard.io/#/"
                }

            ]
        },
        "investment":{
            "title":"支持机构",
            "subtitle":"( 排名不分先后 )",
            "img":"collaboration/investment.png",
            "list":[
                {
                    "img":"collaboration/AminoCapital.png",
                    "pos":-56*0,
                    "title":"Amino Capital",
                    "href":"http://www.aminocapital.com"
                },
                {
                    "img":"collaboration/bibox.png",
                    "title":"Bibox",
                    "href":"https://www.bibox.com/"
                },
                {
                    "img":"collaboration/huobiCapital.png",
                    "title":"火币资本",
                    "href":"https://www.hbg.com/en-us/capital/"
                },
                {
                    "img":"collaboration/gbic.png",
                    "title":"GBIC",
                    "href":"https://gbic.io/"
                },
                {
                    "img":"collaboration/bawei.png",
                    "pos":-56*1,
                    "title":"8维资本",
                    "href":""
                },
                {
                    "img":"collaboration/bihu.png",
                    "pos":-56*2,
                    "title":"BIHU",
                    "href":"https://bihu.com/"
                },
                {
                    "img":"collaboration/newbtts.png",
                    "pos":-56*3,
                    "title":"BA Capital",
                    "href":""
                },
                {
                    "img":"collaboration/newBKfund.png",
                    "pos":-56*4,
                    "title":"BKFund",
                    "href":""
                },
                {
                    "img":"collaboration/bzt.png",
                    "pos":-56*5,
                    "title":"Byzantium",
                    "href":""
                },
                {
                    "img":"collaboration/chainPEter.png",
                    "pos":-56*6,
                    "title":"Chain PE",
                    "href":"http://www.chainpe.com"
                },
                {
                    "img":"collaboration/cp.png",
                    "pos":-56*7,
                    "title":"Chain Pool",
                    "href":"https://chainpool.io"
                },
                {
                    "img":"collaboration/coefficient.png",
                    "pos":-56*8,
                    "title":"Coefficient",
                    "href":"http://coefficient.network"
                },
                {
                    "img":"collaboration/gszb.png",
                    "pos":-56*9,
                    "title":"共识资本",
                    "href":"http://consensuscapital.ca"
                },
                {
                    "img":"collaboration/dsjj.png",
                    "pos":-56*10,
                    "title":"读数资本",
                    "href":""
                },
                {
                    "img":"collaboration/genblock.png",
                    "pos":-56*11,
                    "title":"Genblock",
                    "href":"https://genblock.capital"
                },
                {
                    "img":"collaboration/hayek.png",
                    "pos":-56*12,
                    "title":"Hayak",
                    "href":""
                },
                {
                    "img":"collaboration/ink.png",
                    "pos":-56*13,
                    "title":"Ink Labs",
                    "href":"http://ink.one"
                },
                {
                    "img":"collaboration/linkvc.png",
                    "pos":-56*14,
                    "title":"LinkVC",
                    "href":"http://www.linkvc.com"
                },
                {
                    "img":"collaboration/newmedishares.png",
                    "pos":-56*15,
                    "title":"Medi Shares",
                    "href":"http://medishares.org/"
                },
                {
                    "img":"collaboration/js.png",
                    "pos":-56*16,
                    "title":"MILESTONE",
                    "href":"http://www.milestonevc.com/index.html"
                },
                {
                    "img":"collaboration/nirvanacapital.png",
                    "pos":-56*16,
                    "title":"Nirvana Capital",
                    "href":"http://nirvana.capital/"
                },
                {
                    "img":"collaboration/ngc.png",
                    "pos":-56*17,
                    "title":"NEO GLOBAL",
                    "href":"http://ngc.fund"
                },
                {
                    "img":"collaboration/y.png",
                    "pos":-56*18,
                    "title":"Origin Capital",
                    "href":"http://www.theorigincapital.com"
                },
                {
                    "img":"collaboration/satoshifund.png",
                    "pos":-56*19,
                    "title":"Satoshi Fund",
                    "href":"https://satoshi.fund"
                },
                {
                    "img":"collaboration/ggtm.png",
                    "pos":-56*20,
                    "title":"SV Insight",
                    "href":"http://www.svinsight.com"
                },
                {
                    "img":"collaboration/sczb.png",
                    "pos":-56*21,
                    "title":"时戳资本",
                    "href":""
                },
                {
                    "img":"collaboration/hxjj.png",
                    "pos":-56*22,
                    "title":"Transference Fund",
                    "href":""
                },
                {
                    "img":"collaboration/unetwork.png",
                    "pos":-56*23,
                    "title":"U Network",
                    "href":"https://u.network"
                },
                {
                    "img":"collaboration/jhct.png",
                    "pos":-56*24,
                    "title":"WATERDRIP CAPITAL",
                    "href":"http://www.unityvc.com"                },
                {
                    "img":"collaboration/ua.png",
                    "pos":-56*25,
                    "title":"",
                    "href":""
                },
                {
                    "img":"collaboration/sdzb.png",
                    "pos":-56*25,
                    "title":"WATERDRIP CAPITAL",
                    "href":"http://waterdrip.io"
                },
                {
                    "img":"collaboration/ydzb.png",
                    "pos":-56*25,
                    "title":"WATERDRIP CAPITAL",
                    "href":""
                }
            ]
        },

        "counsel":{
            "title":"Counsel",
            "img":"collaboration/counsel.png",

            "list":[
                {
                    "img":"collaboration/ey.png",
                    "pos":-56*0,
                    "title":"E&Y",
                    "href":"http://www.ey.com"
                },
                {
                    "img":"collaboration/king.png",
                    "pos":-56*1,
                    "title":"KWM",
                    "href":"http://www.kwm.com/"
                }
            ]
        },


        "txt": [
            '核心技术团队',
            '战略合作伙伴'
        ],

        "list": [
            {
                "img": "collaboration/bianjie.png",
                "title": "边界智能",
                "text": "bianjie.ai",
                "href": "https://bianjie.ai"
            },
            {
                "img": "collaboration/cosmos.png",
                "title": "COSMOS",
                "text": "cosmos.network",
                "href": "https://cosmos.network"
            },
            {
                "img": "collaboration/tendermint.png",
                "title": "Tendermint",
                "text": "tendermint.com",
                "href": "https://tendermint.com"
            },
            {
                "img": "collaboration/hashkeygroup.png",
                "href": "https://www.hashkey.com/#/"
            },
            {
                "img": "collaboration/base.png",
                "title": "万向新链加速器",
                "text": "newchainbase.com",
                "href": "http://www.newchainbase.com"
            },
            {
                "img": "collaboration/waterdrip.png",
                "title": "水滴资本",
                "text": "waterdrip.io",
                "href": "http://waterdrip.io/"
            },
            {
                "img": "collaboration/medishares.png",
                "title": "Medishares",
                "text": "medishares.org",
                "href": "https://medishares.org"
            },
            {
                "img": "collaboration/transference.png",
                "title": "Transference",
                "text": "",
                "href": ""
            },
            {
                "img": "collaboration/bkfund.png",
                "title": "BKFund",
                "text": "",
                "href": ""
            },
            {
                "img": "collaboration/timestamp.png",
                "title": "时戳资本",
                "text": "",
                "href": ""
            },
        ],
        "btnTxt":"合作方"
    },
    "about": {

        "title": '核心创新',
        "imgtxt": " 助力打造分布式商业应用",
        "txt": [
            '将面向服务的基础设施融入到Cosmos网络中',
            '整合由异构系统提供的商业服务，包括公共链、联盟链以及现有系统',
            '通过区块链互联网实现服务的互联互通'
        ],
        "btnTxt":"白皮书",
        "checkTxt":"网络设计"
    },
    "network": {
        "title": '网络设计',
        "txt": [
            '通过标准的ABCI交易实现IRIS服务（也称为iServices）的' +
            '注册，绑定，调用，查询，分析和管理',
            'iService提供商充当公共链、联盟区块链以及现有企业系统中业务逻辑的适配器',
            '可以通过扩展的IBC协议在区块链互联网中调用iServices'
        ],
        "src": 'white.png'
    },
    "privacy": {
        "title": "IRIS Foundation Limited",
        "title1": "Privacy policy",
        "list": [
            {
                'title': "Introduction",
                "txtList": [
                    'We are IRIS Foundation Limited, a company limited by guarantee and incorporated in Hong Kong (“the Foundation”, ' +
                    '“we” or “us”). ',
                    'Your privacy is important to us.  We are committed to protecting the privacy, confidentiality and security of the personal data we hold by ' +
                    'complying with the requirements under applicable laws and regulations.  We are equally committed to ensuring that all our employees, service ' +
                    'providers and agents uphold these obligations.',
                    'This policy explains how we manage personal data within our organization.'
                ]
            },
            {
                'title': "How we collect personal data",
                "txtList": [
                    'We collect personal data about you in the following ways: ',
                    '<ul>' +
                    '<li>where you register for an account or to receive emails from us</li>' +
                    '<li>when you order products or services from us</li>' +
                    '<li>when you submit a query or request to us</li>' +
                    '<li>when you respond to a survey that we run or fill in forms on one of our websites</li>' +
                    '<li>by tracking your use of our websites and mobile applications</li>' +
                    '<li>from public sources</li>' +
                    '<li>from examination of public and private blockchains</li>' +
                    '<li>from third parties who are entitled to disclose that information to us</li>' +
                    '<li>when you apply for a job with us</li>' +
                    '</ul> ',
                    'In some cases we may be required by law to collect certain types of personal data about you.',
                    'Where we collect personal data from you, we will generally do so ourselves.  However, in some cases ' +
                    'we may collect personal data from a third party, such as through your representatives, contractors who ' +
                    'provide services to us, or third parties who refer you to us because they think you may be interested in our ' +
                    'products or services.'
                ]
            },
            {
                'title': "Kinds of personal data we collect",
                "txtList": [
                    'The kinds of personal data that we collect and hold about you may include: ',
                    '<ul>' +
                    '<li>identifying information, such as your real name, nationality, ID type, ID number and other information required by the laws and regulations</li>' +
                    '<li>contact information, such as your postal address, email address and telephone number personal information</li>' +
                    '<li>social media handles and other social media profile information that you make available to us or to the public</li>' +
                    '<li>financial information, such as credit card, bank account or other payment details</li>' +
                    '<li>blockchain identifiers, such as blockchain addresses and public keys</li>' +
                    '<li>usernames and passwords that you create when registering for an account with us</li>' +
                    '<li>details of any products or services that we provide to you</li>' +
                    '<li>information about how you use the products and services we provide</li>' +
                    '<li>records of our communications with you, including any messages you send us</li>' +
                    '</ul> ',
                    'Without this information, we may not be able to provide you with our products or services (or with all of the features and functionality offered by our products or services) or to respond to queries or requests that you submit to us.'
                ]
            },
            {
                'title': "Purposes for which we use personal data",
                "txtList": [
                    'We use personal data that we collect about you for the following purposes: ',
                    '<ul>' +
                    '<li>to verify your identity when you are dealing with us</li>' +
                    '<li>to determine your eligibility for any of our products or services</li>' +
                    '<li>to determine your compliance with the terms and conditions that apply to any of our products or services and applicable law</li>' +
                    '<li>to enable us to provide our products and services</li>' +
                    '<li>to improve our website based on your information and feedback</li>' +
                    '<li>to answer your queries and requests</li>' +
                    '<li>to comply with our legal and regulatory obligations</li>' +
                    '<li>to carry out market analysis and research</li>' +
                    '<li>to monitor use of our products and services</li>' +
                    '<li>to assess, maintain, upgrade and improve our products and services</li>' +
                    '<li>to carry out education and training programs for our staff</li>' +
                    '<li>to manage and resolve any legal or commercial complaints or issues</li>' +
                    '<li>to carry out planning and forecasting activities and other internal business processes</li>' +
                    '<li>to keep you informed about our activities, including by sending out newsletters</li>' +
                    '<li>to connect you with our users of our products and services</li>' +
                    '</ul> '
                ]
            },
            {
                'title': "Direct marketing",
                "txtList": [
                    'We may from time to time use your personal data in order to send you marketing materials about products ' +
                    'or services that we think you may be interested in (including in some cases products and services that ' +
                    'are provided by a third party).  We may not use your personal data unless we have received your consent.  ' +
                    'You can opt-out of receiving marketing communications from us by contacting us at ' +
                    '<a href="mailto:contact@irisnet.org" >contact@irisnet.org </a>. ',
                    'We may use your following personal data for the purpose of direct marketing:  ',
                    '<ul>' +
                    '<li>identifying information, such as your name and date of birth</li>' +
                    '<li>contact information, such as your postal address, email address and telephone number</li>' +
                    '<li>products and services portfolio information and demographic data held by us from time to time</li>' +
                    '</ul> ',
                    'We may use your personal data to market the following products and/or services to you:',
                    '<ul>' +
                    '<li>purchasing and/or trading digital assets</li>' +
                    '<li>providing, managing or accessing mobile wallets for holding digital assets; and</li>' +
                    '<li>other products or services related to digital assets</li>' +
                    '</ul> ',
                    'If we use your personal data in any direct marketing communications, you have the right to request that we provide ' +
                    'you with the source of that personal data.  There is no fee for requesting this information.  We will provide you ' +
                    'with the source of the personal data, unless it is impracticable or unreasonable to do so. ',
                    'Please indicate your consent to receiving information relating to the above by contacting us at ' +
                    '<a href="mailto:contact@irisnet.org" >contact@irisnet.org </a> . ',
                    'We may also use and disclose your information for other purposes in accordance with your requests or instructions.'
                ]
            },
            {
                'title': "People to whom we may disclose personal data",
                "txtList": [
                    'We may share personal data about you with: ',
                    '<ul>' +
                    '<li>your representatives, advisers and others you have authorised to interact with us on your behalf</li>' +
                    '<li>our staff who need the information to discharge their duties</li>' +
                    '<li>related entities within our corporate group</li>' +
                    '<li>our business partners, agents and service providersp</li>' +
                    '<li>payment system operators and financial institutions</li>' +
                    '<li>prospective purchasers of all or part of our business or a related entity</li>' +
                    '<li>professional advisers who we engage to provide advice on our business</li>' +
                    '<li>government authorities who ask us to disclose that information, or to other people as required by law</li>' +
                    '</ul> ',
                    'In some cases the people to whom we disclose your personal information may be located overseas.  Further, we may have servers ' +
                    'located overseas.  The jurisdictions in which these people and/or servers are likely to be located include  the United States, Japan, ' +
                    'and Singapore.  There may not be in place data protection laws which are substantially similar to, or serve the same purposes as the ' +
                    'applicable data privacy laws in Hong Kong.  This means your personal information may not be protected to the same or similar level in Hong Kong. ',
                    '[<span>We will never sell your personal data to any third party.</span>] [<span><b>optional clause</b></span>]'
                ]
            },
            {
                'title': "Cookies <div class='div1'>[optional clause, to be used if cookies are relevant to your business]</div> ",
                "txtList": [
                    '<span>[We use cookies to monitor and observe your use of our websites, compile aggregate data about that use, ' +
                    'and provide you with a more effective service (which may include customising parts of our websites based on ' +
                    'your preferences and past activities on those websites).  <b>"Cookies"</b> are small text files created and stored on ' +
                    'your hard drive by your internet browser software, in order to hold relevant information about the web page you are ' +
                    'currently viewing.  Most internet browsers have a facility that will allow you to disable cookies altogether – ' +
                    'please refer to your browser’s help menu to find out how to do this.  While you will still be able to browse our websites ' +
                    'with cookies disabled on your internet browser, some website functionality may not be available or may not function correctly.]</span> ',
                ]
            },
            {
                'title': "Storage and security of personal data ",
                "txtList": [
                    'We generally store the personal data that we collect in electronic databases, some of which may be held on our behalf by third party data storage ' +
                    'providers.  Sometimes we also keep hard copy records of this personal data in physical storage facilities.  We use a range of physical and technical ' +
                    'security processes and procedures to protect the confidentiality and security of the information that we hold, and we update these from time to time ' +
                    'to address new and emerging security threats that you become aware of.',
                    '[We also take steps to monitor access to and modification of your information by our staff, and ensure that our staff are aware of and properly trained ' +
                    'in their obligations for managing your privacy.] [<b>optional clause</b>]'
                ]
            },
            {
                'title': "Google Analytics <div class='div1'>[optional clause, to be used if Google Analytics are used]</div>",
                "txtList": [
                    '<span>[Our website uses Google Analytics, a web analytics service provided by Google, Inc. (“<b>Google</b>”). ' +
                    '<span> Google Analytics uses cookies to help the website analyse how users use our website.</span>',
                    '<span>The information generated by the cookie about your use of our website (including your IP address) will be transmitted to and stored ' +
                    'by Google on servers in the United States.  Google will use this information for the purpose of evaluating your use of the website, compiling ' +
                    'reports on website activity for website operators and providing other services relating to website activity and internet usage.  Google may also ' +
                    'transfer this information to third parties where required to do so by law, or where such third parties process the information on Google’s behalf.  ' +
                    'Google will not associate your IP address with any other data held by Google.</span> ',
                    '<span>You may refuse the use of cookies by selecting the appropriate settings on your browser, however please note that if you do this you may not be able to use ' +
                    'the full functionality of our website.  By using our website, you consent to the processing of data about you by Google in the manner and for the purposes ' +
                    'set out above.]</span>'
                ]
            },
            {
                'title': "Retention of personal data",
                "txtList": [
                    'Your personal data will only be kept as long as required.',
                    'We may retain your personal data for a period of at least 12 months.  At our discretion, we may retain personal data for longer than the ' +
                    'said period if we consider it necessary or desirable to do so to meet our legal or regulatory obligations.  '
                ]
            },
            {
                'title': "Access and correction ",
                "txtList": [
                    'If you want to access any of the personal data that we hold about you or to correct some aspect of it (for example, because you think it is ' +
                    'incomplete or incorrect), please contact our privacy compliance team using the contact details set out below.  To protect the integrity and ' +
                    'security of the information we hold, we may ask that you follow a defined access procedure, which may include steps to verify your identity.  ' +
                    'In certain cases we may charge you an administration fee for providing you with access to the information you have asked for, but we will inform ' +
                    'you of this before proceeding.  There may be cases where we are unable to provide the information you request, such as where it would interfere ' +
                    'with the privacy of others or result in a breach of confidentiality.  In these cases we will let you know why we cannot comply with your request. ',
                    'Even if you do not request access to and/or correct your personal data held  by us, if we are satisfied that, having regard to the reasons for which we ' +
                    'hold your personal data, that personal data is inaccurate, incomplete, out-of-date, irrelevant or misleading, we may take reasonable steps to correct that ' +
                    'information. '
                ]
            },
            {
                'title': "Your consent",
                "txtList": [
                    'By using our website, providing personal data and/or using any of our products or services, you agree that:',
                    '<ul>' +
                    '<li>you consent to this privacy policy, as updated from time to time; and</li>' +
                    '<li>if you have provided personal data to us relating to any other person, you:' +
                    '<ul>' +
                    '<li>have a right to provide that information;</li>' +
                    '<li>have provided a copy of this privacy policy, as updated from time to time, to that person; and</li>' +
                    '<li>each such person has agreed to those terms.</li>' +
                    '</ul>' +
                    '</li>' +
                    '</ul>',
                ]
            },
            {
                'title': "Complaints",
                "txtList": [
                    'We try to meet the highest standards in order to protect your privacy.  However, if you are concerned about the way in which we are ' +
                    'managing your personal data and think we may have breached any applicable privacy laws, or any other relevant obligation, please contact ' +
                    'our privacy compliance team using the contact details set out below.  We will make a record of your complaint and refer it to our internal ' +
                    'complaint resolution department for further investigation.  We will deal with the matter as soon as we can, and keep you informed of the progress ' +
                    'of our investigation..',
                ]
            },
            {
                'title': "Changes to this policy",
                "txtList": [
                    'We may make changes to this policy from time to time, to take into account changes to our standard practices and procedures or where necessary to ' +
                    'comply with new laws and regulations.  The latest version of this policy will always be available on our website.'
                ]
            },
            {
                'title': "Contact details",
                "txtList": [
                    'If you want any further information from us on privacy matters, please contact our privacy compliance team at ' +
                    '<a href="mailto:contact@irisnet.org" >contact@irisnet.org </a>  .'
                ]
            },
        ]
    },
    "terms": {
        "title": "IRIS Foundation Limited",
        "title1": "Website terms of use",
        "list": [
            {
                'title': "Introduction",
                "txtList": [
                    'This website (“our website”) is owned and operated by IRIS Foundation Limited, a company limited by ' +
                    'guarantee and incorporated in Hong Kong (“the Foundation”, “we” or “us”).  Each reference in these terms ' +
                    'of use to “our website” includes all materials that we make available to you on our website.',
                    'By using our website, you agree to comply with these terms of use.  Please check this page each time you use our website, ' +
                    'as we may update these terms from time to time.',
                    'If you carry out any transaction through our website, that transaction may be subject to additional terms and conditions ' +
                    'which you will be asked to read and accept at the relevant time.  To the extent of any inconsistency with these terms, the terms ' +
                    'of the transaction apply to that transaction and any matters connected with it.',
                ]
            },
            {
                'title': "Your obligations",
                "txtList": [
                    'You must comply with any instructions we give you about how to use our website and must not do anything that interferes with or ' +
                    'adversely affects the normal operation of the website (including the ability of other users to access or use the website).',
                    'You are responsible for ensuring the security of the systems and devices that you use to access our website, including through ' +
                    'use of appropriate virus-checking and other security software.'
                ]
            },
            {
                'title': "Registration",
                "txtList": [
                    'You may need to register with us in order to access certain parts of our website.  Further details about registrations are ' +
                    'available here.  In this case, we may issue you with a user name and password, or other appropriate log-in details for your account.  ' +
                    'You are responsible for keeping your log-in details confidential so that they cannot be used without your permission.  You will be ' +
                    'responsible for any use of our website by anyone using your log-in details.'
                ]
            },
            {
                'title': "Rights to suspend or terminate access",
                "txtList": [
                    'We may suspend, terminate or block your access to all or any part of our website at any time and without prior notice to you.'
                ]
            },
            {
                'title': "Intellectual property",
                "txtList": [
                    'All of the intellectual property rights in and to our website belong to us and our licensors.  We may update and change the materials available on our ' +
                    'website, including by removing materials, at any time in our discretion without notice to you.',
                    'You may download or print sections of our website if needed for your own personal use, but otherwise you may not reproduce any part of our website without ' +
                    'our express prior consent.  To the extent that our website contains functionality that allows you to access or download specific materials through our website, ' +
                    'your use of that functionality and the downloaded materials may be subject to separate terms and conditions which you will be asked to read and accept at the ' +
                    'relevant time.'
                ]
            },
            {
                'title': "Website links",
                "txtList": [
                    'Our website may contain or link to information that has not been devised, verified or tested by us or any of our officers, employees or agents.  These are provided ' +
                    'for your information only.  We do not take any responsibility for that information, nor endorse its accuracy or completeness.  ',
                    'We do not guarantee that the information, or the provision of the hyperlinks to you, does not infringe third party rights.  If our website contains a link to ' +
                    'an external website, we do not endorse, recommend, approve, guarantee or introduce any third parties or the services and/or products that those third parties ' +
                    'may offer.  We accept no responsibility for them or any of the content available, or for any loss or damage that may arise from your use of them.',
                    'You may provide a link to the home page of our website at, on any website you operate, as long as you do not suggest any form of association, approval or ' +
                    'endorsement on our part without our express prior permission and you promptly delete the link at our request.',
                    'Except as set out in this clause, you may not link to our website.'
                ]
            },
            {
                'title': "No financial services activities or advice ",
                "txtList": [
                    'The information and any materials contained in this website should not be considered as an offer or solicitation to buy or sell financial instruments, provide ' +
                    'financial advice, create a trading platform, facilitate or take deposits or provide any other financial services of any kind in any jurisdiction.',
                    'The information contained on this website is not intended to provide and should not be construed as advice of any kind.  You should obtain appropriate ' +
                    'professional advice when necessary. It does not take into account your objectives, financial situation or needs. '
                ]
            },
            {
                'title': "Liability",
                "txtList": [
                    'While we will use reasonable care and skill in operating our website, we cannot promise that our website will always be available, ' +
                    'meet your requirements or completely free of faults, errors or compromise from cybersecurity events. ',
                    'To the maximum extent permitted by law, except as expressly set out in these terms of use, we exclude:',
                    '<ul>' +
                    '<li>all conditions, representations, warranties and statutory guarantees, whether express or implied, in relation to our website; and</li>' +
                    '<li>any liability, whether in contract, tort (including negligence), or otherwise, for any indirect or consequential loss, ' +
                    'damage or expense incurred by you or any other user in connection with our website.</li>' +
                    '</ul>',
                    'To the extent we are unable by law to exclude any implied condition, representation, warranty or statutory guarantee in relation to the provision of ' +
                    'goods or services through our website, we limit our liability for a breach to the re-supply of those goods or services, or payment for such re-supply.  ' +
                    'This is without limitation to any other exclusions or restrictions of our or others’ liability in connection with this website.'
                ]
            },
            {
                'title': "Privacy",
                "txtList": [
                    'We will manage any personal information that we collect through our website in accordance with our <a class="privacy"> Privacy Policy</a>, which you can access here. '
                ]
            },
            {
                'title': "Governing law",
                "txtList": [
                    'These terms of use are governed by the laws in force in Hong Kong and are subject to the exclusive jurisdiction of the courts in that place.'
                ]
            },
            {
                'title': "Questions?",
                "txtList": [
                    'Please contact us <a href="mailto:contact@irisnet.org" >contact@irisnet.org </a> if you have any questions about our website.'
                ]
            },
        ]
    },
    "qr":{
        "title":" 请扫描二维码",
        "txt":" 关注公众号"
    },
    // "community":{
    //     "title":"社区",
    //     "coming":"敬请期待"
    //
    // },
    "contactList":[
        {"infotitle":"IRISnet以希腊彩虹女神Iris命名，"},
        {"infotitle":"她是在人间和天堂之间传递信息的"},
        {"infotitle":"忠诚使者"}
    ],
    "appcontact": {
        "appimg": [
            {
                "src": "telegran.png",
                "src_selected": "telegran_selected.png",
                "txt": "Telegram",
                "href": "https://t.me/irisnetworkcn"
            },
            {
                "src": "twitter.png",
                "src_selected": "twitter_selected.png",
                "txt": "Twitter",
                "href": "https://twitter.com/irisnetwork"
            },

            {
                "src": "github.png",
                "src_selected": "github_selected.png",
                "txt": "Github",
                "href": "https://github.com/irisnet"
            },
            {
                "src": "mail.png",
                "src_selected": "mail_selected.png",
                "txt": "Email",
                "href": "mailto:contact@irisnet.org"
            }],
        "appimg1":[{
                "src": "bluemedium.png",
                "src_selected": "redmedium-selected.png",
                "txt": "Medium",
                "href": "https://medium.com/irisnet-blog"
            },
            {
                "src": "riot.png",
                "src_selected": "riot_selected.png",
                "txt": "Riot",
                "href": "https://riot.im/app/#/room/#iris:matrix.org"
            },
            {
                "src": "wechat.png",
                "src_selected": "wechat_selected.png",
                "txt": "Wechat"
            },
            {
                "src": "weibo.png",
                "src_selected": "weibo_selected.png",
                "txt": "Weibo",
                "href": "https://weibo.com/u/6455513027"
            }],
    },
    "submit":{
        'Subscribe':'提交',
        "success": "订阅成功"
    },
    "errEmail":{
        "err":"请输入一个有效的邮箱地址"
    },
    "placehooder":{
        "placehooder": "请输入你的邮箱地址"
    },
    "mobileLogo": [
        {
            "src": '../../../public/mobile_main_zh.png',
            "active": true
        },
        {
            "src": '../../../public/mobile_bug_bounty_zh.gif',
            "active": false
        },
        {
            "src": '../../../public/mobile_irisnet_zh.gif',
            "active": false
        }
    ],
        // "announcements":[
        // {
        //     src:'../../public/announcements_betanet.png',
        //     timestamp:"2019年2月1日",
        //     imgtext:'Betanet上线工作计划',
        //     href:'https://github.com/irisnet/iris-foundation/blob/master/betanet_work_plan.md'
        // },
        // {
        //     src:'../../public/announcements_mainnet.png',
        //     timestamp:"2019年1月16日",
        //     imgtext:'IRIS基金会宣布Betanet启动计划 - IRIS主网启动的第一步',
        //     href:'https://github.com/irisnet/iris-foundation/blob/master/iris-betanet-plan_cn.md'
        // },
        // {
        //     src:'../../public/announcements_irisnet.png',
        //     timestamp:"2019年1月16日",
        //     imgtext:'对IRIS Betanet的期望',
        //     href:'https://github.com/irisnet/iris-foundation/blob/master/iris-betanet-expectations_cn.md'
        // },


    // ]
};
export default message

