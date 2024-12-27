document.addEventListener('DOMContentLoaded', function() {

const starter = [
    { name: 'Bruschetta', description: 'Toasted bread topped with tomatoes, basil, and garlic.', price: 8.99 },
    { name: 'Garlic Bread', description: 'Freshly baked bread with garlic butter, perfect for dipping.', price: 5.49 },
    { name: 'Caesar Salad', description: 'Crisp romaine lettuce with Caesar dressing, croutons, and parmesan cheese.', price: 7.99 },
    { name: 'Fried Calamari', description: 'Crispy fried squid served with a tangy marinara dipping sauce.', price: 12.99 },
    { name: 'Stuffed Mushrooms', description: 'Portobello mushrooms stuffed with spinach, cheese, and breadcrumbs.', price: 9.49 },
    { name: 'Hummus & Pita', description: 'Creamy hummus served with warm, soft pita bread.', price: 6.49 },
    { name: 'Spinach Artichoke Dip', description: 'A rich and creamy dip made with spinach, artichokes, and cheese, served with chips.', price: 10.99 }
];

const mains = [
    { name: 'Spaghetti Carbonara', description: 'Classic Italian pasta with creamy sauce and bacon.', price: 15.99 },
    { name: 'Chicken Parmesan', description: 'Breaded chicken with marinara sauce and melted mozzarella cheese.', price: 17.49 },
    { name: 'Grilled Salmon', description: 'Fresh salmon fillet grilled to perfection, served with a side of veggies.', price: 21.99 },
    { name: 'Beef Steak', description: 'Juicy grilled steak, cooked to your preference, with a choice of sauce.', price: 23.99 },
    { name: 'Vegetable Lasagna', description: 'Layers of pasta, ricotta cheese, and mixed vegetables in a rich marinara sauce.', price: 14.99 },
    { name: 'Chicken Alfredo', description: 'Pasta tossed in a creamy Alfredo sauce with grilled chicken pieces.', price: 18.99 },
    { name: 'Lamb Chops', description: 'Succulent lamb chops grilled with rosemary and garlic, served with mashed potatoes.', price: 22.49 }
];

const desserts = [
    { name: 'Tiramisu', description: 'Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream.', price: 6.99 },
    { name: 'Chocolate Cake', description: 'Rich, moist cake with a decadent chocolate frosting.', price: 5.99 },
    { name: 'Cheesecake', description: 'Classic cheesecake with a graham cracker crust, topped with fresh berries.', price: 7.49 },
    { name: 'Apple Pie', description: 'Freshly baked apple pie served with a scoop of vanilla ice cream.', price: 4.99 },
    { name: 'Gelato', description: 'Italian-style ice cream available in various flavors.', price: 5.49 },
    { name: 'Crème Brûlée', description: 'Rich custard topped with a layer of crispy caramelized sugar.', price: 8.49 },
    { name: 'Lemon Sorbet', description: 'Refreshing lemon sorbet served chilled, perfect to cleanse the palate.', price: 4.49 }
];

const drinks = [
    { name: 'Wine', description: 'A selection of red, white, and rose wines, perfect for pairing with meals.', price: 12.99 },
    { name: 'Craft Beer', description: 'Locally brewed craft beers with a variety of flavors.', price: 6.99 },
    { name: 'Cocktails', description: 'Signature cocktails made with fresh ingredients and expert bartending.', price: 8.49 },
    { name: 'Fresh Juice', description: 'Refreshing juices made from fresh fruits like orange, apple, and pineapple.', price: 4.99 },
    { name: 'Iced Tea', description: 'Chilled iced tea served with a slice of lemon and a touch of sweetness.', price: 3.49 },
    { name: 'Soda', description: 'A variety of sodas, including cola, lemon-lime, and root beer.', price: 2.99 },
    { name: 'Mocktails', description: 'Alcohol-free cocktails with tropical fruit flavors.', price: 7.49 }
];
function moveTo(elem) {
    elem.style.backgroundColor = '#0014417b';
    elem.style.color='#B6DCF6';
    elem.classList.add('active');
}

const scrooll = document.querySelectorAll('.menu');
const items=document.querySelectorAll('h3');
const desc=document.querySelectorAll('p');

let i=1;
items.forEach(item=>{
 item.classList.add('i'+i);
 i=i+1;
});
i=1;
desc.forEach(item=>{
    item.classList.add('i'+i);
    i=i+1;
   });
scrooll.forEach(m => {
    m.classList.add(m.textContent.trim());  

    m.addEventListener('click', function() {
        if (m.classList.contains('active')) {
    
            return;  
        } else {
            document.querySelectorAll('.menu').forEach(item =>{
           
                 item.style.backgroundColor='#b6dcf645';
                 item.style.color='#001341';
                
        });
            moveTo(m);
            if(m.classList.contains('Mains')){
                let j=1;
                items.forEach(it=>{
                    if(it.classList.contains('i'+j)){
                        if (j < desserts.length) {
                        it.textContent=`${mains[j].name} - $${mains[j].price}`;
                        j=j+1;
                    }}
                });
            }else if(m.classList.contains('Starter')){
                j=1;
                items.forEach(it=>{
                    if(it.classList.contains('i'+j)){
                        if (j < desserts.length) {
                        it.textContent=`${starter[j].name} - $${starter[j].price}`;
                        j=j+1;}
                    }
                });
            }else if(m.classList.contains('Desserts')){
                 j=1;
                items.forEach(it=>{
                    if(it.classList.contains('i'+j)){
                        if (j < desserts.length) {
                        it.textContent=`${desserts[j].name} - $${desserts[j].price}`;
                        j=j+1;}
                    }
                });
            }else{
                 j=1;
                items.forEach(it=>{
                    if(it.classList.contains('i'+j)){
                        if (j < desserts.length) {
                        it.textContent=`${drinks[j].name} - $${drinks[j].price}`;
                        j=j+1;}
                    }
                });
            }
            
            document.querySelectorAll('.menu').forEach(item => 
                item.classList.remove('active'));
            
        }
});
});
scrooll.forEach(m => {
    m.classList.add(m.textContent.trim());  

    m.addEventListener('click', function() {
        if (m.classList.contains('active')) {
    
            return;  
        } else {
            document.querySelectorAll('.menu').forEach(item =>{
           
                 item.style.backgroundColor='#b6dcf645';
                 item.style.color='#001341';
                
        });
            moveTo(m);
            if(m.classList.contains('Mains')){
                let j=1;
                desc.forEach(it=>{
                    if(it.classList.contains('i'+j)){
                        if (j < desserts.length) {
                        it.textContent=`${mains[j].description}`;
                        j=j+1;
                    }}
                });
            }else if(m.classList.contains('Starter')){
                j=1;
                desc.forEach(it=>{
                    if(it.classList.contains('i'+j)){
                        if (j < desserts.length) {
                        it.textContent=`${starter[j].description}`;
                        j=j+1;}
                    }
                });
            }else if(m.classList.contains('Desserts')){
                 j=1;
                desc.forEach(it=>{
                    if(it.classList.contains('i'+j)){
                        if (j < desserts.length) {
                        it.textContent=`${desserts[j].description}`;
                        j=j+1;}
                    }
                });
            }else{
                 j=1;
                desc.forEach(it=>{
                    if(it.classList.contains('i'+j)){
                        if (j < desserts.length) {
                        it.textContent=`${drinks[j].description}`;
                        j=j+1;}
                    }
                });
            }
            
            document.querySelectorAll('.menu').forEach(item => 
                item.classList.remove('active'));
            
        }
});
});
});