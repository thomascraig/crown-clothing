import React from 'react';

import CollectionItem from '../collection-item/collection-item.components';

import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items }) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
        {
            items                                // map over data
                .filter((item, idx) => idx < 4)  // return 4 items
                .map(({id, ...otherItemProps }) => (
                <CollectionItem key={id} { ...otherItemProps } />
            ))
        }
        </div>
    </div>
)

export default CollectionPreview;