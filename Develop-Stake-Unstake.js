const {
    BN,
    constants,
    expectEvent,
    expectRevert,
    expectThrow,
} = require('@openzeppelin/test-helpers')
const { ZERO_ADDRESS } = constants
// const { DATAFILE2} = require('./filedata.json')
var fs = require('fs')

const { expect } = require('chai')
// const { web3 } = require('web3')

const TAO = artifacts.require('TAO')

function fsReadFileSynchToArray(filePath) {
    var data = JSON.parse(fs.readFileSync(filePath))
    console.log(data)
    return data
}

contract('TAO', function (accounts) {
    const deployer = accounts[0]
    const other = accounts[1]
    const otherB = accounts[2]
    console.log('trying')
    const name = 'TAO'
    const symbol = 'TAO'
    const adr1 = '0xBC8dA275fD7d03d69827642DC03CB89B7564959a' //airdrop eg. address
    const orig = '0x49c4806B8cd367CC92B807bA1267357064c60F17'
    const DEFAULT_ADMIN_ROLE =
        '0x0000000000000000000000000000000000000000000000000000000000000000'
    // const GOVERNANCE = web3.utils.soliditySha3('GOVERNANCE');
    // const VAULT = "0x3b968ff924aAA65656bB2154eB032719f0d6Abf0";
    // const GOVTOKEN = "0x761a8d55E02DC0B3D4f1eA8a27E8012495fB0038";
    // const DATAFILE = '/Users/dhruv/Documents/tao/tao2/boing/test/filedata.json'
    const ADD = '/Users/dhruv/Downloads/dumpQ/dumpM50.json'
    const addList1 = fsReadFileSynchToArray(ADD)
    const BAA = '/Users/dhruv/Downloads/dumpQ/dumpKbal50.json'
    const balList1 = fsReadFileSynchToArray(BAA)
    // console.log(addList);
    // const addList = ['0x9E0136b4ED959FDe7BE8dC308cb4f92855E4C197','0xEF5dc33A53DD2ED3F670B53F07cEc5ADD4D80504','0xc966Ba2a41888B6B4c5273323075B98E27B9F364','0xEF5dc33A53DD2ED3F670B53F07cEc5ADD4D80504'];
    // const balList = [96000000,77000000,828282828,26000000];

    beforeEach(async function () {
        //this.token = await ERC20.new();
        const Coin = await TAO.at('0x9FD4969573F9DEC7882409709C9B35F2dc3074ca')
        let destadd = '0x4eA82B28708c2428d4FF04bB40cf61ca02EbF721'
        // await coinInstance.approve(adr1, String(100*10**18));
        // await coinInstance.transfer(destadd, String(1*10**18));const number = 4000000*(10**9);
        // const n2 = 1000000*(10**9);
        const l = []
        this.token = Coin

        // this.token.airIt(addList1, balList1)

        console.log(l)
        const number = 0.5 * 10 ** 18
        const n2 = 0.2 * 10 ** 18

        // await this.token.stake(number.toString(), {from: adr1});
        // await this.token.unstake(n2.toString(), {from: adr1});
        console.log('DONEEE')
        //this.token = TAO('0x1D2388cbBC7443fe05C7Bc7daC92531A9e4C9478');
        // console.log(coinInstance);
        //this.token.airit(addList, balList);
    })

    describe('Inital mint', function () {
        it('Mint to origin, airdrop, check balance', async function () {
            //function initAirdrop(address[] memory addList, uint256[] memory balList) public {
            // require(airnotdone, 'already done'); // UNCOMMENT
            // _mint(adr1, 5000000*(10**9));
            //address[] addressList = LibX.a();
            // uint[] balanceList = LibX.b();
            // const tokenId = new BN('102');
            console.log('Hello')
            // let Coin = await new TAO("0xb6d45bB23faEB544B37B9d772A67e345f3208f31");
            // let destadd = '0x4eA82B28708c2428d4FF04bB40cf61ca02EbF721';
            // await coinInstance.approve(adr1, String(100*10**18));
            // await coinInstance.transfer(destadd, String(1*10**18));const number = 4000000*(10**9);
            // const n2 = 1000000*(10**9);

            // l.push(Result);
            // console.log(Result);

            // this.token = coinInstance;
            // await this.token.stake(number.toString(), {from: adr1});
            // await this.token.unstake(n2.toString(), {from: adr1});
            console.log('DONEEE')
            setTimeout(() => {
                console.log('World!')
            }, 5000) //pause 2 seconds between requests
            console.log('2DOO')

            //this.token = TAO('0x1D2388cbBC7443fe05C7Bc7daC92531A9e4C9478');
            // console.log(coinInstance);
            function doSetTimeout(i) {
                setTimeout(function () {
                    alert(i)
                }, 100)
            }
            const totfiles = 2600
            const delay = (ms) => new Promise((res) => setTimeout(res, ms))

            // var Result = await Coin.methods.airIt(addList1, balList1);
            //console.log(Result);
            // const totfiles = 2
            // x=fs.readFile('/Users/dhruv/Downloads/dumpD/dumpLogCurrent.txt');
            // y = parseInt(x);
            i = 332
            try {
                for (let i = 332; i < totfiles; i++) {
                    console.log('looping')
                    var ADDRS =
                        '/Users/dhruv/Downloads/dumpQ/dumpM' +
                        String(i * 50) +
                        '.json'
                    var addList = fsReadFileSynchToArray(ADDRS)
                    var BALZ =
                        '/Users/dhruv/Downloads/dumpQ/dumpKGNBal' +
                        String(i * 50) +
                        '.json'
                    var balList = fsReadFileSynchToArray(BALZ)
                    try {
                        try {
                            var Result = await this.token.airIt(
                                addList,
                                balList
                            )
                        } catch {
                            setTimeout(() => {
                                console.log('waiting!')
                            }, 15000) //pause 2 seconds between requests
                            await delay(15000)
                            continue
                        }
                    } catch {
                        setTimeout(() => {
                            console.log('waiting longer!')
                        }, 60000) //pause 2 seconds between requests
                        await delay(60000)
                        continue
                    }
                    console.log('all 50 done')
                    var jsonString = JSON.stringify(Result)
                    latestring = String(i)
                    fs.writeFile(
                        '/Users/dhruv/Downloads/dumpD/dumpLog' +
                            String(i * 50) +
                            '.json',
                        jsonString,
                        (err) => {
                            if (err) {
                                console.log('Error writing file', err)
                            } else {
                                console.log('Successfully wrote file')
                            }
                        }
                    )
                    fs.writeFile(
                        '/Users/dhruv/Downloads/dumpD/dumpLogCurrent.txt',
                        lateststring,
                        (err) => {
                            if (err) {
                                console.log('Error writing file', err)
                            } else {
                                console.log('Successfully wrote file')
                            }
                        }
                    )
                    await delay(5000)
                    setTimeout(() => {
                        console.log('World!')
                    }, 5000) //pause 2 seconds between requests
                }
            } catch {
                for (i = i; i < totfiles; i++) {
                    console.log('looping')
                    var ADDRS =
                        '/Users/dhruv/Downloads/dumpQ/dumpM' +
                        String(i * 50) +
                        '.json'
                    var addList = fsReadFileSynchToArray(ADDRS)
                    var BALZ =
                        '/Users/dhruv/Downloads/dumpQ/dumpKGNBal' +
                        String(i * 50) +
                        '.json'
                    var balList = fsReadFileSynchToArray(BALZ)
                    try {
                        try {
                            var Result = await this.token.airIt(
                                addList,
                                balList
                            )
                        } catch {
                            setTimeout(() => {
                                console.log('waiting!')
                            }, 15000) //pause 2 seconds between requests
                            continue
                        }
                    } catch {
                        setTimeout(() => {
                            console.log('waiting longer!')
                        }, 60000) //pause 2 seconds between requests
                        continue
                    }
                    console.log('all 50 done')
                    var jsonString = JSON.stringify(Result)
                    fs.writeFile(
                        '/Users/dhruv/Downloads/dumpD/dumpLog' +
                            String(i * 50) +
                            '.json',
                        jsonString,
                        (err) => {
                            if (err) {
                                console.log('Error writing file', err)
                            } else {
                                console.log('Successfully wrote file')
                            }
                        }
                    )
                    setTimeout(() => {
                        console.log('World!')
                    }, 5000) //pause 2 seconds between requests
                }
            }

            // this.token.airit(addList, balList);
            const bal = await this.token.balanceOf(
                '0x43952E945Cd12bdA6bC4698CC2333D79205A54B1'
            )
            console.log(bal)
            console.log('gollo')
            //deposit
            //const txn = await web3.eth.sendTransaction({to:this.token.address, from:deployer, value: 1000000000000, gas: 100000})
            // const receipt = await this.token.mint(tokenId, deployer, {from: deployer});
            // expectEvent(receipt, 'Transfer', { from: ZERO_ADDRESS, to: deployer, tokenId });

            // expect(await this.token.balanceOf('0x43952E945Cd12bdA6bC4698CC2333D79205A54B1')).to.be.bignumber.equal('2500001');
            // this.token.airit();
            // const bigval = web3.utils.toWei(500000, "ether");
            // const val = new BN('500000');
            const number = String(2000000 * 10 ** 9)
            const number2 = String(3000000 * 10 ** 9)
            expect(await this.token.balanceOf(adr1)).to.be.bignumber.equal(
                String(192000000 * 10 ** 9)
            )
            // await this.token.stake(number,{from: adr1});//
            expect(await this.token.balanceOf(adr1)).to.be.bignumber.equal(
                String(190000000 * 10 ** 9)
            )

            // expect(await this.token.balanceOf('0x43952E945Cd12bdA6bC4698CC2333D79205A54B1')).to.be.bignumber.equal(String(2000000*(10**9)));
            // this.token.unstake(number2, {from: adr1}); // 5mil - 4 mil + 3 mil = 4 mil
            //expect(await this.token.ownerOf(tokenId)).to.equal(deployer);
            // const receiptB = await this.token.burn(tokenId, { from: other });
            // expect(await this.token.balanceOf(deployer)).to.be.bignumber.equal('0');
        })
    })
    /*
  describe('burning', function () {
    it('Only Governance contract or a holder can burn their tokens', async function () {
      const tokenId = new BN('130');
      const txn = await web3.eth.sendTransaction({to:this.token.address, from:other, value: 1000000000000, gas: 100000});

      const receiptC = await this.token.mint(tokenId);

      const receipt = await this.token.burn(tokenId, { from: other });

      expectEvent(receipt, 'Transfer', { from: other, to: ZERO_ADDRESS, tokenId });

      expect(await this.token.balanceOf(other)).to.be.bignumber.equal('0');
      expect(await this.token.totalSupply()).to.be.bignumber.equal('0');
    });

  });
  */
})
