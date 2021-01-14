import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
    addProduct: ['payload'],
    addProductSuccess: ['payload'],
    addProductFailure: ['payload'],
    updateProduct: ['payload'],
    updateProductSuccess: ['payload'],
    updateProductFailure: ['payload'],
    getProduct: null,
    getProductSuccess: ['payload'],
    getProductFailure: ['payload'],
    removeProduct: ['payload']
});

const INITIAL_STATE = {
    data: [],
    loading: false,
};

const addProduct = (state = INITIAL_STATE, action = {}) => ({
    ...state,
    loading: true,
});

const addProductSuccess = (state = INITIAL_STATE, action) => ({
    ...state,
    loading: false,
    data: action.payload,
});

const addProductFailure = (state = INITIAL_STATE, action) => ({
    ...state,
    loading: false,
    data: [...state.data, action.errorMessage],
});

const updateProduct = (state = INITIAL_STATE, action) => ({
    ...state,
    loading: true,
});
const updateProductSuccess = (state = INITIAL_STATE, action) => ({
    ...state,
    loading: false,
    data: action.payload,
});
const updateProductFailure = (state = INITIAL_STATE, action) => ({
    ...state,
    loading: false,
    data: [...state.data, action.errorMessage],
});

const getProduct = (state = INITIAL_STATE, action) => ({
    ...state,
    data: action.payload,
});
const getProductSuccess = (state = INITIAL_STATE, action) => ({
    ...state,
    loading: false,
    data: action.payload,
});

const getProductFailure = (state = INITIAL_STATE, action) => ({
    ...state,
    loading: false,
    data: [...state.data, action.errorMessage],
});

const removeProduct = (state = INITIAL_STATE, action) => ({
    ...state,
    loading: false,
    data: action.payload,
});



export default createReducer(INITIAL_STATE, {
    [Types.GET_PRODUCT]: getProduct,
    [Types.GET_PRODUCT_SUCCESS]: getProductSuccess,
    [Types.GET_PRODUCT_FAILURE]: getProductFailure,
    [Types.UPDATE_PRODUCT]: updateProduct,
    [Types.UPDATE_PRODUCT_SUCCESS]: updateProductSuccess,
    [Types.UPDATE_PRODUCT_FAILURE]: updateProductFailure,
    [Types.ADD_PRODUCT]: addProduct,
    [Types.ADD_PRODUCT_SUCCESS]: addProductSuccess,
    [Types.ADD_PRODUCT_FAILURE]: addProductFailure,
});