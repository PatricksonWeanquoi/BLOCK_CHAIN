const express = require('express');
var path = require('path');
const bodyparser=require('body-parser');
const BlockChain = require('../Chains/BlockChains');
const HTTP_PORT = process.env.HTTP_PORT || 3001;
const P2pServer=require('../PTP_Server/p2p-server');

const app = express();
const bc =new BlockChain();
const p2pServer=new P2pServer(bc);

app.use(bodyparser.json());
app.get('/chains', (req, res) => {
	res.json(bc.chain);
});
app.post('/mine', (req, res) =>
{
	const block=bc.addBlock(req.body.data);
	console.log(`New Block Was Added: ${block.toString()}`);
	p2pServer.syncChains();
	res.redirect('/chains');
});

app.listen(HTTP_PORT, () => {console.log(`Listening on port: ${HTTP_PORT}`)});
p2pServer.listen();