const React=require('react')


class Spaceship extends React.Component{
  constructor(props){
    super()
    this.name=name
  }

  render(){
    return(
      <div>
        <h1>{this.props.name}</h1>
        <h2>{this.props.speed}</h2>
        <p>{this.props.colors.join(", ")}</p>

      </div>

    )
  }
}

Spaceship.defaultProps={
  hasRockets:false,
  colors:['black','red']
}

module.exports=Spaceship
