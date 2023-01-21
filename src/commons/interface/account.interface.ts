export interface IBaseAccount {
    publicKey: string;
    balance: number;
}

export interface IBaseAccountService {
    getBalance(publicKey: string): Promise<number>;
}