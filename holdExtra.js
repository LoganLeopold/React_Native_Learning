

constructor() {
    super()
    this.state = {
      photos: []
    }
  }

  componentDidMount () {
    CameraRoll.getPhotos({
      first: 100,
    })
    .then( r =>
      this.setState({
        photos: [r.edges]
      }) 
    )
    .catch( err => 
      console.log('Photos were not procurred')
      )
      
  }


{this.state.photos.map ((p,i) => 
    {return <Image
      key={i}
      
      />}
    )}