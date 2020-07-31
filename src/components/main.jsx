import React from 'react'
import Hero from '../components/hero'
import Info from '../components/info'
import Followers from '../components/followers'
import Counter from '../components/counter'
import Repos from '../components/repos'
import Charts from '../components/Charts'
function main() {
    return (
        <div className="main">
            <Hero/>
            <Counter/>
            <div className="main-detail-outer">
                <div className="row">
                    <div className="col-md-6">
                    <Info/>
                    </div>

                    <div className="col-md-6">
                        <Followers/>
                    </div>
                </div>
                <Repos/>
                <Charts/>
            </div>
        </div>
    )
}

export default main
