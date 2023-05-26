import { useContext } from "react";
import { Contex } from "../kzContex";

const CategoryCard = () => {
    const {category} = useContext(Contex);
    return(
        <div className="container category my-5">
            <div className="title-wrapper">
                <h6 className="txtTopUp">Top Up</h6>
            </div>
            <div className="row my-4">
                { category.map((c) => {
                    return(
                        <div key={c.id} className="col-lg-2 col-md-3 col-xl-2 col-sm-4 col-4 position-relative">
                            <div className="text-center card-category w-100 my-2 my-md-1">
                                <img src={c.image} className="w-100" alt="..."/>
                                <div className="category-label position-absolute bottom-0 w-100">
                                    {c.description}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CategoryCard;