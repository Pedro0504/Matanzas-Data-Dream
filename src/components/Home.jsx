import self from '../images/self.jpg';
function Home(){

    return (
        <div className="flex flex-col items-center justify-center">

            <h1 className = "text-3xl font-bold text-center whitespace normal">HI, I'M PEDRO, I DEVELOPED THIS PAGE AS A PROJECT, SO I HOPE IT CAN SOMEDAY BE A REFERENCE FOR URBAN STUDIES</h1>
            <div className="w-50 h-50 rounded contain m-2 flex items-center justify-center">
                <img src={self} className="rounded-full border-2 border-white"></img>
            </div>
            <h1 className="text-3xl font-bold m-2 whitespace-normal text-center m-2">THIS IS MY WEB APP FOR DATA ANALYSIS ON MATANZAS , I INVITE PEOPLE TO SEND INFORMATION THAT CAN BE PUBLISH IN THE PAGE AND THAT CAN CONTRIBUTE TO INFORM PEOPLE IN THE CITY ABOUT THE CHANGES IN THEIR NEIGHBORHOODS</h1>
        </div>
    );
}
export default Home;