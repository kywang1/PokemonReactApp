import React from 'react'
import { Modal,Button } from 'react-bootstrap/lib/'; // <-- JOY
import PokemonInfo from './PokemonInfo';

const PokemonModal = ({closeModal,showModal,pokemon}) =>{
  let pokemonName;
  if(pokemon !== null){
    pokemonName = pokemon.name
  }else{
    pokemonName = "Loading ..."
  }

  return (
    <div>
        <Modal
          show={showModal}
          onHide={closeModal}>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">
              {pokemonName}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {pokemon !== null ? <PokemonInfo pokemon={pokemon}/> : null}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={closeModal}>Close</Button>
          </Modal.Footer>
        </Modal>
    </div>
  )
}

export default PokemonModal;
