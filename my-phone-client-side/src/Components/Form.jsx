import React from 'react'

const Form = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const model = event.target.model.value;
        const newPhone = { name, model };
        console.log(newPhone)

        fetch('http://localhost:3000/phones', {
            method: "POST",
            headers: {
                "contextType": 'application/json',

            },
            body: JSON.stringify(newPhone),
        })
            .then(response => response.json())
            .then(data => console.log(data))

    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body" >
                            <form action="" onSubmit={handleSubmit}>
                                <fieldset className="fieldset" >
                                    <label className="label">Name</label>
                                    <input type="text" name='name' className=" input" placeholder="Name" />
                                    <label className="label"></label>
                                    <input type="text" name='model' className="model input" placeholder="Model" />
                                    <button className="btn btn-neutral mt-4">Submit</button>
                                </fieldset>

                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form