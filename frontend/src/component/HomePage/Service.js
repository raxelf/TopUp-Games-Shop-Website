import { useContext } from "react";
import { Contex } from "../kzContex";

const Service = () => {
    const { service } = useContext(Contex);
    return(
        <div className="container service my-5">
            <div className="title-wrapper">
                <h6 className="txtService">Services</h6>
            </div>
            <div className="row my-4">
                { service.map((s) => {
                    return(
                        <div key={s.id} className="col-lg-2 col-md-3 col-xl-2 col-sm-4 col-4 position-relative">
                            <div className="text-center card-category w-100 my-2 my-md-1">
                                <img src={s.image} className="w-100" alt="" />
                                <div className="category-label position-absolute bottom-0 w-100">
                                    {s.description}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Service;