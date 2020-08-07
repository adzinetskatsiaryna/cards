import React, {useCallback, useEffect, useState} from 'react';
import {addCardPacks, deleteCardsPack, setPacks, setPageCount, updateCardsPack} from "../../redux/packsReducer";
import {useDispatch, useSelector} from "react-redux";
import {CARDS} from "../routes";
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator";
import Preloader from "../common/preloader";
import './table.css';
import Search from "../common/searchForm";
import UpdatePack from "../common/updatePack";


// общая функция для сортировки данных по возрастанию/ убыванию

const useSortableData = (items, config = null) => {
    const [sortConfig, setSortConfig] = React.useState(config);

    const sortedItems = React.useMemo(() => {
        let sortableItems = [...items];
        if (sortConfig !== null) {
            sortableItems.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableItems;
    }, [items, sortConfig]);

    const requestSort = (key) => {
        let direction = 'ascending';
        if (
            sortConfig &&
            sortConfig.key === key &&
            sortConfig.direction === 'ascending'
        ) {
            direction = 'descending';
        }
        setSortConfig({key, direction});
    };

    return {items: sortedItems, requestSort, sortConfig};
};


// Страница карточек
const PacksPage = (props) => {
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState('');

    const {cardPacks, pageCount, page, cardPacksTotalCount, currentPage} = useSelector((store) => {
        return store.packs
    });

     useEffect(() => {
        dispatch(setPacks())

    }, []);

 //фильтрация по имени
    // если есть значения которые вводятся
    const filterRows  = searchValue
    ? cardPacks.filter(pack => {
        return pack.name.toLowerCase().includes(searchValue);
    })
        : cardPacks

// сортировка по возрастанию/убыванию на клик  в шапке
    const {items, requestSort, sortConfig} = useSortableData(filterRows);

    const getClassNamesFor = (name) => {
        if (!sortConfig) {
            return;
        }
        return sortConfig.key === name ? sortConfig.direction : undefined;
    };


 //добавление, удаление , изменение колод

    const onAddClick = useCallback((cardsPack) => {
        dispatch(addCardPacks(cardsPack))
    }, [dispatch]);

    const onDeletePack = useCallback((id) => {
        dispatch(deleteCardsPack(id))
    }, [dispatch]);

    // const onUpdatePack = useCallback((id, cardsPack) => {
    //     dispatch(updateCardsPack(id, cardsPack))
    // }, [dispatch]);

    const [update, setUpdate] = useState(false);
    const activatedUpdate = () => {
        setUpdate(true)
    };

    const onHandlerUpdatePack = useCallback((cardsPack, name,grade) => {
        dispatch(updateCardsPack(cardsPack, {name:name,grade:grade}));
        setUpdate(false)
    }, [dispatch]);


    const onPageChangedCount = (pageCount) => {
        dispatch(setPageCount(pageCount))
    };


    if (!cardPacks) {
        return <Preloader/>
    }


    return (
        <div>
            <div><h1>CardPacks</h1>
                <Search setSearchValue ={setSearchValue} value={searchValue}/>

                <Paginator page={page} pageCount={pageCount} cardPacksTotalCount={cardPacksTotalCount}
                           onPageChangedCount={onPageChangedCount}/>
            </div>

            <div>
                <table>
                    <thead>
                    <tr>
                        <th>
                            <button
                                type="button"
                                onClick={() => requestSort('name')}
                                className={getClassNamesFor('name')}
                            >
                                Name
                            </button>
                        </th>
                        <th>
                            <button
                                type="button"
                                onClick={() => requestSort('grade')}
                                className={getClassNamesFor('grade')}
                            >
                                Grade
                            </button>

                        </th>
                        <th>
                            <button type="button" onClick={onAddClick}>Add Packs</button>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {items
                        .map((pack) => {
                            return (
                                <tr key={pack._id}>
                                    <td>{pack.name}</td>
                                    <td>{pack.grade}</td>

                                    <td>
                                        <button onClick={() => onDeletePack(pack._id)}>del</button>
                                    </td>
                                    <td>
                                        {!update && <button onClick={activatedUpdate}>update</button>}
                                        {update&& <UpdatePack pack={pack}
                                                              onClick={onHandlerUpdatePack}

                                        />}
                                    </td>
                                    <td><NavLink to={CARDS+'/'+pack._id}>cards</NavLink></td>
                                    <td><NavLink to={'/learn'}>learn</NavLink></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>


        </div>
    )
}
export default PacksPage