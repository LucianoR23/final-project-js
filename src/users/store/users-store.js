import { loadUsersByPage } from "../use-cases/load-users-bypage"


const state = {
    currentPage: 0,
    users: [],
}

const loadNextPage = async() => {
    await loadUsersByPage(state.currentPage + 1)
}

const loadPreviousPage = async() => {
    throw new Error('No implementado')
}

const onUserChange = () => {
    throw new Error('No implementado')
}

const reloadPage = async() => {
    throw new Error('No implementado')
}

export default {
    loadNextPage,
    loadPreviousPage,
    onUserChange,
    reloadPage,
    getUsers: () => [...state.users],
    getCurrentPage: () => state.currentPage,
}