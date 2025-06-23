import graph from '../images/graph.png';
function About(){
    return(
        <>
            <div className="grid place-items-center text-3xl text-center font-bold m-2 whitespace-normal">
                <h1 className="text-center">ABOUT THE PAGE</h1>
                <p>This is a page dedicated to the study of the housing market in the city of Matanzas</p>
                <p>The creation of this page comes from the lack of information on the subject in Cuba</p>
                <p>So a search was made in all the online places where this activities were being done</p>
                <p>Recovering enough samples of house prices from every neighbourhood.</p>
                <div className='w-full max-w-3xl h-auto m-4 rounded-xl border-2 border-scale'>
                    <img src={graph} className='w-full max-w-3xl h-auto rounded border-2 border-scale'></img>
                </div>
                <p>The information was obtain with webscraping</p>
                <p>Exploring and cleaning the data was a good practice for data analysis</p>
                <p>The stack used were the Python libraries that are the essence of the Data Analyst and Data Science</p>
                <p>Numpy, Pandas, Matplotlib, Statsmodel</p>
                <p>This web has a API created with FastAPI</p>
                <p>The consults are made through endpoints based on Pandas</p>
            </div>
        </>
    );
}
export default About;
