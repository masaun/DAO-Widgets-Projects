// aragonOS
// Debug
//console.log('=== ACL ===', ACL);        // Result of execution：　

const Widgets = artifacts.require('Widgets.sol')

//const MODIFIER_ROLE = keccak256("MODIFIER_ROLE");
//const MODIFIER_ROLE = web3.utils.sha3("MODIFIER_ROLE");

contract('Widgets', (accounts) => {
	it('Print contract address of Widgets', async () => {
		console.log(Widgets.address);                     // Result of execution： 0xe06eb4c85D91aD3E98bc853237d80414320A3f08
  	})

	it('Get 10 accounts address of Ganache-GUI', async () => {
		// Get 10 accounts address of Ganache-GUI
		const accounts = await web3.eth.getAccounts();

		// Debug
		console.log('=== accounts ===', accounts);        // Result of execution：　
		console.log('=== accounts[0] ===', accounts[0]);  // Result of execution： 0x8Fc9d07b1B9542A71C4ba1702Cd230E160af6EB3
  	})

	it('Get result that is execute getWidgetsLength function', async () => {
		const contract = new web3.eth.Contract(Widgets.abi, Widgets.address);
		const foo = await contract.methods.getWidgetsLength().call();
		console.log('=== foo ===', foo);        	     // Result of execution：0
	})


 it('Get result that is execute addWidget function by using methods option of web3.js', async () => {
    //const app = await AppStub.new()
    //APP_ROLE = await app.ROLE()

    const MODIFIER_ROLE = web3.utils.sha3("MODIFIER_ROLE");
    console.log('=== MODIFIER_ROLE ===', MODIFIER_ROLE);              // Result of execution： 0x62ca43aa15f7f495faa685ce5a258aa390fdc8d7094251dd23d32353f496ddfe
    assert.equal(web3.utils.sha3("MODIFIER_ROLE"), MODIFIER_ROLE);

    console.log('=== Success to pass about assert of MODIFIER_ROLE ===');

	  const accounts = await web3.eth.getAccounts()
		const contract = new web3.eth.Contract(Widgets.abi, Widgets.address);
		const hoge = await contract.methods.addWidget(accounts[3]).send({ from: accounts[0] });
    
    //assert.equal(web3.utils.sha3("MODIFIER_ROLE"), MODIFIER_ROLE);
		console.log('=== hoge ===', hoge);              // Result of execution： fall
	})


	it('Get result that is execute addWidget function by using deployed instance', async () => {
	  const accounts = await web3.eth.getAccounts();
		const hogehoge = Widgets.deployed().then((inst) => { return hogehoge = inst.addWidget(accounts[3]); });
		//const hogehoge = Widgets.deployed().then((inst) => { console.log(inst.addWidget(accounts[3])); }); 
		console.log('=== hogehoge ===', hogehoge);  					   // Result of execution： Promise { <pending> }
	})
})
