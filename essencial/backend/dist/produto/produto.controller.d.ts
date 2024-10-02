import { Produto } from 'src/core';
export declare class ProdutoController {
    obterProdutos(): Produto[];
    obterProdutoPorId(id: string): Promise<Produto | null>;
}
