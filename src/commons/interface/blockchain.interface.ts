export interface IBaseBlockchainService {
    getBalance(publicKey: string): Promise<number>;
}