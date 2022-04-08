import { useEffect } from "react";
import { useForm } from "react-hook-form";

const initialValues = {
    id:0,
    name:"",
    lastname:"",
    email:"",
    password:"",
    date:""
}

const UsersForm = ({addUser,handleModal,selectedUser,updateUser}) => {

    const { register, handleSubmit,reset,watch} = useForm();

    const submit = data => {
        const  user = {
            id: data.id,
            first_name: data.name,
            last_name: data.lastname,
            email: data.email,
            password: data.password,
            birthday: data.date
        }
        if(data.id !== 0){
            updateUser(user)
        }else{
            addUser(user)
        }
        reset(initialValues)
        handleModal();
    }

    const openModal = ()=>{
        reset(initialValues)
        handleModal();
    }

    useEffect(()=>{
        if(selectedUser.id){
            reset({
                id: selectedUser.id,
                name: selectedUser.first_name,
                lastname: selectedUser.last_name,
                email: selectedUser.email,
                password: selectedUser.password,
                date: selectedUser.birthday
            })
        }
    },[selectedUser,reset])

    return(
        <section className="container m-auto mt-5 px-4 text-center">
            <button type="button" className="btn btn-light " data-bs-toggle="modal" data-bs-target="#staticBackdrop" id="btnModal" onClick={openModal}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-person-plus-fill" viewBox="0 0 16 16">
                <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                <path fillRule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
                </svg>
            </button>

            {/* Modal */}
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <form onSubmit={handleSubmit(submit)}>
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">{watch("id") ? 'Edit User':'New User'}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body row">
                            <div className="input-group mb-3 col ">
                                <span className="input-group-text" id="basic-addon1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                    </svg>
                                </span>
                                <input type="text" className="form-control" placeholder="First name" aria-label="Username" required
                                    {...register("name",{ required: true, maxLength: 20 })}
                                />
                            </div>
                            <div className="input-group mb-3 col">
                                <input type="text" className="form-control" placeholder="Last name" aria-label="LastName" required
                                    {...register("lastname",{ required: true, maxLength: 20 })}
                                />
                            </div>
                            <div className="input-group mb-3 col-12">
                                <span className="input-group-text" id="basic-addon1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                                    </svg>
                                </span>
                                <input type="email" className="form-control" placeholder="Email" aria-label="Email" required
                                    {...register("email",{ required: true, maxLength: 50 })}
                                />
                            </div>
                            <div className="input-group mb-3 col-12">
                                <span className="input-group-text" id="basic-addon1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock-fill" viewBox="0 0 16 16">
                                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
                                    </svg>
                                </span>
                                <input type="password" className="form-control" placeholder="Password" aria-label="Password" required
                                    {...register("password",{ required: true, maxLength: 20 })} 
                                />
                            </div>
                            <div className="input-group mb-3 col-12">
                                <span className="input-group-text" id="basic-addon1">
                                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" 
                                            width="16" height="16" viewBox="0 0 612 612" style={{enableBackground: "new 0 0 612 612"}}>
                                        <g>
                                            <g>
                                                <path d="M152.861,48.682c-22.449,26.455-13.77,41.588,0,41.728C166.993,90.548,175.7,75.137,152.861,48.682z"/>
                                                <path d="M305.861,48.682c-22.421,26.455-13.77,41.588,0,41.728C319.992,90.548,328.699,75.137,305.861,48.682z"/>
                                                <path d="M458.861,48.682c-22.422,26.455-13.771,41.588,0,41.728C472.992,90.548,481.699,75.137,458.861,48.682z"/>
                                                <rect x="139.091" y="104.318" width="27.818" height="111.272"/>
                                                <rect x="445.091" y="104.318" width="27.818" height="111.272"/>
                                                <rect x="292.091" y="104.318" width="27.818" height="111.272"/>
                                                <path d="M0,285.359v222.073c0,30.878,24.758,55.887,55.386,55.887h501.228c30.6,0,55.386-25.092,55.386-55.887V285.359
                                                    c0-30.85-24.758-55.859-55.386-55.859H55.386C24.786,229.5,0,254.592,0,285.359z M584.182,507.432
                                                    c0,15.494-12.435,28.068-27.567,28.068H55.386c-15.189,0-27.568-12.49-27.568-28.068V384.893
                                                    c11.684,8.763,23.228,15.605,34.494,20.029c8.958,3.505,17.609,5.396,25.955,5.396c19.278,0,33.187-8.04,54.69-26.762
                                                    c2.587-2.253,2.587-2.253,5.146-4.506c20.78-18.249,31.045-24.369,44.481-24.369c13.631,0,24.619,6.12,48.236,24.814
                                                    c1.753,1.391,1.753,1.391,3.533,2.781c25.314,19.974,40.142,28.041,60.56,28.041c21.42,0,35.913-8.096,65.178-30.739
                                                    c2.003-1.53,2.003-1.53,3.95-3.06c20.697-15.912,31.741-21.838,43.229-21.838c10.961,0,21.17,6.093,43.925,24.675
                                                    c1.892,1.53,1.892,1.53,3.783,3.088c24.313,19.778,38.501,27.874,57.139,27.874c10.821,0,22.394-3.478,34.801-9.765
                                                    c8.818-4.45,17.942-10.265,27.262-17.163V507.432L584.182,507.432z M584.182,285.359v62.369
                                                    c-3.895,3.366-7.928,6.676-12.018,9.848c-9.736,7.566-19.139,13.77-27.79,18.137c-8.847,4.507-16.469,6.788-22.255,6.788
                                                    c-9.903,0-20.251-5.925-39.585-21.643c-1.864-1.502-1.864-1.502-3.728-3.06c-28.097-22.923-41.532-30.935-61.534-30.935
                                                    c-19.778,0-34.717,8.012-60.171,27.624c-2.03,1.558-2.03,1.558-4.006,3.115c-24.229,18.75-35.273,24.897-48.181,24.897
                                                    c-12.045,0-22.811-5.842-43.369-22.06c-1.725-1.363-1.725-1.363-3.477-2.754c-28.542-22.616-43.257-30.823-65.484-30.823
                                                    c-22.533,0-37.137,8.707-62.841,31.268c-2.56,2.254-2.56,2.254-5.063,4.424C107.99,377.104,98.671,382.5,88.267,382.5
                                                    c-4.59,0-9.903-1.168-15.829-3.478c-10.459-4.089-22.115-11.488-34.188-21.253c-3.561-2.893-7.038-5.897-10.432-8.957v-63.454
                                                    c0-15.495,12.435-28.041,27.568-28.041h501.228C571.803,257.318,584.182,269.809,584.182,285.359z"/>
                                            </g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                    </svg>
                                </span>
                                <input type="date" className="form-control" placeholder="mm/dd/yyyy" aria-label="Date" required
                                    {...register("date",{ required: true, maxLength: 20 })}
                                 />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="submit" className="btn btn-outline-dark" >{watch("id") ? 'Update':'Register'}</button>
                        </div>
                    </form>
                </div>
            </div>
            </div>
        </section>
    )
}
export default UsersForm;