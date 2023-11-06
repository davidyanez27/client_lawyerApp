import file from "../assets/file.svg";

interface CardProps {
    documents: string[];
}

const Card: React.FC<CardProps> = ({ documents }) => {
    return (

        <div className='w-full h-full inline-flex'>
            {documents.map((doc, index) => (
                <div className="flex rounded-lg bg-white p-6 m-4 h-24 w-96" key={index}>
                    <img className="w-4 mr-3" src={file} alt="Sunset in the mountains"></img>
                    <h1 className='my-auto'>{doc}</h1>
                    {/* Display other attributes of 'doc' if it's an object */}
                </div>
            ))}
        </div>
    );
}

export default Card;