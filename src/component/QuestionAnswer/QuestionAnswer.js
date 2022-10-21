import React from 'react';
import './QuestionAnswer.css'
const QuestionAnswer = () => {
    return (
        <div className='answer'>
            <h3> <strong>Question: </strong> How does React Works ?</h3>
            <p> <strong>Answer : </strong> <br /> Let’s say one of your friends posted a photograph on Facebook. Now you go and like the image and then you started checking out the comments too. Now while you are browsing over comments you see that the likes count has increased by 100, since you liked the picture, even without reloading the page. This magical count change is because of ReactJS.
                React is a declarative, efficient, and flexible JavaScript library for building user interfaces. ‘V’ denotes the view in MVC. ReactJS is an open-source, component-based front end library responsible only for the view layer of the application. It is maintained by Facebook.</p>

            <h3> Question:  Difference between Props vs State</h3>
            <p> <strong>Answer : </strong> <br /> State <br />
                The state is an updatable structure that is used to contain data or information about the component and can change over time. The change in state can happen as a response to user action or system event. It is the heart of the react component which determines the behavior of the component and how it will render. A state must be kept as simple as possible. It represents the component's local state or information. It can only be accessed or modified inside the component or by the component directly. <br /> <br />

                Props <br />
                Props are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It allows passing data from one component to other components. It is similar to function arguments and can be passed to the component the same way as arguments passed in a function. Props are immutable so we cannot modify the props from inside the component.</p>

                <h3>Question:  Apart from the API, what is the use of Useeffect?</h3>
                <p> <strong>Answer : </strong> <br /> The useEffect hook takes two arguments, A callback function to define and clean up a side effect. An optional dependency array that ensures when to run a side effect defined inside the callback function.</p>
        </div>
    );
};

export default QuestionAnswer;