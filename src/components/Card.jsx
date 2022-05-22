import React from 'react'

const Card = ({recipe}) => {
  return (
  <div className="card shadow-md bg-body rounded"  style={{height:'19rem',width: "18rem"}}>
    <img src={recipe.thumbnail_url} className="card-img-top " style={{height:'12rem'}} alt="..."/>
    <div className="card-body">
      <h5 className="card-title text-start">{recipe.name}</h5>
      <p className="card-text text-start">
        <small className="text-muted">
          {`${new Date(recipe.created_at).getDate()}-${new Date(recipe.created_at).getMonth()<9?"0":''}${new Date(recipe.created_at).getMonth()+1}-${new Date(recipe.created_at).getFullYear()}`}
        </small>
      </p>
    </div>
  </div>
  )
}

export default Card