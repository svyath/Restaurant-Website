import React, { Component } from 'react';

export const DataContext = React.createContext();

export default class DataProvider extends Component {
    state = {
        food: [
            {
                "id": "1",
                "title": "Beef Wellington",
                "src": "https://loveincorporated.blob.core.windows.net/contentimages/gallery/1a63ff95-171e-4052-ab24-ac4c1c1c58d6-beef-wellington.jpg",
                "description": "A dish that's fallen out of favour and then become popular again more times than we can count, beef Wellington's origins are as unclear as its connection to Arthur Wellesley, 1st Duke of Wellington.",
                "price": "50$",
                "count": 1
            },
            {
                "id": "2",
                "title": "Onion Soup",
                "src": "https://loveincorporated.blob.core.windows.net/contentimages/gallery/88f787f4-40c9-4084-92f1-5df6dc94fb72-french-onion-soup.jpg",
                "description": "Very few dishes are as comforting as French onion soup – a blend of mellow, slowly cooked, caramelised onions in a broth laced with white wine and cognac.",
                "price": "7$",
                "count": 1
            },
            {
                "id": "3",
                "title": "Peking Duck",
                "src": "https://loveincorporated.blob.core.windows.net/contentimages/gallery/800f74d9-ef4a-4194-ade2-fe583857131b-peking-duck.jpg",
                "description": "A dish cooked and eaten in Beijing since the Imperial era, today Peking duck is a Chinese restaurant favourite across the world.",
                "price": "10$",
                "count": 1
            },
            {
                "id": "4",
                "title": "Shakshuka",
                "src": "https://loveincorporated.blob.core.windows.net/contentimages/gallery/f7dacd13-88b9-4ece-9bdc-fa0a99347e26-shakshuka.jpg",
                "description": "Claimed as one of their own throughout North Africa and the Middle East, untangling the web of where shakshuka is from is simply impossible.",
                "price": "12$",
                "count": 1
            },
            {
                "id": "5",
                "title": "Laksa",
                "src": "https://loveincorporated.blob.core.windows.net/contentimages/gallery/c2b905dc-b93e-4be5-a461-a35c86a69d22-malaysian-laksa.jpg",
                "description": "A spicy, sweet, sour and fragrant soup from Southeast Asia, laksa is mostly associated with Malaysia. ",
                "price": "7$",
                "count": 1
            },
            {
                "id": "6",
                "title": "Bouillabaisse",
                "src": "https://loveincorporated.blob.core.windows.net/contentimages/gallery/e015f7a7-0442-40a6-8c10-bf17baaabd7f-bouillabaisse.jpg",
                "description": "Bouillabaisse is synonymous with the South of France, especially the port city of Marseille, and is a wonderful celebration of sea creatures caught just off the coast.",
                "price": "7$",
                "count": 1
            },
            {
                "id": "7",
                "title": "Goulash",
                "src": "https://loveincorporated.blob.core.windows.net/contentimages/gallery/3395e189-a84a-42aa-844f-77161f3c35da-goulash.jpg",
                "description": "Although often cooked as a meat sauce or stew across Europe and beyond, the traditional Hungarian goulash is actually a soup.",
                "price": "7$",
                "count": 1
            },
            {
                "id": "8",
                "title": "Texas-style barbecue",
                "src": "https://loveincorporated.blob.core.windows.net/contentimages/gallery/b4e44f43-851e-496b-8d18-73689aacf367-texan-barbecue.jpg",
                "description": "Other states along the so-called barbecue belt that include the Carolinas, Tennessee and Kentucky will have to forgive us, but Texan barbecue takes the spotlight.",
                "price": "7$",
                "count": 1
            },
            {
                "id": "9",
                "title": "Ramen",
                "src": "https://loveincorporated.blob.core.windows.net/contentimages/gallery/2f96b124-4503-4a71-936a-1010bd878d40-ramen.jpg",
                "description": "A Japanese noodle soup, ramen has grown in popularity outside of Japan in the last decade and it's easy to see why.",
                "price": "7$",
                "count": 1
            },
            {
                "id": "10",
                "title": "Southern fried chicken",
                "src": "https://loveincorporated.blob.core.windows.net/contentimages/gallery/352faeb5-95f6-41e6-af4c-24ac02b46511-fried-chicken.jpg",
                "description": "You might think that there couldn't be anything easier than deep-frying a piece of chicken – but you'd be wrong to assume it's as simple as that.",
                "price": "7$",
                "count": 1
            },
            {
                "id": "11",
                "title": "Boeuf bourguignon",
                "src": "https://loveincorporated.blob.core.windows.net/contentimages/gallery/be22d87a-75bc-4653-a3ce-c8590aa326ea-beef-bourguignon.jpg",
                "description": "This classic French dish might look rustic, but plenty of work and skill goes into making it just right. ",
                "price": "7$",
                "count": 1
            },
            {
                "id": "12",
                "title": "Barramundi",
                "src": "https://loveincorporated.blob.core.windows.net/contentimages/gallery/6ad5fabf-a3b4-4dea-b8f2-cfb907080b7c-barramundi.jpg",
                "description": "Barramundi is key to Australian cuisine and you'd be hard pressed to find a restaurant, a café or a fish and chip shop Down Under that doesn't have it on the menu.",
                "price": "7$",
                "count": 1
            },
            {
                "id": "13",
                "title": "Raclette",
                "src": "https://loveincorporated.blob.core.windows.net/contentimages/gallery/ecdfbba0-eb56-41c0-8878-2eaef36e7d7f-raclette.jpg",
                "description": "Both the name of a cheese and a full dish, this is a traditional après-ski meal.",
                "price": "7$",
                "count": 1
            },
            {
                "id": "14",
                "title": "Biryani",
                "src": "https://loveincorporated.blob.core.windows.net/contentimages/gallery/6293c8b5-5d05-43db-8103-7b006a16d1a1-biryani.jpg",
                "description": "A celebration of spices and rice, biryani's origins lie with the Muslims of the Indian subcontinent.",
                "price": "7$",
                "count": 1
            },
            {
                "id": "15",
                "title": "Hamburger",
                "src": "https://loveincorporated.blob.core.windows.net/contentimages/gallery/70bc81c8-b277-407d-8c3a-5c1a3e501732-4-hamburger.jpg",
                "description": "The hamburger has its roots in Germany and is named after the city of Hamburg where, during the 19th century, local beef was ground and mixed with onions and garlic and then formed into patties.",
                "price": "7$",
                "count": 1
            },
            {
                "id": "16",
                "title": "Tacos",
                "src": "https://loveincorporated.blob.core.windows.net/contentimages/gallery/6be480af-37e7-45d2-b08a-ff0597585897-5-tacos.jpg",
                "description": "These soft corn tortillas full of delicious beef, pork and chicken have mysterious origins that are often traced back to Mexico's 18th-century silver mines.",
                "price": "7$",
                "count": 1
            },
            {
                "id": "17",
                "title": "Smørrebrød",
                "src": "https://loveincorporated.blob.core.windows.net/contentimages/gallery/d066b151-b43c-4704-bfc6-8be062316bf0-smorrebrod.jpg",
                "description": "A dish commonly found across all Scandinavian and Baltic countries, this open-faced sandwich has its roots in Denmark.",
                "price": "7$",
                "count": 1
            },
            {
                "id": "18",
                "title": "Kebab",
                "src": "https://loveincorporated.blob.core.windows.net/contentimages/gallery/e78fdba7-a740-428e-9296-78a9941736f1-9-kebab.jpg",
                "description": "The kebab has a long heritage (the name was first recorded as far back as the 14th century) and is thought to have originated in Turkey with soldiers cooking their freshly hunted meat over open fires.",
                "price": "7$",
                "count": 1
            },
            {
                "id": "19",
                "title": "Falafel",
                "src": "https://loveincorporated.blob.core.windows.net/contentimages/gallery/6c8ac9d5-1caf-4722-825b-fb5e8195964f-10-falafel.jpg",
                "description": "This round, deep-fried patty of ground chickpeas, herbs, spices and onions makes for a tasty veggie treat.",
                "price": "7$",
                "count": 1
            },
            {
                "id": "20",
                "title": "Poke",
                "src": "https://loveincorporated.blob.core.windows.net/contentimages/gallery/4dc93521-ff92-4ee4-9c1c-e614a92c22b1-11-poke.jpg",
                "description": "The native Hawaiian diced raw fish dish, meaning 'to slice' in Hawaiian, has surged in popularity across the US in recent years, probably due to the appeal of its healthy, fresh ingredients.",
                "price": "7$",
                "count": 1
            },
        ]
    }

    render() {
        const {food} = this.state;

        return (
            <DataContext.Provider value={{food}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}

