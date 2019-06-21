<template>
    <div class="container">
        <div class="banner_container">
            <div class="banner_content_wrap">
                <div class="content_left">
                    <div class="moniker_title">
                        <span class="title">{{headerTitle}}</span>
                        <span class="commission_content">{{rate}} {{commission}}</span>
                    </div>
                    <p>{{headerProduct}}</p>
                    <h2 class="cosmos_address">{{headerValidatorAddress}}</h2>
                    <p>
                        <a :href="cosmosExplorerHref" target="_blank">{{headerCosmosAddress}} </a>
                        <span @click="toCosmosBrowser" id="cosmosAddress" :data-clipboard-text="headerCosmosAddress">
                    <img src="../assets/cosmos/copy_logo.png" alt="">
                </span>
                    </p>

                </div>
                <div class="content_right">
                    <div class="cosmos_img_content">
                        <img src="../assets/product_logo.png">
                    </div>
                </div>
            </div>
            <div class="toast_content" :style="{visibility:flShowToast?'visible':'hidden'}">
                <span>{{toastHint}}</span>
            </div>
            <div class="guide_content">
                <div class="bonded_voting_power_content">
                    <div class="common_style">
                        <span>{{bondedTokens}}</span>
                        <span>{{bondedAtoms}}</span>
                    </div>
                    <div class="common_style">
                        <span>{{votingPowerNumber}}</span>
                        <span>{{votingPower}}</span>
                    </div>
                </div>
                <div class="rate_uptime_content">
                    <div class="common_style">
                        <span>{{rate}}</span>
                        <span>{{commissionRate}}</span>
                    </div>
                    <div class="common_style">
                        <span>{{bianJieUpTime}}</span>
                        <span>{{uptime}}</span>
                    </div>
                </div>
            </div>
            <p class="guide_text_content">
                <span class="guide_href">
                    <a :href="guideHref" target="_blank">{{guide}}</a>
                    <i class="icon">
                        <img src="../assets/right_icon.png" alt="">
                    </i>
                </span>
            </p>
        </div>
        <div class="about_container">
            <div class="about_content_wrap">
                <p class="about_title">{{aboutTitle}}</p>
                <!--<p class="about_second_title">{{aboutSecondTitle}}</p>-->
                <div class="about_content">
                    <div class="developer_content">
                        <div class="irisnet_developer_content">
                            <div class="irisnet_title">
                               <span>{{aboutIrisnetTitle}}</span>
                            </div>
                        </div>
                        <div class="cosmos_developer_content">
                            <div class="cosmos_title">
                                <span>{{aboutCosmosTitle}}</span>
                            </div>
                        </div>
                    </div>
                    <div class="introduce_content">
                        <div class="irisnet_introduce_content">
                            <div class="introduce_irisnet_logo">
                                <img src="../assets/cosmos/introduce_irisnet_logo.png" alt="">
                            </div>
                            <div class="irisnet_introduce_text_content">
                                <ul class="introduce_list">
                                    <li v-for="item in aboutIrisnetList">
                                        <i></i>
                                        <div v-html="item.item"></div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="cosmos_introduce_content">
                            <div class="cosmos_introduce_text_content">
                                <ul class="cosmos_introduce_list">
                                    <li v-for="item in aboutCosmosList">
                                        <div v-html="item.item"></div>
                                        <i></i>
                                    </li>
                                </ul>
                            </div>
                            <div class="cosmos_logo_content">
                                <img src="../assets/cosmos/introduce_cosmos_logo.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="logo_container">
            <div class="logo_wrap">
                <div class="img_content" @click="toIrisnet">
                    <img src="../assets/cosmos_page_irisnet_logo.png" alt="">
                </div>
                <div class="img_content cosmos_img" @click="toCosmos">
                    <img src="../assets/cosmos_logo.png" alt="">
                </div>
            </div>
        </div>
        <div class="safe_container">
            <div class="safe_wrap">
                <h2>{{bianJieTitle}}</h2>
                <ul class="safe_content">
                    <li class="safe_item" v-for="item in bianJieProductList">
                        <div class="safe_img_content">
                            <img :src="item.src" alt="">
                        </div>
                        <p class="safe_text">{{item.text}}</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="cosmos_explorer_container">
            <div class="cosmos_explorer_wrap">
                <h5 class="cosmos_explorer_title">{{cosmosExplorerTitle}}</h5>
                <ul class="cosmos_list_content">
                    <li class="cosmos_item_content" v-for="(item,index) in cosmosExplorerArray"
                        :class="item.active ? 'bg_blue_style' : 'bg_white_style'"
                        @click="toBrowser(index,item.href)"
                        @mouseenter="changeBgColor(index)"
                        @mouseleave="resetBgColor()">
                        <div class="cosmos_explorer_logo">
                            <img :src="item.active ? item.whiteImg : item.blueImg" alt="">
                        </div>
                        <p class="cosmos_explorer_name">{{item.title}}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>

    import message from '../common/message';
    import axios from 'axios';
    import clipboardJS from 'clipboard'
    import bigNumber from 'bignumber.js'
    export default {
        name: "Validators",
        data() {
            return {
                lang: '',
                headerTitle: 'IRISnet-Bianjie',
                headerProduct:'Maintained by the core development team of IRISnet',
                headerValidatorAddress:'Validator Address',
                headerCosmosAddress:'cosmosvaloper1ssm0d433seakyak8kcf93yefhknjleeds4y3em',
                aboutIrisnetTitle: 'IRISnet Core Developer',
                aboutTitle:'About IRISnet-Bianjie',
                aboutSecondTitle:'Open Source Contributor to Cosmos',
                commission:'commission',
                toastHint:'Copied',
	            bondedAtoms:'Bonded ATOMs',
	            votingPower:'Voting Power',
	            commissionRate:'Commission Rate',
	            uptime:'Uptime',
	            guide:'Cosmos Hub Wallets',
	            guideHref:'https://hub.cosmos.network/#cosmos-hub-wallets',
                aboutIrisnetList: [
	                {
		                item:'Supported by <a href="https://cosmos.network/about" target="_blank" style="color:rgba(77, 150, 223, 1)">Interchain Foundation (ICF)</a> to build IRISnet, a Cosmos Hub that facilitates construction of distributed business applications.'
	                },
	                {
		                item:'<a href="https://www.irisnet.org/" target="_blank" style="color:rgba(77, 150, 223, 1)">IRISnet</a> - a BPoS blockchain that is Self-evolutionary.'
	                },
                ],
                aboutCosmosTitle: 'Open Source Contributor to Cosmos',
                aboutCosmosList: [
	                {
		                item:'Genesis validator on Cosmos since March 14th, 2019'
	                },
	                {
		                item:'Participant of Cosmos testnets from Gaia-1000 to mainnet launch'
	                },
	                {
		                item:'Technical support team to Cosmos China community since August 2017'
	                }
                ],
                bianJieTitle:'Safe Bianjie, Safe Delegation',
                bianJieProductList:[
                    {
                        src:require('../assets/cosmos/service_room.png'),
                        text:'Safe and reliable enterprise-class data center',
                    },
                    {
                        src:require('../assets/cosmos/net.png'),
                        text:'Highly available network',
                    },
                    {
                        src:require('../assets/cosmos/node.png'),
                        text:'Auto scale sentry nodes',
                    },
                    {
                        src:require('../assets/cosmos/lock.png'),
                        text:'HSM for Private Key Protection',
                    },
                    {
                        src:require('../assets/cosmos/hour.png'),
                        text:'24/7 professional  monitoring',
                    },
                    {
                        src:require('../assets/cosmos/shield.png'),
                        text:'DDoS attack protection',
                    }
                ],
                placeholder: '请输入您的email地址',
                emailError:'请输入正确的邮箱地址',
                subscribe: '订阅获取最新动态',
                is: false,
                currentMessage:'',
                email:'',
                showError:false,
                showSuccess:false,
                emailInfo:'',
                flShowBoxShadow:false,
	            flShowToast:false,
	            cosmosExplorerHref:'https://hubble.figment.network/cosmos/chains/cosmoshub-2/validators/696ABC95186FD65A07050C28AB00C9358A315030',
                validatorIndicators:{},
                bondedTokens:'',
	            rate: '',
                bianJieUpTime: '',
                lcdBianJieBondedTokens: '',
                votingPowerNumber: '',
                lcdBondedTokens: '',
	            signedBlocksWindow:'',
	            missedBlocksCnt:'',
                cosmosExplorerTitle:'',
                cosmosExplorerArray:[],
            }
        },
        mounted(){
            if(this.$route.query.lang){
            	this.conversion(this.$route.query.lang.toLocaleLowerCase())
            }else {
	            this.conversion('en');
            }
	        this.bondedTokens = localStorage.getItem('bondedTokens') ? this.formatTokens(new bigNumber(localStorage.getItem('bondedTokens')).div(1000000)) : '';
	        this.rate = localStorage.getItem('rate') ? this.formatRate(localStorage.getItem('rate')) : '';
	        this.bianJieUpTime = localStorage.getItem('bianJieUpTime') ? localStorage.getItem('bianJieUpTime') : '';
	        this.votingPowerNumber = localStorage.getItem('votingPower') ? this.formatVotingPower(localStorage.getItem('votingPower')) : '';
            this.getCosmosBianJieValidator();
            this.getMissedBlocksCounter();
	        this.getSignedBlocksWindow()
        },
        methods: {
            toIrisnet(){
                window.open('https://www.irisnet.org/')
            },
            toCosmos(){
                window.open('https://cosmos.network/')
            },
	        resetBgColor(){
		        this.cosmosExplorerArray.forEach(item => {
			        item.active = false;
		        });
            },
	        changeBgColor(index){
		        this.cosmosExplorerArray.forEach(item => {
			        item.active = false;
		        });
		        this.cosmosExplorerArray[index].active = true;
            },
	        toBrowser(index,href){
            	this.cosmosExplorerArray.forEach(item => {
            		item.active = false;
                });
		        this.cosmosExplorerArray[index].active = true;
		        window.open(href)
            },
            toCosmosBrowser(){
                let clipboard  = new clipboardJS('#cosmosAddress'),that = this;
                clipboard.on('success',function(e) {
	                that.flShowToast = true;
	                setTimeout(function() {
		                that.flShowToast = false;
	                },2000)
                })
            },
            getCosmosBianJieValidator(){
            	let url = `/validators`;
            	axios(url).then(data => {
            		if(data.status === 200){
            			return data.data
                    }
                }).then(res => {
                	if(res && typeof res === "object" && Object.keys(res).length !== 0){
		                localStorage.setItem('bondedTokens',res.tokens);
		                localStorage.setItem('rate',res.commission.rate);
		                this.bondedTokens = new bigNumber(new bigNumber(localStorage.getItem('bondedTokens')).div(1000000).toNumber()).toFormat();
		                this.rate = this.formatRate(localStorage.getItem('rate'));
		                this.lcdBianJieBondedTokens = res.tokens;
		                this.headerTitle = res.description.moniker;
		                this.headerCosmosAddress = res.operator_address;
		                this.cosmosExplorerHref = `https://hubble.figment.network/cosmos/chains/cosmoshub-2/validators/696ABC95186FD65A07050C28AB00C9358A315030`;
		                this.getbondedTokens();
	                }else {
		                this.rate= '';
                        this.bondedTokens = '';
		                this.votingPowerNumber= '';
		                this.cosmosExplorerHref= 'https://hubble.figment.network/cosmos/chains/cosmoshub-2/validators/696ABC95186FD65A07050C28AB00C9358A315030'
	                }
	            }).catch(err => {

                })
            },
            getbondedTokens(){
            	let url = `/bondedTokens`;
            	axios(url).then(data => {
            		if(data.status === 200){
            			return data.data
                    }
                }).then(res => {
                	if(res && typeof res === "object" && Object.keys(res).length !== 0){
                		if(!this.lcdBianJieBondedTokens || this.lcdBianJieBondedTokens === 0 && localStorage.getItem('bondedTokens')){
			                this.lcdBianJieBondedTokens = localStorage.getItem('bondedTokens')
                        }
		                let votingPower = this.lcdBianJieBondedTokens/res.bonded_tokens;
		                localStorage.setItem('votingPower',votingPower);
		                this.votingPowerNumber = this.formatVotingPower(localStorage.getItem('votingPower'))
                    }
	            }).catch(err => {

                })
            },
            getMissedBlocksCounter(){
            	let url = `/missedBlockCounter `;
            	axios(url).then(data => {
            		if(data.status === 200){
            			return data.data
                    }
                }).then(res => {
                	if(res && typeof res === "object" && Object.keys(res).length !== 0){
		                localStorage.setItem('missedBlocksCnt',res.missed_blocks_counter)
		                this.missedBlocksCnt = res.missed_blocks_counter;
                    }

	            }).catch(err => {

                })
            },
	        getSignedBlocksWindow(){
		        let url = `/signedBlocksWindow `;
		        axios(url).then(data => {
			        if(data.status === 200){
				        return data.data
			        }
		        }).then(res => {
		        	if(res && typeof res === "object" && Object.keys(res).length !== 0){
		        		if(!this.missedBlocksCnt || localStorage.getItem('missedBlocksCnt')){
					        this.missedBlocksCnt = localStorage.getItem('missedBlocksCnt')
                        }
                        let bianJieUpTime = this.formatUptime(this.missedBlocksCnt,res.signed_blocks_window);
				        localStorage.setItem('bianJieUpTime',bianJieUpTime)
				        if(!localStorage.getItem('bianJieUpTime')){
					        this.bianJieUpTime = this.formatUptime(this.missedBlocksCnt,res.signed_blocks_window)
                        }else {
					        this.bianJieUpTime = localStorage.getItem('bianJieUpTime')
                        }
			        }
		        }).catch(err => {

		        })
	        },
            formatTokens(number){
                let integer = String(number).split('.')[0];
                let decimals = String(number).split('.')[1];
                let formattedInteger = integer.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                return`${formattedInteger}.${decimals}`
            },
            formatRate(rate){
                return `${(rate*100).toFixed(2)} %`
            },
            formatUptime(missedBlocks,totalBlocks){
                return `${((Number(totalBlocks) - Number(missedBlocks))/ Number(totalBlocks) * 100).toFixed(4)} %`
            },
            formatVotingPower(votingPower){
	            return `${(votingPower*100).toFixed(2)} %`
            },
            scrollTop(){
              if(window.scrollY > 10){
                  this.flShowBoxShadow = true;
              }else {
                  this.flShowBoxShadow = false;
              }
            },
            conversion(lang) {
                this.headerTitle = message.cosmos[lang].header.title;
                this.headerProduct = message.cosmos[lang].header.product;
                this.headerValidatorAddress = message.cosmos[lang].header.validatorAddress;
                this.headerCosmosAddress = message.cosmos[lang].header.address;
                this.aboutIrisnetTitle = message.cosmos[lang].about.irisnet.title;
                this.aboutIrisnetList = message.cosmos[lang].about.irisnet.list;
                this.aboutTitle = message.cosmos[lang].about.title;
                this.aboutSecondTitle = message.cosmos[lang].about.secondTitle;
                this.aboutCosmosTitle = message.cosmos[lang].about.cosmos.title;
                this.aboutCosmosList = message.cosmos[lang].about.cosmos.list;
                this.bianJieTitle = message.cosmos[lang].bianjie.title;
                this.bianJieProductList = message.cosmos[lang].bianjie.product;
                // this.placeholder = message[lang].validators.placeholder;
                // this.subscribe = message[lang].validators.subscribe;
                // this.emailError = message[lang].validators.emailError;
                this.commission = message.cosmos[lang].header.commission;
                this.toastHint = message.cosmos[lang].header.toastHint;
                this.bondedAtoms= message.cosmos[lang].header.bondedAtoms;
                this.votingPower= message.cosmos[lang].header.votingPower;
                this.commissionRate= message.cosmos[lang].header.commissionRate;
                this.uptime= message.cosmos[lang].header.uptime;
                this.guide= message.cosmos[lang].header.guide;
                this.guideHref= message.cosmos[lang].header.guideHref;
                this.cosmosExplorerTitle = message.cosmos[lang].cosmosExplorerTitle;
                this.cosmosExplorerArray = message.cosmos[lang].cosmosExplorer
            },
            scroll(top) {
                $('body,html').animate({
                        scrollTop: top
                    }, 500
                );
            },
            changeLanguage(){
                if(this.lang === 'English'){
                    this.lang = '中文';
                    this.conversion('en');
                }else{
                    this.lang = 'English';
                    this.conversion('cn');
                }
            },
            flIsMobile(){
                const userAgentInfo = navigator.userAgent;
                const Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
                let flag = true;
                for (let i = 0; i < Agents.length; i++) {
                    if (userAgentInfo.includes(Agents[i]) > 0) {
                        flag = false;
                        break;
                    }
                }
                return flag;
            },
            skipHome(){
                if(this.flIsMobile()){
                    this.$router.push({
                        path:'/'
                    })
                }else {
                    this.$router.push({
                        path:'/app'
                    })
                }

            },
            handleClick(){
                let address =  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                //server 端接收参数.  0  代表中文;  1  代表英文;
                let lang = (this.lang === 'English' ? 1 : 0);
                if(address.exec(this.email)){

                    this.showError = false;
                    axios({
                        method: 'post',
                        url:"/",
                        data: {
                            email:this.email,
                            lang,
                        }
                    }).then((data)=>{
                        if(data.status === 200){
                            return data.data;
                        }
                    }).then((data)=>{
                        if(data.detail){
                            this.emailInfo = data.detail;
                            this.showError = true;
                            setTimeout(()=>{
                                this.showError = false;
                            },2000);
                        }else{
                            this.emailInfo = 'successful!';
                            this.showSuccess = true;
                            this.email = '';
                            setTimeout(()=>{
                                this.showSuccess = false;
                            },2000);
                        }
                    }).catch((error)=>{
                        console.log(error)
                    })
                }else {
                    this.emailInfo = this.emailError;
                    this.showError = true;
                    setTimeout(()=>{
                        this.showError = false;
                    },2000);
                }

            }
        }
    }
</script>

<style scoped lang="less">
    @import "../assets/style/cosmos.less";
</style>