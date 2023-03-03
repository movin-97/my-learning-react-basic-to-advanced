import Table from "../pages/Data-Table";
import Home from "../pages/Home";


const router = [
    {
        path:'/home',
        component:<Home/>
    },
    {
        path:'/',
        component:<Table/>
    }
]

export default router;