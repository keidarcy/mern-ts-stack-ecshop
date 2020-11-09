export enum PRODUCT_ACTIONS {
  PRODUCT_LIST_REQUEST = 'PRODUCT_LIST_REQUEST',
  PRODUCT_LIST_SUCCESS = 'PRODUCT_LIST_SUCCESS',
  PRODUCT_LIST_FAIL = 'PRODUCT_LIST_FAIL',

  PRODUCT_TOP_REQUEST = 'PRODUCT_TOP_REQUEST',
  PRODUCT_TOP_SUCCESS = 'PRODUCT_TOP_SUCCESS',
  PRODUCT_TOP_FAIL = 'PRODUCT_TOP_FAIL',

  PRODUCT_DELETE_REQUEST = 'PRODUCT_DELETE_REQUEST',
  PRODUCT_DELETE_SUCCESS = 'PRODUCT_DELETE_SUCCESS',
  PRODUCT_DELETE_FAIL = 'PRODUCT_DELETE_FAIL',

  PRODUCT_DETAILS_REQUEST = 'PRODUCT_DETAILS_REQUEST',
  PRODUCT_DETAILS_SUCCESS = 'PRODUCT_DETAILS_SUCCESS',
  PRODUCT_DETAILS_FAIL = 'PRODUCT_DETAILS_FAIL',

  PRODUCT_CREATE_REQUEST = 'PRODUCT_CREATE_REQUEST',
  PRODUCT_CREATE_SUCCESS = 'PRODUCT_CREATE_SUCCESS',
  PRODUCT_CREATE_FAIL = 'PRODUCT_CREATE_FAIL',
  PRODUCT_CREATE_RESET = 'PRODUCT_CREATE_RESET',

  PRODUCT_UPDATE_REQUEST = 'PRODUCT_UPDATE_REQUEST',
  PRODUCT_UPDATE_SUCCESS = 'PRODUCT_UPDATE_SUCCESS',
  PRODUCT_UPDATE_FAIL = 'PRODUCT_UPDATE_FAIL',
  PRODUCT_UPDATE_RESET = 'PRODUCT_UPDATE_RESET',

  PRODUCT_CREATE_REVIEW_REQUEST = 'PRODUCT_CREATE_REVIEW_REQUEST',
  PRODUCT_CREATE_REVIEW_SUCCESS = 'PRODUCT_CREATE_REVIEW_SUCCESS',
  PRODUCT_CREATE_REVIEW_FAIL = 'PRODUCT_CREATE_REVIEW_FAIL',
  PRODUCT_CREATE_REVIEW_RESET = 'PRODUCT_CREATE_REVIEW_RESET'
}

export enum CART_ACTIONS {
  CART_ADD_ITEM = 'CART_ADD_ITEM',
  CART_REMOVE_ITEM = 'CART_REMOVE_ITEM',
  CART_SAVE_SHIPPING_ADDRESS = 'CART_SAVE_SHIPPING_ADDRESS',
  CART_SAVE_PAYMENT_METHOD = 'CART_SAVE_PAYMENT_METHOD'
}

export enum USER_ACTIONS {
  USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST',
  USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS',
  USER_LOGIN_FAIL = 'USER_LOGIN_FAIL',
  USER_LOGOUT = 'USER_LOGOUT',

  USER_REGISTER_REQUEST = 'USER_REGISTER_REQUEST',
  USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS',
  USER_REGISTER_FAIL = 'USER_REGISTER_FAIL',

  USER_DETAILS_REQUEST = 'USER_DETAILS_REQUEST',
  USER_DETAILS_SUCCESS = 'USER_DETAILS_SUCCESS',
  USER_DETAILS_FAIL = 'USER_DETAILS_FAIL',
  USER_DETAILS_RESET = 'USER_DETAILS_RESET',

  USER_UPDATE_PROFILE_REQUEST = 'USER_UPDATE_PROFILE_REQUEST',
  USER_UPDATE_PROFILE_SUCCESS = 'USER_UPDATE_PROFILE_SUCCESS',
  USER_UPDATE_PROFILE_FAIL = 'USER_UPDATE_PROFILE_FAIL',
  USER_UPDATE_PROFILE_RESET = 'USER_UPDATE_PROFILE_RESET',

  USER_LIST_REQUEST = 'USER_LIST_REQUEST',
  USER_LIST_SUCCESS = 'USER_LIST_SUCCESS',
  USER_LIST_FAIL = 'USER_LIST_FAIL',
  USER_LIST_RESET = 'USER_LIST_RESET',

  USER_DELETE_REQUEST = 'USER_DELETE_REQUEST',
  USER_DELETE_SUCCESS = 'USER_DELETE_SUCCESS',
  USER_DELETE_FAIL = 'USER_DELETE_FAIL',

  USER_UPDATE_REQUEST = 'USER_UPDATE_REQUEST',
  USER_UPDATE_SUCCESS = 'USER_UPDATE_SUCCESS',
  USER_UPDATE_FAIL = 'USER_UPDATE_FAIL',
  USER_UPDATE_RESET = 'USER_UPDATE_RESET'
}

export enum Order_Actions {
  ORDER_CREATE_REQUEST = 'ORDER_CREATE_REQUEST',
  ORDER_CREATE_SUCCESS = 'ORDER_CREATE_SUCCESS',
  ORDER_CREATE_FAIL = 'ORDER_CREATE_FAIL',

  ORDER_LIST_MY_REQUEST = 'ORDER_LIST_MY_REQUEST',
  ORDER_LIST_MY_SUCCESS = 'ORDER_LIST_MY_SUCCESS',
  ORDER_LIST_MY_FAIL = 'ORDER_LIST_MY_FAIL',
  ORDER_LIST_MY_RESET = 'ORDER_LIST_MY_RESET',

  ORDER_LIST_REQUEST = 'ORDER_LIST_REQUEST',
  ORDER_LIST_SUCCESS = 'ORDER_LIST_SUCCESS',
  ORDER_LIST_FAIL = 'ORDER_LIST_FAIL',

  ORDER_DETAIL_REQUEST = 'ORDER_DETAIL_REQUEST',
  ORDER_DETAIL_SUCCESS = 'ORDER_DETAIL_SUCCESS',
  ORDER_DETAIL_FAIL = 'ORDER_DETAIL_FAIL',

  ORDER_DELIVER_REQUEST = 'ORDER_DELIVER_REQUEST',
  ORDER_DELIVER_SUCCESS = 'ORDER_DELIVER_SUCCESS',
  ORDER_DELIVER_FAIL = 'ORDER_DELIVER_FAIL',
  ORDER_DELIVER_RESET = 'ORDER_DELIVER_RESET',

  ORDER_PAY_REQUEST = 'ORDER_PAY_REQUEST',
  ORDER_PAY_SUCCESS = 'ORDER_PAY_SUCCESS',
  ORDER_PAY_FAIL = 'ORDER_PAY_FAIL',
  ORDER_PAY_RESET = 'ORDER_PAY_RESET'
}
