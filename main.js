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


const [scrollX, setScrollX] = useState(0);

    const leftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if(x > 0) {
            x = 0;
        }
        setScrollX(x);
    }

    const rightArrow = () => {
      let x = scrollX - Math.round(window.innerWidth / 2);
      let listW = items.results.length * 150; // largura da lista inteira

      if ((window.innerWidth - listW) > x) {
          x = (window.innerWidth - listW) - 60;
      }
      
      setScrollX(x);
  }