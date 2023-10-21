import React from "react";

const Jumbotron = () => {
    return (
        <div className="card border border-0">
            <div className="card p-2 col-12 text-bg-secondary">
                <div className="card-body">
                    <h1 className="card-title display-2">Stoicism 101</h1>
                    <p className="card-text">Stoicism is a philosophy designed for the real world, to solve real problems. It’s created to make us better people, better parents and better professionals. It comes from great thinkers like Marcus Aurelius, Epictetus, and Seneca. "Waste no more time arguing what a good man should be."</p>
                    <a href="#" className="btn btn-dark">Be one!</a>
                </div>
            </div>
        </div>

    );
};


export default Jumbotron;
