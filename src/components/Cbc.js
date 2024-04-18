import React from 'react'

class Cbc extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      error: null,
      triggerFetch: false

    }
  }

  async fetchdata() {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }
      const resdata = await res.json()
      this.setState({ data: resdata })
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  componentDidMount() {
    this.fetchdata()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.triggerFetch !== this.state.triggerFetch) {
      this.fetchdata();
    }
  }

  updateTriggerFetch = () => {
    this.setState((previosState) => ({
      triggerFetch: !previosState.triggerFetch
    }))
  }


  render() {
    console.log(this.state.data)
    return (
      <>
        <button onClick={this.updateTriggerFetch}>
          Update Trigger Fetch State
        </button>
        <div>Cbc</div>
        {this.state.data?.map((ele)=>(
          <li>{ele.title}</li>
        ))}
      </>

    )
  }
}

export default Cbc