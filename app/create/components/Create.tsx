import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Link from 'next/link';


// Update the Create component to accept props
interface CreateProps {
  imageUrl?: string;
  text: string;
  label: string;
  href: string;
  
}

const Create: React.FC<CreateProps> = ({imageUrl,text,label,href})  => {


   

    return (

        <Link href={href} className="flex items-center bg-gray-800 bg-opacity-75 p-4 rounded-lg cursor-pointer"  style={{ maxWidth: '600px', margin: 'auto' }}>
            <div className="flex items-center flex-grow">
                <img 
                    src={imageUrl} // Use imageUrl prop
                    alt="Brand Logo" 
                    className="mr-4" 
                    style={{ width: '100px', height: 'auto', padding: '10px' }}
                />
                <span className="text-white text-sm font-bold flex-grow">
                    {text} 
                </span>
            </div>
        </Link>
    );
};

export default Create;
