
import { useEffect, useState } from 'react';
import axios from 'axios';
import { GetDocuments } from '../api/auth';
import file from "../assets/file.svg";
import Card from './Card';

function DocumentsCard() {
    const [documents, setDocuments] = useState<string[]>([]);

    useEffect(() => {
        const fetchDocuments = async () => {
            try {
                const response = await GetDocuments();
                setDocuments(response.data);
            } catch (error) {
                console.error("Error fetching documents:", error);
            }
        };
        
        fetchDocuments();
    }, []);

    return (

       <Card documents={documents} />

        // <div className='w-full h-full inline-flex'>
        //     {documents.map((doc, index) => (
        //         <div className="flex rounded-lg bg-white p-6 m-4 h-24" key={index}>
        //             <img className="w-4 mr-3" src={file} alt="Sunset in the mountains"></img>
        //             <h1 className='m-auto'>{doc}</h1>
        //             {/* Display other attributes of 'doc' if it's an object */}
        //         </div>
        //     ))}
        // </div>
    );
}

export default DocumentsCard;





