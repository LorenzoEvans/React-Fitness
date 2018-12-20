import React, { Component } from 'react';
import './App.css';
import { Paper, Typography, TextField, Button } from '@material-ui/core'
import { List, ListItem, ListItemText } from '@material-ui/core'

class App extends Component {
 state = {
  exercises: [],
  title: ''
 }
 
 handleChange = (event) => {
  this.setState({
   [event.target.name]: event.target.value
  })
 }

 handleAdd = (event) => {
  event.preventDefault()
  if (this.state.title) {
  this.setState(({exercises, title}) => (
   {
    exercises: [...exercises,
    {
     title,
     id: Date.now()
    }
    ],
    title: ''
   }
  ))
 }
 }
  render() {
   const { title, exercises } = this.state
    return (
     <Paper>
      <Typography
       variant='display1'
       align='center'
       gutterBottom
      >
       Exercises
      </Typography>
      <form onSubmit={this.handleAdd}>
      <TextField
      name="title"
      label="exercise"
      value={title}
      onChange={this.handleChange}
      margin='normal'
      />
      <Button
      type="submit"
      color="primary"
      variant="raised"
      >
       Add an excercise.
      </Button>
      <List>
       {exercises.map(({id, title}) => <ListItem key={id}>
        
        <ListItemText primary={title}/>
       </ListItem>)}
      </List>
      </form>
     </Paper>
    );
  }
}

export default App;
