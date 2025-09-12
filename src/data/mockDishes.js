import deepFriedSpringRolls from "../assets/images/deep-fried-spring-rolls.jpg";
import butterChicken from "../assets/images/Butter_Chicken.jpg";
import butterNaan from "../assets/images/butter_naan.jpg";
import caesarSalad from "../assets/images/Caesar_Salad.jpg";
import chickenLollipop from "../assets/images/Chicke_lollipop.jpg";
import chickenBiryani from "../assets/images/chicken_biryani.jpg";
import chickenCurry from "../assets/images/chicken_curry.jpg";
import choleBhature from "../assets/images/chole_bhature.jpg";
import dalMakhani from "../assets/images/dal_makhani.jpg";
import fistAmrisari from "../assets/images/fist_amritsari.jpg";
import garlicNaan from "../assets/images/Garlic_Naan.jpg";
import gulabJamun from "../assets/images/Gulab_Jamun.jpg";
import jalebi from "../assets/images/jalebi.jpeg";
import jeeraRice from "../assets/images/jeera rice.jpg";
import kadhaiPaneer from "../assets/images/Kadhai_paneer.jpg";
import masalaDosa from "../assets/images/masala dosa.jpg";
import mixedVegetableCurry from "../assets/images/Mixed_Vegetable_Curry.jpg";
import muttonRoganJosh from "../assets/images/mutton_rogan_josh.jpg";
import paneerButterMasala from "../assets/images/paneer_butter_masala.jpg";
import pannerPakora from "../assets/images/Paneer_pakora.jpg";
import paniPuri from "../assets/images/pani_puri.jpeg";
import pannerTikka from "../assets/images/Panner_Tikka.jpg";
import papadum from "../assets/images/papadum.jpeg";
import pesarattu from "../assets/images/pesarattu.jpeg";
import raita from "../assets/images/Raita.jpeg";
import rasgulla from "../assets/images/Rasgulla.jpg";
import riceKheer from "../assets/images/Rice Kheer.jpeg";
import tandooriChicken from "../assets/images/Tandoori_chicken.jpg";
import vegetaleSoup from "../assets/images/vegetale_soup.jpg";

