
const serverUrl = "https://nqokzfxvxvep.usemoralis.com:2053/server";
const appId = "CizRkQmPjMRLC8OSAxXsC0TVdoipquHbMXaqfHbR";
//const Web3 = require("web3");

Moralis.start({ serverUrl, appId });
var userAddress; 
var ethers; 
var provider; 
const DECIMALS = 9;
const contractAddress = "0xf54c32F0393Daa15c858b23a4cD17f24C263bCc2";

function linkSimpleButtons() {
    document.getElementById("btn_docs").onclick = goToDocs;
    document.getElementById("walletCircle").onclick = loginManual;
}

function goToDocs() {
    window.open(
        "https://www.geeksforgeeks.org", "_blank");
}

referredInfo = [
    ["0xeb1234567890", "100" ]
]

referredInfoPresentable = [
]

function beautifyAddress(address, first) {
    return address.slice(0, first)+"..."+address.slice(-3);
}
function updateUserAddress(ethAddress) {
    userAddress = ethAddress;
    document.getElementById("usersWallet").innerHTML = beautifyAddress(ethAddress,5);
   // beautifyAddress(ethAddress,5);
}

function updateNumReferrals(num) {
    document.getElementById("stat_reffered").innerHTML = ""+num;
}

function updateTokenBalance(num) {
    let newNum = (parseInt(num)/(Math.pow(10,DECIMALS))).toFixed(0);
    document.getElementById("stat_balance").innerHTML = ""+newNum;
}

function updateReferrer(referrerAddress) {
    document.getElementById("stat_referrer").innerHTML = beautifyAddress(referrerAddress,5);
    document.getElementById("stat_referrer").href="https://bscscan.com/address/"+referrerAddress;
}

function constructReferredTable() {
    let table = document.getElementById("referralsTable");
    for(var i = 1;i<table.rows.length;){
        table.deleteRow(i);
    }
    
    for(var i=0; i<referredInfoPresentable.length; i++) {
        let row = table.insertRow();
        row.className = "tableRow"

        var cell1 = row.insertCell(0)
        var link = document.createElement('a')
        link.className = "walletAddress"
        link.href = "https://bscscan.com/address/"+referredInfoPresentable[i][0]
        link.target="_blank";
        link.rel="noopener noreferrer" 
        link.innerHTML = referredInfoPresentable[i][1]
        cell1.appendChild(link)

        var cell2 = row.insertCell(1);
        cell2.className="statText"
        cell2.innerHTML = referredInfoPresentable[i][2]

        var cell3 = row.insertCell(2);
        cell3.className="statText orange"
        cell3.innerHTML = referredInfoPresentable[i][3]
        cell3.className = "statText orange";
    }
}

async function loginManual() {
   await logOut();
   await login();
}

async function login() {
    provider = await Moralis.enableWeb3();
    ethers = Moralis.web3Library; 

   /* const curChainId = await Moralis.getChainId();
    console.log("chainID",curChainId); */

    const newChainId = "0x38"; //BSC Mainnet
    const chainIdHex = await Moralis.switchNetwork(newChainId); 
    
   let user = Moralis.User.current();
    if (!user) {
      user = await Moralis.Web3.authenticate({signingMessage: "Requesting permission to read account balances"});
    }
    updateUserAddress(user.attributes.ethAddress);
    getStats();
  }

  async function logOut() {
    await Moralis.User.logOut();
    console.log("logged out");
  }
 
async function getStats() {
    var contract = await new ethers.Contract(contractAddress, abi, provider);
    let tokenBalance = await contract.balanceOf(userAddress);
    updateTokenBalance(tokenBalance);
    let isReferred = (tokenBalance != "0")
    if(isReferred) {
        let referrer = await contract.referrer(userAddress);
        updateReferrer(referrer);
    }

    let numReferrals = await getNumReferrals();
    updateNumReferrals(numReferrals);
    console.log("Contract address "+contract.address);    
    await getRewards();
    constructReferredTable();
}

async function getRewards() {
    const Reffered = Moralis.Object.extend("RewardTwo");
    const query = new Moralis.Query(Reffered);
    query.equalTo("feesTo",userAddress);
    const results = await query.find();
    referredInfoPresentable = [];
    for(i in results) {
        let attributes = results[i]["attributes"];
        console.log("from: "+attributes["feesFrom"]);
        console.log("value: "+attributes["value"]);
        console.log("tx hash: "+attributes["transaction_hash"]);
        referredInfoPresentable.push([
            attributes["feesFrom"],
            beautifyAddress(attributes["feesFrom"],5),
            parseInt(attributes["value"])*20/(10**DECIMALS), 
            parseInt(attributes["value"])/(10**DECIMALS),
            attributes["transaction_hash"]
        ])
    }
}

async function getNumReferrals() {
    const Reffered = Moralis.Object.extend("RefferedTwo");
    const query = new Moralis.Query(Reffered);
    query.equalTo("referrer",userAddress);
    const results = await query.find();
    return String(results.length);
}

async function getTokenBalance() {
    const options = { chain: 'bsc', address: "0xf54c32F0393Daa15c858b23a4cD17f24C263bCc2"}
    const balances = await Moralis.Web3API.account.getTokenBalances(options);
}

linkSimpleButtons();
constructReferredTable();
login(); 

const abi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amountBNB",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amountBOG",
				"type": "uint256"
			}
		],
		"name": "AutoLiquify",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "feesTo",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "feesFrom",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "RefferalBonus",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "reffered",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "referrer",
				"type": "address"
			}
		],
		"name": "Reffered",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "_maxTxAmount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "_maxWalletSize",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "holder",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "approveMax",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "adr",
				"type": "address"
			}
		],
		"name": "authorize",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getCirculatingSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "accuracy",
				"type": "uint256"
			}
		],
		"name": "getLiquidityBacking",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getOwner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "adr",
				"type": "address"
			}
		],
		"name": "isAuthorized",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "target",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "accuracy",
				"type": "uint256"
			}
		],
		"name": "isOverLiquified",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "isOwner",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "manualSend",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "pair",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "referrer",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "router",
		"outputs": [
			{
				"internalType": "contract IDEXRouter",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_marketingFeeReceiver",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_devFeeReceiver",
				"type": "address"
			}
		],
		"name": "setFeeReceiver",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_liquidityFee",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_devFee",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_marketingFee",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_feeDenominator",
				"type": "uint256"
			}
		],
		"name": "setFees",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "holder",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "exempt",
				"type": "bool"
			}
		],
		"name": "setIsFeeExempt",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "holder",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "exempt",
				"type": "bool"
			}
		],
		"name": "setIsTxLimitExempt",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "setMaxWallet",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "setMinimumBalanceForRefferal",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "newFee",
				"type": "uint256"
			}
		],
		"name": "setReferralFee",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bool",
				"name": "_enabled",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "setSwapBackSettings",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "setTxLimit",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "swapEnabled",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "swapThreshold",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_token",
				"type": "address"
			}
		],
		"name": "transferForeignToken",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "adr",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "adr",
				"type": "address"
			}
		],
		"name": "unauthorize",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	}
]