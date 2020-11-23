let Searchurl =   'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=';
let contentUrl = 'https://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&format=json&titles=';
var userInput
let title


function setup() {
  noCanvas();
  userInput = select('#userInput1')
  userInput.changed(()=>{
    let value = userInput.value();
    let url = Searchurl + value
    loadJSON(url , getSearch , 'jsonp');
  })
}

function getSearch(data) {
 // let ran = round(random(0,data[1].length))
  let ran = 0
  console.log(data)
  let search = data[1][ran]
  console.log(search)
  title = search.replace(/\s+/g,'_')
  createP(title)
  console.log('Querying: ' + title)
  let url = contentUrl + title
  loadJSON(url , getData, 'jsonp' );
  console.log(url);
}

function getData(data) {
  let page = data.query.pages
  let pageId = Object.keys(data.query.pages)[0]
  console.log(pageId)
  console.log(data)
  let content = page[pageId].revisions[0]['*']
  let cont = content.toString();
  console.log(cont)
  //console.log(Searchurl + title)
  //console.log(content)
}