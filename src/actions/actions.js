const wontUpdateMember = () => ({
    payload: null,
    type: 'wontUpdateMember'
})
const initialMember = () => ({
    payload: null,
    type: 'initialMember'
})
const updateMember = value => (
    {
        payload: value,
        type: 'updateMember'
    }
)

export { initialMember, updateMember, wontUpdateMember }