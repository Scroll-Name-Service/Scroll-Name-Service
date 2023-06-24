const scrollNS=class{constructor(Provider){this.Provider=Provider;
const abi=[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"ApprovalCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"ApprovalQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"ApprovalToCurrentOwner","type":"error"},{"inputs":[],"name":"ApproveToCaller","type":"error"},{"inputs":[],"name":"BalanceQueryForZeroAddress","type":"error"},{"inputs":[],"name":"MintToZeroAddress","type":"error"},{"inputs":[],"name":"MintZeroQuantity","type":"error"},{"inputs":[],"name":"OwnerQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"TransferCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"TransferFromIncorrectOwner","type":"error"},{"inputs":[],"name":"TransferToNonERC721ReceiverImplementer","type":"error"},{"inputs":[],"name":"TransferToZeroAddress","type":"error"},{"inputs":[],"name":"URIQueryForNonexistentToken","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"Cost2Character","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Cost3Character","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Cost4mCharacter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"NAME","type":"string"},{"internalType":"address","name":"ref_address","type":"address"}],"name":"Register","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"string","name":"_name","type":"string"}],"name":"_checkName","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"contractURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"}],"name":"dataAddress","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"NAME","type":"string"},{"internalType":"string","name":"Area","type":"string"}],"name":"getDataAddress","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"count","type":"uint256"}],"name":"lastAddresses","outputs":[{"internalType":"string[]","name":"","type":"string[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"string","name":"name","type":"string"}],"name":"namediff","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"primaryAddress","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"","type":"string"}],"name":"resolveAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"royaltyBps","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"_salePrice","type":"uint256"}],"name":"royaltyInfo","outputs":[{"internalType":"address","name":"receiver","type":"address"},{"internalType":"uint256","name":"royaltyAmount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"NAME","type":"string"},{"internalType":"address","name":"newresolve","type":"address"}],"name":"setAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"customBaseURI_","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"customContractURI_","type":"string"}],"name":"setContractURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"NAME","type":"string"},{"internalType":"string","name":"setArea","type":"string"},{"internalType":"string","name":"newDatas","type":"string"}],"name":"setDataAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"NAME","type":"string"}],"name":"setPrimaryAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_ref","type":"uint8"}],"name":"setRefRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"Character2","type":"uint256"},{"internalType":"uint256","name":"Character3","type":"uint256"},{"internalType":"uint256","name":"Character4more","type":"uint256"}],"name":"setRegisterPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"royaltyBps_","type":"uint256"}],"name":"setRoyaltyBps","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"","type":"string"}],"name":"tokenAddressandID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"tokenIDandAddress","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"walletOfOwnerName","outputs":[{"internalType":"string[]","name":"","type":"string[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"uint256","name":"startindex","type":"uint256"},{"internalType":"uint256","name":"endindex","type":"uint256"}],"name":"walletOfOwnerNamePage","outputs":[{"internalType":"string[]","name":"","type":"string[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}];

const c_address="0xe2e1D82b050Bb5BFeC776b2653A72f093A8373AB";this.contract=new Provider.eth.Contract(abi,c_address);}
primaryAddress(address){return this.contract.methods.primaryAddress(address).call((err,result)=>{if(err){console.error('Error: ',err);return err;}else{return result;}});}
addressOwners(address){return this.contract.methods.walletOfOwnerName(address).call((err,result)=>{if(err){console.error('Error: ',err);return err;}else{return result;}}).catch(function(error){return error;});}


setResolveAddress_check_gas(name,new_address,account){
	return this.contract.methods.setAddress(name,new_address)
  .estimateGas({from:account})
  .then(function(gasAmount){ return gasAmount;
    }).catch(function(error){
      $('#toast').toast('show');
      $('#toast_message').text("Insufficient balance on your wallet.");
  });
}

setResolveAddress(name,new_address,account,gasAmount){
	return this.contract.methods.setAddress(name,new_address).send({gasLimit: String(gasAmount),from:account}).once("error",(err)=>{
		console.log(err);
		}).then((receipt)=>{
			return receipt;
		}).catch(function(error){
		return error;
	});}


setData_check_gas(name,area,value,account){
	return this.contract.methods.setDataAddress(name,area,value)
  .estimateGas({from:account})
  .then(function(gasAmount){ return gasAmount;
    }).catch(function(error){
      $('#toast').toast('show');
      $('#toast_message').text("Insufficient balance on your wallet.");
  });
}

setData(name,area,value,account,gasAmount){
	let result=name.replace(".scroll","");
	return this.contract.methods.setDataAddress(name,area,value).send({gasLimit: String(gasAmount),from:account}).once("error",(err)=>{
		console.log(err);
		}).then((receipt)=>{
		return receipt;
		}).catch(function(error){
		return error;
	});}





setPrimaryAddress_check_gas(name,account){
	return this.contract.methods.setPrimaryAddress(name)
  .estimateGas({from:account})
  .then(function(gasAmount){ return gasAmount;
    }).catch(function(error){
      $('#toast').toast('show');
      $('#toast_message').text("Insufficient balance on your wallet.");
  });
}

setPrimaryAddress(name,account,gasAmount){
	return this.contract.methods.setPrimaryAddress(name).send({gasLimit: String(gasAmount),from:account}).once("error",(err)=>{
		console.log(err);
		})
		.then((receipt)=>{
			return receipt;
		}).catch(function(error){
			return error;
	});}

Register_check_gas(name,ref_address,account,value){
	return this.contract.methods.Register(name.replace(".scroll",""),ref_address)
  .estimateGas({from:account,value:value})
  .then(function(gasAmount){ return gasAmount;
    }).catch(function(error){
	if(String(error).indexOf("already")!== -1){
	  $('#toast').toast('show');
      $('#toast_message').text(""+name+".scroll has already been taken.");
		} else if(String(error).indexOf("Invalid")!== -1){
	  $('#toast').toast('show');
      $('#toast_message').text(""+name+".scroll is invalid Name");
		} else if(String(error).indexOf("not active")!== -1){
	  $('#toast').toast('show');
      $('#toast_message').text("Mint hasn't started yet.");
		} else {
      $('#toast').toast('show');
      $('#toast_message').text("Insufficient balance on your wallet.");
	}
  });
}


Register(name,ref_address,account,value,gasAmount) {
  return this.contract.methods.Register(name.replace(".scroll",""),ref_address).send({gasLimit: String(gasAmount),from: account,value: value}).once("error", (err) => {
      console.log(err);
    })
    .then((receipt) => {
    return receipt;
  }).catch(function(error){
    return error;
  });
}




ownerOf(token_id){return this.contract.methods.ownerOf(token_id).call((err,result)=>{if(err){console.error('Error: ',err);return err;}else{return result;}}).catch(function(error){return error;});}
lastAddresses(count){return this.contract.methods.lastAddresses(count).call((err,result)=>{if(err){console.error('Error: ',err);return err;}else{return result;}}).catch(function(error){return error;});}
addressOwnersMap(address){return this.contract.methods.walletOfOwnerMap(address).call((err,result)=>{if(err){console.error('Error: ',err);return err;}else{return result;}}).catch(function(error){return error;});}
async resolveAddress(name){let result=name.replace(".scroll","");return this.contract.methods.resolveAddress(result).call((err,result)=>{if(err){console.error('Error: ',err);return err;}else{return result;}});}
allowlistAddresses(address){return this.contract.methods.allowlistAddresses(address).call((err,result)=>{if(err){console.error('Error: ',err);return err;}else{return result;}}).catch(function(error){return error;});}
checkName(name){let name2=name.replace(".scroll","");return this.contract.methods._checkName(name2).call((err,result)=>{if(err){console.error('Error: ',err);return err;}else{return result;}}).catch(function(error){return error;});}
isTaken(name){let name3=name.replace(".scroll","");return this.contract.methods.tokenAddressandID(name3).call((err,result)=>{if(err){console.error('Error: ',err);return err;}else{return result;}}).catch(function(error){return error;});}
getData(name,data){let result=name.replace(".scroll","");return this.contract.methods.getDataAddress(result,data).call((err,result)=>{if(err){console.error('Error: ',err);return err;}else{return result;}});}
getTwitter(name){return this.getData(name,'twitter')}
getInstagram(name){return this.getData(name,'instagram')}
getEmail(name){return this.getData(name,'email')}
getUrl(name){return this.getData(name,'url')}
getAvatar(name){return this.getData(name,'avatar')}
getDescription(name){return this.getData(name,'description')}
getNotice(name){return this.getData(name,'notice')}
getKeywords(name){return this.getData(name,'keywords')}
getDiscord(name){return this.getData(name,'discord')}
getTiktok(name){return this.getData(name,'tiktok')}
getReddit(name){return this.getData(name,'reddit')}
getTelegram(name){return this.getData(name,'telegram')}
getContent(name){return this.getData(name,'content')}};