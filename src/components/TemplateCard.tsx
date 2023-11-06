
import { useEffect, useState } from 'react';
import { GetTemplates } from '../api/auth';
import Card from './Card';

function TemplateCard() {
    const [documents, setDocuments] = useState<string[]>([]);

    useEffect(() => {
        const fetchDocuments = async () => {
            try {
                const response = await GetTemplates();
                setDocuments(response.data);
            } catch (error) {
                console.error("Error fetching documents:", error);
            }
        };
        
        fetchDocuments();
    }, []);

    return (
       <Card documents={documents} />
    );
}

export default TemplateCard;





