const defaultState = {
    user: {}
}

export function reducer(
    state = defaultState,
    { type, payload }: { type: string, payload: any }
): any {
    // work with state
    switch (type) {
        case 'SET_USER_STATE':
            return {
                ...state,
                user: {
                    email: payload
                }
            }
    }

    return state
}