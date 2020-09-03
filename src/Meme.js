import React from 'react'

export const Meme = ({template, onClick}) => {
    return (
            <img 
                style={{maxWidth: 200}}
                style={{maxHeight: 400}}
                key={template.id} 
                src={template.url} 
                alt={template.name} 
                onClick={onClick}
            />
    )
}