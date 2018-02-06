export const promiseMiddleware = store => next => action => {
    if (isPromise(action.payload)) {
        store.dispatch({ type: "ASYNC_START", subtype: action.type });
        action.payload.then(
            res => {
                console.log(res);
                if (typeof res.json === 'function') {
                    res.json()
                        .then(res => {
                            if (res.errors) {
                                action.error   = true;
                                action.payload = res;
                                store.dispatch(action);
                                return;
                            }
                            action.payload = res;
                            store.dispatch(action);
                        })
                } else {
                    action.payload = res;
                    store.dispatch(action);
                }
            },
            error => error.json()
                .then(error => {
                    action.error   = true;
                    action.payload = error;
                    store.dispatch(action)
                })
        );
        return;
    }
    next(action);
};

function isPromise (v) {
    return v && typeof v.then === 'function';
}
