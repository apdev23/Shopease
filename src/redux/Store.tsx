import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import reducer from './slices';
import rootSaga from './sagas';

const sagaMiddleware: any = createSagaMiddleware();

const persistConfig = {
   key: 'root',
   storage: AsyncStorage, // Use AsyncStorage for React Native
   blacklist: ['auth', 'user'],
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
   reducer: persistedReducer,
   middleware: () => [sagaMiddleware]
});

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };







// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import createSagaMiddleware from 'redux-saga';
// import { persistStore, persistReducer } from 'redux-persist';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import reducer from './slices';
// import rootSaga from './sagas';

// const sagaMiddleware = createSagaMiddleware();

// const persistConfig = {
//    key: 'root',
//    storage: AsyncStorage, // Use AsyncStorage for React Native
//    blacklist: ['auth', 'utils'],
// };

// const persistedReducer = persistReducer(persistConfig, reducer);

// const store = configureStore({
//    reducer: persistedReducer,
//    middleware: (getDefaultMiddleware) =>
//       getDefaultMiddleware({
//          serializableCheck: false,
//          immutableCheck: false,
//       }).concat(sagaMiddleware),
// });

// const persistor = persistStore(store);

// sagaMiddleware.run(rootSaga);

// export { store, persistor };
