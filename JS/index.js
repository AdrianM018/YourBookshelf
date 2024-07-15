subjectlisting()

async function subjectlisting(){
    const urlsubjects = `https://openlibrary.org/subjects/crime.json`
try{

    const response = await fetch(urlsubjects);
    const responseindata = await response.json();
    const onebookpersubject = await responseindata.edition_count
    console.log(responseindata.works)

} catch(error){
    console.log(error)
}

}

async function searchingbooks(){

    try{
        const booksearch_input = document.getElementById("booksearch_input").value.toLocaleLowerCase();
        const searchURL = await fetch(`https://openlibrary.org/search.json?title=${booksearch_input}`)
        const datasearch = await searchURL.json()
        console.log(datasearch)
    }catch(error){
        console.error(error)
    }
}