const modal = {  
    open() {     // objeto
      // abrir modal
      // adicionar classe active ao modal
      document.querySelector('.modal-overlay')   // pesquisa pelo seletor
      .classList.add('active')  // adiciona active
    },
    close() {
      // fechar o MODAL
      // remover a classe active do modal
      document.querySelector('.modal-overlay')   // pesquisa pelo seletor
      .classList.remove('active')  // remove o active
    }
}
