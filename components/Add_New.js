import React from "react";


export default function Add_New() {
    return (
        <div className="form-container">
            <section>
                <form>
                    <div className="mb-3">
                        <h2 className="mb-4">Total Monthly Income</h2>
                        <input className="form-control" placeholder="Income" type="text" />
                    </div>
                    <div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Weekly
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                Biweekly
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                Semi-Monthly
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                Monthly
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                Other
                            </label>
                        </div>
                    </div>

                    <div className="mb-3">
                        <h3>Monthly Expenses</h3>
                        <input className="form-control" placeholder="Expenses" type="text" />
                        <button className="btn btn-primary  page-btn mt-2">Add Another</button>
                    </div>

                    <div className="mb-3">
                        <input className="form-control" placeholder="Savings" type="text" />
                    </div>

                    <div className="mb-3">
                        <button className="btn btn-success page-btn">Submit</button>
                    </div>
                </form>
            </section>
        </div>
    );
}

