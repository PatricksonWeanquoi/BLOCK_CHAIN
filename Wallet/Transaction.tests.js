const Transaction=require('./Transaction');
const Wallet=require('./index')

describe('Transaction', () =>{
    let transaction, wallet, recipient, amount;

    beforeEach(() =>{
        wallet=new Wallet();
        amount=50;
        recipient='r3c95fs5sd';
        transaction=Transaction.newTransaction(wallet,recipient,amount);
    });

    it('outputs the `amount` subtracted from the wallet balance', () =>
    {expect(transaction.outputs.find(output => output.address ===wallet.publicKey).amount)
    .toEqual(wallet.balance-amount);
    });

    it('outputs the `amount` added to the recipient', () =>{
    expect(transaction.outputs.find(output =>output.address === recipient).amount).toEqual(amount);});
});