import { colors } from "../../../MaterialTheme";
import { Button, List, ListItemButton, Paper, Stack } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getSearchQuery } from "../../State/AppSlice";

function Subcategories({ index, subcategory, products, lang }) {
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();
  const filteredProducties = products.filter(
    (product) => product[lang]?.subcategory.toLowerCase().trim() === subcategory
  );

  const allBrands = filteredProducties.map((product) =>
    product.brand?.toLowerCase().trim()
  );
  const brands = allBrands.filter(
    (value, index) => allBrands.indexOf(value) === index
  );

  function handlesubCategoryFilter() {
    dispatch(getSearchQuery(subcategory));
  }

  return (
    <Stack
      onMouseEnter={() => setToggle(true)}
      onMouseLeave={() => setToggle(false)}
    >
      <ListItemButton
        sx={{ position: "relative", minWidth: "7rem" }}
        onClick={handlesubCategoryFilter}
      >
        {subcategory}
      </ListItemButton>
      {toggle && (
        <Paper
          sx={{ position: "absolute", marginLeft: "7rem", minWidth: "7rem" }}
        >
          <List>
            {brands.map((brand, i) => (
              <BrandCategory key={i} brand={brand} />
            ))}
          </List>
        </Paper>
      )}
    </Stack>
  );
}

function BrandCategory({ brand }) {
  const dispatch = useDispatch();
  function handleBrand() {
    dispatch(getSearchQuery(brand));
  }

  return <ListItemButton onClick={handleBrand}>{brand}</ListItemButton>;
}

function Category({ category, products, lang }) {
  const [toggle, setToggle] = useState(false);

  const filteredProducties = products.filter(
    (product) => product[lang]?.category?.toLowerCase().trim() === category
  );

  const allSubcategory = filteredProducties.map((product) =>
    product[lang]?.subcategory?.toLowerCase().trim()
  );
  const allsubcategories = allSubcategory.filter(
    (value, index) => allSubcategory.indexOf(value) === index
  );

  return (
    <Stack
      onMouseEnter={() => setToggle(true)}
      onMouseLeave={() => setToggle(false)}
    >
      <Button
        sx={{
          position: "relative",
          textTransform: "capitalize",
          color: colors.main,
        }}
      >
        {category}
      </Button>
      {toggle && (
        <Paper
          sx={{
            position: "absolute",
            mt: 4,
            zIndex: 100,
            pt: 0,
          }}
        >
          <List>
            {allsubcategories &&
              allsubcategories.map((subcategory) => (
                <Subcategories
                  key={subcategory}
                  subcategory={subcategory}
                  products={products}
                  lang={lang}
                />
              ))}
          </List>
        </Paper>
      )}
    </Stack>
  );
}

export default Category;
