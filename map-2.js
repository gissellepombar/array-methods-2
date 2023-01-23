const site = [
    {
        title: 'About', 
        url: 'about.html', 
        color: 'red'
    }, 

    {
        title: 'Portfolio', 
        url: 'portfolio.html', 
        color: 'blue', 
    },
    {
        title: 'Contact', 
        url: 'contact.html', 
        color: 'pink',
    }
];

const mapSite = site.map((element, index) => {
    console.log(`This is the element ${element.title} and ${index}`)
})

site.forEach((element, index) => {
    const sentence = `${index}: The ur; ${element.url} is ${element.color} and it is called ${element.title}`
})
