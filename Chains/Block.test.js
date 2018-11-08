const Block=require('./Block');

describe('Block', () =>{
	let  Data, lastBlock, block;
	
	beforeEach(() =>{
		data='foo';
		lastBlock=Block.genesis();
		block=Block.MineBlock(lastBlock, data);
	});
	
	it('Sets the `data` to match the input',()=>{
		expect(block.data).toEqual(data);
	});
	it('Sets the `lastHash` to match the hash', ()=>{
		expect(block.lastHash).toEqual(this.lastBlock.hash);
	});
});