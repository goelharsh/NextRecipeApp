import {
    Card,
    CardContent,
} from "@/components/ui/card"
import Link from "next/link"



export default function RecipeList({ recipeList }) {
    console.log(recipeList)
    return (
        <div>
            <div className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full">
                <h2 className="text-4xl font-bold text-gray-800 mb-12">Recipes</h2>
                <Link href="/">Go Home</Link>
                <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-col-3 gap-8">
                    {
                        recipeList && recipeList.length > 0 ? recipeList.map(recipe => <Link href={`/recipe-list/${recipe.id}`}>
                            <Card>
                                <CardContent className="bg-white rounded-md overflow-hidden shadow-md cursor-pointer hover:scale-[1.1] transition-all ">
                                    <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
                                        <img src={recipe.image} alt={recipe.name}
                                         className="w-full h-full object-contain object-top"/> 
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-lg text-gray-900 font-bold">{recipe.name}</h3>
                                        <div className="mt-4 flex items-center flex-wrap gap-2">
                                            <p className="text-lg text-gray-600">
                                                {recipe.rating}
                                            </p>
                                        </div>
                                        <div className="ml-auto font-bold text-gray-800">
                                            {recipe.cuisine}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card></Link>) : null
                    }
                </div>
            </div>
        </div>
    )
}