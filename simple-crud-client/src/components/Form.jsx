import React from 'react'

const Form = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;

        const user = { name, email };

        fetch('http://localhost:3000/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user)
        })
            .then(response => response.json())
            .then(result => console.log(result))
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
                                    <input type="text" name='email' className="model input" placeholder="email" />
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