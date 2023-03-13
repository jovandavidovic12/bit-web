const CardContainer = () => {
    const inputArray = [{name: 'Astra', desc : 'Opel Astra, Germany', img:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AOpel_Astra_K_at_IAA_2019_IMG_0473.jpg&psig=AOvVaw3FBrfN42MzaDUFDWLX8dB9&ust=1678608510887000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCPDxrJK20_0CFQAAAAAdAAAAABAE', price: 10000},
    {name:'Accord', desc: 'Honda Accord, Japan', img:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FHonda_Civic&psig=AOvVaw1GZEypjYXkgruJRHJAEcAa&ust=1678608620786000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIjT6Ma20_0CFQAAAAAdAAAAABAE', price: 11111},
    {name:'Megane', desc:'Renault megane, France', img:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FRenault_M%25C3%25A9gane&psig=AOvVaw3dZAvwq3Jy5Q5nNJQMlthh&ust=1678608712371000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLDEqvK20_0CFQAAAAAdAAAAABAE',price:17000}
]
    return inputArray.map(item,index)=> <AutoCard key = {index} name={item.name} price = {item.price} desc={item.desc} img = {item.img} />
}

export default CardContainer