import deepFriedSpringRolls from "../assets/images/deep-fried-spring-rolls.jpg";
import butterChicken from "../assets/images/Butter_Chicken.jpeg";
import butterNaan from "../assets/images/butter_naan.jpeg";
import caesarSalad from "../assets/images/Caesar_Salad.jpg";
import chickenLollipop from "../assets/images/Chicke_lollipop.jpeg";
import chickenBiryani from "../assets/images/chicken_biryani.jpeg";
import chickenCurry from "../assets/images/chiecken_curry.jpeg";
import choleBhature from "../assets/images/chole_bhature.jpeg";
import dalMakhani from "../assets/images/dal_makhani.jpeg";
import fistAmrisari from "../assets/images/fist_amritsari.jpeg";
import garlicNaan from "../assets/images/Garlic_Naan.jpeg";
import gulabJamun from "../assets/images/Gulab_Jamun.jpeg";
import jalebi from "../assets/images/jalebi.jpeg";
import jeeraRice from "../assets/images/jeera rice.jpeg";
import kadhaiPaneer from "../assets/images/Kadhai_paneer.jpeg";
import masalaDosa from "../assets/images/masala dosa.jpeg";
import mixedVegetableCurry from "../assets/images/Miexed_Vegetable_Curry.jpeg";
import muttonRoganJosh from "../assets/images/mutton_rogan_josh.jpeg";
import paneerButterMasala from "../assets/images/paneer_butter_masala.jpeg";
import pannerPakora from "../assets/images/Paneer_pakora.jpg";
import paniPuri from "../assets/images/pani_puri.jpeg";
import pannerTikka from "../assets/images/Panner_Tikka.jpeg";
import papadum from "../assets/images/papadum.jpeg";
import pesarattu from "../assets/images/pesarattu.jpeg";
import raita from "../assets/images/Raita.jpeg";
import rasgulla from "../assets/images/rasgulla.jpeg";
import riceKheer from "../assets/images/Rice Kheer.jpeg";
import tandooriChicken from "../assets/images/Tandoori_chicken.jpeg";
import vegetaleSoup from "../assets/images/vegetable_soup.jpeg";

