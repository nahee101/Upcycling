import TabcompDeal from "../MyPage/TabcompDeal";
import TabcompReview from '../MyPage/TabcompReview';
import { useState } from "react";


const MyPageTab = ({reviewRepository}) => {

    const [activeIndex, setActiveIndex] = useState(0);

    const tabClickHandler= (index) => {
        setActiveIndex(index);
    };

    const tabContArr=[
        {
            tabTitle:(
                <div className={activeIndex===0 ? "is-active" : ""} onClick={()=>tabClickHandler(0)}>
                    내가 작성한 거래글
                </div>
            ),
            tabCont:(
                    <TabcompDeal/>
            )
        },
        {
            tabTitle:(
                <div className={activeIndex===1 ? "is-active" : ""} onClick={()=>tabClickHandler(1)}>
                    내가 작성한 리뷰글
                </div>
            ),
            tabCont:(
                <TabcompReview reviewRepository={reviewRepository}/>
            )
        }
    ];
        return(
            <div>
                <ul className="tabs is-boxed">
                    {tabContArr.map((section, index)=>{
                            return section.tabTitle
                        })}
                </ul>
                <div>
                    { tabContArr[activeIndex].tabCont }
                </div>
            </div>
        )
}
    
export default MyPageTab;