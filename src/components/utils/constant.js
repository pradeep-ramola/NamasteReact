export const CDN_URL =
  'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/';

export const SWIGGY_API =
'https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&page_type=DESKTOP_WEB_LISTING'

export const MENU_API = (resId) =>`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.07480&lng=72.88560&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`

// 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING&restaurantId='

