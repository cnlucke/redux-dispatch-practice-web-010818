export let state;

export function managePets(state = {pets: []}, action = {type: '', pet: {}}){
  switch (action.type) {
    case 'ADD_PET':
      return {...state, pets: [...state.pets, action.pet] }
    case 'REMOVE_PET':
      return {...state, pets: state.pets.filter(pet => pet != action.pet)}
    default:
      return state
  }
}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render() {
  let container = document.getElementById('container')
  const ul = document.createElement('ul')
  const lis = state.pets.map(pet => `<li>${pet.name}</li>`)
  container.appendChild(ul)
  ul.innerHTML = lis
}

dispatch('@@INIT')
