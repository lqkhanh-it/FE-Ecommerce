import React, { useEffect, useState } from "react";
import "../../../App.css";
import "../../../Styles/Dashboard.css";
import DashboardHeader from "./DashboardHeader";
import DashboardMain from "./Main/DashboardMain";
import classNames from "classnames";
import DashboardInbox from "./Inbox/DashboardInbox";
import DashboardProduct from "./Product/DashboardProduct";
import DashboardNews from "./News/DashboardNews";
import DashboardProductEdit from "./Product/DashboardProductEdit";
import DashboardProductCreate from "./Product/DashboardProductCreate";
import Axios from "axios";
import DashboardNewsCreate from "./News/DashboardNewsCreate";
import DashboardNewsEdit from "./News/DashboardNewsEdit";
import DashboardUser from "./User/DashboardUser";
import DashboardUserCreate from "./User/DashboardUserCreate";
import DashboardUserEdit from "./User/DashboardUserEdit";
import DashboardOrder from "./Order/DashboardOrder";
import DashboardOrderEdit from "./Order/DashboardOrderEdit";
import DashboardOrderCreate from "./Order/DashboardOrderCreate";
import DashboardCollectionCreate from "./Collection/DashboardCollectionCreate";
import DashboardCollectionEdit from "./Collection/DashboardCollectionEdit";
import DashboardCollection from "./Collection/DashboardCollection";
import DashboardSubscriberCreate from "./Subscriber/DashboardSubscriberCreate";
import DashboardSubscriberEdit from "./Subscriber/DashboardSubscriberEdit";
import DashboardSubscriber from "./Subscriber/DashboardSubscriber";
import DashboardSupportCreate from "./Support/DashboardSupportCreate";
import DashboardSupportEdit from "./Support/DashboardSupportEdit";
import DashboardSupport from "./Support/DashboardSupport";

