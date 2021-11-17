export default function sum(state = 'P', action) {
    if (action.type === 'plus-p') {
        return state + 'p';
    }
    return state;
}