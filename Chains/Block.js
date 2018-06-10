const CUtil=require('../Chain-util');
const {DIFFICULTY, MINE_RATE}=require('../config');
class Block{
	constructor(timestamp, lastHash, hash, data, nonce, difficulty){
		this.timestamp=timestamp;
		this.lastHash=lastHash;
		this.hash=hash;
		this.nonce=nonce;
		this.difficulty=difficulty || DIFFICULTY;
		this.data=data;
	}
	toString(){
	return `Block-
		TimeStamp :	${this.timestamp}
		Last Hash :	${this.lastHash.substring(0,10)}
		Hash	  :	${this.hash.substring(0,10)}
		Nonce	  : ${this.nonce}
		Difficulty: ${this.difficulty}
		Data	  :	${this.data}`;	
	}
static genesis() {
	return new this('Genesis time', '-----', 'f1r57-h45h', [],0, DIFFICULTY);
}
static mineBlock(lastBlock, data) {
	let timestamp;
	let hash;
	const lastHash = lastBlock.hash;
	let{difficulty}=lastBlock;
	let nonce=0;
  do{
	 nonce++;
	 timestamp = Date.now() 
	 difficulty=Block.adjustDifficulty(lastBlock,timestamp);
	 hash = Block.hash(timestamp, lastHash, data, nonce, difficulty);
  }while(hash.substring(0,difficulty)!=='0'.repeat(difficulty));
  
  return new this(timestamp, lastHash, hash, data, nonce, difficulty);
}
static hash(timestamp, lastHash, data, nonce, difficulty) {
	return CUtil.hash(`${timestamp}${lastHash}${data}${nonce}${difficulty}`).toString();
}
static blockHash(block) {
	const { timestamp, lastHash, data, nonce, difficulty } = block;
  return Block.hash(timestamp, lastHash, data,  none, difficulty);
}
static adjustDifficulty(lastBlock, currentTime)
{
	let{difficulty}=lastBlock;
	difficulty=lastBlock.timestamp+MINE_RATE >currentTime ? difficulty+1 : difficulty-1;
	return difficulty;
}
}
module.exports=Block;