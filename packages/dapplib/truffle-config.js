require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess glimpse flame suspect notice crime remain unfold imitate private fortune select'; 
let testAccounts = [
"0x8ee4274501a2feadce5855726ee0efc533bb7a58f50c1e208f2dfa5d472f77ec",
"0x0d453371b0c6ea37debca1351b6b2e439de264507ff592e3a70e32c4cbf1277f",
"0xa52ce824731b136cc944633b159b84f8005c70dd042f983ac5832e08694898d5",
"0x6f71aa2e9ab4221ea6564d2fd15f88b6ea6423587a40016814552dd6bf856d93",
"0x374432e033a6efa3562369bb7d2f5959953fe85d00ea810c05824d743c1aaaa3",
"0x49bbf1533e6202ff514bfa6ee01e76e4730c48f3f038d39ac749b254f96a6874",
"0xbb0101337e45caa4b93a3a88e220c1739feab6445e49619cb72815f6fc3a104a",
"0x4a51b8243801170cdc2c6f1444ecdcf34b79e23aec7a3928292ce69f93dd87a0",
"0x2b27a1d3b532450618b12f02f024e972cbf62a093c92a4cbc56cdae364dfae15",
"0x24ef32b08649826e5c07542d868e82f9eeb3d5d55b71afb4ff3002bcf9156a9a"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

