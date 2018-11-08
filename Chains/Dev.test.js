const Blockchain=require('./BlockChains');
const bc=new Blockchain;
const wallet=require('../Wallet/index')
const w=new wallet();
console.log(w.toString());
for(let i=0; i<10; i++)
{
	console.log(bc.addBlock(`foo ${i}`).toString());
}

