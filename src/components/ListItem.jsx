import React from 'react';

function ListItem(props) {
    return (
        <div>
            <ul>
                <li>
                    <input type="checkbox"/><span>{props.item}</span>
                </li>
            </ul>
        </div>
    );
}

export default ListItem;