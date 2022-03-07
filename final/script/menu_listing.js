let categories = ['breakfast', 'lunch', 'sides', 'drinks']

let foods = [
    ['images/bacon_egg_cheese.png', '6.00', 'Bacon Egg and Cheese', 0],
    ['images/bacon_egg_cheese_hashbrown.png', '6.00', 'Bacon Egg and Cheese with Hashbrown', 0],
    ['images/steak_egg_cheese.png', '7.00', 'Steak Egg and Cheese', 0],
    ['images/ham_egg_cheese_3x.png', '5.00', 'Ham Egg and Cheese', 0],
    ['images/egg_scrapple.png', '5.00', 'Egg Scrapple', 0],
    ['images/scrapple_egg_cheese_3x.png', '5.00', 'Scrapple Egg and Cheese', 0],
    ['images/egg_cheese_3x.png', '4.00', 'Egg and Cheese', 0],
    ['images/sausage_egg_cheese_3x.png', '5.00', 'Sausage Egg and Cheese', 0],
    ['images/porkroll_egg_cheese_3x.png', '5.00', 'Pork Roll Egg and Cheese', 0],
    ['images/western_omelette_3x.png', '5.50', 'Western Omelette', 0],
    ['images/hot_sausage_egg_cheese_3x.png', '6.00', 'Hot Sausage Egg and Cheese', 0],
    ['images/cheesesteak.png', '6.00', 'Cheesesteak', 1],
    ['images/bacon_cheeseburger.png', '5.00', 'Bacon Cheeseburger', 1],
    ['images/turkey_club.png', '6.00', 'Turkey Club', 1],
    ['images/grilled_cheese_w_ham_bacon_or_turkey_bacon_3x.png', '4.50', 'Grilled Cheese with Ham Bacon or Turkey Bacon', 1],
    ['images/grilled_cheese_tomato_3x.png', '4.00', 'Grilled Cheese with Tomato', 1],
    ['images/grilled_cheese_3x.png', '3.50', 'Grilled Cheese', 1],
    ['images/bacon_lettuce_tomato_3x.png', '5.00', 'Bacon Lettuce Tomato', 1],
    ['images/hot_sausage.png', '7.00', 'Hot Sausage', 1],
    ['images/buffalo_cheesestake.png', '6.00', 'Buffalo Cheesesteak', 1],
    ['images/ham_club.png', '6.00', 'Ham Club', 1],
    ['images/grilled_chicken_hoagie.png', '7.50', 'Grilled Chicken Hoagie', 1],
    ['images/lamb_gyro.png', '6.00', 'Lamb Gyro', 1],
    ['images/mushroom_cheesesteak.png', '7.00', 'Mushroom Cheesesteak', 1],
    ['images/hot_dog.png', '6.00', 'Hot Dog', 1],
    ['images/cart_chips_2x.png', '0.75', 'Chips', 2],
    ['images/cart_hashbrown_2x.png', '1.50', 'Hashbrown', 2],
    ['images/cart_thai_tea_2x.png', '2.50', 'Thai Tea', 2],
    ['images/cart_muffin_2x.png', '1.75', 'Muffin', 2],
    ['images/thai_tea_3x.png', '2.50', 'Thai Tea', 3],
    ['images/hot_coffee_3x.png', '2.50', 'Hot Coffee', 3],
    ['images/tea_3x.png', '2.50', 'Tea', 3],
    ['images/hot_chocolate_3x.png', '2.50', 'Hot Chocolate', 3],
    ['images/gatorade_3x.png', '2.00', 'Gatorade', 3],
    ['images/water_3x.png', '1.25', 'Water', 3],
    ['images/juice_3x.png', '2.00', 'Juice', 3],
    ['images/soda_bottle_3x.png', '2.00', 'Soda Bottle', 3],
    ['images/soda_can_3x.png', '1.00', 'Soda Can', 3],
    ['images/vitamin_water_3x.png', '2.25', 'Vitamin Water', 3],
    ['images/snapple_3x.png', '2.00', 'Snapple', 3],
    ['images/hot_tea_3x.png', '2.00', 'Hot Tea', 3],
];


let textbreakfast = "";
for (let i = 0; i < foods.length; i++) {
    let foodArray = foods[i];

    let foodImage = foodArray[0];
    let foodPrice = foodArray[1];
    let foodName = foodArray[2];
    let foodCatnum = foodArray[3];
    let foodCat = categories[foodCatnum];
    console.log('foodCat is ' + foodCat);
    if (foodCat == 'breakfast') {
        textbreakfast += '<div class="menuitem"> <a href="edit_item.html" class="imgprice"> <img src="' +  foodImage + '" alt="' + foodName + '"> <span class="heart"><i style="width: 40px;" class="fa fa-heart-o fa-lg" aria-hidden="true"></i></span> <span class="pricetag">$' + foodPrice + '</span> </a> <h3>' + foodName + '</h3> </div>';
        }
}

let textlunch = "";
for (let i = 0; i < foods.length; i++) {
    let foodArray = foods[i];

    let foodImage = foodArray[0];
    let foodPrice = foodArray[1];
    let foodName = foodArray[2];
    let foodCatnum = foodArray[3];
    let foodCat = categories[foodCatnum];
    if (foodCat == 'lunch') {
    textlunch += '<div class="menuitem"> <a href="edit_item.html" class="imgprice"> <img src="' +  foodImage + '" alt="' + foodName + '"> <span class="heart"><i style="width: 40px;" class="fa fa-heart-o fa-lg" aria-hidden="true"></i></span> <span class="pricetag">$' + foodPrice + '</span> </a> <h3>' + foodName + '</h3> </div>';
    }
}

let textdrinks = "";
for (let i = 0; i < foods.length; i++) {
    let foodArray = foods[i];

    let foodImage = foodArray[0];
    let foodPrice = foodArray[1];
    let foodName = foodArray[2];
    let foodCatnum = foodArray[3];
    let foodCat = categories[foodCatnum];
    console.log(foodCatnum);
    if (foodCat == 'drinks') {
    textdrinks += '<div class="menuitem"> <a href="edit_item.html" class="imgprice"> <img src="' +  foodImage + '" alt="' + foodName + '"> <span class="heart"><i style="width: 40px;" class="fa fa-heart-o fa-lg" aria-hidden="true"></i></span> <span class="pricetag">$' + foodPrice + '</span> </a> <h3>' + foodName + '</h3> </div>';
    }
}

if (document.getElementById("lunchtime")) {
document.getElementById("lunchtime").innerHTML = textlunch;
console.log(textlunch);
} else if (document.getElementById("breakfasttime")) {
document.getElementById("breakfasttime").innerHTML = textbreakfast;
} else if (document.getElementById("drinktime")) {
document.getElementById("drinktime").innerHTML = textdrinks;
}
