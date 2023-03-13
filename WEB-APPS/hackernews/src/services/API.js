export const getTopStories = () => {
    const url = 'https://hacker-news.firebaseio.com/v0/topstories.json';
    return fetch(url)
      .then(response => {return response.json() }  )
      .then(data => {
        const top10 = data.slice(0, 10);
        return top10;
      });
  
  }

  export const getStory = (id) => {
    const url = `https://hacker-news.firebaseio.com/v0/item/${id}.json`;
    return fetch(url)
      .then(response => {return response.json() }  )
      .then(data => {
        console.log(data);
        return data; 
      });
  
  }