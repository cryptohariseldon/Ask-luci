const HDWalletProvider = require('@truffle/hdwallet-provider')
const mnemonic2 = process.env.MNEMONIC

module.exports = {
    networks: {
        development: {
            host: '127.0.0.1',
            port: 7545,
            network_id: '*',
        },
        rinkeby: {
            provider: function () {
                return new HDWalletProvider(
                    mnemonic2,
                    'https://rinkeby.infura.io/v3/5346bb56e1414fc792674511b935f3ac'
                )
            },
            network_id: 4,
            skipDryRun: true,
        },
        mainnet: {
            provider: function () {
                return new HDWalletProvider(
                    mnemonic2,
                    'https://mainnet.infura.io/v3/6ba6f1f72b954dc894e9d117fa37e013'
                )
            },
            network_id: 1,
            from: '0xEF5dc33A53DD2ED3F670B53F07cEc5ADD4D80504',
        },
        bsc: {
            provider: () =>
                new HDWalletProvider(
                    mnemonic2,
                    `https://bsc-dataseed1.binance.org`
                ),
            network_id: 56,
            confirmations: 10,
            timeoutBlocks: 200,
            skipDryRun: true,
        },
        testnet: {
            provider: () =>
                new HDWalletProvider(
                    mnemonic2,
                    `https://data-seed-prebsc-1-s1.binance.org:8545`
                ),
            network_id: 97,
            confirmations: 10,
            timeoutBlocks: 200,
            skipDryRun: true,
        },
        polygon_testnet: {
            provider: () =>
                new HDWalletProvider(
                    mnemonic2,
                    `https://rpc-mumbai.maticvigil.com/v1/fc5666e6546ff4e38c2a76317eebb6b012af1d25`
                ), //`https://rpc-mumbai.maticvigil.com`),
            network_id: 80001,
            confirmations: 2,
            timeoutBlocks: 200,
            skipDryRun: true,
            chainId: 80001,
        },
        polygon_mainnet: {
            provider: () =>
                new HDWalletProvider(
                    mnemonic2,
                    `https://polygon-mainnet.infura.io/v3/7b57f8b78051410ca52f5f21adbf82e5`
                ), //`https://rpc-mainnet.maticvigil.com/v1/db1cb267a3907be2358994c8c624b08b4db39b5e`), //`https://rpc-mumbai.maticvigil.com`),
            network_id: 137,
            confirmations: 2,
            timeoutBlocks: 200,
            skipDryRun: true,
            chainId: 137,
        },
        maticmain: {
            provider: () =>
                new HDWalletProvider(
                    mnemonic2,
                    `https://polygon-mainnet.infura.io/v3/6ba6f1f72b954dc894e9d117fa37e013`
                ), //`https://polygon-mainnet.infura.io/v3/7b57f8b78051410ca52f5f21adbf82e5`),
            network_id: 137,
            chain_id: 137,
            confirmations: 2,
            timeoutBlocks: 200,
            skipDryRun: true,
            symbol: 'MATIC',
            from: '0xEF5dc33A53DD2ED3F670B53F07cEc5ADD4D80504',
        },
    },
    compilers: {
        solc: {
            version: '0.8.1',
        },
    },
}
