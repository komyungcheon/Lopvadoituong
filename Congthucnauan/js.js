class Recipe{
    constructor(title,servings,ingredients) {
        this.title = title;
        this.servings = servings;
        this.ingredients = ingredients;
    }
getTitle(){
    console.log(`ten mon an : ${this.title}`)
}
getServings(){
    console.log(`so luong nguoi : ${this.servings}`)
}
getIngredients(){
        this.ingredients.forEach(function (ele){
            console.log(`-${ele}`)
        })
        }
}
recipe = new Recipe('suon xao chua ngot',2,['400 g sườn thăn', '4 tbsp nước mắm', '5 tsp đường', '5 tsp nước cốt chanh', '1/3 bát nước sôi', 'Hành khô, tỏi, ớt, hành lá', '2 quả cà chua', 'Hành tây (ớt chuông)'])
recipe.getTitle()
recipe.getServings()
recipe.getIngredients()