export const dishes = [
  {
    id: 1,
    name: "Spring Rolls",
    description:
      "Spring rolls are a delicious and crispy appetizer enjoyed around the world, especially in Asian cuisine. They are made by wrapping a thin pastry sheet around a flavorful filling of vegetables, noodles, or sometimes meat, and then deep-frying or baking until golden brown. Light yet satisfying, spring rolls are known for their crunchy texture on the outside and savory, well-seasoned filling on the inside. Often served with dips like sweet chili sauce, soy sauce, or garlic sauce, they make a perfect snack, party starter, or side dish that everyone loves.",
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
    description:
      "Chicken lollipop is a popular Indo-Chinese appetizer made by shaping chicken wings into a lollipop-like form and deep-frying them until crispy. The chicken is marinated with a blend of spices, sauces, and seasonings that give it a tangy, spicy, and flavorful taste. With its juicy meat inside and crunchy coating outside, it is often served with spicy schezwan sauce or a tangy dip. Loved by foodies for its unique presentation and bold flavors, chicken lollipop is a perfect starter for parties and gatherings.",
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
    description:
      "Paneer Tikka is a classic North Indian appetizer made by marinating soft paneer cubes in a flavorful mix of yogurt and spices, then grilling or roasting them until smoky and golden. Often paired with onions, capsicum, and tomatoes on skewers, it offers a perfect balance of spice, tang, and charred flavor. This dish is not only rich in taste but also high in protein, making it a favorite among vegetarians. Served hot with mint chutney and lemon, Paneer Tikka is a crowd-pleaser at parties, restaurants, and festive occasions.",
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
      "Kadhai Paneer is a popular North Indian curry made with soft paneer cubes cooked in a spicy, flavorful masala of tomatoes, onions, and freshly ground kadhai spices. It gets its name from being traditionally prepared in a kadhai (wok), which enhances its rustic taste. Bell peppers and onions are usually added, giving the dish a vibrant look and extra crunch. Served hot with naan, roti, or jeera rice, Kadhai Paneer is a favorite choice in Indian restaurants and home kitchens alike.",
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
    description:
      "Tandoori Chicken is a world-famous Indian dish made by marinating chicken in yogurt and a blend of aromatic spices, then cooking it in a traditional clay oven called a tandoor. The high heat of the tandoor gives the chicken its signature smoky flavor, charred edges, and juicy tenderness inside. With its vibrant red color from spices like chili powder and turmeric, it is as visually tempting as it is flavorful. Often served with mint chutney, onion rings, and lemon wedges, Tandoori Chicken is a perfect appetizer or main course enjoyed with naan or rice.",
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
    description:
      "Butter Chicken, also known as Murgh Makhani, is one of the most loved Indian dishes worldwide. It features tender chicken pieces cooked in a rich, creamy tomato-based gravy with butter, fresh cream, and a blend of mild spices. The dish is known for its smooth texture, vibrant orange color, and a perfect balance of sweetness and spice. Best enjoyed with naan, roti, or basmati rice, Butter Chicken is a comforting and indulgent curry that delights food lovers of all ages.",
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
    description:
      "Gulab Jamun is a classic Indian dessert made from soft, deep-fried khoya or milk solids, soaked in fragrant sugar syrup flavored with cardamom and rose water. These golden-brown, melt-in-the-mouth balls are rich, sweet, and indulgent, making them a festive favorite. Often garnished with saffron strands or chopped nuts, Gulab Jamun is enjoyed warm or at room temperature. It is a must-have delicacy at weddings, celebrations, and festivals, loved by people of all ages.",
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
    description:
      "Rasgulla is a famous Bengali sweet made from soft and spongy chenna (Indian cottage cheese) balls cooked in light sugar syrup until they absorb the sweetness. Known for its delicate texture and juicy bite, it melts in the mouth with every spoonful. Mildly flavored with cardamom or rose water, Rasgulla offers a refreshing and light sweetness compared to richer Indian desserts. It is a beloved festive treat, often served chilled, and continues to be a symbol of Bengal’s rich culinary tradition.",
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
    description:
      "Caesar Salad is a classic and refreshing salad made with crisp romaine lettuce, crunchy croutons, and a creamy dressing typically prepared with garlic, olive oil, lemon juice, egg, anchovies, and Parmesan cheese. It is light yet flavorful, offering a perfect balance of tanginess, creaminess, and crunch. Often topped with extra shavings of Parmesan and sometimes grilled chicken or shrimp, it can be enjoyed as a starter or a wholesome meal. Widely loved for its simplicity and taste, Caesar Salad is a timeless favorite in international cuisine.",
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
    description:
      "Garlic Naan is a soft and fluffy Indian flatbread infused with the rich flavor of garlic and cooked in a traditional clay oven (tandoor). Brushed with butter or ghee and sprinkled with chopped garlic and fresh coriander, it offers a perfect blend of aroma and taste. Its slightly charred, smoky edges and pillowy texture make it an ideal companion to curries, dals, and kebabs. Loved for its irresistible flavor, Garlic Naan is a must-have side dish in Indian restaurants and homes alike.",
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
    description:
      "Paneer Pakora is a popular Indian snack made by dipping soft paneer cubes in a spiced gram flour batter and deep-frying them until golden and crispy. The crunchy outer layer perfectly complements the soft, melt-in-the-mouth paneer inside. Often served hot with green chutney or tamarind chutney, it makes for a delightful tea-time treat or party appetizer. Paneer Pakora is especially enjoyed during rainy days and festive gatherings, loved for its simple yet irresistible flavor.",
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
    description:
      "Fish Amritsari is a famous Punjabi delicacy known for its crispy texture and bold flavors. Made by marinating fish fillets in a spiced gram flour batter with ginger, garlic, carom seeds, and red chili, it is deep-fried until golden and crunchy. The dish gets its name from Amritsar, where it originated, and is often served with onion rings, lemon wedges, and green chutney. Light yet flavorful, Fish Amritsari is a perfect starter or snack that pairs wonderfully with both drinks and main courses.",
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
    description:
      "Vegetable Soup is a healthy and comforting dish made by simmering a mix of fresh vegetables in a flavorful broth. Light yet nourishing, it combines the natural sweetness and crunch of veggies like carrots, beans, peas, and cabbage with subtle seasonings. Often garnished with herbs like coriander or parsley, it offers warmth and goodness in every spoonful. Perfect as a starter or a light meal, Vegetable Soup is loved for its simplicity, nutrition, and soothing taste.",
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
    description:
      "Dal Makhani is a rich and creamy North Indian dish made with whole black lentils (urad dal) and kidney beans slow-cooked with butter, fresh cream, and aromatic spices. Known for its smooth texture and smoky flavor, it is simmered for hours to bring out a deep, comforting taste. This indulgent curry pairs perfectly with naan, roti, or jeera rice, making it a favorite in Indian households and restaurants alike. Dal Makhani is often enjoyed on special occasions and is a true symbol of Punjabi cuisine.",
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
    description:
      "Butter Naan is a soft and fluffy Indian flatbread cooked in a traditional tandoor or on a hot griddle, then brushed generously with butter for a rich flavor. Its slightly chewy texture and golden-brown charred spots make it the perfect accompaniment to curries and gravies. Light, airy, and mildly buttery, it balances well with both spicy and creamy dishes. A staple in Indian restaurants, Butter Naan is loved for its simplicity and melt-in-the-mouth taste.",
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
    description:
      "Chicken Curry is a flavorful and aromatic dish made by cooking tender chicken pieces in a spiced onion-tomato gravy with herbs and seasonings. Rich in taste and comforting in texture, it combines the warmth of Indian spices with the juiciness of chicken. The curry can be prepared in various styles—spicy, creamy, or tangy—depending on the region and ingredients used. Best enjoyed with rice, roti, or naan, Chicken Curry is a homely classic loved across kitchens and restaurants alike.",
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
    description:
      "Mixed Vegetable Curry is a wholesome and colorful dish made by cooking a variety of fresh vegetables like carrots, beans, peas, potatoes, and cauliflower in a spiced onion-tomato gravy. It offers a perfect balance of flavors, combining the natural sweetness of vegetables with the richness of Indian spices. Nutritious and satisfying, this curry can be prepared in both dry and gravy versions to suit different tastes. Served with roti, naan, or rice, Mixed Vegetable Curry is a versatile favorite for everyday meals as well as special occasions.",
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
    description:
      "Jalebi is a famous Indian sweet known for its spiral shape, crispy texture, and juicy sweetness. Made by deep-frying a fermented batter into circular coils and soaking them in saffron-flavored sugar syrup, it offers a delightful crunch with every bite. Served hot, Jalebi is often enjoyed with milk or rabri, making it a festive and indulgent treat. Loved across India, it is a must-have dessert during celebrations, fairs, and special occasions.",
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
    description:
      "Rice Kheer is a traditional Indian dessert made by slow-cooking rice in milk, sweetened with sugar, and flavored with cardamom. Rich and creamy in texture, it is often garnished with nuts like almonds, cashews, and pistachios, along with a hint of saffron. This comforting sweet dish is commonly prepared during festivals, weddings, and special occasions. Served warm or chilled, Rice Kheer is loved for its simplicity, sweetness, and melt-in-the-mouth taste.",
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
    description:
      "Raita is a refreshing Indian side dish made with yogurt and combined with various ingredients like cucumber, onions, tomatoes, or boondi. Lightly seasoned with spices such as cumin, coriander, and sometimes mint, it offers a cool and tangy flavor that complements spicy meals. Often served alongside biryani, pulao, or parathas, raita helps balance the heat of rich and spicy dishes. Its creamy texture and mild taste make it a popular accompaniment in Indian cuisine.",
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
    description:
      "Papadum is a thin, crispy Indian wafer made from lentil, chickpea, or rice flour, seasoned with spices and sometimes herbs. It is typically roasted, fried, or microwaved until crunchy, making it a perfect light snack or accompaniment to meals. Papadum adds a delightful texture and subtle spiciness to any dish, often served alongside rice, curries, or chutneys. Loved for its simplicity and crunch, it is a staple in Indian cuisine and festive meals.",
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
    description:
      "Jeera Rice is a fragrant and flavorful Indian rice dish made by sautéing basmati rice with cumin seeds (jeera) and lightly tempering it with ghee or oil. Its subtle aroma and mild taste make it the perfect accompaniment to rich curries and gravies. Often garnished with fresh coriander, Jeera Rice is simple, quick to prepare, and enjoyed in everyday meals as well as festive occasions. Loved for its simplicity and versatility, it complements a wide range of Indian dishes.",
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
    description:
      "Mutton Rogan Josh is a classic Kashmiri curry known for its rich, aromatic, and flavorful gravy. Made with tender pieces of mutton cooked slowly in a blend of yogurt, onions, garlic, ginger, and traditional spices like cardamom, cloves, and Kashmiri red chili, it has a deep red color and a mildly spicy taste. The slow-cooking process ensures the meat becomes soft and absorbs all the spices, creating a luxurious texture. Best enjoyed with steamed rice, naan, or roti, Mutton Rogan Josh is a hearty and indulgent dish loved across India and beyond.",
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
    description:
      "Chole Bhature is a popular North Indian dish featuring spicy chickpea curry (chole) served with deep-fried, fluffy bread (bhature). The chickpeas are cooked in a flavorful gravy of onions, tomatoes, ginger, garlic, and aromatic spices, creating a tangy and spicy taste. The soft, golden bhature perfectly complements the rich curry, making each bite indulgent and satisfying. Loved as a breakfast, brunch, or festive meal, Chole Bhature is a beloved comfort food across India.",
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
    description:
      "Masala Dosa is a popular South Indian dish made from a thin, crispy fermented rice and lentil crepe filled with a spiced potato mixture. Served hot with coconut chutney and tangy sambar, it offers a perfect balance of crispiness, softness, and flavorful spice. Often enjoyed as breakfast or a light meal, Masala Dosa is loved for its savory taste and satisfying texture. It is a staple in South Indian cuisine and a favorite among food lovers across India.",
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
    description:
      "Pani Puri is a popular Indian street food consisting of crisp, hollow puris filled with a spicy and tangy flavored water (pani), tamarind chutney, potatoes, and chickpeas. Each bite offers a burst of flavors—spicy, tangy, sweet, and savory—all in a crunchy shell. Loved for its fun, interactive way of eating, Pani Puri is a favorite snack at festivals, markets, and gatherings. Its irresistible taste and texture make it one of India’s most iconic street foods.",
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
    description:
      "Chicken Biryani is a flavorful and aromatic Indian rice dish made by layering marinated chicken with fragrant basmati rice, fried onions, and a blend of spices like saffron, cardamom, and cloves. Slow-cooked to perfection, the rice absorbs the rich flavors of the chicken and spices, creating a harmonious and indulgent meal. Often served with raita, salan, or boiled eggs, Chicken Biryani is a festive and celebratory dish loved across India and beyond. Its aromatic fragrance and vibrant taste make it a true culinary delight.",
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
    description:
      "Paneer Butter Masala is a rich and creamy North Indian curry made with soft paneer cubes simmered in a luscious tomato-based gravy, enriched with butter, cream, and aromatic spices. Known for its mildly sweet and buttery flavor, it offers a smooth texture and vibrant orange color that is visually appealing. Often garnished with fresh cream and coriander, it pairs perfectly with naan, roti, or steamed rice. Loved for its indulgent taste and comforting richness, Paneer Butter Masala is a favorite in Indian restaurants and homes alike.",
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
    description:
      "Rasgulla is a popular Indian sweet made from soft, spongy chenna (fresh Indian cottage cheese) balls cooked in light sugar syrup. Known for its delicate texture and juicy sweetness, it melts in the mouth with every bite. Often flavored with cardamom or rose water, Rasgulla is light, refreshing, and a favorite during festivals and celebrations. This iconic dessert, especially loved in Bengal, is cherished for its simplicity and delightful taste.",
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
    description:
      "Pesarattu is a traditional South Indian crepe made from green gram (moong dal) batter, lightly spiced with ginger, green chilies, and sometimes onions. Thin and crispy on the edges while soft in the center, it is a nutritious and protein-rich breakfast or snack. Often served with tangy ginger chutney or coconut chutney, Pesarattu is loved for its savory taste and wholesome goodness. It is a popular dish in Andhra Pradesh and Telangana, celebrated for its simplicity and health benefits.",
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
