import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from "./components/UI/Notification";
import { useEffect } from 'react';
import { uiActions } from './store/ui-slice';

let isInit = true;
const App = () => {
  const dispatch = useDispatch();
  const showCart = useSelector(state => state.ui.cartIsVisible);
  const cart = useSelector(state => state.cart);
  const notification = useSelector(state => state.ui.notification);

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(uiActions.showNotification({
        status: "Pending",
        title: "Sending",
        message: "Sending cart data!"
      }));
      const response = await fetch("https://reacthttp-1e5eb-default-rtdb.firebaseio.com/cart.json", {
        method: "PUT",
        body: JSON.stringify(cart)
      });
      if (!response.ok) { throw new Error("Sending cart data failed!") };

      dispatch(uiActions.showNotification({
        status: "succes",
        title: "Succes!",
        message: "Sent cart data succesfully!"
      }));
    };
    if (isInit) {
      isInit = false;
      return;
    }
    sendCartData().catch(error => {
      dispatch(uiActions.showNotification({
        status: "error",
        title: "Error!",
        message: "Sending cart data failed!"
      }));
    });
  }, [cart, dispatch]);
  return (
    <>
      {notification && <Notification
        status={notification.status}
        title={notification.title}
        message={notification.message} />}

      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
