// Testnet_Nosana_Phase_1
const token = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
const server = "http://localhost";
const port = 4001;

// Instantiate the nosana wrapper
let nosanaclient = new nosanasdk.nosanav2(token, server, port);

(async () => {
       let account_info = (await nosanaclient.accountInformation(recoveredAccount1.addr).do());

    let acct_string = JSON.stringify(account_info);
    console.log("Account Info: " + acct_string);
})().catch(e => {
    console.log(e);
});
