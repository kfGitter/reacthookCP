import React from 'react';

const Filter = ({ filterTitle, filterRate, handleTitleChange, handleRateChange }) => {
    return (
        <div className="filter">
            <input type="text" placeholder="Search by title" value={filterTitle} onChange={handleTitleChange} />
            <input type="number" placeholder="Filter by rating" value={filterRate} onChange={handleRateChange} />
        </div>
    );
};

export default Filter;