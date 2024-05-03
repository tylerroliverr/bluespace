export default function useFetchData() {
    const fetchData = async (type) => {
        const apiUrl = `https://api.are.na/v2/channels/${type}/contents?per=100`;

        try {
            const response = await fetch(apiUrl);

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            return data.contents.map(block => ({
                imageUrl: block.image && block.image.display && block.image.display.url ? block.image.display.url : "unknown_image_url",
                description: block.description ? block.description : "unsure"
            }));
        } catch (error) {
            console.error('Error fetching data:', error);
            return [];
        }
    };

    return fetchData;
}