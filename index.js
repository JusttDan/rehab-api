const api = require('./src/rehab-api')

//find all the articles within the first two pages by Creative Technologists

var chained = api.articles(2)
            .map(api.findBy({author: {description: 'Creative Technologist'}}))


//run the computation
hacks.fork(
    (err) => console.log('ERROR:', err)
  , (done) => console.log(
                'Articles written by Creative Technologists include:'
              , done.results.map(f => f.title).join(', '))
)