const _0xe99da4=_0x58a5;(function(_0x49acc6,_0x3e2fb1){const _0x860287=_0x58a5,_0x3be0a2=_0x49acc6();while(!![]){try{const _0x3c774c=parseInt(_0x860287(0x1f9))/0x1+parseInt(_0x860287(0x1ed))/0x2+-parseInt(_0x860287(0x1d2))/0x3*(-parseInt(_0x860287(0x1af))/0x4)+parseInt(_0x860287(0x20b))/0x5*(parseInt(_0x860287(0x1f6))/0x6)+-parseInt(_0x860287(0x21a))/0x7+parseInt(_0x860287(0x199))/0x8*(-parseInt(_0x860287(0x18f))/0x9)+-parseInt(_0x860287(0x206))/0xa;if(_0x3c774c===_0x3e2fb1)break;else _0x3be0a2['push'](_0x3be0a2['shift']());}catch(_0x4001fc){_0x3be0a2['push'](_0x3be0a2['shift']());}}}(_0x3bf9,0xc032f));const serverUrl=_0xe99da4(0x1c0),appId=_0xe99da4(0x1c2);Moralis[_0xe99da4(0x1de)]({'serverUrl':serverUrl,'appId':appId});var userAddress,ethers,provider;const DECIMALS=0x9,contractAddress=_0xe99da4(0x1ea);function linkSimpleButtons(){const _0x50dd17=_0xe99da4;document[_0x50dd17(0x1ef)]('btn_docs')[_0x50dd17(0x1d8)]=goToDocs,document[_0x50dd17(0x1ef)]('walletCircle')[_0x50dd17(0x1d8)]=loginManual,document[_0x50dd17(0x1ef)](_0x50dd17(0x1bb))['onclick']=send1Token;}function goToDocs(){const _0x62329f=_0xe99da4;window[_0x62329f(0x1eb)](_0x62329f(0x1c7),'_blank');}referredInfo=[[_0xe99da4(0x190),_0xe99da4(0x201)]],referredInfoPresentable=[];function _0x3bf9(){const _0x2914da=['start','_maxWalletSize','RefferalBonus','balanceOf','toFixed','setTxLimit','log','payable','walletAddress','setMinimumBalanceForRefferal','_maxTxAmount','Contract\x20address\x20','0xf54c32F0393Daa15c858b23a4cD17f24C263bCc2','open','authenticate','2326832MauQLP','0x38','getElementById','stat_reffered','transfer','setFees','decimals','isAuthorized','rel','5814FyEuYK','amount','bsc','1090213xZwMHH','accuracy','appendChild','noopener\x20noreferrer','feesFrom','setReferralFee','Query','stat_reward','100','pow','usersWallet','symbol','getLiquidityBacking','15398710CVpcui','href','contract\x20IDEXRouter','totalSupply','value','4170mtHJtq','string','getOwner','amountBNB','swapEnabled','uint8','insertCell','enableWeb3','event','RewardTwo','insertRow','attributes','owner','exempt','Approval','7162736YJKmXh','referralsTable','ethAddress','statText\x20orange','Requesting\x20permission\x20to\x20read\x20account\x20balances','reffered','422973QzcClD','0xeb1234567890','_devFeeReceiver','_feeDenominator','Reffered','function','constructor','statText','setIsTxLimitExempt','holder','136DAqotm','web3Library','_marketingFeeReceiver','uint256','stat_referrer','current','Object','_blank','isOwner','createElement','getCirculatingSupply','_enabled','pair','tx\x20','nonpayable','pure','setFeeReceiver','AutoLiquify','logged\x20out','referrer','adr','target','435016UUifzd','User','isOverLiquified','_amount','Transfer','transferFrom','className','getTokenBalances','Web3API','name','push','_devFee','btn-refer','slice','swapThreshold','deleteRow','allowance','https://nqokzfxvxvep.usemoralis.com:2053/server','extend','CizRkQmPjMRLC8OSAxXsC0TVdoipquHbMXaqfHbR','manualSend','find','Web3','transferForeignToken','https://www.geeksforgeeks.org','setIsFeeExempt','spender','setSwapBackSettings','Contract','switchNetwork','unauthorize','equalTo','stat_balance','view','transferOwnership','30JSbBhD','account','amountBOG','https://bscscan.com/address/','address','bool','onclick','_marketingFee','innerHTML','RefferedTwo','...','recipient'];_0x3bf9=function(){return _0x2914da;};return _0x3bf9();}function beautifyAddress(_0x408606,_0x415c18){const _0x43ce59=_0xe99da4;return _0x408606['slice'](0x0,_0x415c18)+_0x43ce59(0x1dc)+_0x408606[_0x43ce59(0x1bc)](-0x3);}function updateUserAddress(_0x1f8c72){const _0x3db50f=_0xe99da4;userAddress=_0x1f8c72,document[_0x3db50f(0x1ef)](_0x3db50f(0x203))[_0x3db50f(0x1da)]=beautifyAddress(_0x1f8c72,0x5);}function updateNumReferrals(_0x5eafe6){const _0x1846a9=_0xe99da4;document[_0x1846a9(0x1ef)](_0x1846a9(0x1f0))['innerHTML']=''+_0x5eafe6;}function _0x58a5(_0x144461,_0x22156c){const _0x3bf9cd=_0x3bf9();return _0x58a5=function(_0x58a597,_0x2fa324){_0x58a597=_0x58a597-0x18d;let _0x37c299=_0x3bf9cd[_0x58a597];return _0x37c299;},_0x58a5(_0x144461,_0x22156c);}function updateTokenBalance(_0x39c10f){const _0x9216b5=_0xe99da4;let _0x1fc297=(parseInt(_0x39c10f)/Math[_0x9216b5(0x202)](0xa,DECIMALS))[_0x9216b5(0x1e2)](0x0);document[_0x9216b5(0x1ef)](_0x9216b5(0x1cf))['innerHTML']=''+_0x1fc297;}function updateReferrer(_0xc921f8){const _0x436b0a=_0xe99da4;document[_0x436b0a(0x1ef)](_0x436b0a(0x19d))[_0x436b0a(0x1da)]=beautifyAddress(_0xc921f8,0x5),document[_0x436b0a(0x1ef)](_0x436b0a(0x19d))[_0x436b0a(0x207)]=_0x436b0a(0x1d5)+_0xc921f8;}function updateRewards(_0x140f78){const _0x2a4fd9=_0xe99da4;document['getElementById'](_0x2a4fd9(0x200))[_0x2a4fd9(0x1da)]=''+_0x140f78[_0x2a4fd9(0x1e2)](0x0);;}async function send1Token(){}function constructReferredTable(){const _0x3cc489=_0xe99da4;let _0x51a122=document[_0x3cc489(0x1ef)](_0x3cc489(0x21b));for(var _0xc0ff4b=0x1;_0xc0ff4b<_0x51a122['rows']['length'];){_0x51a122[_0x3cc489(0x1be)](_0xc0ff4b);}for(var _0xc0ff4b=0x0;_0xc0ff4b<referredInfoPresentable['length'];_0xc0ff4b++){let _0xe21d36=_0x51a122[_0x3cc489(0x215)]();_0xe21d36[_0x3cc489(0x1b5)]='tableRow';var _0x5e09eb=_0xe21d36[_0x3cc489(0x211)](0x0),_0x173285=document['createElement']('a');_0x173285[_0x3cc489(0x1b5)]=_0x3cc489(0x1e6),_0x173285[_0x3cc489(0x207)]='https://bscscan.com/address/'+referredInfoPresentable[_0xc0ff4b][0x0],_0x173285['target']=_0x3cc489(0x1a0),_0x173285[_0x3cc489(0x1f5)]=_0x3cc489(0x1fc),_0x173285[_0x3cc489(0x1da)]=referredInfoPresentable[_0xc0ff4b][0x1],_0x5e09eb[_0x3cc489(0x1fb)](_0x173285);var _0x24678b=_0xe21d36['insertCell'](0x1);_0x24678b[_0x3cc489(0x1b5)]=_0x3cc489(0x196),_0x24678b[_0x3cc489(0x1da)]=referredInfoPresentable[_0xc0ff4b][0x2];var _0x21ad7e=_0xe21d36[_0x3cc489(0x211)](0x2);_0x21ad7e[_0x3cc489(0x1b5)]=_0x3cc489(0x21d),_0x21ad7e[_0x3cc489(0x1da)]=referredInfoPresentable[_0xc0ff4b][0x3],_0x21ad7e['className']=_0x3cc489(0x21d);var _0x5994e4=_0xe21d36[_0x3cc489(0x211)](0x3);_0x5994e4['className']='statText';var _0x1bba23=document[_0x3cc489(0x1a2)]('a');_0x1bba23[_0x3cc489(0x1b5)]='tx',_0x1bba23[_0x3cc489(0x207)]='https://bscscan.com/tx/'+referredInfoPresentable[_0xc0ff4b][0x4],_0x1bba23[_0x3cc489(0x1ae)]='_blank',_0x1bba23[_0x3cc489(0x1f5)]=_0x3cc489(0x1fc),_0x1bba23['innerHTML']=_0x3cc489(0x1a6),_0x5994e4['appendChild'](_0x1bba23);}}async function loginManual(){await logOut(),await login();}async function login(){const _0x4a1359=_0xe99da4;provider=await Moralis[_0x4a1359(0x212)](),ethers=Moralis[_0x4a1359(0x19a)];const _0x35364e=_0x4a1359(0x1ee),_0x26b819=await Moralis[_0x4a1359(0x1cc)](_0x35364e);let _0x3f2d3f=Moralis['User'][_0x4a1359(0x19e)]();!_0x3f2d3f&&(_0x3f2d3f=await Moralis[_0x4a1359(0x1c5)][_0x4a1359(0x1ec)]({'signingMessage':_0x4a1359(0x18d)})),updateUserAddress(_0x3f2d3f['attributes'][_0x4a1359(0x21c)]),getStats();}async function logOut(){const _0x33a6c8=_0xe99da4;await Moralis[_0x33a6c8(0x1b0)]['logOut'](),console[_0x33a6c8(0x1e4)](_0x33a6c8(0x1ab));}async function getStats(){const _0x28add6=_0xe99da4;var _0x31baa0=await new ethers[(_0x28add6(0x1cb))](contractAddress,abi,provider);let _0x2377a7=await _0x31baa0[_0x28add6(0x1e1)](userAddress);updateTokenBalance(_0x2377a7);let _0x14465b=_0x2377a7!='0';if(_0x14465b){let _0x1c8926=await _0x31baa0[_0x28add6(0x1ac)](userAddress);updateReferrer(_0x1c8926);}let _0xf328f9=await getNumReferrals();updateNumReferrals(_0xf328f9),console[_0x28add6(0x1e4)](_0x28add6(0x1e9)+_0x31baa0[_0x28add6(0x1d6)]),await getRewards(),constructReferredTable();}async function getRewards(){const _0x4ef7c9=_0xe99da4,_0x1fd87a=Moralis[_0x4ef7c9(0x19f)]['extend'](_0x4ef7c9(0x214)),_0x68e2a1=new Moralis[(_0x4ef7c9(0x1ff))](_0x1fd87a);_0x68e2a1['equalTo']('feesTo',userAddress);const _0x230121=await _0x68e2a1[_0x4ef7c9(0x1c4)]();referredInfoPresentable=[];var _0x1d1271=0x0;for(i in _0x230121){let _0xe8c1a7=_0x230121[i][_0x4ef7c9(0x216)];value=parseInt(_0xe8c1a7[_0x4ef7c9(0x20a)])/0xa**DECIMALS,_0x1d1271+=value,referredInfoPresentable[_0x4ef7c9(0x1b9)]([_0xe8c1a7[_0x4ef7c9(0x1fd)],beautifyAddress(_0xe8c1a7['feesFrom'],0x5),value*0x14,value,_0xe8c1a7['transaction_hash']]);}updateRewards(_0x1d1271);}async function getNumReferrals(){const _0x145f1e=_0xe99da4,_0x1eb5c5=Moralis[_0x145f1e(0x19f)][_0x145f1e(0x1c1)](_0x145f1e(0x1db)),_0xf7e5ac=new Moralis[(_0x145f1e(0x1ff))](_0x1eb5c5);_0xf7e5ac[_0x145f1e(0x1ce)](_0x145f1e(0x1ac),userAddress);const _0x4301c4=await _0xf7e5ac['find']();return String(_0x4301c4['length']);}async function getTokenBalance(){const _0x512be6=_0xe99da4,_0x541ae9={'chain':_0x512be6(0x1f8),'address':'0xf54c32F0393Daa15c858b23a4cD17f24C263bCc2'},_0x19de96=await Moralis[_0x512be6(0x1b7)]['account'][_0x512be6(0x1b6)](_0x541ae9);}linkSimpleButtons(),constructReferredTable(),login();const abi=[{'inputs':[],'stateMutability':_0xe99da4(0x1a7),'type':_0xe99da4(0x195)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0xe99da4(0x1d6),'name':'owner','type':_0xe99da4(0x1d6)},{'indexed':!![],'internalType':_0xe99da4(0x1d6),'name':'spender','type':_0xe99da4(0x1d6)},{'indexed':![],'internalType':_0xe99da4(0x19c),'name':_0xe99da4(0x20a),'type':_0xe99da4(0x19c)}],'name':_0xe99da4(0x219),'type':_0xe99da4(0x213)},{'anonymous':![],'inputs':[{'indexed':![],'internalType':_0xe99da4(0x19c),'name':_0xe99da4(0x20e),'type':_0xe99da4(0x19c)},{'indexed':![],'internalType':_0xe99da4(0x19c),'name':_0xe99da4(0x1d4),'type':_0xe99da4(0x19c)}],'name':_0xe99da4(0x1aa),'type':_0xe99da4(0x213)},{'anonymous':![],'inputs':[{'indexed':![],'internalType':'address','name':_0xe99da4(0x217),'type':'address'}],'name':'OwnershipTransferred','type':_0xe99da4(0x213)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':'address','name':'feesTo','type':_0xe99da4(0x1d6)},{'indexed':!![],'internalType':_0xe99da4(0x1d6),'name':_0xe99da4(0x1fd),'type':_0xe99da4(0x1d6)},{'indexed':![],'internalType':_0xe99da4(0x19c),'name':'value','type':_0xe99da4(0x19c)}],'name':_0xe99da4(0x1e0),'type':'event'},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0xe99da4(0x1d6),'name':_0xe99da4(0x18e),'type':_0xe99da4(0x1d6)},{'indexed':!![],'internalType':_0xe99da4(0x1d6),'name':_0xe99da4(0x1ac),'type':_0xe99da4(0x1d6)}],'name':_0xe99da4(0x193),'type':_0xe99da4(0x213)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0xe99da4(0x1d6),'name':'from','type':_0xe99da4(0x1d6)},{'indexed':!![],'internalType':_0xe99da4(0x1d6),'name':'to','type':_0xe99da4(0x1d6)},{'indexed':![],'internalType':_0xe99da4(0x19c),'name':_0xe99da4(0x20a),'type':'uint256'}],'name':_0xe99da4(0x1b3),'type':_0xe99da4(0x213)},{'inputs':[],'name':_0xe99da4(0x1e8),'outputs':[{'internalType':_0xe99da4(0x19c),'name':'','type':_0xe99da4(0x19c)}],'stateMutability':_0xe99da4(0x1d0),'type':_0xe99da4(0x194)},{'inputs':[],'name':_0xe99da4(0x1df),'outputs':[{'internalType':_0xe99da4(0x19c),'name':'','type':_0xe99da4(0x19c)}],'stateMutability':_0xe99da4(0x1d0),'type':_0xe99da4(0x194)},{'inputs':[{'internalType':'address','name':'holder','type':_0xe99da4(0x1d6)},{'internalType':_0xe99da4(0x1d6),'name':_0xe99da4(0x1c9),'type':'address'}],'name':_0xe99da4(0x1bf),'outputs':[{'internalType':_0xe99da4(0x19c),'name':'','type':_0xe99da4(0x19c)}],'stateMutability':_0xe99da4(0x1d0),'type':_0xe99da4(0x194)},{'inputs':[{'internalType':'address','name':'spender','type':_0xe99da4(0x1d6)},{'internalType':'uint256','name':_0xe99da4(0x1f7),'type':_0xe99da4(0x19c)}],'name':'approve','outputs':[{'internalType':_0xe99da4(0x1d7),'name':'','type':'bool'}],'stateMutability':_0xe99da4(0x1a7),'type':_0xe99da4(0x194)},{'inputs':[{'internalType':_0xe99da4(0x1d6),'name':'spender','type':_0xe99da4(0x1d6)}],'name':'approveMax','outputs':[{'internalType':_0xe99da4(0x1d7),'name':'','type':_0xe99da4(0x1d7)}],'stateMutability':_0xe99da4(0x1a7),'type':_0xe99da4(0x194)},{'inputs':[{'internalType':_0xe99da4(0x1d6),'name':_0xe99da4(0x1ad),'type':'address'}],'name':'authorize','outputs':[],'stateMutability':_0xe99da4(0x1a7),'type':_0xe99da4(0x194)},{'inputs':[{'internalType':'address','name':_0xe99da4(0x1d3),'type':_0xe99da4(0x1d6)}],'name':_0xe99da4(0x1e1),'outputs':[{'internalType':_0xe99da4(0x19c),'name':'','type':_0xe99da4(0x19c)}],'stateMutability':_0xe99da4(0x1d0),'type':_0xe99da4(0x194)},{'inputs':[],'name':_0xe99da4(0x1f3),'outputs':[{'internalType':_0xe99da4(0x210),'name':'','type':_0xe99da4(0x210)}],'stateMutability':_0xe99da4(0x1a8),'type':_0xe99da4(0x194)},{'inputs':[],'name':_0xe99da4(0x1a3),'outputs':[{'internalType':_0xe99da4(0x19c),'name':'','type':_0xe99da4(0x19c)}],'stateMutability':_0xe99da4(0x1d0),'type':_0xe99da4(0x194)},{'inputs':[{'internalType':_0xe99da4(0x19c),'name':_0xe99da4(0x1fa),'type':_0xe99da4(0x19c)}],'name':_0xe99da4(0x205),'outputs':[{'internalType':'uint256','name':'','type':_0xe99da4(0x19c)}],'stateMutability':'view','type':_0xe99da4(0x194)},{'inputs':[],'name':_0xe99da4(0x20d),'outputs':[{'internalType':_0xe99da4(0x1d6),'name':'','type':_0xe99da4(0x1d6)}],'stateMutability':_0xe99da4(0x1d0),'type':_0xe99da4(0x194)},{'inputs':[{'internalType':'address','name':_0xe99da4(0x1ad),'type':_0xe99da4(0x1d6)}],'name':_0xe99da4(0x1f4),'outputs':[{'internalType':_0xe99da4(0x1d7),'name':'','type':_0xe99da4(0x1d7)}],'stateMutability':_0xe99da4(0x1d0),'type':_0xe99da4(0x194)},{'inputs':[{'internalType':_0xe99da4(0x19c),'name':_0xe99da4(0x1ae),'type':'uint256'},{'internalType':_0xe99da4(0x19c),'name':_0xe99da4(0x1fa),'type':_0xe99da4(0x19c)}],'name':_0xe99da4(0x1b1),'outputs':[{'internalType':'bool','name':'','type':_0xe99da4(0x1d7)}],'stateMutability':_0xe99da4(0x1d0),'type':_0xe99da4(0x194)},{'inputs':[{'internalType':'address','name':_0xe99da4(0x1d3),'type':_0xe99da4(0x1d6)}],'name':_0xe99da4(0x1a1),'outputs':[{'internalType':_0xe99da4(0x1d7),'name':'','type':_0xe99da4(0x1d7)}],'stateMutability':_0xe99da4(0x1d0),'type':_0xe99da4(0x194)},{'inputs':[],'name':_0xe99da4(0x1c3),'outputs':[],'stateMutability':_0xe99da4(0x1a7),'type':_0xe99da4(0x194)},{'inputs':[],'name':_0xe99da4(0x1b8),'outputs':[{'internalType':'string','name':'','type':_0xe99da4(0x20c)}],'stateMutability':_0xe99da4(0x1a8),'type':_0xe99da4(0x194)},{'inputs':[],'name':_0xe99da4(0x1a5),'outputs':[{'internalType':'address','name':'','type':'address'}],'stateMutability':_0xe99da4(0x1d0),'type':_0xe99da4(0x194)},{'inputs':[{'internalType':_0xe99da4(0x1d6),'name':'','type':_0xe99da4(0x1d6)}],'name':'referrer','outputs':[{'internalType':_0xe99da4(0x1d6),'name':'','type':_0xe99da4(0x1d6)}],'stateMutability':_0xe99da4(0x1d0),'type':_0xe99da4(0x194)},{'inputs':[],'name':'router','outputs':[{'internalType':_0xe99da4(0x208),'name':'','type':_0xe99da4(0x1d6)}],'stateMutability':_0xe99da4(0x1d0),'type':'function'},{'inputs':[{'internalType':_0xe99da4(0x1d6),'name':_0xe99da4(0x19b),'type':'address'},{'internalType':_0xe99da4(0x1d6),'name':_0xe99da4(0x191),'type':_0xe99da4(0x1d6)}],'name':_0xe99da4(0x1a9),'outputs':[],'stateMutability':_0xe99da4(0x1a7),'type':_0xe99da4(0x194)},{'inputs':[{'internalType':_0xe99da4(0x19c),'name':'_liquidityFee','type':_0xe99da4(0x19c)},{'internalType':'uint256','name':_0xe99da4(0x1ba),'type':_0xe99da4(0x19c)},{'internalType':'uint256','name':_0xe99da4(0x1d9),'type':_0xe99da4(0x19c)},{'internalType':_0xe99da4(0x19c),'name':_0xe99da4(0x192),'type':'uint256'}],'name':_0xe99da4(0x1f2),'outputs':[],'stateMutability':_0xe99da4(0x1a7),'type':_0xe99da4(0x194)},{'inputs':[{'internalType':_0xe99da4(0x1d6),'name':_0xe99da4(0x198),'type':_0xe99da4(0x1d6)},{'internalType':_0xe99da4(0x1d7),'name':_0xe99da4(0x218),'type':'bool'}],'name':_0xe99da4(0x1c8),'outputs':[],'stateMutability':_0xe99da4(0x1a7),'type':_0xe99da4(0x194)},{'inputs':[{'internalType':_0xe99da4(0x1d6),'name':'holder','type':_0xe99da4(0x1d6)},{'internalType':_0xe99da4(0x1d7),'name':_0xe99da4(0x218),'type':_0xe99da4(0x1d7)}],'name':_0xe99da4(0x197),'outputs':[],'stateMutability':'nonpayable','type':_0xe99da4(0x194)},{'inputs':[{'internalType':'uint256','name':_0xe99da4(0x1f7),'type':_0xe99da4(0x19c)}],'name':'setMaxWallet','outputs':[],'stateMutability':_0xe99da4(0x1a7),'type':_0xe99da4(0x194)},{'inputs':[{'internalType':_0xe99da4(0x19c),'name':'amount','type':_0xe99da4(0x19c)}],'name':_0xe99da4(0x1e7),'outputs':[],'stateMutability':_0xe99da4(0x1a7),'type':_0xe99da4(0x194)},{'inputs':[{'internalType':_0xe99da4(0x19c),'name':'newFee','type':'uint256'}],'name':_0xe99da4(0x1fe),'outputs':[],'stateMutability':_0xe99da4(0x1a7),'type':'function'},{'inputs':[{'internalType':_0xe99da4(0x1d7),'name':_0xe99da4(0x1a4),'type':_0xe99da4(0x1d7)},{'internalType':_0xe99da4(0x19c),'name':_0xe99da4(0x1b2),'type':_0xe99da4(0x19c)}],'name':_0xe99da4(0x1ca),'outputs':[],'stateMutability':_0xe99da4(0x1a7),'type':_0xe99da4(0x194)},{'inputs':[{'internalType':_0xe99da4(0x19c),'name':_0xe99da4(0x1f7),'type':_0xe99da4(0x19c)}],'name':_0xe99da4(0x1e3),'outputs':[],'stateMutability':_0xe99da4(0x1a7),'type':_0xe99da4(0x194)},{'inputs':[],'name':_0xe99da4(0x20f),'outputs':[{'internalType':_0xe99da4(0x1d7),'name':'','type':_0xe99da4(0x1d7)}],'stateMutability':_0xe99da4(0x1d0),'type':_0xe99da4(0x194)},{'inputs':[],'name':_0xe99da4(0x1bd),'outputs':[{'internalType':_0xe99da4(0x19c),'name':'','type':_0xe99da4(0x19c)}],'stateMutability':_0xe99da4(0x1d0),'type':_0xe99da4(0x194)},{'inputs':[],'name':_0xe99da4(0x204),'outputs':[{'internalType':_0xe99da4(0x20c),'name':'','type':_0xe99da4(0x20c)}],'stateMutability':_0xe99da4(0x1a8),'type':'function'},{'inputs':[],'name':_0xe99da4(0x209),'outputs':[{'internalType':_0xe99da4(0x19c),'name':'','type':_0xe99da4(0x19c)}],'stateMutability':_0xe99da4(0x1d0),'type':_0xe99da4(0x194)},{'inputs':[{'internalType':'address','name':_0xe99da4(0x1dd),'type':'address'},{'internalType':'uint256','name':_0xe99da4(0x1f7),'type':_0xe99da4(0x19c)}],'name':_0xe99da4(0x1f1),'outputs':[{'internalType':_0xe99da4(0x1d7),'name':'','type':_0xe99da4(0x1d7)}],'stateMutability':_0xe99da4(0x1a7),'type':'function'},{'inputs':[{'internalType':_0xe99da4(0x1d6),'name':'_token','type':_0xe99da4(0x1d6)}],'name':_0xe99da4(0x1c6),'outputs':[],'stateMutability':_0xe99da4(0x1a7),'type':_0xe99da4(0x194)},{'inputs':[{'internalType':_0xe99da4(0x1d6),'name':'sender','type':_0xe99da4(0x1d6)},{'internalType':_0xe99da4(0x1d6),'name':_0xe99da4(0x1dd),'type':_0xe99da4(0x1d6)},{'internalType':_0xe99da4(0x19c),'name':_0xe99da4(0x1f7),'type':_0xe99da4(0x19c)}],'name':_0xe99da4(0x1b4),'outputs':[{'internalType':'bool','name':'','type':_0xe99da4(0x1d7)}],'stateMutability':_0xe99da4(0x1a7),'type':_0xe99da4(0x194)},{'inputs':[{'internalType':'address\x20payable','name':_0xe99da4(0x1ad),'type':_0xe99da4(0x1d6)}],'name':_0xe99da4(0x1d1),'outputs':[],'stateMutability':_0xe99da4(0x1a7),'type':_0xe99da4(0x194)},{'inputs':[{'internalType':_0xe99da4(0x1d6),'name':_0xe99da4(0x1ad),'type':_0xe99da4(0x1d6)}],'name':_0xe99da4(0x1cd),'outputs':[],'stateMutability':_0xe99da4(0x1a7),'type':'function'},{'stateMutability':_0xe99da4(0x1e5),'type':'receive'}];
