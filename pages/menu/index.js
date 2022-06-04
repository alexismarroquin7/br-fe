import { useEffect, useState } from "react";
import { Button, Grid } from "../../components";
import { data } from "../../data";

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Menu, MenuItem, Modal } from "@mui/material";

const { menu_categories, menu_items } = data;

const initialSelected = {
  menu_category: 'Burgers'
}

const initialQuery = {
  category: ''
}

export default function MenuPage () {
  const [selected, setSelected] = useState(initialSelected);
  
  const [anchorEl, setAnchorEl] = useState(null);
  
  const open = Boolean(anchorEl);

  const [query, setQuery] = useState(initialQuery);

  useEffect(() => {

  }, [])
  
  return <Grid
    className="MenuPage"
    ff="column wrap"
    ai="center"
    width="100%"
  >
    <Grid
      ff="column wrap"
      width="90%"
      ai="center"
    >
      <Grid
        width="100%"
        ff="column wrap"
        position="relative"
        zi="0"
      >
        <Grid
          ai="center"
          onClick={(e) => {
            setAnchorEl(e.currentTarget);
          }}
        >
          <Button
            bc="white"
            border="0"
          >
            <h3>{selected.menu_category}</h3>
          </Button>
          <KeyboardArrowDownIcon/>
        </Grid>
        
        <Menu
          open={open}
          onClose={() => setAnchorEl(null)}
          anchorEl={anchorEl}
        >
          {[{id: 'All', name: 'All', value: ''},...menu_categories].map(mCat => {
            return <MenuItem
              key={mCat.menu_category_id}
              onClick={() => {
                setSelected({
                  ...selected,
                  menu_category: mCat.name
                })
                setAnchorEl(null);
              }}
            >
              <h3>{mCat.name}</h3>
            </MenuItem>
          })}
        </Menu>

      </Grid>

      <Grid
        width="100%"
        jc="space-between"
        gap="1rem"
        padding="1rem 0"
      >
        {menu_items.map(menuItem => {
          return (
            <Grid
              key={menuItem.menu_item_id}
              width="48%"
              border="1px solid #ddd"
              padding="1rem"
            >
              <h3>{menuItem.name}</h3>
            </Grid>
          )
        })}
      </Grid>
  
    </Grid>

    <style jsx>{`
  
    `}</style>
  
  </Grid>
}