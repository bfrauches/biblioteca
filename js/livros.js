const livros = [];

const adicionarLivro = (colecao, livro) => {
    colecao = [];
    colecao.push(livro);
    return colecao;
} 

const listar = id => {

} 

const pesquisarLivros = (colecao, termo) => {
    return colecao.find(livro => livro.titulo.toLowerCase() == termo.toLowerCase());
} 

const filtrar = genero => {

} 

const marcarComoLido = id => {

} 

const remover = id => {

}

const estatisticas = () => {

} 

module.exports = {adicionarLivro};