export default function DashboardBody(props) {
  const tabId = props.tabId;
  const [toast, setToast] = useState(false);
  const [isChange, setIsChange] = useState(false);
  const [product, setProduct] = useState({});
  const [news, setNews] = useState({});
  const [user, setUser] = useState({});
  const [order, setOrder] = useState({});
  const [collection, setCollection] = useState({});
  const [email, setEmail] = useState([]);
  const [support, setSupport] = useState([]);

  const setToastFunc = (bool) => {
    setIsChange(true);
    setTimeout(() => {
      setIsChange(false);
    }, 100);
    setToast(true);
    setTimeout(() => {
      setToast(false);
    }, 3000);
  };

  useEffect(() => {
    Axios.get(
      `https://be-ecommerce-year4.herokuapp.com/products/${props.productId}`
    ).then((res) => {
      setProduct(res.data);
    });
    Axios.get(
      `https://be-ecommerce-year4.herokuapp.com/news/${props.productId}`
    ).then((res) => {
      setNews(res.data);
    });
    Axios.get(
      `https://be-ecommerce-year4.herokuapp.com/users/list/${props.productId}`
    ).then((res) => {
      setUser(res.data);
    });
    Axios.get(
      `https://be-ecommerce-year4.herokuapp.com/order/${props.productId}`
    ).then((res) => {
      setOrder(res.data);
    });
    Axios.get(
      `https://be-ecommerce-year4.herokuapp.com/collection/${props.productId}`
    ).then((res) => {
      setCollection(res.data);
    });
    Axios.get(
      `https://be-ecommerce-year4.herokuapp.com/email/${props.productId}`
    ).then((res) => {
      setEmail(res.data);
    });
    Axios.get(
      `https://be-ecommerce-year4.herokuapp.com/support/${props.productId}`
    ).then((res) => {
      setSupport(res.data);
    });
  }, [props.productId, props.openEdit]);
  const openMenuMobile = props.openMenuMobile;

  return (
    <div
      className={classNames("DashboardBody", {
        DashboardBody_small: !props.openMenu,
      })}
    >
      {!openMenuMobile && (
        <div
          className="DashboardBody-closemenu"
          onClick={props.setOpenMenuOnClick}
        ></div>
      )}
      {props.openCreate && tabId === "3" && (
        <DashboardOrderCreate
          setCloseCreateFunc={props.setCloseCreateFunc}
          setToastFunc={setToastFunc}
        />
      )}
      {props.openEdit && tabId === "3" && (
        <DashboardOrderEdit
          setCloseEditFunc={props.setCloseEditFunc}
          setToastFunc={setToastFunc}
          order={order}
        />
      )}
      {props.openCreate && tabId === "4" && (
        <DashboardProductCreate
          setCloseCreateFunc={props.setCloseCreateFunc}
          setToastFunc={setToastFunc}
        />
      )}
      {props.openEdit && tabId === "4" && (
        <DashboardProductEdit
          setCloseEditFunc={props.setCloseEditFunc}
          setToastFunc={setToastFunc}
          product={product}
        />
      )}
      {props.openCreate && tabId === "5" && (
        <DashboardNewsCreate
          setCloseCreateFunc={props.setCloseCreateFunc}
          setToastFunc={setToastFunc}
        />
      )}
      {props.openEdit && tabId === "5" && (
        <DashboardNewsEdit
          setCloseEditFunc={props.setCloseEditFunc}
          setToastFunc={setToastFunc}
          news={news}
        />
      )}
      {props.openCreate && tabId === "6" && (
        <DashboardUserCreate
          setCloseCreateFunc={props.setCloseCreateFunc}
          setToastFunc={setToastFunc}
        />
      )}
      {props.openEdit && tabId === "6" && (
        <DashboardUserEdit
          setCloseEditFunc={props.setCloseEditFunc}
          setToastFunc={setToastFunc}
          user={user}
        />
      )}

      {props.openCreate && tabId === "7" && (
        <DashboardSupportCreate
          setCloseCreateFunc={props.setCloseCreateFunc}
          setToastFunc={setToastFunc}
        />
      )}
      {props.openEdit && tabId === "7" && (
        <DashboardSupportEdit
          setCloseEditFunc={props.setCloseEditFunc}
          setToastFunc={setToastFunc}
          support={support}
        />
      )}

      {props.openCreate && tabId === "8" && (
        <DashboardSubscriberCreate
          setCloseCreateFunc={props.setCloseCreateFunc}
          setToastFunc={setToastFunc}
        />
      )}
      {props.openEdit && tabId === "8" && (
        <DashboardSubscriberEdit
          setCloseEditFunc={props.setCloseEditFunc}
          setToastFunc={setToastFunc}
          email={email}
        />
      )}
      {/* props.menuItems[tabId - 1].name */}
      <DashboardHeader
        setOpenMenuOnClick={props.setOpenMenuOnClick}
        openMenu={props.openMenu}
        orderNotice={props.orderNotice}
      />
      {tabId === "1" && <DashboardMain />}
      {tabId === "2" && <DashboardInbox />}
      {/* {
                tabId === "2" && 
                    <DashboardEmail
                        email={email}
                    />
            } */}
      {tabId === "3" && (
        <DashboardOrder
          setOpenCreateFunc={props.setOpenCreateFunc}
          setOpenEditFunc={props.setOpenEditFunc}
          toast={toast}
          isChange={isChange}
        />
      )}
      {tabId === "4" && (
        <DashboardProduct
          setOpenCreateFunc={props.setOpenCreateFunc}
          setOpenEditFunc={props.setOpenEditFunc}
          toast={toast}
          isChange={isChange}
        />
      )}
      {tabId === "5" && (
        <DashboardNews
          setOpenCreateFunc={props.setOpenCreateFunc}
          setOpenEditFunc={props.setOpenEditFunc}
          toast={toast}
          isChange={isChange}
        />
      )}
      {tabId === "6" && (
        <DashboardUser
          setOpenCreateFunc={props.setOpenCreateFunc}
          setOpenEditFunc={props.setOpenEditFunc}
          toast={toast}
          isChange={isChange}
        />
      )}
      {tabId === "7" && (
        <DashboardSupport
          setOpenCreateFunc={props.setOpenCreateFunc}
          setOpenEditFunc={props.setOpenEditFunc}
          toast={toast}
          isChange={isChange}
        />
      )}
      {tabId === "8" && (
        <DashboardSubscriber
          setOpenCreateFunc={props.setOpenCreateFunc}
          setOpenEditFunc={props.setOpenEditFunc}
          toast={toast}
          isChange={isChange}
        />
      )}
    </div>
  );
}
