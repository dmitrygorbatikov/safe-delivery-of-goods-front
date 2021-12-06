import {Switch, Route, Redirect} from "react-router";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import DetailStoragePage from "../pages/DetailStoragePage";
import CarsPage from "../pages/CarsPage";
import DriversPage from "../pages/DriversPage";
import ProductsPage from "../pages/ProductsPage";
import DetailCarPage from "../pages/DetailCarPage";
import DetailDriverPage from "../pages/DetailDriverPage";
import DetailProductsPage from "../pages/DetailProductsPage";
import ShippingPage from "../pages/ShippingPage";

export const useRoutes = (isAuthenticated: boolean) => {
    if(isAuthenticated) {
        return (
            <Switch>
                <Route path="/" exact>
                    <HomePage/>
                </Route>
                <Route path="/profile" exact>
                    <ProfilePage/>
                </Route>
                <Route path="/cars" exact>
                    <CarsPage/>
                </Route>
                <Route path="/drivers" exact>
                    <DriversPage/>
                </Route>
                <Route path="/products" exact>
                    <ProductsPage/>
                </Route>
                <Route path="/shipping" exact>
                    <ShippingPage/>
                </Route>
                <Route path="/storages/:id">
                    <DetailStoragePage/>
                </Route>
                <Route path="/cars/:id">
                    <DetailCarPage/>
                </Route>
                <Route path="/drivers/:id">
                    <DetailDriverPage/>
                </Route>
                <Route path="/products/:id">
                    <DetailProductsPage/>
                </Route>
                <Redirect to=""/>
            </Switch>
        )
    }
    return (
        <Switch>
            <Route path="/login" exact>
                <LoginPage />
            </Route>
            <Route path="/register" exact>
                <RegisterPage />
            </Route>
            <Redirect to="/login"/>
        </Switch>
    )
}