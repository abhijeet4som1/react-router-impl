

const addNames = (nameEntry) => {
    return {
        type: 'ADD_NAMES',
        nameEntry
    }
}

const deleteName = index => {
    return {
        type: 'DELETE_NAMES',
        index
    }
}

export {
    addNames,
    deleteName
}