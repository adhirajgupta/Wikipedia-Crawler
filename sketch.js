let Searchurl = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=';
let contentUrl = 'https://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&format=json&titles=';
var userInput
let title


function setup() {
  noCanvas();
  userInput = select('#userInput1')
  userInput.changed(() => {
    let value = userInput.value();
    let url = Searchurl + value
    loadJSON(url, getSearch, 'jsonp');
  })
}

function getSearch(data) {
  // let ran = round(random(0,data[1].length))
  let ran = 0
  console.log(data)
  let search = data[1][ran]
  console.log(search)
  title = search.replace(/\s+/g, '_')
  console.log('Querying: ' + title)
  let url = Searchurl + title
  console.log(url)
  let link = data[3][0]
  console.log(link)


  for (var i = 0; i < data[1].length; i++) {
    createP(data[1][i] + " - " + data[3][i])
  }

    //createP(title + " - " + link)
  


}


