export default function getCategoryItems(location, shopItems) {
  switch (location.pathname) {
        case '/shop':
            return shopItems;
        case "/shop/tshirts":
            return shopItems.filter(item => item.category === "T-Shirts");
        case "/shop/trousers":
            return shopItems.filter(item => item.category === "Trousers");
        case "/shop/hoodies":
            return shopItems.filter(item => item.category === "Hoodies");
    }
};