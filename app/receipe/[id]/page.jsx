
async function getReceipeID(id) {
    const res = await fetch(`https://dummyjson.com/recipes/${id}`);

    if (!res.ok) {
        throw new Error('Failed to fetch receipe data');
    }

    return res.json();
}

export default async function ReceipePage({ params }) {

    const { id } = await params;
    const receipeData = await getReceipeID(id);

    return (
        <div className="container mx-auto px-4 py-8">
            <h6 className="text-2xl font-bold mb-4">{receipeData?.name}</h6>
            <h2 className="text-2xl font-semibold mb-2">Ingredients:</h2>
            <ul className="list-disc list-inside mb-6">
                {receipeData?.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <h2 className="text-2xl font-semibold mb-2">Instructions:</h2>
            <ol className="list-decimal list-inside mb-6">
                {receipeData?.instructions?.map((instruction, index) => (
                    <li key={index} className="mb-2">{instruction}</li>
                ))}
            </ol>

            {receipeData?.image && (
                <img src={receipeData.image} alt={receipeData.name} className="w-full max-w-2xl rounded-lg mt-6" />
            )}
        </div>
    )
}


