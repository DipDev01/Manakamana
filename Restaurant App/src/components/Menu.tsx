const menuCategories = [
  {
    name: 'Tandoori Roti & Naan',
    items: [
      { name: 'Plain / Butter Roti', price: '20 / 30' },
      { name: 'Plain / Butter Naan', price: '110 / 120' },
      { name: 'Naan (2-10 PM)', price: '70', special: true },
      { name: 'Aalu Paratha', price: '60' }
    ]
  },
  {
    name: 'Sekuwa',
    items: [
      { name: 'Chicken Sekuwa (per stick)', price: '70' },
      { name: 'Buff Sekuwa (per stick)', price: '60' },
      { name: 'Pork Sekuwa (per stick)', price: '70' }
    ]
  },
  {
    name: 'Curry Veg',
    items: [
      { name: 'Mix Veg', price: '200' },
      { name: 'Daal Frai', price: '90' },
      { name: 'Matar Paneer', price: '220' },
      { name: 'Butter Paneer Masala', price: '450' }
    ]
  },
  {
    name: 'Tandoori',
    items: [
      { name: 'Tandoori Chicken (Half / Full)', price: '500 / 960' }
    ]
  },
  {
    name: 'Combo Meals',
    note: '* Price during 2-10 PM',
    items: [
      { name: '(Solo Combo) Naan + Chicken Curry + Cold Drink', price: '390', timePrice: '350*' },
      { name: 'Chicken Momo + Chaumin Half + Cold Drink', price: '230' },
      { name: 'Fried Chicken (6pc) + Cold Drink', price: '450' },
      { name: 'Family Pack (2 Curry + 8 Naan + 2 Salad)', price: '1170', timePrice: '850*' }
    ]
  },
  {
    name: 'Non-Veg',
    items: [
      { name: 'Chicken Curry', price: '210' },
      { name: 'Mutton Curry', price: '350' },
      { name: 'Timur Chicken', price: '350' },
      { name: 'Cashew Nut Chicken', price: '550' },
      { name: 'Dry Mutton', price: '450' },
      { name: 'Kadai Chicken (Half / Full)', price: '300 / 550' }
    ]
  },
  {
    name: 'Momo',
    items: [
      { name: 'Chicken Momo (Half / Full)', price: '70 / 130' },
      { name: 'Buff Momo (Half / Full)', price: '60 / 110' }
    ]
  },
  {
    name: 'Snacks',
    items: [
      { name: 'Peanut Sadeko', price: '180' },
      { name: 'Waiwai Sadeko', price: '80' },
      { name: 'Bhatmaas Sadeko', price: '150' },
      { name: 'Fried Chicken (4/6/8pc)', price: '220 / 440 / 650' },
      { name: 'Chilly Chicken', price: '350' },
      { name: 'Kachumber Salad', price: '150' },
      { name: 'Fried Sausage Buff/Chicken (pc)', price: '30 / 40' },
      { name: 'French Fries', price: '180' }
    ]
  },
  {
    name: 'Chaumin',
    items: [
      { name: 'Chicken Chaumin (Half / Full)', price: '90 / 170' },
      { name: 'Veg Chaumin (Half / Full)', price: '50 / 90' },
      { name: 'Buff Chaumin (Half / Full)', price: '80 / 150' }
    ]
  },
  {
    name: 'Tea (Hot)',
    items: [
      { name: 'Lemon Tea', price: '25' },
      { name: 'Black Tea', price: '20' },
      { name: 'Milk Tea', price: '30' }
    ]
  },
  {
    name: 'Coffee (Hot)',
    items: [
      { name: 'Latte', price: '150' },
      { name: 'Cappuccino', price: '180' },
      { name: 'Americano', price: '80' },
      { name: 'Espresso', price: '85' }
    ]
  },
  {
    name: 'Cold Drinks',
    items: [
      { name: 'Fanta / Sprite / Coke', price: '70' },
      { name: 'Red Bull', price: '110' },
      { name: 'Xtreme', price: '160' },
      { name: 'Cold Coffee', price: '180' }
    ]
  },
  {
    name: 'Hard Drinks',
    items: [
      { name: 'Tuberg', price: '520' },
      { name: 'Gorkha Strong (S / L)', price: '220 / 420' },
      { name: '8848 (Quarter)', price: '630' },
      { name: 'Golden Oak (Quarter)', price: '370' },
      { name: 'Old Durbar (Red)(Quarter)', price: '820' }
    ]
  }
];

export function Menu() {
  return (
    <section id="menu" className="py-20 px-4 bg-amber-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl mb-4 text-amber-900">Our Menu</h2>
          <div className="w-24 h-1 bg-amber-700 mx-auto mb-6"></div>
          <p className="text-neutral-700 text-xl">Authentic Nepali flavors prepared with care</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuCategories.map((category) => (
            <div key={category.name} className="bg-white rounded-lg shadow-sm p-8 border border-amber-100">
              <h3 className="text-2xl mb-6 text-amber-800 border-b-2 border-amber-700 pb-3">{category.name}</h3>
              {category.note && (
                <p className="text-xs text-amber-700 mb-4 italic">{category.note}</p>
              )}
              <div className="space-y-4">
                {category.items.map((item, index) => (
                  <div 
                    key={`${item.name}-${index}`} 
                    className={`flex justify-between items-baseline border-b border-neutral-100 pb-3 last:border-0 ${item.special ? 'bg-amber-50 px-2 py-1 rounded' : ''}`}
                  >
                    <span className={`text-neutral-800 pr-4 ${item.special ? 'text-amber-800' : ''}`}>
                      {item.special && '⏰ '}
                      {item.name}
                    </span>
                    <span className="text-amber-700 whitespace-nowrap">
                      R.S. {item.price}
                      {item.timePrice && (
                        <span className="text-xs ml-1">({item.timePrice})</span>
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
