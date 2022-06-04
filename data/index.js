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
  { // 0
    name: 'Beverages',
    value: 'beverages'
  },
  { // 1
    name: 'Burgers',
    value: 'burgers'
  },
  { // 2
    name: 'Chicken & Sandwiches',
    value: 'chicken_and_sandwiches'
  },
  { // 3
    name: 'Combo Meal',
    value: 'combo_meal'
  },
  { // 4
    name: 'Dessert Shakes',
    value: 'dessert_shakes'
  },
  { // 5
    name: 'Snacks & Sides',
    value: 'snacks_and_sides'
  },
]

let menu_items = [
  {
    name: 'Double Meat Double Cheese',
    featured: false,
    new: false,
    menu_category: menu_categories[1],
    ingredients: [],
    add_ons: [],
    sauces: []
  },
  {
    name: 'Cheese Burger',
    featured: false,
    new: false,
    menu_category: menu_categories[1],
    ingredients: [],
    add_ons: [],
    sauces: []
  },
  {
    name: 'Ham Burger',
    featured: false,
    new: false,
    menu_category: menu_categories[1],
    ingredients: [],
    add_ons: [],
    sauces: []
  },
  {
    name: 'Fries',
    featured: false,
    new: false,
    menu_category: menu_categories[5],
    ingredients: [],
    add_ons: [],
    sauces: []
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
  menu_categories,
  menu_items,
  menus
}