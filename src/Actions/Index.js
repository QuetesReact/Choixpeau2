

export const updateIndexSelected = () => ({
    type: 'UPDATE_CHOICE_WITH_MY_INDEX',
    indexSelected: Math.floor(Math.random()  *  4)
})