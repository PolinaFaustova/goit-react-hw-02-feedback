import React, { Component } from "react";
import { Statistics } from "./Statistics";
import { FeedbackOptions } from "./FeedbackOptions";
import {Section} from './Section/index';
import { Notification } from "./Notification";

export class App extends Component {

    state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleBtnClick = (value) => {
    this.setState((prevState) => ({
      [value]: prevState[value] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value);
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return total ? ((this.state.good / total) * 100).toFixed(0) : '0';
  };


  render () {

    const {good , neutral, bad } = this.state; 

    return (
      <>
      <Section title='Please leave feedback'>
      <FeedbackOptions
      options={this.state}
      onFeedback={this.handleBtnClick}/>
      </Section>
      
      <Section title ='Statistics'>
       {this.countTotalFeedback() > 0 ? (
        <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={this.countTotalFeedback()}
        positivePercentage={this.countPositiveFeedbackPercentage()}
        />
        ) : (
     
      <Notification message="There is no feedback" />
  )}
      </Section>
      </>
    );
  }
}