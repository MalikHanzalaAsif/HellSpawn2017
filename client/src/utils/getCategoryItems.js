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
        case "/shop/mugs":
            return shopItems.filter(item => item.category === "Mugs");
        case "/shop/notebooks":
            return shopItems.filter(item => item.category === "Note Books");
        case "/shop/keychains":
            return shopItems.filter(item => item.category === "Key Chains");
        case "/shop/mousepads":
            return shopItems.filter(item => item.category === "Mousepads");
        case "/shop/caps":
            return shopItems.filter(item => item.category === "Caps");
        case "/shop/mobilecovers":
            return shopItems.filter(item => item.category === "Mobile Covers");
        case "/shop/sweatshirts":
            return shopItems.filter(item => item.category === "Sweat Shirts");
        case "/shop/shorts":
            return shopItems.filter(item => item.category === "Shorts");
    }
};