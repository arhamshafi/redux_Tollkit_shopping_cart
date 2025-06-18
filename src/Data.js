import pasta from "./images/pasta-removebg-preview.png"
import roast from "./images/roast-removebg-preview.png"
import Chiken_paratha from "./images/Chicken_Roll-removebg-preview.png"
import Sandwich from "./images/sandwich-removebg-preview.png"

const material = [
    {
        id : 1 ,
        name: "🍗 Rustic Chicken Royale",
        img: roast,
        info: "A royal fusion of flavors featuring a tender grilled chicken leg, spiced tikka chunks, seasoned baby potatoes with green peas, and a side of fresh garden salad — all served on a single rustic platter. Perfectly balanced, delightfully hearty.",
        price: 3.67,
    },
    {
        id : 2 ,
        name: "🍝 Tuscan Herb Chicken Spaghetti",
        img: pasta,
        info: "Spaghetti infused with tender chicken bites, topped with fresh tomato slices and garden basil — light, flavorful, and irresistibly satisfying.",
        price: 7.33,
    },
    {
        id : 3 ,
        name: "🥙 Crispy Zingato Roll",
        img: Chiken_paratha,
        info: "A flaky paratha wrap loaded with crunchy zinger chicken and fresh tomato slices — bold flavor in every bite.",
        price: 2.49,
    },
    {
        id : 4 ,
        name: "🥪 GreenGlow Sandwich",
        img: Sandwich,
        info: "A crunchy sesame-topped sandwich with layers of creamy melted cheese and crisp cucumber — light, fresh, and made to refresh.",
        price: 5.49,
    },
]

export default material
