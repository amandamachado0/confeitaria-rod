

    function criarItemCardapio(titulo, descricao, foto) {
    const divItemCardapio = document.createElement('div')
    divItemCardapio.className = 'item-cardapio'

    const h3Titulo = document.createElement('h3')
    h3Titulo.textContent = titulo

    const pDescricao = document.createElement('p')
    pDescricao.textContent = descricao
    pDescricao.className = 'descricao'

    const img = document.createElement('img')
    img.src = foto 
    img.className = 'img-item'

    //adicionando os elementos na div mae 
    const divC = document.getElementBy('cardapio')

    divItemCardapio.appendChild(h3Titulo)
    divItemCardapio.appendChild(pDescricao)
    divItemCardapio.appendChild(img)

    divC.appendChild(divItemCardapio)
}

    criarItemCardapio(
        'Bolo de Chocolate',
        'Um clássico com camadas de chocolate', 
        'https://receitadaboa.com.br/wp-content/uploads/2024/12/bolo-de-chocolate.jpg'
    )