const useAddHeroVM = () =>
{
    function onSubmitHero(event: any)
    {
        const name = event.target.name.value;
        const imageUrl = event.target.imageUrl.value;

        if (!name ||!imageUrl)
        {
            alert('Please fill in both name and image URL');
            return;
        }

        addHero(name, imageUrl);
        event.target.reset();
    }
    return { onSubmitHero }
}

async function addHero(name: string, imageUrl: string)
{
    const response = await fetch('http://localhost:3000/api/heroes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, imageUrl }),
    });
    console.log(response);
}

export default useAddHeroVM