export const dishes = [
  {
    id: 1,
    name: "Spring Rolls",
    description: "Crispy rolls with mixed vegetables.",
    image: deepFriedSpringRolls,
    mealType: "STARTER",
    type: "VEG",
    ingredients: [
      { name: "Spring Roll Sheets", quantity: "10" },
      { name: "Mixed Veggies", quantity: "200g" },
      { name: "Soy Sauce", quantity: "2 tbsp" },
    ],
  },
  {
    id: 2,
    name: "Chicken Lollipop",
    description: "Spicy fried chicken wings.",
    image: chickenLollipop,
    mealType: "STARTER",
    type: "NON-VEG",
    ingredients: [
      { name: "Chicken Wings", quantity: "8 pcs" },
      { name: "Red Chili Powder", quantity: "2 tsp" },
      { name: "Cornflour", quantity: "3 tbsp" },
    ],
  },
  {
    id: 3,
    name: "Paneer Tikka",
    description: "Grilled chunks of marinated paneer.",
    image: pannerTikka,
    mealType: "STARTER",
    type: "VEG",
    ingredients: [
      { name: "Paneer", quantity: "250g" },
      { name: "Yogurt", quantity: "1/2 cup" },
      { name: "Spices", quantity: "to taste" },
    ],
  },
  {
    id: 4,
    name: "Kadhai Paneer",
    description:
      "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    image: kadhaiPaneer,
    mealType: "MAIN COURSE",
    type: "VEG",
    ingredients: [
      { name: "Paneer", quantity: "200g" },
      { name: "Onion", quantity: "2 large" },
      { name: "Capsicum", quantity: "1 large" },
      { name: "Tomato Puree", quantity: "1 cup" },
    ],
  },
  {
    id: 5,
    name: "Tandoori Chicken",
    description: "Classic marinated and roasted chicken.",
    image: tandooriChicken,
    mealType: "MAIN COURSE",
    type: "NON-VEG",
    ingredients: [
      { name: "Chicken", quantity: "500g" },
      { name: "Yogurt", quantity: "1 cup" },
      { name: "Tandoori Masala", quantity: "2 tbsp" },
      { name: "Lemon Juice", quantity: "2 tbsp" },
    ],
  },
  {
    id: 6,
    name: "Butter Chicken",
    description: "Creamy tomato based chicken curry.",
    image: butterChicken,
    mealType: "MAIN COURSE",
    type: "NON-VEG",
    ingredients: [
      { name: "Chicken", quantity: "500g" },
      { name: "Butter", quantity: "100g" },
      { name: "Tomato Puree", quantity: "1 cup" },
      { name: "Cream", quantity: "1/2 cup" },
    ],
  },
  {
    id: 7,
    name: "Gulab Jamun",
    description: "Sweet dessert balls soaked in sugar syrup.",
    image: gulabJamun,
    mealType: "DESSERT",
    type: "VEG",
    ingredients: [
      { name: "Khoya", quantity: "200g" },
      { name: "Flour", quantity: "50g" },
      { name: "Sugar", quantity: "300g" },
    ],
  },
  {
    id: 8,
    name: "Rasgulla",
    description: "Soft spongy sweet cheese balls in sugar syrup.",
    image: rasgulla,
    mealType: "DESSERT",
    type: "VEG",
    ingredients: [
      { name: "Paneer", quantity: "250g" },
      { name: "Sugar Syrup", quantity: "300ml" },
      { name: "Cardamom Powder", quantity: "1 tsp" },
    ],
  },
  {
    id: 9,
    name: "Caesar Salad",
    description: "Fresh lettuce with Caesar dressing and croutons.",
    image: caesarSalad,
    mealType: "SIDES",
    type: "VEG",
    ingredients: [
      { name: "Lettuce", quantity: "1 bunch" },
      { name: "Croutons", quantity: "1 cup" },
      { name: "Parmesan", quantity: "50g" },
    ],
  },
  {
    id: 10,
    name: "Garlic Naan",
    description: "Soft Indian bread topped with garlic and butter.",
    image: garlicNaan,
    mealType: "SIDES",
    type: "VEG",
    ingredients: [
      { name: "Flour", quantity: "3 cups" },
      { name: "Garlic", quantity: "4 cloves" },
      { name: "Butter", quantity: "50g" },
    ],
  },
  {
    id: 11,
    name: "Paneer Pakora",
    description: "Deep fried paneer cubes with spicy batter.",
    image: pannerPakora,
    mealType: "STARTER",
    type: "VEG",
    ingredients: [
      { name: "Paneer", quantity: "200g" },
      { name: "Gram Flour", quantity: "1 cup" },
      { name: "Spices", quantity: "to taste" },
    ],
  },
  {
    id: 12,
    name: "Fish Amritsari",
    description: "Batter fried fish with Indian spices.",
    image: fistAmrisari,
    mealType: "STARTER",
    type: "NON-VEG",
    ingredients: [
      { name: "Fish Fillet", quantity: "300g" },
      { name: "Gram Flour", quantity: "1 cup" },
      { name: "Chili Powder", quantity: "2 tsp" },
    ],
  },
  {
    id: 13,
    name: "Vegetable Soup",
    description: "Warm mixed vegetable soup.",
    image: vegetaleSoup,
    mealType: "STARTER",
    type: "VEG",
    ingredients: [
      { name: "Mixed Vegetables", quantity: "200g" },
      { name: "Salt & Pepper", quantity: "to taste" },
      { name: "Water", quantity: "4 cups" },
    ],
  },
  {
    id: 14,
    name: "Dal Makhani",
    description: "Slow cooked black lentils with butter and cream.",
    image: dalMakhani,
    mealType: "MAIN COURSE",
    type: "VEG",
    ingredients: [
      { name: "Black Lentils", quantity: "250g" },
      { name: "Butter", quantity: "50g" },
      { name: "Cream", quantity: "100ml" },
    ],
  },
  {
    id: 15,
    name: "Butter Naan",
    description: "Soft Indian bread cooked in tandoor with butter.",
    image: butterNaan,
    mealType: "SIDES",
    type: "VEG",
    ingredients: [
      { name: "Flour", quantity: "3 cups" },
      { name: "Butter", quantity: "50g" },
      { name: "Yeast", quantity: "1 tsp" },
    ],
  },
  {
    id: 16,
    name: "Chicken Curry",
    description: "Spicy chicken curry with Indian spices.",
    image: chickenCurry,
    mealType: "MAIN COURSE",
    type: "NON-VEG",
    ingredients: [
      { name: "Chicken", quantity: "500g" },
      { name: "Onions", quantity: "2 large" },
      { name: "Tomatoes", quantity: "3 large" },
    ],
  },
  {
    id: 17,
    name: "Mixed Vegetable Curry",
    description: "Assorted vegetables cooked with spices.",
    image: mixedVegetableCurry,
    mealType: "MAIN COURSE",
    type: "VEG",
    ingredients: [
      { name: "Carrot", quantity: "100g" },
      { name: "Beans", quantity: "100g" },
      { name: "Potatoes", quantity: "150g" },
    ],
  },
  {
    id: 18,
    name: "Jalebi",
    description: "Sweet fermented flour batter soaked in syrup.",
    image: jalebi,
    mealType: "DESSERT",
    type: "VEG",
    ingredients: [
      { name: "Flour", quantity: "2 cups" },
      { name: "Sugar", quantity: "1.5 cups" },
      { name: "Yogurt", quantity: "1/2 cup" },
    ],
  },
  {
    id: 19,
    name: "Rice Kheer",
    description: "Indian rice pudding flavored with cardamom.",
    image: riceKheer,
    mealType: "DESSERT",
    type: "VEG",
    ingredients: [
      { name: "Rice", quantity: "100g" },
      { name: "Milk", quantity: "1L" },
      { name: "Sugar", quantity: "150g" },
    ],
  },
  {
    id: 20,
    name: "Raita",
    description: "Yogurt mixed with cucumbers and spices.",
    image: raita,
    mealType: "SIDES",
    type: "VEG",
    ingredients: [
      { name: "Yogurt", quantity: "200g" },
      { name: "Cucumber", quantity: "1 medium" },
      { name: "Cumin Powder", quantity: "1 tsp" },
    ],
  },
  {
    id: 21,
    name: "Papadum",
    description: "Thin, crispy Indian wafer.",
    image: papadum,
    mealType: "SIDES",
    type: "VEG",
    ingredients: [
      { name: "Lentil Flour", quantity: "1 cup" },
      { name: "Black Pepper", quantity: "1 tsp" },
      { name: "Salt", quantity: "to taste" },
    ],
  },
  {
    id: 22,
    name: "Jeera Rice",
    description: "Basmati rice flavored with cumin seeds.",
    image: jeeraRice,
    mealType: "SIDES",
    type: "VEG",
    ingredients: [
      { name: "Basmati Rice", quantity: "200g" },
      { name: "Cumin Seeds", quantity: "2 tsp" },
      { name: "Ghee", quantity: "2 tbsp" },
    ],
  },
  {
    id: 23,
    name: "Mutton Rogan Josh",
    description: "Spicy lamb curry with rich brown sauce.",
    image: muttonRoganJosh,
    mealType: "MAIN COURSE",
    type: "NON-VEG",
    ingredients: [
      { name: "Mutton", quantity: "600g" },
      { name: "Yogurt", quantity: "1 cup" },
      { name: "Rogan Josh Masala", quantity: "3 tbsp" },
    ],
  },
  {
    id: 24,
    name: "Chole Bhature",
    description: "Spicy chickpea curry with fried bread.",
    image: choleBhature,
    mealType: "MAIN COURSE",
    type: "VEG",
    ingredients: [
      { name: "Chickpeas", quantity: "300g" },
      { name: "Flour", quantity: "2 cups" },
      { name: "Spices", quantity: "to taste" },
    ],
  },
  {
    id: 25,
    name: "Masala Dosa",
    description: "Fermented crepe filled with spicy potato.",
    image: masalaDosa,
    mealType: "MAIN COURSE",
    type: "VEG",
    ingredients: [
      { name: "Rice Flour", quantity: "2 cups" },
      { name: "Potatoes", quantity: "300g" },
      { name: "Mustard Seeds", quantity: "1 tsp" },
    ],
  },
  {
    id: 26,
    name: "Pani Puri",
    description: "Hollow crispy puris served with spicy water.",
    image: paniPuri,
    mealType: "STARTER",
    type: "VEG",
    ingredients: [
      { name: "Semolina", quantity: "1 cup" },
      { name: "Tamarind", quantity: "50g" },
      { name: "Spices", quantity: "to taste" },
    ],
  },
  {
    id: 27,
    name: "Chicken Biryani",
    description: "Spiced chicken with fragrant basmati rice.",
    image: chickenBiryani,
    mealType: "MAIN COURSE",
    type: "NON-VEG",
    ingredients: [
      { name: "Chicken", quantity: "500g" },
      { name: "Basmati Rice", quantity: "300g" },
      { name: "Biryani Masala", quantity: "3 tbsp" },
    ],
  },
  {
    id: 28,
    name: "Paneer Butter Masala",
    description: "Paneer cooked in creamy tomato butter gravy.",
    image: paneerButterMasala,
    mealType: "MAIN COURSE",
    type: "VEG",
    ingredients: [
      { name: "Paneer", quantity: "250g" },
      { name: "Butter", quantity: "100g" },
      { name: "Tomato Puree", quantity: "1 cup" },
    ],
  },
  {
    id: 29,
    name: "Rasgulla",
    description: "Soft spongy sweet cheese balls in sugar syrup.",
    image: rasgulla,
    mealType: "DESSERT",
    type: "VEG",
    ingredients: [
      { name: "Paneer", quantity: "250g" },
      { name: "Sugar Syrup", quantity: "300ml" },
      { name: "Cardamom Powder", quantity: "1 tsp" },
    ],
  },
  {
    id: 30,
    name: "Pesarattu",
    description: "Green gram dosa served with chutney.",
    image: pesarattu,
    mealType: "STARTER",
    type: "VEG",
    ingredients: [
      { name: "Green Gram", quantity: "200g" },
      { name: "Ginger", quantity: "1 inch" },
      { name: "Green Chili", quantity: "1" },
    ],
  },
];
