import React, { useState } from 'react'

const Todo = () => {

    const [items, setitems] = useState('')
    const [itemslist, seitemslist] = useState([])

    const handleadd = (e) => {
        if(items!==''){
            seitemslist([...itemslist, items])
            setitems('')    
        }
    }

    const handleremove = (index) => () => seitemslist((items) => items.filter((_, i) => i !== index));

    return (
        <div className='main-container'>
            <div className='container'>
            <h1> ToDo List </h1>
                <input type="text"
                    className='inputfield'
                    value={items}
                    placeholder='Enter your item...'
                    onChange={e => {
                        setitems(e.target.value)
                    }}
                />
                <button className='add-btn' onClick={handleadd}>+</button>
                <ul>
                    {itemslist.map((item, index) =>
                        <div className='item-container'>
                            <li className='item-li' key={index}>{item}</li>
                            <button className='remove-btn' onClick={handleremove(index)}>X</button>
                        </div>
                    )}

                </ul>
            </div>
        </div>
    )
}

export default Todo
