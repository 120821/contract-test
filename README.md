# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
GAS_REPORT=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```

http://linlin.fun/blogs/197
1、创建新的文件夹：mkdir contract-test

1.1进入文件夹 ： cd contract-test/

1.2查看node版本：node -v

1.3安装工具： npm install --save-dev hardhat

linlin@linlin-i5:/workspace$ mkdir contract-test
linlin@linlin-i5:/workspace$ cd contract-test/
linlin@linlin-i5:/workspace/contract-test$ node -v
v16.13.2
linlin@linlin-i5:/workspace/contract-test$ npm install --save-dev hardhat

added 305 packages, and audited 306 packages in 1m

58 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

2.1判断是否安装成功，使用：npx hardhat

看到输入一堆符号后，就成功安装了
这样就会生成一个ETH contract的项目，包含了一个智能合约。

（可选） 也可以自行创建一个contract, 内容： cat contracts/SayHi.sol

2.2编译： npx hardhat compile

2.3部署： scripts/sample-script.js
npx hardhat run scripts/sample-script.js

就可以看到contract部署到了本地。

2.4在本地运行轻节点：npx hardhat node   （在本地运行 模拟的ETH节点）

3.使用 web3.js 进行查询，打开新的窗口

引入web3.js : npm install web

创建一个文件： （当前目录下） run.js
3.1查询
可以查询该 节点下的所有account:

curl -X POST -H "Content-Type: application/json" --data '{"jsonrpc":"2.0","method":"eth_accounts","params":[],"id":1}' localhost:8545
查询当前的gas price:

$ curl -X POST -H "Content-Type: application/json:[],"id":1}' localhost:8545 method":"eth_gasPrice","params":
{"jsonrpc":"2.0","id":1,"result":"0x6fc23ac0"}

查看区块高度：

curl -X POST -H "Content-Type: application/json" --data '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}' localhost:8545

查看账户余额：

curl -X POST -H "Content-Type: application/json" --data '{"jsonrpc":"2.0","method":"eth_getBalance","params":["0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266", "latest"],"id":1}' 127.0.0.1:8545



