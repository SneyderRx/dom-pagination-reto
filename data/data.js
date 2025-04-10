export async function getData(){
    try {
        let request = await fetch("https://dattebayo-api.onrender.com/characters")
        let data = await request.json()
        return data
    } catch (error) {
        console.error("Error: ", error);
    }
}