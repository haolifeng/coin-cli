import { createContext} from "react";

import {MyOrderStore} from "./myOrderStore";

export const rootStoreContext = createContext({
    myOrderStore: new MyOrderStore(),
})