const block=require('./Block');

describe('_tests_', function() =>{
	let  Data, lastBlock, Block;
	
	beforeEach(function() =>{
		data='foo';
		lastBlock=block.genesisBlock();
		Block=block.MineBlock(block.genesisBlock, data);
	});
	
	it('Sets the `data` to match the input',function()=>{
		expect(Block.data).toEqual(data);
	});
	it('Sets the `lastHash` to match the hash', function()=>{
		expect(Block.lastHash).toEqual(lastBlock.hash);
	});
});