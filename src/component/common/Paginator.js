import React, {useCallback, useState} from "react";
import styles from './Paginator.module.css';
import {useDispatch} from "react-redux";


const Paginator = ({ portionSize=5,cardPacksTotalCount, pageCount, page, getPage, onPageChanged, title='Pagination',  onPageChangedCount,...props}) => {

    let pagesCount = Math.ceil(cardPacksTotalCount / pageCount);
    let pages = [];

    let portionCount = Math.ceil(pagesCount/portionSize);
    let [portionNumber, setPortionNumber]= useState(1);
    let leftPortionPageNumber = (portionNumber-1)*portionSize + 1;
    let rightPortionPageNumber = portionNumber*portionSize;


    const onChangeCountPacks=(e)=>{
        onPageChangedCount(e.currentTarget.value)
    }

        return (
            <div>
                <div>

                    <select value={pageCount} onChange={onChangeCountPacks}  >
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                        <option value={50}>50</option>
                        <option value={100}>100</option>
                    </select>


                 <div className={styles.paginator}>

                    {portionNumber > 1 &&
                    <button onClick={() => {
                        setPortionNumber(portionNumber - 1)
                    }}>PREV</button>
                    }
                    {pages
                        .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                        .map((p) => {
                            return <span className={styles.pageNumber}> <span
                                className={page === p ? styles.selectedPage : ''}
                                key={p}
                                onClick={(e) => {
                                    onPageChanged(p)
                                }}>{p}</span></span>
                    })}
                {portionCount > portionNumber &&
                <button onClick={() => {
                    setPortionNumber(portionNumber + 1)
                }}>NEXT</button>
                }
                 </div>

            </div>
        </div>
                )
                };
export default Paginator








// import React, {useState} from 'react';
// import s from './Paginator.module.css';
//
// let Paginator = ({ cardPacksTotalCount,currentPage,onCurrentPageChanged,portionSize=10,pageCount,page}) => {
//
//     let pagesCount = Math.ceil( cardPacksTotalCount / pageCount);
//     let pages = [];
//     for (let i = 1; i <= pagesCount; i++) {
//         pages.push(i);
//     }
//
//     let portionCount=Math.ceil(pagesCount/portionSize);
//     let [portionNumber,setPortionNumber]=useState(1);
//     let leftPortionPageNumber=(portionNumber-1) * portionSize+1;
//     let rightPortionPageNumber=portionNumber*portionSize
//
//     return <div className={s.paginator}>
//         {portionNumber>1 &&
//         <button onClick={()=>{setPortionNumber(portionNumber-1)}}>prev</button>}
//         {pages
//             .filter(p=>p >=leftPortionPageNumber && p <= rightPortionPageNumber)
//             .map(p => {
//                 return (
//                     <span className={currentPage === p ? s.selectedPage : ''}
//                           onClick={(e) => {
//                               onCurrentPageChanged(p)
//                           }}
//                     >{p}</span>
//                 )})
//         }
//         {portionCount>portionNumber &&
//         <button onClick={()=>{setPortionNumber(portionNumber+1)}}>next</button>
//         }
//     </div>
//
// }
// export default Paginator;