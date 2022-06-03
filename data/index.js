import { v4 as uuid } from "uuid"

const createIds = (arr = [], keyName) => {
  return arr.map(item => {
    return {
      ...item,
      [keyName]: uuid()
    } 
  });
}

let menu_categories = [
  {
    name: 'Beverages'
  },
  {
    name: 'Burgers'
  },
  {
    name: 'Chicken & Sandwiches'
  },
  {
    name: 'Combo Meal'
  },
  {
    name: 'Dessert Shakes'
  },
  {
    name: 'Snacks & Sides'
  },
]

let menu_items = [
  {
    name: 'Double Meat Double Cheese',
    featured: false
  },
  {
    name: 'Cheese Burger',
    featured: false
  },
  {
    name: 'Ham Burger',
    featured: false
  },
  {
    name: 'Fries',
    featured: false
  },
]

menu_items = createIds(menu_items, 'menu_item_id');


menu_categories = createIds(menu_categories, 'menu_category_id');

let menus = [
  {
    name: '2022_MENU',
    menu_items
  }
]

menus = createIds(menus, 'menu_id');


export const data = {
  menu_categories
}