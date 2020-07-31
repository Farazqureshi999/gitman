import React from 'react'

import Bar2d from './Charts/Bar2d'
import Column2d from './Charts/Column2d'
import Doughnut2d from './Charts/Doughnut2d'
import Pie2d from './Charts/pie2d'
import {GithubContext} from '../context/context'

function Charts() {
  const {githubRepos} =React.useContext(GithubContext);
  const languages=githubRepos.reduce((total,item)=>{
     const {language,stargazers_count} = item;
     if (!language) return total;
     if(!total[language]){
      total[language]={label:language,value:1,stars:stargazers_count};
    }
    else{
      total[language]={...total[language],value:total[language].value+1,stars:total[language].stars + stargazers_count};
    }
      return total;
  },{});
  // console.log(languages);

  const mostUsed = Object.values(languages).sort((a,b)=>{
    return b.value - a.value;
}).slice(0,5);

const mostPopular = Object.values(languages).sort((a,b)=>{
  return b.stars - a.stars;
}).map((item)=>{
return {...item,value:item.stars}
}).slice(0,5);

let {stars,forks} = githubRepos.reduce((total,item)=>{
  const {stargazers_count,name,forks} = item;
  total.stars[stargazers_count] = {label:name, value:stargazers_count};
  total.forks[forks] = {label:name,value:forks}
  return total;
},{
  stars:{},forks:{}
})

stars = Object.values(stars).slice(-5).reverse();
forks = Object.values(forks).slice(-5).reverse();
   
    return (
        <div className="charts-wrapper">
            <div className="row">
                <div className="col-lg-6">
                    <div className="chart-card">
                        <div className="chart-card-body">
                            <Bar2d data={forks}/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                <div className="chart-card">
                        <div className="chart-card-body">
                        <Column2d data={stars}/>
                        </div>
                    </div>   
                </div>
                <div className="col-lg-6">
                <div className="chart-card">

                        <div className="chart-card-body">
                        <Doughnut2d data={mostPopular}/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                <div className="chart-card">
                        <div className="chart-card-body">
                        <Pie2d data={mostUsed}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Charts
