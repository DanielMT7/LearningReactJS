import Item from './Item'

function List() {
  return (
    <>
      <h1>Minha Lista</h1>
        <ul>
          <Item marca="Ferrari" ano_lancamento={1954}/>
          <Item marca="Mercedes" ano_lancamento={1976}/>
          <Item marca="Audi" ano_lancamento={1999}/>
          <Item marca="BMW" ano_lancamento={1968}/>
          <Item />
        </ul>
    </>
  )
}

export default List