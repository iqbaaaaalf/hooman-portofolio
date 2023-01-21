import {IBaseAccountService} from "@/commons/interface/account.interface";
import {SolanaBlockchainService} from "@/blockchains/solana";

export class SolanaAccountService implements IBaseAccountService{
    private blockchainService: SolanaBlockchainService;
    Constructor() {
        this.blockchainService = new SolanaBlockchainService();
    }

    getBalance(publicKey: string): Promise<number> {
        return this.blockchainService.getBalance(publicKey);
    }
}