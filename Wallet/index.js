const CUtil=require('../Chain-Util');
const {INITIAL_BALANCE}=require('../config');
class Wallet{
    constructor()
    {
        this.balance=INITIAL_BALANCE;
        this.keyPair=CUtil.genKeyPair();
        this.publicKey=this.keyPair.getPublic().encode('hex');
        //this.sign(balance, keyPair.getPrivate());
    }
    toString()
    {
        return `Wallet -
            publicKey:  ${this.publicKey.toString()}
            balance  :  ${this.balance}`
    }
    sign(dataHash)
    {
        return this.keyPair.sign(dataHash);
    }
}
module.exports=Wallet;