import  {useState} from 'react'
import Form from './Components/Form'
import './App.css'
import FetchandRetrieveData from './Components/FetchandRetrieveData'

enum Step {
  Form = 1,
  FetchandRetriveData = 2,
}

function App() {
  const [currentStep, setCurrentStep] = useState<Step>(Step.Form);

  const handleStepChange = (step: Step) => {
    setCurrentStep(step);
  };

  return (
    <div>
      <h1>Assignment</h1>
      {currentStep === Step.Form && <Form onNext={() => handleStepChange(Step.FetchandRetriveData)} />}
      {currentStep === Step.FetchandRetriveData && <FetchandRetrieveData />}
    </div>
  );



}

export default App
