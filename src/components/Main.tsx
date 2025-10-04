import { Navigate, Route, Routes } from "react-router-dom"
import { useAppSelector } from "../app/hooks.ts"
import { navItems } from "../utils/constants.ts"
import { useContext } from "react"
import { ProductsContext } from "../utils/context.ts"
import Home from "./Home.tsx"

const Main = () => {
  const token = useAppSelector(state => state.token)
  const { language } = useContext(ProductsContext)

  return (
    <div className="container-fluid p-0">
        <div className="row ">

      <Routes>
        {[`/`, `/${navItems[0].route}`].map(path => (
          <Route key={path} path={path} element={<Home />} />
        ))}
        {/*<Route path="/products" element={<Products />} />*/}
        {/*<Route path="/cart" element={<CartPage />} />*/}
        {/*<Route path="/order/:orderId" element={<OrderDetails />} />*/}

        {/*<Route path="/shop" element={<Shop />} />*/}
        {/*<Route path="/collections" element={<Collections />} />*/}
        {/*<Route path="/shop/:category" element={<Shop />} />*/}
        {/*<Route path="/category/:id/:type" element={<Shop />} />*/}
        {/*<Route path="/product/:id" element={<ProductPage />} />*/}

        {/*<Route path="/product/edit/:id" element={<EditProduct />} />*/}
        {/*<Route path="/checkout" element={<CheckOut />} />*/}
        {/*<Route path="/about" element={<About />} />*/}
        {/*<Route path="/wishlist" element={<WishList />} />*/}
        {/*<Route path="/account" element={<Account />} />*/}
        {/*<Route path={"/login"} element={token ? <Navigate to={"/"} /> : <Login />}/>*/}
        {/*<Route path={"/register"} element={token ? <Navigate to={"/"} /> : <Register />}/>*/}
        {/*<Route path={"/forgot-password"} element={token ? <Navigate to={"/"} /> : <ForgotPassword />}/>*/}
        {/*<Route path={"/reset-password/:token"} element={token ? <Navigate to={"/"} /> : <ResetPassword />}/>*/}
        {/*<Route path={"/sells"} element={token ? <Sells /> : <Guest />} />*/}
        {/*<Route path={"/new"} element={token ? <AddProduct /> : <Guest />} />*/}

        {/*<Route path="/receipts" element={<ReceiptsList />} />*/}
        {/*/!*<Route path="/contact-us" element={<ContactUs />} />*!/*/}
        {/*<Route path="/contact" element={<Contact/>} />*/}
        {/*<Route path="/faq" element={<FAQ />} />*/}
        {/*<Route path="/signup" element={<Signup />} />*/}
        {/*<Route path="/reports" element={<Reports />} />*/}
        {/*<Route path="/all-orders" element={<AllOrders />} />*/}
      </Routes>
    </div>
    </div>
  )
}

export default Main
