import React, { useState } from "react";
import DessertSuggestion from "./DessertSuggestion";



function SelectedFruit(props) {

    const desserts = {
        strawberryDesserts: {
            "Strawberry Junky Funky Pankey":
                [<div className="recipe-prep"><strong>Ingredients:</strong>
                    <ul>
                        <li>1 cup of flour</li>
                        <li>1 tablespoon granulated sugar</li>
                        <li>1 teaspoon baking powder</li>
                        <li>1/2 teaspoon baking soda</li>
                        <li>1/4 teaspoon salt</li>
                        <li>1 cup buttermilk</li>
                        <li>1/2 cup chopped fresh strawberries</li>
                        <li>2 tablespoons melted butter</li>
                        <li>1 large egg</li>
                        <li>whipped cream and strawberry syrup for serving</li>
                    </ul>
                    <strong>Preparation:</strong>
                    <p>
                        Mix Dry Ingredients: In a bowl, whisk together flour, sugar, baking powder, baking soda, and salt.

                        Combine Wet Ingredients: In another bowl, whisk buttermilk, egg, and melted butter.

                        Mix Batter: Add wet ingredients to dry ingredients. Stir until just combined. Gently fold in chopped strawberries.

                        Cook Pancakes: Heat a skillet or griddle over medium heat. Add a small amount of butter or oil. Pour 1/4 cup of batter onto the skillet for each pancake. Cook until bubbles form on the surface, then flip and cook until golden brown.

                        Serve: Serve Strawberry Junky Funky Pankey Pancakes with a drizzle of strawberry syrup, whipped cream and extra strawberry slices on top.
                        <br></br><br></br>
                        Enjoy these strawberry-packed pancakes for a funky and flavorful breakfast treat!<br></br>
                    </p>

                </div>
                ],

            "Monday Whirl Strawberry Sundae Swirl": [<div className="recipe-prep"><strong>Ingredients:</strong>
                <ul>
                    <li>2 cups vanilla ice cream</li>
                    <li>1/2 cup strawberry sauce (homemade or store-bought)</li>
                    <li>1/4 cup chopped fresh strawberries</li>
                    <li>Whipped cream for topping</li>
                    <li>Sprinkles or chopped nuts for garnish (optional)</li>
                </ul>
                <strong>Preparation:</strong>
                <p>
                    Layer Ice Cream: In serving glasses or bowls, place a scoop of vanilla ice cream at the bottom.

                    Add Strawberry Sauce: Drizzle a layer of strawberry sauce over the ice cream.

                    Add Strawberries: Sprinkle chopped fresh strawberries on top of the sauce.

                    Repeat Layers: Add another scoop of vanilla ice cream, followed by more strawberry sauce and chopped strawberries.

                    Finish and Garnish: Top with a dollop of whipped cream and sprinkle with sprinkles or chopped nuts, if desired.

                    Serve: Serve your Monday Whirl Strawberry Sundae Swirl as a delightful and colorful dessert.
                    <br></br><br></br>
                    Enjoy this swirl of flavors for a sweet start to the week!<br></br>
                </p>
            </div>
            ],

            "Strawberry Fields Fudge Forever ": [<div className="recipe-prep"><strong>Ingredients:</strong>
                <ul>
                    <li>2 cups white chocolate chips</li>
                    <li>1 can (14 oz) sweetened condensed milk</li>
                    <li>1/2 cup strawberry puree (fresh or frozen)</li>
                    <li>1/2 teaspoon vanilla extract</li>
                    <li>A pinch of salt</li>
                    <li>Fresh strawberries for garnish (optional)</li>
                </ul>
                <strong>Preparation:</strong>
                <p>
                    Prepare Strawberry Puree: If using fresh strawberries, blend them into a smooth puree.

                    Melt Ingredients: In a saucepan over low heat, melt white chocolate chips and sweetened condensed milk, stirring until smooth.

                    Add Flavors: Stir in strawberry puree, vanilla extract, and a pinch of salt. Mix until well combined.

                    Pour and Set: Pour the mixture into a lined or greased square baking pan. Smooth the top.

                    Chill: Refrigerate for about 3-4 hours, or until the fudge is set.

                    Slice and Serve: Once set, remove from the pan and cut into squares. Garnish with fresh strawberry slices if desired.
                    <br></br><br></br>
                    Indulge in the sweet and fruity flavors of Strawberry Fields Fudge Forever!
                    <br></br><br></br>
                    Enjoy this delightful and easy-to-make dessert!   <br></br>
                </p>
            </div>
            ]
        },
        peasDesserts: {
            "Peas Bliss Rye Pie": [<div className="recipe-prep"><strong>Ingredients:</strong>
                <p>For the  Rye Crust::</p>
                <ul>
                    <li>1 1/2 cups rye flour</li>
                    <li>1/4 cup granulated sugar</li>
                    <li>1/2 cup unsalted butter, cold and cubed</li>
                    <li>2-3 tablespoons ice water</li>
                </ul>
                <p>For the Pea Filling:</p>
                <ul>
                    <li>2 cups of sweet peas (fresh or frozen)</li>
                    <li>1/4 cup honey or maple syrup</li>
                    <li>1 tablespoon lemon juice</li>
                    <li>1/2 teaspoon vanilla extract</li>
                    <li>Pinch of salt</li>
                    <li>Pinch of salt</li>
                </ul>
                <p>For Topping:</p>
                <ul>
                    <li>Whipped cream or vanilla ice cream</li>
                </ul>
                <strong>Preparation:</strong>
                <p>
                    Prepare Rye Crust: Mix rye flour and sugar. Cut in cold butter until crumbly. Gradually add ice water until dough forms. Wrap, chill 30 min. Roll out, fit into pie dish, trim edges.

                    Preheat and Prepare: Preheat oven to 375°F (190°C). Partially bake crust for 10-12 min. Set aside.

                    Pea Filling: Blend peas, honey or maple syrup, lemon juice, vanilla extract, and salt until smooth.

                    Assemble: Spread pea filling evenly in the prebaked crust.

                    Bake: Bake in preheated oven for 20-25 min until filling is set. Let cool.

                    Serve: Slice Peas Bliss Rye Pie and serve with a dollop of whipped cream or a scoop of vanilla ice cream for a delightful sweet treat.
                    <br></br><br></br>
                    Enjoy your Peas Bliss Rye Pie – a unique and delicious dessert experience!   <br></br>
                </p>
            </div>
            ],
            "Hot Summer Peas Stunner": [<div className="recipe-prep"><strong>Ingredients:</strong>
                <ul>
                    <li>2 cups sweet peas (fresh or frozen)</li>
                    <li>1 can (14 oz) sweetened condensed milk</li>
                    <li>1 teaspoon vanilla extract</li>
                    <li>Zest of 1 lemon</li>
                    <li>Pinch of salt</li>
                </ul>
                <strong>Preparation:</strong>
                <p>
                    Blend Pea Base: Blend sweet peas until smooth. Add sweetened condensed milk, vanilla extract, lemon zest, and a pinch of salt. Blend until well combined.

                    Freeze: Pour the mixture into a freezer-safe container. Cover and freeze for about 4-6 hours, or until firm.

                    Serve: Scoop the Hot Summer Peas Stunner Ice Cream into bowls or cones.
                    <br></br><br></br>
                    Enjoy the unique and refreshing flavors on a hot summer day!
                </p>
            </div>
            ],
            "Green and Light Pea Delight": [<div className="recipe-prep"><strong>Ingredients:</strong>
                <p>For the Brownie Wafers:</p>
                <ul>
                    <li>1 cup all-purpose flour</li>
                    <li>1/2 cup unsweetened cocoa powder</li>
                    <li>1/2 teaspoon baking powder</li>
                    <li>1/4 teaspoon salt</li>
                    <li>1/2 cup melted butter</li>
                    <li>1 cup granulated sugar</li>
                    <li>2 large eggs</li>
                    <li>1 teaspoon vanilla extract</li>
                </ul>
                <p>For the Pea Cream Filling:</p>
                <ul>
                    <li>1 cup sweet peas (fresh or frozen)</li>
                    <li>1/4 cup powdered sugar</li>
                    <li>1/4 cup cream cheese or mascarpone</li>
                    <li>1 tsp lemon zest</li>
                    <li>1 tbsp lemon juice</li>
                    <li>Pinch of salt</li>
                </ul>
                <strong>Preparation:</strong>
                <p>
                    Brownie Wafers: Preheat oven to 350°F. Mix dry ingredients. Combine melted butter and sugar, add eggs, vanilla. Gradually mix in dry ingredients. Drop spoonfuls onto baking sheet, spread into thin rounds. Bake 10-12 min. Cool on wire rack.

                    Pea Cream: Blend peas, powdered sugar, cream cheese, lemon zest, lemon juice, and salt until smooth.

                    Assembly: Spread pea cream on one brownie wafer, top with another to make a sandwich.

                    Chill: Refrigerate filled wafers for 30 min to set.
                    <br></br><br></br>
                    Serve: Enjoy the unique contrast of rich brownie wafers and sweet pea cream.   <br></br>
                </p>
            </div>
            ]
        },
        cherryDesserts: {
            "Hunky Chunky Cherry Funky Custards": [<div className="recipe-prep"><strong>Ingredients:</strong>
                <ul>
                    <li>1 cup cherries, pitted and chopped</li>
                    <li>11 cup heavy cream</li>
                    <li>1/2 cup milk</li>
                    <li>1/4 cup granulated sugar</li>
                    <li>4 large egg yolks</li>
                    <li>1 teaspoon vanilla extract</li>
                    <li>A pinch of salt</li>
                </ul>
                <strong>Preparation:</strong>
                <p>
                    Prepare Cherries: In serving dishes, place a layer of chopped cherries at the bottom.

                    Make Custard Base: In a saucepan, heat heavy cream and milk over medium heat until it's steaming but not boiling.

                    Mix Eggs and Sugar: In a bowl, whisk together egg yolks and granulated sugar until well combined.

                    Combine Mixtures: Gradually pour the warm cream-milk mixture into the egg-sugar mixture, whisking constantly.

                    Cook Custard: Pour the custard mixture back into the saucepan. Cook over low heat, stirring constantly, until the mixture thickens and coats the back of a spoon. Do not let it boil.

                    Flavor and Chill: Remove from heat, stir in vanilla extract and a pinch of salt. Let the custard cool slightly.

                    Pour and Chill: Carefully pour the custard mixture over the cherries in the serving dishes.

                    Chill Custards: Refrigerate custards for at least 2-3 hours, or until fully chilled and set.

                    Serve: Before serving, sprinkle cherry chunks on top for the hunky chunky touch.
                    <br></br><br></br>
                    Enjoy the delightful and playful flavors of Hunky Chunky Cherry Funky Custards!<br></br>
                </p>
            </div>
            ],
            "Merry Cherry Jelly": [<div className="recipe-prep"><strong>Ingredients:</strong>
                <ul>
                    <li>2 cups fresh cherries, pitted and halved</li>
                    <li>1 cup water</li>
                    <li>1 cup granulated sugar</li>
                    <li>2 tablespoons lemon juice</li>
                    <li>2 teaspoons powdered gelatin</li>
                    <li>1 teaspoon vanilla extract</li>
                </ul>
                <strong>Preparation:</strong>
                <p>
                    Prepare Cherries: Place the cherries in a saucepan with water. Simmer over low heat for about 10 minutes until cherries are soft.

                    Extract Cherry Juice: Remove from heat. Mash the cherries and strain the mixture to extract the cherry juice. Discard the solids.

                    Combine Ingredients: In the same saucepan, combine cherry juice, granulated sugar, and lemon juice. Heat over medium until sugar dissolves.

                    Bloom Gelatin: In a separate bowl, sprinkle powdered gelatin over a small amount of cold water. Let it sit for a few minutes to bloom.

                    Mix Gelatin: Stir the bloomed gelatin into the cherry mixture until completely dissolved.

                    Set and Chill: Pour the mixture into serving dishes. Refrigerate for a few hours or until the jelly sets.

                    <br></br><br></br>
                    Enjoy your delightful and refreshing Merry Cherry Jelly!
                    <br></br><br></br>
                    Savor the sweet and tangy flavors of this vibrant jelly dessert.<br></br>
                </p>
            </div>
            ],
            "Cherry Juice Mousse": [<div className="recipe-prep"><strong>Ingredients:</strong>
                <ul>
                    <li>2 cups cherry juice (freshly squeezed or store-bought)</li>
                    <li>1/4 cup granulated sugar</li>
                    <li>1 tablespoon lemon juice</li>
                    <li>1 tablespoon powdered gelatin</li>
                    <li>1 cup heavy cream</li>
                    <li>Fresh cherries for garnish</li>
                </ul>
                <strong>Preparation:</strong>
                <p>
                    Heat Cherry Juice: In a saucepan, heat cherry juice and granulated sugar over medium heat until sugar dissolves. Remove from heat.

                    Mix Gelatin: In a small bowl, sprinkle powdered gelatin over a bit of cold water. Let it bloom for a few minutes.

                    Combine Mixtures: Stir the bloomed gelatin into the warm cherry juice mixture until fully dissolved. Add lemon juice and mix.

                    Cool and Chill: Let the mixture cool to room temperature. Then refrigerate until it thickens but is not fully set.

                    Whip Cream: In a separate bowl, whip the heavy cream until soft peaks form.

                    Fold and Set: Gently fold the whipped cream into the cherry mixture until well combined.

                    Pour and Chill: Pour the mousse into serving glasses or dishes. Refrigerate for at least 2-3 hours, or until fully set.

                    Garnish: Before serving, top with fresh cherries for an extra burst of flavor.
                    <br></br><br></br>
                    Indulge in the luscious and fruity delight of Cherry Juice Mousse!
                    <br></br><br></br>
                    Enjoy the airy and flavorful mousse with the essence of fresh cherries.<br></br>
                </p>
            </div>
            ]
        },

        blueberryDesserts: {
            "Blueberry Blues and Juice": [<div className="recipe-prep"><strong>Ingredients:</strong>
                <ul>
                    <li>2 cups fresh blueberries</li>
                    <li>1/4 cup granulated sugar</li>
                    <li>1 tablespoon lemon juice</li>
                    <li>1 cup water</li>
                    <li>Fresh mint leaves for garnish</li>
                </ul>
                <strong>Preparation:</strong>
                <p>
                    Prepare Blueberries: Rinse and drain the blueberries.

                    Make Blueberry Sauce: In a saucepan, combine blueberries, granulated sugar, lemon juice, and water. Simmer over medium heat until blueberries soften and release their juices.

                    Blend and Strain: Remove from heat and let it cool slightly. Blend the blueberry mixture until smooth. Strain through a fine mesh strainer to remove any solids.

                    Chill Juice: Refrigerate the strained blueberry juice until well chilled.

                    Serve: Pour the chilled blueberry juice into glasses. Garnish with fresh mint leaves.
                    <br></br><br></br>
                    Savor the cool and refreshing flavors of Blueberry Blues and Juice!
                    <br></br><br></br>
                    Enjoy the vibrant and tangy taste of this delightful blueberry-infused drink.
                </p>
            </div>
            ],
            "Blueberry Breezy Smoothie Sqeezy": [<div className="recipe-prep"><strong>Ingredients:</strong>
                <ul>
                    <li>1 cup fresh blueberries</li>
                    <li>1 ripe banana</li>
                    <li>1/2 cup Greek yogurt</li>
                    <li>1/2 cup almond milk (or any milk of your choice)</li>
                    <li>1 tablespoon honey (adjust to taste)</li>
                    <li>Ice cubes</li>
                </ul>
                <strong>Preparation:</strong>
                <p>
                    Blend Ingredients: In a blender, combine fresh blueberries, ripe banana, Greek yogurt, almond milk, and honey.

                    Blend Smooth: Blend until all the ingredients are smooth and well combined.

                    Adjust Consistency: If needed, add a few ice cubes and blend again to achieve your desired consistency.

                    Taste and Adjust: Taste the smoothie and add more honey if you prefer it sweeter.

                    Serve: Pour the Blueberry Breezy Smoothie Sqeezy into glasses. Add a fun straw for extra flair if you'd like.
                    <br></br><br></br>
                    Enjoy the breezy and refreshing taste of your Blueberry Breezy Smoothie Sqeezy!
                    <br></br><br></br>
                    Indulge in this vibrant and wholesome blueberry smoothie for a delightful treat.
                </p>
            </div>
            ],
            "Blueberry Bumble Crumble": [<div className="recipe-prep"><strong>Ingredients:</strong>
                <p>For the Blueberry Filling:</p>
                <ul>
                    <li>3 cups fresh blueberries</li>
                    <li>1/4 cup granulated sugar</li>
                    <li>1 tablespoon lemon juice</li>
                    <li>1 teaspoon cornstarch</li>
                </ul>
                <p>For the Crumble Topping:</p>
                <ul>
                    <li>1/2 cup all-purpose flour</li>
                    <li>1/2 cup rolled oats</li>
                    <li>1/4 cup brown sugar</li>
                    <li>1/4 teaspoon cinnamon</li>
                    <li>1/4 cup unsalted butter, cold and cubed</li>
                </ul>
                <strong>Preparation:</strong>
                <p>
                    Preheat and Prepare: Preheat the oven to 375°F (190°C). Grease a baking dish.

                    Prepare Blueberry Filling: In a bowl, gently toss blueberries with granulated sugar, lemon juice, and cornstarch. Transfer to the greased baking dish.

                    Make Crumble Topping: In another bowl, combine flour, rolled oats, brown sugar, and cinnamon. Cut in cold butter until the mixture resembles coarse crumbs.

                    Top Blueberries: Sprinkle the crumble topping evenly over the blueberry mixture.

                    Bake: Place the baking dish in the preheated oven and bake for about 25-30 minutes, or until the topping is golden and the blueberries are bubbly.

                    Cool and Serve: Allow the Blueberry Bumble Crumble to cool slightly before serving. Serve warm with a scoop of vanilla ice cream or a dollop of whipped cream.
                    <br></br><br></br>
                    Enjoy the delightful blend of textures and flavors in your Blueberry Bumble Crumble!
                    <br></br><br></br>
                    Savor the sweet and tart blueberry filling topped with a crunchy crumble.
                </p>
            </div>
            ]
        },
        raspberryDesserts: {
            "Fun Raspberry Triffle Bun": [<div className="recipe-prep"><strong>Ingredients:</strong>
                <ul>
                    <li>Mini raspberry rollades (about 12)</li>
                    <li>2 cups fresh raspberries</li>
                    <li>1/4 cup granulated sugar</li>
                    <li>1 tablespoon lemon juice</li>
                    <li>1 1/2 cups vanilla custard or pudding</li>
                </ul>
                <strong>Preparation:</strong>
                <p>
                    Prepare Raspberry Sauce: In a saucepan, combine fresh raspberries, granulated sugar, and lemon juice. Cook over medium heat, stirring occasionally, until raspberries break down and mixture thickens. Remove from heat and let it cool.

                    Assemble Trifle Buns: Take each mini raspberry rollade and gently unroll it to separate the layers.

                    Layer Raspberry Sauce: Place a layer of raspberry sauce on the bottom of serving glasses or dessert bowls.

                    Add Rollade Layer: Place a layer of the unrolled mini raspberry rollades over the raspberry sauce.

                    Add Custard Layer: Spoon a layer of vanilla custard or pudding over the rollade layer.

                    Repeat Layers: Add another layer of raspberry sauce, followed by another layer of unrolled mini raspberry rollades and custard.

                    Garnish: Garnish with fresh raspberries for a pop of color and freshness.

                    Serve: Serve your Fun Raspberry Triffle Buns as a playful and delightful dessert.
                    <br></br> <br></br>
                    Enjoy the delightful combination of flavors and textures in your Fun Raspberry Triffle Bun!
                    <br></br> <br></br>
                    Savor the sweet raspberry rollades and creamy custard in every bite.
                </p>
            </div>
            ],
            "Raspberry and Dairy Fairy": [<div className="recipe-prep"><strong>Ingredients:</strong>
                <p>For the Crust:</p>
                <ul>
                    <li>1 1/2 cups graham cracker crumbs</li>
                    <li>1/4 cup unsalted butter, melted</li>
                    <li>2 tablespoons granulated sugar</li>
                </ul>
                <p>For the White Cheesecake Layer:</p>
                <ul>
                    <li>16 oz (450g) cream cheese, softened</li>
                    <li>1/2 cup granulated sugar</li>
                    <li>1 teaspoon vanilla extract</li>
                    <li>2 large eggs</li>
                </ul>
                <p>For the Pink Raspberry Layer:</p>
                <ul>
                    <li>1 cup fresh raspberries</li>
                    <li>1/4 cup granulated sugar</li>
                    <li>1 tablespoon lemon juice</li>
                    <li>8 oz (225g) cream cheese, softened</li>
                </ul>
                <strong>Preparation:</strong>
                <p>
                    Preheat and Prepare: Preheat the oven to 325°F (165°C). Grease a round springform pan.

                    Make Crust: In a bowl, mix graham cracker crumbs, melted butter, and granulated sugar. Press the mixture into the bottom of the prepared pan to form the crust.

                    White Cheesecake Layer: In a mixing bowl, beat 16 oz of cream cheese, 1/2 cup granulated sugar, and vanilla extract until smooth. Add eggs, one at a time, mixing until just combined. Pour the white cheesecake mixture over the crust.

                    Pink Raspberry Cheesecake Layer: In a blender or food processor, blend raspberries, granulated sugar, lemon juice, and 8 oz of cream cheese until smooth.

                    Layer Pink Mixture: Gently pour the pink raspberry cheesecake mixture over the white cheesecake layer.

                    Bake: Place the pan in the preheated oven and bake for about 45-50 minutes, or until the edges are set and the center is slightly jiggly.

                    Cool and Chill: Turn off the oven and leave the cheesecake inside with the door slightly ajar for about an hour. Then, transfer to the refrigerator and chill for at least 4 hours or overnight.

                    Serve: Once fully chilled and set, remove the cheesecake from the pan, slice, and serve your Raspberry and Dairy Fairy Two-Layer Cheesecake.
                    <br></br><br></br>
                    Enjoy the harmonious combination of pink raspberry and creamy cheesecake layers!
                    <br></br><br></br>
                    Indulge in the enchanting flavors of this delightful two-layer dessert.
                </p>
            </div>
            ],
            "Raspberry Jammin' Donut Drizzle": [<div className="recipe-prep"><strong>Ingredients:</strong>
                <p>For the Donuts:</p>
                <ul>
                    <li>2 1/4 cups all-purpose flour</li>
                    <li>1/4 cup granulated sugar</li>
                    <li>1 packet (2 1/4 teaspoons) active dry yeast</li>
                    <li>1/2 teaspoon salt</li>
                    <li>1/2 cup milk, warm</li>
                    <li>2 tablespoons unsalted butter, melted</li>
                    <li>1 large egg</li>
                    <li>Oil for frying</li>
                </ul>
                <p>For the Raspberry Jam Drizzle:</p>
                <ul>
                    <li>1 cup powdered sugar</li>
                    <li>2 tablespoons milk</li>
                    <li>A few drops of pink food coloring</li>
                </ul>
                <strong>Preparation:</strong>
                <p>
                    Make Donut Dough: In a bowl, mix flour, granulated sugar, yeast, and salt. Add warm milk, melted butter, and egg. Mix until a dough forms. Knead on a floured surface until smooth. Let it rise in a covered bowl for about 1 hour.

                    Shape and Fry: Roll out dough to 1/2-inch thickness. Cut rounds using a donut cutter or a glass. Let them rest for about 10 minutes. Heat oil in a pot to 350°F (175°C). Fry donuts for about 1-2 minutes per side, until golden. Drain on paper towels.

                    Make Raspberry Jam Drizzle: In a saucepan, combine fresh raspberries, granulated sugar, and lemon juice. Cook over medium heat, stirring occasionally, until raspberries break down and mixture thickens into a jam-like consistency. Remove from heat and let it cool slightly.

                    Fill with Raspberry Jam: Once donuts are cool, use a piping bag with a small tip to inject raspberry jam into each donut. Insert the tip and gently squeeze to fill.

                    Make Pink Glaze: In a bowl, whisk powdered sugar, milk, and a few drops of pink food coloring until smooth.

                    Glaze Donuts: Dip the top of each filled donut into the pink glaze, letting the excess drip off. Place on a rack to set.

                    Serve: Serve your Raspberry Jammin' Donut Drizzle for a delightful and colorful treat.
                    <br></br><br></br>
                    Enjoy the sweet and tangy burst of raspberry jam in each donut, topped with a pretty pink glaze!
                    <br></br><br></br>
                    Indulge in the delicious flavors and vibrant colors of this special donut creation.
                </p>
            </div>
            ],
        }
    }

    const selectedDesserts = desserts[`${props.fruit.name}Desserts`];
    const dessertKeys = Object.keys(selectedDesserts);
    const [currentDessertIndex, setCurrentDessertIndex] = useState(0);

    function showNextDessert() {
        const nextIndex = (currentDessertIndex + 1) % dessertKeys.length;
        setCurrentDessertIndex(nextIndex);
    }

    const currentDessertKey = dessertKeys[currentDessertIndex];
    const currentDessert = selectedDesserts[currentDessertKey];

    return (
        <>
            {props.fruit && (
                <>
                    <h2>Your selection: {props.fruit.name}</h2>
                    <img src={`/images/${props.fruit.name}.png`} alt={props.fruit.name} className="fruit-img" /><br />
                    <DessertSuggestion

                        fruitName={props.fruit.name}
                        currentDessert={currentDessert}
                        currentDessertKey={currentDessertKey}
                        showNextDessert={showNextDessert}
                        currentDessertIndex={currentDessertIndex}
                        products={props.products}
                    />
                </>
            )}
        </>
    );
}

export default SelectedFruit;