import {SOLANA_ENV, SolanaConstant} from "@/blockchains/solana/constant";
import {IBaseBlockchainService} from "@/commons/interface/blockchain.interface";

const {
    Connection,
    clusterApiUrl,
    LAMPORTS_PER_SOL,
} = require("@solana/web3.js");

export class SolanaBlockchainService implements IBaseBlockchainService{
    private connection: any;
    constructor() {
        this.connection = new Connection(clusterApiUrl(SOLANA_ENV.DEV_NET_ENV), SolanaConstant.CONFIRMED_ACTION);
    }

    async getBalance(publicKey: string) {
        const balance = await this.connection.getBalance(publicKey);
        return balance / LAMPORTS_PER_SOL;
    }
}